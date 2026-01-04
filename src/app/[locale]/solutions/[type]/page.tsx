import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {getSolutionKey} from "@/utils/slugMapping";
import SolutionDetail from "@/app/component/solution-detail";
import {notFound} from "next/navigation";
import {generateMetadata as generateSEOMetadata, generateStructuredData} from "@/utils/seo";
import {locales} from "@/i18n/config";
import Script from "next/script";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; type: string }>;
}) {
    const { locale, type } = await params;
    const dict = await getDictionary(locale);
    const solutionKey = getSolutionKey(type);
    
    if (!solutionKey) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    const solution = dict.services[solutionKey];
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    // Type guard to ensure solution has required properties
    if (!solution || !('name' in solution) || !('description' in solution)) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    // Check if solution is active
    if (solution.active === false) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    return generateSEOMetadata({
        title: solution.name,
        description: ('summary' in solution && solution.summary) ? solution.summary : solution.description.substring(0, 160),
        keywords: `${solution.name}, ${dict.seo?.common?.softwareSolutions || 'software solutions'}, ${dict.about.slogan}`,
        url: `/${locale}/solutions/${type}`,
        type: 'website',
        locale,
        alternateLocales,
        image: `/images/solutions/${type}.jpg`,
        dict,
    });
}

export default async function SolutionDetailPage({
    params,
}: {
    params: Promise<{ locale: Locale; type: string }>;
}) {
    const { locale, type } = await params;
    const dict = await getDictionary(locale);
    
    // URL slug'ını JSON key'ine çevir
    const solutionKey = getSolutionKey(type);
    
    // Eğer geçersiz bir slug ise 404 döndür
    if (!solutionKey) {
        notFound();
    }

    const solution = dict.services[solutionKey];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.ai';
    
    // Type guard to ensure solution has required properties
    if (!solution || !('name' in solution) || !('description' in solution)) {
        notFound();
    }

    // Check if solution is active
    if (solution.active === false) {
        notFound();
    }

    const solutionName = solution.name;
    const solutionDescription = ('summary' in solution && solution.summary) 
        ? solution.summary 
        : solution.description.substring(0, 200);
    
    // Structured Data for Service
    const serviceStructuredData = generateStructuredData({
        type: 'Service',
        name: solutionName,
        description: solutionDescription,
        url: `${siteUrl}/${locale}/solutions/${type}`,
        image: `${siteUrl}/images/solutions/${type}.jpg`,
        dict,
    });

    // Breadcrumb Structured Data
    const breadcrumbStructuredData = generateStructuredData({
        type: 'BreadcrumbList',
        breadcrumbs: [
            { name: dict.menu.Home, url: `${siteUrl}/${locale}` },
            { name: dict.menu.Solutions, url: `${siteUrl}/${locale}/solutions` },
            { name: solutionName, url: `${siteUrl}/${locale}/solutions/${type}` },
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
            <SolutionDetail solutionKey={solutionKey} dict={dict} locale={locale} />
        </>
    );
}

