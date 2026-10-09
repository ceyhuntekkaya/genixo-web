import HomeLanding from "@/app/component/home/home-landing";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import { SITE_URL, shortDefinitionFor } from "@/content/entity";
import { webPage } from "@/utils/schema";
import { getAllPosts } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const home = dict.seo?.pages?.home;
  return buildMetadata({
    locale,
    path: "",
    absoluteTitle: home?.title || "Genixo",
    description: home?.description || shortDefinitionFor(locale),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}`;
  const title = dict.seo?.pages?.home?.title || "Genixo";
  const description = dict.seo?.pages?.home?.description || shortDefinitionFor(locale);
  const posts = getAllPosts(locale, "post").slice(0, 2);

  return (
    <>
      <JsonLd
        data={webPage({
          url,
          name: title,
          description,
          locale,
        })}
      />
      <HomeLanding dict={dict} locale={locale} posts={posts} />
    </>
  );
}
