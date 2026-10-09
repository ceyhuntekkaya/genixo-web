import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { shortDefinitionFor } from "@/content/entity";
import type { Locale } from "@/i18n/config";

export const alt = "Genixo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = (locale === "tr" ? "tr" : "en") as Locale;
  const font = await readFile(path.join(process.cwd(), "public/fonts/NotoSans-Regular.ttf"));
  const text = shortDefinitionFor(typed);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0e1a2b",
          color: "#f4f7fb",
          padding: "72px",
          fontFamily: "Noto Sans",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 2, color: "#8eb7ff" }}>BİLKENT CYBERPARK · ANKARA</div>
        <div style={{ fontSize: 72, marginTop: 18 }}>Genixo</div>
        <div style={{ fontSize: 32, marginTop: 28, lineHeight: 1.35, maxWidth: 980 }}>{text}</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans", data: font, style: "normal", weight: 400 }],
    },
  );
}
