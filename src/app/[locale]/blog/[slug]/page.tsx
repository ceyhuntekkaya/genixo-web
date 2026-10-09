import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import ArticleView from "@/app/component/article-view";
import { SITE_URL } from "@/content/entity";
import { blogPosting, breadcrumbList, faqPage } from "@/utils/schema";
import { contentPath, getAllPosts, getPost, getTranslations } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts(undefined, "post")
    .filter((doc) => (locales as readonly string[]).includes(doc.locale))
    .map((doc) => ({ locale: doc.locale, slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const doc = getPost(locale, slug, "post");
  if (!doc) {
    return buildMetadata({
      locale,
      path: `/blog/${slug}`,
      title: "404",
      description: "Aradığınız sayfa bulunamadı. Bu adres yayında değil; ana sayfadan veya çözümlerden devam edebilirsiniz.",
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
    translations: getTranslations(doc.translationKey, "post"),
    publishedTime: doc.datePublished,
    modifiedTime: doc.dateModified,
    authors: [doc.author],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const doc = getPost(locale, slug, "post");
  if (!doc) notFound();
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}${contentPath(doc)}`;
  const graph = [
    blogPosting({
      url,
      headline: doc.title,
      description: doc.description,
      locale,
      datePublished: doc.datePublished,
      dateModified: doc.dateModified,
      authorId: doc.author,
      image: doc.image,
    }),
    breadcrumbList([
      { name: dict.menu.Home, url: `${SITE_URL}/${locale}` },
      { name: dict.menu.Blog, url: `${SITE_URL}/${locale}/blog` },
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
          { label: dict.menu.Blog, href: `/${locale}/blog` },
          { label: doc.title, href: `/${locale}/blog/${doc.slug}` },
        ]}
      />
    </>
  );
}
