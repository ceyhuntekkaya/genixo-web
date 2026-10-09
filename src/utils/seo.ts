import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { SITE_URL } from "@/content/entity";
import { hreflangCode, indexableLocales, isIndexable, ogLocale } from "@/i18n/seo-locales";

export type TranslationMap = Partial<Record<Locale, string>>;

/** Sitemap ve sayfa metadata'sı aynı fonksiyonu kullanır. */
export function buildLanguages(path: string, translations?: TranslationMap): Record<string, string> {
  const map: TranslationMap = translations ?? { tr: path, en: path };
  const languages: Record<string, string> = {};

  for (const locale of indexableLocales) {
    const localizedPath = map[locale];
    if (localizedPath === undefined) continue;
    languages[hreflangCode[locale]] = `${SITE_URL}/${locale}${localizedPath}`;
  }

  if (map.en !== undefined) {
    languages["x-default"] = `${SITE_URL}/en${map.en}`;
  } else if (map.tr !== undefined) {
    languages["x-default"] = `${SITE_URL}/tr${map.tr}`;
  }

  return languages;
}

export function buildMetadata(options: {
  locale: Locale;
  path: string;
  title?: string;
  absoluteTitle?: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  translations?: TranslationMap;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): Metadata {
  const {
    locale,
    path,
    title,
    absoluteTitle,
    description,
    type = "website",
    image,
    noindex = false,
    translations,
    publishedTime,
    modifiedTime,
    authors,
  } = options;

  const indexable = isIndexable(locale) && !noindex;
  const canonical = `${SITE_URL}/${locale}${path}`;
  const languages = indexable ? buildLanguages(path, translations) : undefined;
  const documentTitle = absoluteTitle || (title ? `${title} | Genixo` : "Genixo");
  const ogImage = image || `${SITE_URL}/${locale}/opengraph-image`;

  return {
    ...(absoluteTitle ? { title: { absolute: absoluteTitle } } : title ? { title } : {}),
    description,
    authors: authors?.map((name) => ({ name })),
    robots: {
      index: indexable,
      follow: true,
    },
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type,
      locale: ogLocale[locale],
      alternateLocale: indexable
        ? indexableLocales.filter((item) => item !== locale).map((item) => ogLocale[item])
        : undefined,
      url: canonical,
      title: documentTitle,
      description,
      siteName: "Genixo",
      images: [{ url: ogImage, width: 1200, height: 630, alt: documentTitle }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
      images: [ogImage],
    },
  };
}
