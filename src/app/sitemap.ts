import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/entity";
import { PAGE_LAST_MODIFIED } from "@/content/page-dates";
import { indexableLocales } from "@/i18n/seo-locales";
import { getDictionary } from "@/i18n/getDictionary";
import { getPage, type StandardPageKey } from "@/i18n/getPage";
import type { Dictionary } from "@/i18n/types";
import { getProductSlug } from "@/utils/slugMapping";
import { buildLanguages, type TranslationMap } from "@/utils/seo";
import { contentPath, getAllAuthors, getAllPosts, getTranslations } from "@/lib/content";

/** Copy-driven pages; /hello is noindex and /case-studies is added only once a case study is published. */
const PAGES: Array<[StandardPageKey | "home", string]> = [
  ["home", ""],
  ["services", "/services"],
  ["ai-automation", "/ai-automation"],
  ["custom-software", "/custom-software"],
  ["product-studio", "/product-studio"],
  ["ngsd", "/ngsd"],
  ["how-we-work", "/how-we-work"],
  ["what-we-dont-do", "/what-we-dont-do"],
  ["pricing", "/pricing"],
  ["data-security", "/data-security"],
  ["ai-readiness", "/ai-readiness-assessment"],
  ["about", "/about"],
  ["contact", "/contact"],
];

const TODO = /\[\[TODO-\d{3}\]\]/;

type ProductKey = Exclude<keyof Dictionary["products"], "hero">;

function add(entries: MetadataRoute.Sitemap, path: string, translations: TranslationMap, lastModified: string) {
  for (const locale of indexableLocales) {
    if (translations[locale] === undefined) continue;
    entries.push({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      alternates: { languages: buildLanguages(path, translations) },
    });
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  const pages = getAllPosts(undefined, "case-study").length ? [...PAGES, ["case-studies", "/case-studies"] as const] : PAGES;
  for (const [key, path] of pages) {
    const translations: TranslationMap = {};
    for (const locale of indexableLocales) {
      if ((await getPage(locale, key)).translated) translations[locale] = path;
    }
    add(entries, path, translations, PAGE_LAST_MODIFIED);
  }

  add(entries, "/blog", { tr: "/blog", en: "/blog" }, PAGE_LAST_MODIFIED);
  add(entries, "/products", { tr: "/products", en: "/products" }, PAGE_LAST_MODIFIED);

  const tr = await getDictionary("tr");
  for (const key of Object.keys(tr.products) as ProductKey[]) {
    if (tr.products[key]?.active !== true) continue;
    const slug = getProductSlug(key);
    if (!slug) continue;
    const path = `/products/${slug}`;
    add(entries, path, { tr: path, en: path }, PAGE_LAST_MODIFIED);
  }

  for (const doc of getAllPosts()) {
    if (!(indexableLocales as readonly string[]).includes(doc.locale)) continue;
    const path = contentPath(doc);
    entries.push({
      url: `${SITE_URL}/${doc.locale}${path}`,
      lastModified: doc.dateModified,
      alternates: { languages: buildLanguages(path, getTranslations(doc.translationKey, doc.type)) },
    });
  }

  for (const locale of indexableLocales) {
    for (const author of getAllAuthors(locale)) {
      if (TODO.test(author.body)) continue;
      const path = `/team/${author.slug}`;
      const translations: TranslationMap = {};
      for (const other of indexableLocales) {
        const match = getAllAuthors(other).find((item) => item.slug === author.slug);
        if (match && !TODO.test(match.body)) translations[other] = path;
      }
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: PAGE_LAST_MODIFIED,
        alternates: { languages: buildLanguages(path, translations) },
      });
    }
  }

  return entries;
}
