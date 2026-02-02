import {Locale, locales} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import type {Dictionary} from "@/i18n/types";
import SolutionDetail from "@/app/component/solution-detail";
import {notFound} from "next/navigation";
import {generateMetadata as generateSEOMetadata, generateStructuredData} from "@/utils/seo";
import Script from "next/script";

type ServiceItem = Dictionary['services'][number];

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; type: string }>;
}) {
    const { locale, type } = await params;
    const dict = await getDictionary(locale);
    const solution = Array.isArray(dict.services)
        ? dict.services.find((s: ServiceItem) => s.slug === type)
        : undefined;

    if (!solution) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    if (solution.active === false) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    const metaDescription = solution.summary
        ? solution.summary
        : (solution.description.startsWith('@/')
            ? solution.summary || `${solution.name} hizmeti hakkında detaylı bilgi.`
            : solution.description.substring(0, 160));

    return generateSEOMetadata({
        title: solution.name,
        description: metaDescription,
        keywords: `${solution.name}, ${dict.seo?.common?.softwareSolutions || 'software solutions'}, ${dict.about.slogan}`,
        url: `/${locale}/solutions/${type}`,
        type: 'website',
        locale,
        alternateLocales,
        image: `/images/solutions/${type}.jpg`,
        dict,
    });
}

export async function generateStaticParams() {
    const result: { locale: Locale; type: string }[] = [];
    for (const locale of locales) {
        const dict = await getDictionary(locale);
        if (Array.isArray(dict.services)) {
            for (const service of dict.services) {
                if (service.active !== false) {
                    result.push({ locale, type: service.slug });
                }
            }
        }
    }
    return result;
}

export default async function SolutionDetailPage({
    params,
}: {
    params: Promise<{ locale: Locale; type: string }>;
}) {
    const { locale, type } = await params;
    const dict = await getDictionary(locale);

    const solution = Array.isArray(dict.services)
        ? dict.services.find((s: ServiceItem) => s.slug === type)
        : undefined;

    if (!solution) {
        notFound();
    }

    if (solution.active === false) {
        notFound();
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.ai';
    const solutionDescription = solution.summary
        ? solution.summary
        : (solution.description.startsWith('@/')
            ? solution.summary || `${solution.name} hizmeti hakkında detaylı bilgi.`
            : solution.description.substring(0, 200));

    const serviceStructuredData = generateStructuredData({
        type: 'Service',
        name: solution.name,
        description: solutionDescription,
        url: `${siteUrl}/${locale}/solutions/${type}`,
        image: `${siteUrl}/images/solutions/${type}.jpg`,
        dict,
    });

    const breadcrumbStructuredData = generateStructuredData({
        type: 'BreadcrumbList',
        breadcrumbs: [
            { name: dict.menu.Home, url: `${siteUrl}/${locale}` },
            { name: dict.menu.Solutions, url: `${siteUrl}/${locale}/solutions` },
            { name: solution.name, url: `${siteUrl}/${locale}/solutions/${type}` },
        ],
        dict,
    });

    return (
        <>
            <Script
                id="service-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
            />
            <Script
                id="breadcrumb-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
            />
            <SolutionDetail service={solution} dict={dict} locale={locale} />
        </>
    );
}
