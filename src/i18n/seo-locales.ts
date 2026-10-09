import type { Locale } from "./config";

export const indexableLocales = ["tr", "en"] as const satisfies readonly Locale[];

export const hreflangCode: Record<Locale, string> = {
  tr: "tr",
  en: "en",
};

export const ogLocale: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
};

export function isIndexable(locale: Locale): boolean {
  return (indexableLocales as readonly string[]).includes(locale);
}
