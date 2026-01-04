import { Metadata } from 'next';
import { Locale } from '@/i18n/config';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.com';
const siteName = 'Genixo Bilişim ve Teknoloji';
const defaultDescription = 'Yazılım Çözüm Ortağı & İnovasyon Şirketi - Web uygulamaları, mobil geliştirme, bulut çözümleri ve AI destekli yazılım geliştirme hizmetleri.';
const defaultKeywords = 'yazılım geliştirme, web uygulaması, mobil uygulama, bulut çözümleri, AI yazılım, yazılım danışmanlığı, DevOps, veri bilimi';

export interface SEOConfig {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article'; // Open Graph only supports: website, article, book, profile, music, video
    locale?: Locale;
    alternateLocales?: Locale[];
    noindex?: boolean;
    nofollow?: boolean;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
    const {
        title,
        description = defaultDescription,
        keywords = defaultKeywords,
        image = `${siteUrl}/images/og-image.jpg`,
        url,
        type = 'website',
        locale = 'tr',
        alternateLocales = [],
        noindex = false,
        nofollow = false,
        publishedTime,
        modifiedTime,
        author,
        section,
        tags,
    } = config;

    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

    // Alternate language URLs
    const alternates: Record<string, string> = {};
    alternateLocales.forEach((altLocale) => {
        if (url) {
            alternates.languages = alternates.languages || {};
            alternates.languages[altLocale] = `${siteUrl}/${altLocale}${url.replace(/^\/[^/]+/, '')}`;
        } else {
            alternates.languages = alternates.languages || {};
            alternates.languages[altLocale] = `${siteUrl}/${altLocale}`;
        }
    });

    const metadata: Metadata = {
        title: fullTitle,
        description,
        keywords: keywords.split(',').map(k => k.trim()),
        authors: author ? [{ name: author }] : undefined,
        creator: siteName,
        publisher: siteName,
        robots: {
            index: !noindex,
            follow: !nofollow,
            googleBot: {
                index: !noindex,
                follow: !nofollow,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            type,
            locale: locale === 'tr' ? 'tr_TR' : locale === 'en' ? 'en_US' : locale === 'de' ? 'de_DE' : locale === 'fr' ? 'fr_FR' : 'ru_RU',
            url: canonicalUrl,
            title: fullTitle,
            description,
            siteName,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title || siteName,
                },
            ],
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
            ...(section && { section }),
            ...(tags && tags.length > 0 && { tags }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image],
            creator: '@genixo',
            site: '@genixo',
        },
        alternates: {
            canonical: canonicalUrl,
            ...(Object.keys(alternates).length > 0 && alternates),
        },
        metadataBase: new URL(siteUrl),
        category: section,
    };

    return metadata;
}

export function generateStructuredData(config: {
    type: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service' | 'BreadcrumbList';
    name?: string;
    description?: string;
    url?: string;
    logo?: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
    author?: {
        name: string;
        url?: string;
    };
    breadcrumbs?: Array<{ name: string; url: string }>;
    [key: string]: any;
}) {
    const { type, ...data } = config;

    const baseStructuredData: Record<string, any> = {
        '@context': 'https://schema.org',
        '@type': type,
    };

    switch (type) {
        case 'Organization':
            return {
                ...baseStructuredData,
                name: data.name || siteName,
                description: data.description || defaultDescription,
                url: data.url || siteUrl,
                logo: data.logo || `${siteUrl}/images/logo.png`,
                image: data.image || `${siteUrl}/images/og-image.jpg`,
                sameAs: data.sameAs || [
                    'https://www.linkedin.com/company/genixo',
                    'https://twitter.com/genixo',
                    'https://www.facebook.com/genixo',
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+44-920-090-505',
                    contactType: 'customer service',
                    areaServed: 'TR',
                    availableLanguage: ['Turkish', 'English', 'German', 'French', 'Russian'],
                },
            };

        case 'WebSite':
            return {
                ...baseStructuredData,
                name: data.name || siteName,
                description: data.description || defaultDescription,
                url: data.url || siteUrl,
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
                    },
                    'query-input': 'required name=search_term_string',
                },
            };

        case 'Article':
            return {
                ...baseStructuredData,
                headline: data.name || data.title,
                description: data.description,
                image: data.image,
                datePublished: data.datePublished,
                dateModified: data.dateModified || data.datePublished,
                author: data.author ? {
                    '@type': 'Person',
                    name: data.author.name,
                    ...(data.author.url && { url: data.author.url }),
                } : undefined,
                publisher: {
                    '@type': 'Organization',
                    name: siteName,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/images/logo.png`,
                    },
                },
            };

        case 'Product':
        case 'Service':
            return {
                ...baseStructuredData,
                name: data.name,
                description: data.description,
                image: data.image,
                url: data.url,
                ...(data.offers && {
                    offers: {
                        '@type': 'Offer',
                        ...data.offers,
                    },
                }),
            };

        case 'BreadcrumbList':
            return {
                ...baseStructuredData,
                itemListElement: data.breadcrumbs?.map((crumb: { name: string; url: string }, index: number) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: crumb.name,
                    item: crumb.url,
                })),
            };

        default:
            return {
                ...baseStructuredData,
                ...data,
            };
    }
}

export function generateBreadcrumbs(
    items: Array<{ name: string; url: string }>,
    locale: Locale = 'tr'
): Array<{ name: string; url: string }> {
    const home = { name: locale === 'tr' ? 'Ana Sayfa' : 'Home', url: `/${locale}` };
    return [home, ...items];
}

