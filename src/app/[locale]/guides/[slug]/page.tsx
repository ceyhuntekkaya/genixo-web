import type { Locale } from "@/i18n/config";
import { ContentPage, metadataFor, staticParamsFor } from "../../content-route";
import { getDictionary } from "@/i18n/getDictionary";

export const dynamicParams = false;
export const generateStaticParams = () => staticParamsFor("guide");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return metadataFor(locale, slug, "guide");
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  return <ContentPage locale={locale} slug={slug} type="guide" sectionLabel={dict.menu.Blog} />;
}
