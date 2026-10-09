import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import ArticleView from "@/app/component/article-view";
import { SITE_URL } from "@/content/entity";
import { articleNode, breadcrumbList, faqPage } from "@/utils/schema";
import { contentPath, getAllPosts, getPost, getTranslations, type ContentType } from "@/lib/content";

function routeFor(type: ContentType) {
  return type === "guide" ? "guides" : "case-study";
}

export function staticParamsFor(type: ContentType) {
  return getAllPosts(undefined, type)
    .filter((doc) => (locales as readonly string[]).includes(doc.locale))
    .map((doc) => ({ locale: doc.locale, slug: doc.slug }));
}

export async function metadataFor(locale: Locale, slug: string, type: ContentType) {
  const doc = getPost(locale, slug, type);
  const path = `/${routeFor(type)}/${slug}`;
  if (!doc) {
    return buildMetadata({
      locale,
      path,
      title: "404",
      description: "Aradığınız sayfa yayında değil. Çözümler ve blog üzerinden ilgili içeriğe ulaşabilirsiniz.",
      noindex: true,
    });
  }
  return buildMetadata({
    locale,
    path: contentPath(doc),
    title: doc.metaTitle,
    description: doc.description,
    type: "article",
    image: doc.image,
    translations: getTranslations(doc.translationKey, type),
    publishedTime: doc.datePublished,
    modifiedTime: doc.dateModified,
    authors: [doc.author],
    noindex: type === "case-study" ? false : false,
  });
}

export async function ContentPage({
  locale,
  slug,
  type,
  sectionLabel,
}: {
  locale: Locale;
  slug: string;
  type: ContentType;
  sectionLabel: string;
}) {
  const doc = getPost(locale, slug, type);
  if (!doc) notFound();
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}${contentPath(doc)}`;
  const sectionPath = type === "guide" ? `/${locale}/blog` : `/${locale}/case-study`;
  const aboutService = doc.relatedServices[0]
    ? `${SITE_URL}/${locale}/solutions/${doc.relatedServices[0]}`
    : undefined;
  const graph = [
    type === "case-study"
      ? articleNode({
          url,
          headline: doc.title,
          description: doc.description,
          locale,
          datePublished: doc.datePublished,
          dateModified: doc.dateModified,
          authorId: doc.author,
          aboutServiceUrl: aboutService,
        })
      : articleNode({
          url,
          headline: doc.title,
          description: doc.description,
          locale,
          datePublished: doc.datePublished,
          dateModified: doc.dateModified,
          authorId: doc.author,
          aboutServiceUrl: aboutService,
        }),
    breadcrumbList([
      { name: dict.menu.Home, url: `${SITE_URL}/${locale}` },
      { name: sectionLabel, url: `${SITE_URL}${sectionPath.replace(`/${locale}`, `/${locale}`)}` },
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
        serviceNames={Object.fromEntries(dict.services.map((service: { slug: string; name: string }) => [service.slug, service.name]))}
        crumbs={[
          { label: dict.menu.Home, href: `/${locale}` },
          { label: sectionLabel, href: sectionPath },
          { label: doc.title, href: `/${locale}${contentPath(doc)}` },
        ]}
      />
    </>
  );
}
