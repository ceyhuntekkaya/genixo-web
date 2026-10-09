import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/component/site/site-header";
import SiteFooter from "@/app/component/site/site-footer";
import { buildNav, footerGroups } from "@/app/component/site/nav";
import JsonLd from "@/app/component/json-ld";
import ConsentBanner from "@/app/component/consent-banner";
import Analytics from "@/app/component/analytics";
import { Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { isIndexable } from "@/i18n/seo-locales";
import { SITE_URL, shortDefinitionFor } from "@/content/entity";
import { siteGraph } from "@/utils/schema";
import { bodyFont, displayFont, monoFont } from "@/app/component/home/fonts";

import "@/app/assets/css/plugins/bootstrap.min.css";
import "@/app/assets/css/plugins/all.min.css";
import "@/app/globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const typed = locale as Locale;
  const dict = await getDictionary(typed);
  const description = shortDefinitionFor(typed);
  const indexable = isIndexable(typed);

  const verification: Metadata["verification"] = {};
  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_YANDEX_VERIFICATION) {
    verification.yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_BING_VERIFICATION) {
    verification.other = { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION };
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: "%s | Genixo",
      default: `Genixo – ${dict.chrome.tagline}`,
    },
    description,
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    icons: { icon: "/images/fav.png" },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = await getDictionary(typedLocale);
  const nav = buildNav(dict, typedLocale);

  return (
    <html lang={typedLocale}>
      <body
        id="top"
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
        suppressHydrationWarning
      >
        <noscript>
          <style>{`[data-aos]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={siteGraph(typedLocale)} />
        <SiteHeader locale={typedLocale} nav={nav} chrome={dict.chrome} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter locale={typedLocale} dict={dict} groups={footerGroups(dict, typedLocale)} />
        <ConsentBanner locale={typedLocale} />
        <Analytics />
      </body>
    </html>
  );
}
