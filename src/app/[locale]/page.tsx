import HomeLanding from "@/app/component/home/home-landing";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import {
  generateMetadata as generateSEOMetadata,
  generateStructuredData,
} from "@/utils/seo";
import { locales } from "@/i18n/config";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const alternateLocales = locales.filter((l) => l !== locale) as Locale[];

  return generateSEOMetadata({
    title: dict.welcome.title || dict.company?.name || "Genixo",
    description: dict.about.short || dict.about.slogan,
    keywords:
      dict.seo?.home?.keywords || dict.company?.defaultKeywords || "Genixo",
    url: `/${locale}`,
    locale,
    alternateLocales,
    dict,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genixo.ai";

  // Organization Structured Data
  const organizationStructuredData = generateStructuredData({
    type: "Organization",
    name: dict.company?.name || dict.welcome.title || "Genixo",
    description: dict.about.short || dict.about.slogan,
    url: siteUrl,
    dict,
  });

  // Website Structured Data
  const websiteStructuredData = generateStructuredData({
    type: "WebSite",
    name: dict.company?.name || dict.welcome.title || "Genixo",
    description: dict.about.short || dict.about.slogan,
    url: siteUrl,
    dict,
  });

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <HomeLanding dict={dict} locale={locale} />
    </>
  );
}
