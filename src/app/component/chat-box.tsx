"use client";

import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./chat-box.module.css";
import { track } from "@/lib/track";

const CHAT_STORAGE_KEY = "genixo-chat";

type MessageRole = "user" | "assistant";

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  thinking?: string;
}

function loadChatFromStorage(): { messages: Message[]; deepThink: boolean } {
  if (typeof window === "undefined") return { messages: [], deepThink: false };
  try {
    const raw = sessionStorage.getItem(CHAT_STORAGE_KEY);
    if (!raw) return { messages: [], deepThink: false };
    const data = JSON.parse(raw) as { messages?: Message[]; deepThink?: boolean };
    const messages = Array.isArray(data.messages)
      ? data.messages.map((m) => ({
          id: m.id ?? crypto.randomUUID(),
          role: (m.role === "user" || m.role === "assistant" ? m.role : "user") as MessageRole,
          content: String(m.content ?? ""),
        }))
      : [];
    return { messages, deepThink: Boolean(data.deepThink) };
  } catch {
    return { messages: [], deepThink: false };
  }
}

function saveChatToStorage(messages: Message[], deepThink: boolean) {
  if (typeof window === "undefined") return;
  try {
    const toSave = messages.map(({ id, role, content }) => ({ id, role, content }));
    sessionStorage.setItem(
      CHAT_STORAGE_KEY,
      JSON.stringify({ messages: toSave, deepThink })
    );
  } catch {
    // ignore
  }
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deepThink, setDeepThink] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const { messages: saved, deepThink: savedDeep } = loadChatFromStorage();
    setMessages(saved);
    setDeepThink(savedDeep);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveChatToStorage(messages, deepThink);
  }, [hydrated, messages, deepThink]);

  const startNewConversation = () => {
    setMessages([]);
    setDeepThink(false);
    try {
      sessionStorage.removeItem(CHAT_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const scrollToBottom = () => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    if (messages.every((message) => message.role !== "user")) track("chat_start");

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "", thinking: "" },
    ]);

    const apiMessages = [...messages, userMessage].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, think: deepThink }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || err.error || `HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";
      let fullThinking = "";
      let readCount = 0;

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            console.log("[chat client] stream done, read calls:", readCount);
            break;
          }
          readCount++;
          const chunk = decoder.decode(value, { stream: true });
          if (readCount === 1) {
            console.log("[chat client] first chunk length:", chunk.length, "preview:", chunk.slice(0, 300));
          } else if (readCount <= 5 || readCount % 10 === 0) {
            console.log("[chat client] chunk #" + readCount + " length:", chunk.length);
          }
          const lines = chunk.split("\n");
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            let jsonStr: string;
            if (trimmed.startsWith("data: ")) {
              jsonStr = trimmed.slice(6);
            } else if (trimmed.startsWith("{")) {
              jsonStr = trimmed;
            } else {
              continue;
            }
            if (jsonStr === "[DONE]" || jsonStr === "[done]") continue;
            try {
              const data = JSON.parse(jsonStr);
              const msg = data.message ?? {};
              const content = msg.content ?? data.content ?? "";
              const thinking = msg.thinking ?? "";
              if (content) fullContent += content;
              if (thinking) fullThinking += thinking;
              if (content || thinking) {
                flushSync(() => {
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantId
                        ? {
                            ...m,
                            content: fullContent,
                            thinking: fullThinking || undefined,
                          }
                        : m
                    )
                  );
                });
                await new Promise<void>((r) => requestAnimationFrame(() => r()));
              }
            } catch (e) {
              if (readCount <= 2) console.log("[chat client] parse fail for line:", trimmed.slice(0, 120), e);
            }
          }
        }
      }

      if (!fullContent && !fullThinking) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: "Yanıt alınamadı. Lütfen tekrar deneyin.", thinking: undefined }
              : m
          )
        );
      }
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, content: `Hata: ${err instanceof Error ? err.message : String(err)}` }
            : m
        )
      );
    } finally {
      setIsLoading(false);
      setMessages((prev) =>
        prev.map((m) =>
          m.role === "assistant" && m.thinking ? { ...m, thinking: undefined } : m
        )
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.chatPage}>
      <div className={styles.chatContainer}>
        <div ref={messagesContainerRef} className={styles.chatMessages}>
          {messages.length === 0 && (
            <div className={styles.chatWelcome}>
              <p>Merhaba, size nasıl yardımcı olabilirim?</p>
              <p className={styles.chatWelcomeHint}>
                Yazılım ve Genixo ürünleri hakkında sorularınızı sorabilirsiniz.
              </p>
            </div>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.chatMessage} ${
                msg.role === "user" ? styles.chatMessageUser : styles.chatMessageAssistant
              }`}
            >
              {msg.role === "assistant" && msg.thinking && (
                <div className={styles.chatMessageThinking}>{msg.thinking}</div>
              )}
              <div className={styles.chatMessageContent}>
                {msg.role === "assistant" ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content ||
                      (isLoading && !msg.thinking ? "…" : "")}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.chatInputWrap}>
          <textarea
            ref={inputRef}
            className={styles.chatInput}
            placeholder="Mesajınızı yazın..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={isLoading}
          />
          <button
            type="button"
            className={styles.chatSend}
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Gönder"
          >
            {isLoading ? (
              <span className={styles.chatSpinner} aria-hidden />
            ) : (
              <i className="fa fa-paper-plane" aria-hidden />
            )}
          </button>
        </div>
        <div className={styles.chatOptions}>
          <label className={styles.deepThinkToggle}>
            <input
              type="checkbox"
              checked={deepThink}
              onChange={(e) => setDeepThink(e.target.checked)}
              disabled={isLoading}
            />
            <span className={styles.deepThinkLabel}>Deep Think</span>
          </label>
          <button
            type="button"
            className={styles.newChatBtn}
            onClick={startNewConversation}
            disabled={isLoading}
            aria-label="Yeni konuşma başlat"
          >
            <i className="fa fa-plus" aria-hidden />
            <span>Yeni konuşma</span>
          </button>
        </div>
      </div>
    </div>
  );
}
