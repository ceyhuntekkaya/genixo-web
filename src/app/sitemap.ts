import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/entity";
import { PAGE_LAST_MODIFIED } from "@/content/page-dates";
import { indexableLocales } from "@/i18n/seo-locales";
import { getDictionary } from "@/i18n/getDictionary";
import type { Dictionary } from "@/i18n/types";
import { getProductSlug } from "@/utils/slugMapping";
import { buildLanguages } from "@/utils/seo";
import { contentPath, getAllAuthors, getAllPosts, getTranslations } from "@/lib/content";

const STATIC_PATHS = ["", "/about", "/contact", "/blog", "/products", "/solutions", "/ngsd"];

type ProductKey = keyof Dictionary["products"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const tr = await getDictionary("tr");

  for (const path of STATIC_PATHS) {
    for (const locale of indexableLocales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: PAGE_LAST_MODIFIED,
        alternates: { languages: buildLanguages(path) },
      });
    }
  }

  entries.push({
    url: `${SITE_URL}/tr/government-support`,
    lastModified: PAGE_LAST_MODIFIED,
    alternates: {
      languages: buildLanguages("/government-support", { tr: "/government-support" }),
    },
  });

  const services = (tr.services ?? []).filter(
    (service: Dictionary["services"][number]) => service.active !== false,
  );
  for (const service of services) {
    const path = `/solutions/${service.slug}`;
    for (const locale of indexableLocales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: PAGE_LAST_MODIFIED,
        alternates: { languages: buildLanguages(path) },
      });
    }
  }

  for (const key of Object.keys(tr.products) as ProductKey[]) {
    const product = tr.products[key];
    if (!product || !("active" in product) || product.active !== true) continue;
    const slug = getProductSlug(key);
    if (!slug) continue;
    const path = `/products/${slug}`;
    for (const locale of indexableLocales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: PAGE_LAST_MODIFIED,
        alternates: { languages: buildLanguages(path) },
      });
    }
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
      const path = `/authors/${author.slug}`;
      const translations: Partial<Record<(typeof indexableLocales)[number], string>> = {};
      for (const other of indexableLocales) {
        if (getAllAuthors(other).some((item) => item.slug === author.slug)) {
          translations[other] = path;
        }
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
