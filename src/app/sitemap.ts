import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { solutionSlugToKey, productSlugToKey } from '@/utils/slugMapping';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.ai';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/products',
        '/solutions',
        '/case-study',
        '/government-support',
    ];

    // Generate all locale routes
    const routes: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        // Base routes for each locale
        baseRoutes.forEach((route) => {
            routes.push({
                url: `${siteUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'daily' : 'weekly',
                priority: route === '' ? 1 : 0.8,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((l) => [l, `${siteUrl}/${l}${route}`])
                    ),
                },
            });
        });

        // Solution detail pages
        Object.keys(solutionSlugToKey).forEach((slug) => {
            routes.push({
                url: `${siteUrl}/${locale}/solutions/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((l) => [l, `${siteUrl}/${l}/solutions/${slug}`])
                    ),
                },
            });
        });

        // Product detail pages
        Object.keys(productSlugToKey).forEach((slug) => {
            routes.push({
                url: `${siteUrl}/${locale}/products/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((l) => [l, `${siteUrl}/${l}/products/${slug}`])
                    ),
                },
            });
        });
    });

    return routes;
}

