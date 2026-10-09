"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "genixo-consent";

export function readAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return JSON.parse(raw).analytics === true;
  } catch {
    return false;
  }
}

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);
  const id = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const sync = () => setEnabled(readAnalyticsConsent());
    sync();
    window.addEventListener("genixo-consent", sync);
    return () => window.removeEventListener("genixo-consent", sync);
  }, []);

  if (!enabled || !id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
