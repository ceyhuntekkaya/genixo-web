export const locales = ["tr", "de", "fr", "en", "ru"] as const;
export const defaultLocale = "tr" as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  en: "English",
  ru: "Русский",
};

export const countryToLocale: Record<string, Locale> = {
  TR: "tr",
  DE: "de",
  FR: "fr",
  RU: "ru",
  // Diğer tüm ülkeler için default
};
