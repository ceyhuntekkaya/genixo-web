import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterSection from "@/app/component/footer";
import logo from "@/app/assets/logo.png";
import whiteLogo from "@/app/assets/Genixo_Logo_White.png";
import Image from "next/image";
import Link from "next/link";
import MenuSection from "@/app/component/menu";
import MenuList from "@/app/component/menu-list";
import BootstrapScript from "@/app/component/bootstrap-script";
import CTASection from "@/app/component/cta-section";
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
  const homeTitle = dict.seo?.pages?.home?.title || (typed === "tr" ? "Genixo" : "Genixo");
  const description = dict.seo?.pages?.home?.description || shortDefinitionFor(typed);
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
      default: homeTitle,
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

  return (
    <html lang={typedLocale}>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        <noscript>
          <style>{`[data-aos]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={siteGraph(typedLocale)} />
        <BootstrapScript />
        <div className="main-wrapper">
          <div id="header" className="section header-section">
            <div className="container">
              <div className="header-wrap">
                <div className="header-logo">
                  <Link href={`/${typedLocale}`}>
                    <Image src={logo} alt="Genixo" className="w-35 h-auto mt-4" />
                  </Link>
                </div>
                <MenuSection locale={typedLocale} dict={dict} />
              </div>
            </div>
          </div>

          <div className="offcanvas offcanvas-start" id="offcanvasExample" tabIndex={-1} aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <div className="offcanvas-logo">
                <Link href={`/${typedLocale}`} aria-label="Ana Sayfa">
                  <Image
                    src={whiteLogo}
                    alt="Genixo"
                    width={130}
                    height={50}
                    style={{ width: "130px", height: "auto" }}
                    priority={false}
                  />
                </Link>
              </div>
              <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Menüyü Kapat">
                <i className="flaticon-close"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas-menu">
                <MenuList locale={typedLocale} dict={dict} />
              </div>
            </div>
          </div>

          {children}

          <CTASection dict={dict} />
          <FooterSection locale={typedLocale} dict={dict} />

          <div className="progress-wrap">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
        </div>
        <ConsentBanner locale={typedLocale} />
        <Analytics />
      </body>
    </html>
  );
}
