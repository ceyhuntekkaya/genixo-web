import type { Locale } from "./config";

/** K-2: de/fr/ru yayında kalır, indekslenmez. */
export const indexableLocales = ["tr", "en"] as const satisfies readonly Locale[];

export const hreflangCode: Record<Locale, string> = {
  tr: "tr",
  en: "en",
  de: "de",
  fr: "fr",
  ru: "ru",
};

export const ogLocale: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  ru: "ru_RU",
};

export function isIndexable(locale: Locale): boolean {
  return (indexableLocales as readonly string[]).includes(locale);
}
