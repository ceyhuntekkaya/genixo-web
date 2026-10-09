import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { SITE_URL, shortDefinitionFor } from "@/content/entity";
import { contentPath, getAllPosts } from "@/lib/content";
import { collectionPage } from "@/utils/schema";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import { PageHero } from "@/app/component/page/page-view";
import { Arrow, localHref } from "@/app/component/page/text";
import h from "@/app/component/home/home.module.css";
import { toLocale, type LocaleParams } from "../standard-page";

export async function generateMetadata({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = await getDictionary(locale);
  const copy = dict.seo?.pages?.blog;
  return buildMetadata({
    locale,
    path: "/blog",
    title: copy?.title || dict.menu.Blog,
    description: copy?.description || shortDefinitionFor(locale),
  });
}

export default async function BlogPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = await getDictionary(locale);
  const posts = getAllPosts(locale, "post");
  const copy = dict.seo?.pages?.blog;

  return (
    <>
      <JsonLd
        data={collectionPage({
          url: `${SITE_URL}/${locale}/blog`,
          name: copy?.title || dict.menu.Blog,
          description: copy?.description || shortDefinitionFor(locale),
          locale,
          items: posts.map((post) => ({ name: post.title, url: `${SITE_URL}/${locale}${contentPath(post)}` })),
        })}
      />
      <div className={h.page}>
        <PageHero
          locale={locale}
          crumbs={[{ name: dict.ui.home, path: "/" }, { name: dict.menu.Blog }]}
          eyebrow={dict.menu.Blog}
          title={copy?.title || dict.menu.Blog}
          lead={copy?.description}
        />
        <section className={h.band} style={{ paddingTop: 0 }}>
          <ul className={`${h.shell} ${h.posts}`} style={{ marginTop: 0 }}>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link className={h.post} href={localHref(locale, contentPath(post))}>
                  <span className={h.postTitle}>{post.title}</span>
                  <span className={h.postExcerpt}>{post.summary}</span>
                  <span className={h.postRead}>
                    {dict.blog.readFull}
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
