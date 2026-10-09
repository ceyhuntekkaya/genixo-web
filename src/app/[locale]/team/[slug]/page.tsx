import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { SITE_URL } from "@/content/entity";
import { contentPath, getAllAuthors, getAllPosts, getAuthor } from "@/lib/content";
import { breadcrumbList, profilePage } from "@/utils/schema";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import Markdown from "@/app/component/page/markdown";
import { CtaBand, PageHero } from "@/app/component/page/page-view";
import { Arrow, localHref } from "@/app/component/page/text";
import h from "@/app/component/home/home.module.css";
import s from "@/app/component/page/page.module.css";
import { toLocale } from "../../standard-page";

export const dynamicParams = false;

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getAllAuthors(locale).map((author) => ({ locale, slug: author.slug })));
}

function profileFor(locale: Locale, slug: string) {
  const author = getAuthor(locale, slug);
  if (!author) notFound();
  return author;
}

export async function generateMetadata({ params }: Params) {
  const { locale: raw, slug } = await params;
  const locale = toLocale(raw);
  const author = profileFor(locale, slug);
  return buildMetadata({
    locale,
    path: `/team/${slug}`,
    title: `${author.name}, ${author.jobTitle}`,
    description: author.summary,
    noindex: /\[\[TODO-\d{3}\]\]/.test(author.body),
  });
}

export default async function TeamMemberPage({ params }: Params) {
  const { locale: raw, slug } = await params;
  const locale = toLocale(raw);
  const author = profileFor(locale, slug);
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}/team/${slug}`;
  const posts = getAllPosts(locale).filter((doc) => doc.author === slug && doc.type !== "case-study");

  return (
    <>
      <JsonLd
        data={[
          profilePage({ url, name: author.name, description: author.summary, locale, personId: slug }),
          breadcrumbList([
            { name: "Genixo", url: `${SITE_URL}/${locale}` },
            { name: dict.menu.AboutUs, url: `${SITE_URL}/${locale}/about` },
            { name: author.name, url },
          ]),
        ]}
      />
      <div className={h.page}>
        <PageHero
          locale={locale}
          crumbs={[{ name: dict.ui.home, path: "/" }, { name: dict.menu.AboutUs, path: "/about" }, { name: author.name }]}
          eyebrow={author.jobTitle}
          title={author.name}
          lead={author.summary}
        />
        <section className={s.article}>
          <div className={`${h.shell} ${h.grid}`}>
            <div className={h.label} />
            <div className={h.main}>
              <Markdown body={author.body} locale={locale} />
              {posts.length > 0 && (
                <aside className={s.aside}>
                  <h2>{dict.ui.profile.articles}</h2>
                  <ul className={s.relatedList}>
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <Link href={localHref(locale, contentPath(post))}>
                          {post.title}
                          <Arrow />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
          </div>
        </section>
        <CtaBand
          locale={locale}
          dict={dict}
          title={dict.ui.profile.ctaTitle}
          lead={dict.ui.profile.ctaLead}
          primary={{ label: dict.ui.bookCall, href: "/contact" }}
        />
      </div>
    </>
  );
}
