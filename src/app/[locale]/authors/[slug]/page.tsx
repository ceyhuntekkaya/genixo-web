import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Locale } from "@/i18n/config";
import { indexableLocales } from "@/i18n/seo-locales";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import { SITE_URL } from "@/content/entity";
import { breadcrumbList, profilePage } from "@/utils/schema";
import { getAllAuthors, getAuthor } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return indexableLocales.flatMap((locale) =>
    getAllAuthors(locale).map((author) => ({ locale, slug: author.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const author = getAuthor(locale, slug);
  if (!author) {
    return buildMetadata({
      locale,
      path: `/authors/${slug}`,
      title: "404",
      description: "Aradığınız yazar sayfası yayında değil. Ekip bilgisi Hakkımızda sayfasında yer alır.",
      noindex: true,
    });
  }
  const translations: Partial<Record<Locale, string>> = {};
  for (const item of indexableLocales) {
    if (getAuthor(item, slug)) translations[item] = `/authors/${slug}`;
  }
  const description = author.summary.length > 155 ? author.summary.slice(0, 152) + "..." : author.summary;
  return buildMetadata({
    locale,
    path: `/authors/${slug}`,
    title: `${author.name} – ${author.jobTitle}`,
    description: description.length >= 70 ? description : `${author.name}, ${author.jobTitle}. ${author.summary}`,
    translations,
  });
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const author = getAuthor(locale, slug);
  if (!author) notFound();
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}/authors/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          profilePage({
            url,
            name: author.name,
            description: author.summary,
            locale,
            personId: author.slug,
          }),
          breadcrumbList([
            { name: dict.menu.Home, url: `${SITE_URL}/${locale}` },
            { name: dict.menu.AboutUs, url: `${SITE_URL}/${locale}/about` },
            { name: author.name, url },
          ]),
        ]}
      />
      <article className="section section-padding">
        <div className="container" style={{ maxWidth: 860 }}>
          <nav aria-label="Breadcrumb">
            <a href={`/${locale}`}>{dict.menu.Home}</a>
            {" / "}
            <a href={`/${locale}/about`}>{dict.menu.AboutUs}</a>
            {" / "}
            {author.name}
          </nav>
          <h1>{author.name}</h1>
          <p>{author.jobTitle}</p>
          <p className="geo-answer">{author.summary}</p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{author.body}</ReactMarkdown>
          {author.linkedin ? (
            <p>
              <a href={author.linkedin} rel="noopener">LinkedIn</a>
            </p>
          ) : null}
        </div>
      </article>
    </>
  );
}
