import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Dictionary } from "@/i18n/types";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import ArticleView from "@/app/component/article-view";
import { SITE_URL } from "@/content/entity";
import { offerKey, offerPath } from "@/content/offers";
import { articleNode, blogPosting, breadcrumbList, faqPage, serviceNode, webPage } from "@/utils/schema";
import {
  contentPath,
  getAllPosts,
  getPost,
  getScenario,
  getScenarios,
  getTranslations,
  type ContentDoc,
  type ContentType,
} from "@/lib/content";

type Parent = { name: string; path: string };

function parentFor(type: ContentType, dict: Dictionary): Parent {
  if (type === "case-study") return { name: dict.menu.CaseStudies, path: "/case-studies" };
  if (type === "scenario") return { name: dict.offers["ai-automation"].name, path: "/ai-automation" };
  return { name: dict.menu.Blog, path: "/blog" };
}

/** Scenarios fall back to English when a locale has no file. Other types exist only where a file does. */
function findDoc(locale: Locale, slug: string, type: ContentType): ContentDoc | null {
  return type === "scenario" ? getScenario(locale, slug) : getPost(locale, slug, type);
}

export function staticParamsFor(type: ContentType) {
  if (type === "scenario") {
    return locales.flatMap((locale) => getScenarios(locale).map((doc) => ({ locale, slug: doc.slug })));
  }
  return getAllPosts(undefined, type)
    .filter((doc) => (locales as readonly string[]).includes(doc.locale))
    .map((doc) => ({ locale: doc.locale, slug: doc.slug }));
}

export async function metadataFor(locale: Locale, slug: string, type: ContentType) {
  const doc = findDoc(locale, slug, type);
  if (!doc) notFound();
  const translated = doc.locale === locale;
  const translations = getTranslations(doc.translationKey, type);
  return buildMetadata({
    locale,
    path: contentPath(doc),
    title: doc.metaTitle,
    description: doc.description,
    type: "article",
    image: doc.image,
    translations: Object.keys(translations).length ? translations : undefined,
    publishedTime: doc.datePublished,
    modifiedTime: doc.dateModified,
    authors: [doc.author],
    noindex: !translated,
  });
}

function schemaFor(doc: ContentDoc, locale: Locale, url: string) {
  const common = {
    url,
    headline: doc.title,
    description: doc.description,
    locale,
    datePublished: doc.datePublished,
    dateModified: doc.dateModified,
    authorId: doc.author,
  };
  if (doc.type === "post") return [blogPosting({ ...common, image: doc.image })];
  if (doc.type === "scenario") {
    return [
      webPage({ url, name: doc.metaTitle, description: doc.description, locale, mainEntity: `${url}#service` }),
      serviceNode({ url, name: doc.metaTitle, description: doc.summary, locale }),
    ];
  }
  const key = doc.relatedServices.map(offerKey).find(Boolean);
  return [articleNode({ ...common, aboutServiceUrl: key ? `${SITE_URL}/${locale}${offerPath(key)}` : undefined })];
}

export async function ContentPage({ locale, slug, type }: { locale: Locale; slug: string; type: ContentType }) {
  const doc = findDoc(locale, slug, type);
  if (!doc) notFound();
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}${contentPath(doc)}`;
  const parent = parentFor(type, dict);

  const graph = [
    ...schemaFor(doc, locale, url),
    breadcrumbList([
      { name: "Genixo", url: `${SITE_URL}/${locale}` },
      { name: parent.name, url: `${SITE_URL}/${locale}${parent.path}` },
      { name: doc.title, url },
    ]),
    ...(doc.faq.length ? [faqPage(url, doc.faq)] : []),
  ];

  return (
    <>
      <JsonLd data={graph} />
      <ArticleView
        doc={doc}
        locale={locale}
        dict={dict}
        eyebrow={parent.name}
        crumbs={[{ name: dict.ui.home, path: "/" }, { name: parent.name, path: parent.path }, { name: doc.title }]}
      />
    </>
  );
}
