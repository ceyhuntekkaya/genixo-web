import { NextRequest, NextResponse } from "next/server";
import {
  BUSINESS_CONTEXT,
  BUSINESS_SYSTEM_PROMPT,
} from "@/app/api/chat/business-context";

const CHAT_API_URL = "https://speaking.chat.eltaexams.com/api/chat";
const MODEL = "qwen3.5:9b";
const SYSTEM_PROMPT = BUSINESS_SYSTEM_PROMPT;
const CONTEXT_PROMPT = BUSINESS_CONTEXT;

/** Chat API bağlantı zaman aşımı (ms). Sunucu firewall/çıkış sorunlarında artırılabilir. */
const CHAT_API_TIMEOUT_MS = Number(process.env.CHAT_API_TIMEOUT_MS) || 30_000;

/** Thinking (düşünme) çıktısını aç/kapat. Ollama API'deki "think" parametresi (yardım asistanı için false önerilir). */
const ENABLE_THINKING = false;

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = body.messages ?? [];
    const think = typeof body.think === "boolean" ? body.think : ENABLE_THINKING;

    const payload = {
      model: MODEL,
      stream: true,
      think,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: CONTEXT_PROMPT },
        ...messages,
      ],
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CHAT_API_TIMEOUT_MS);

    const res = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Chat API hatası", detail: text },
        { status: res.status }
      );
    }

    if (!res.body) {
      return NextResponse.json(
        { error: "Stream yok" },
        { status: 500 }
      );
    }
    const reader = res.body.getReader();
    const contentType = res.headers.get("content-type") ?? "";

    const stream = new ReadableStream({
      async start(controller) {
        const decoder = new TextDecoder();
        let buffer = "";
        let chunkIndex = 0;
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunkIndex++;
            const decoded = decoder.decode(value, { stream: true });
            if (chunkIndex === 1) {
              console.log("[chat API] upstream content-type:", contentType);
              console.log("[chat API] first chunk length:", decoded.length);
              console.log("[chat API] first chunk preview:", decoded.slice(0, 500));
            } else {
              console.log("[chat API] chunk #" + chunkIndex + " length:", decoded.length);
            }
            buffer += decoded;
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";
            for (const line of lines) {
              const trimmed = line.trim();
              if (trimmed) {
                controller.enqueue(
                  new TextEncoder().encode(`data: ${trimmed}\n\n`)
                );
              }
            }
          }
          if (buffer.trim()) {
            controller.enqueue(
              new TextEncoder().encode(`data: ${buffer.trim()}\n\n`)
            );
          }
          console.log("[chat API] stream done, total chunks received:", chunkIndex);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const cause =
      err instanceof Error && err.cause instanceof Error
        ? err.cause.message
        : err instanceof Error && err.cause
          ? String(err.cause)
          : null;
    const isTimeout =
      message === "The operation was aborted." || /timeout|ETIMEDOUT/i.test(cause ?? message);
    console.error("Chat API error:", message, cause ?? "");
    return NextResponse.json(
      {
        error: "Chat servisine bağlanılamadı",
        detail: isTimeout
          ? `Bağlantı zaman aşımı (${CHAT_API_TIMEOUT_MS}ms). Sunucunun speaking.chat.eltaexams.com:443 adresine çıkışı (firewall/proxy) kontrol edin.`
          : cause || message,
      },
      { status: 502 }
    );
  }
}
