"use client";

type Gtag = (...args: unknown[]) => void;

export function track(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  gtag?.("event", name, params);
}
