import HeroSection from "@/app/component/hero";
import ServiceSection from "@/app/component/service";
import AboutSection from "@/app/component/about";
import CaseStudySection from "@/app/component/case-study";
import BlogSection from "@/app/component/blog";
import AboutAISection from "@/app/component/about-ai";
import ServiceAISection from "@/app/component/service-ai";
import CounterAISection from "@/app/component/counter-ai";
import SolutionAISection from "@/app/component/solution-ai";
import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata, generateStructuredData} from "@/utils/seo";
import {locales} from "@/i18n/config";
import Script from "next/script";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    return generateSEOMetadata({
        title: dict.welcome.title || 'Genixo Bilişim ve Teknoloji',
        description: dict.about.short || dict.about.slogan,
        keywords: 'yazılım geliştirme, web uygulaması, mobil uygulama, bulut çözümleri, AI yazılım, yazılım danışmanlığı, DevOps, veri bilimi, Genixo',
        url: `/${locale}`,
        locale,
        alternateLocales,
    });
}

export default async function Home({
                                       params,
                                   }: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.com';

    // Organization Structured Data
    const organizationStructuredData = generateStructuredData({
        type: 'Organization',
        name: 'Genixo Bilişim ve Teknoloji',
        description: dict.about.short || dict.about.slogan,
        url: siteUrl,
    });

    // Website Structured Data
    const websiteStructuredData = generateStructuredData({
        type: 'WebSite',
        name: 'Genixo Bilişim ve Teknoloji',
        description: dict.about.short || dict.about.slogan,
        url: siteUrl,
    });

    return (
        <>
            <Script
                id="organization-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
            />
            <Script
                id="website-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
            />
            <HeroSection dict={dict} locale={locale} />
            <ServiceSection dict={dict} locale={locale} />
            <AboutSection dict={dict} locale={locale} />
            {
                //  <CounterSection/>
            }
            <CaseStudySection dict={dict} locale={locale} />
            {
                //  <SkillSection/>
                // <SolutionSection/>
                //  <TestimonialSection/>
                // <BrandSection/>
                // <TeamSection/>
            }
            <BlogSection dict={dict} locale={locale} />
            <AboutAISection dict={dict} locale={locale} />
            <ServiceAISection dict={dict} locale={locale} />
            <CounterAISection dict={dict} locale={locale} />
            <SolutionAISection dict={dict} locale={locale} />
        </>
    )
}