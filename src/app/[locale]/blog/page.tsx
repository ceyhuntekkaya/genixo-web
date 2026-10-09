import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/utils/seo";
import PageHero from "@/app/component/page-hero";
import { getAllPosts } from "@/lib/content";
import Link from "next/link";
import { shortDefinitionFor } from "@/content/entity";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict.seo?.pages?.blog;
  return buildMetadata({
    locale,
    path: "/blog",
    title: copy?.title || dict.menu.Blog,
    description: copy?.description || shortDefinitionFor(locale),
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const posts = getAllPosts(locale, "post");

  return (
    <>
      <PageHero
        title={dict.menu.Blog}
        subtitle={dict.seo?.pages?.blog?.title || dict.about.slogan}
        description={dict.seo?.pages?.blog?.description}
        backgroundImage="/images/bg/page-banner.jpg"
      />
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.slug} className="col-lg-4 col-md-6 mb-4">
                <div className="single-blog">
                  <div className="blog-content">
                    <h2 className="title">
                      <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>{post.summary}</p>
                    <Link href={`/${locale}/blog/${post.slug}`}>{dict.blog?.readFull || "Read more"}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
