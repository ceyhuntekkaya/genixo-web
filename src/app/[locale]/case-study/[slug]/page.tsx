import type { Locale } from "@/i18n/config";
import { ContentPage, metadataFor, staticParamsFor } from "../../content-route";
import { getDictionary } from "@/i18n/getDictionary";

export const dynamicParams = false;
export const generateStaticParams = () => staticParamsFor("case-study");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return metadataFor(locale, slug, "case-study");
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  return <ContentPage locale={locale} slug={slug} type="case-study" sectionLabel={dict.menu.SuccessStories} />;
}
