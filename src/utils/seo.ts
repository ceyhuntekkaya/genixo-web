import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { companyInfo } from './company';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.ai';
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
    dict?: Dictionary; // Optional dictionary for translations
}

export function generateMetadata(config: SEOConfig): Metadata {
    const {
        title,
        description,
        keywords,
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
        dict,
    } = config;

    // Use dictionary values if available, otherwise use defaults
    const siteNameValue = dict?.company?.name || siteName;
    const defaultDescriptionValue = dict?.company?.defaultDescription || defaultDescription;
    const defaultKeywordsValue = dict?.company?.defaultKeywords || defaultKeywords;
    const finalDescription = description || defaultDescriptionValue;
    const finalKeywords = keywords || defaultKeywordsValue;

    const fullTitle = title ? `${title} | ${siteNameValue}` : siteNameValue;
    const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

    // Alternate language URLs
    const alternates: { languages?: Record<string, string> } = {};
    alternateLocales.forEach((altLocale) => {
        if (url) {
            if (!alternates.languages) {
                alternates.languages = {};
            }
            alternates.languages[altLocale] = `${siteUrl}/${altLocale}${url.replace(/^\/[^/]+/, '')}`;
        } else {
            if (!alternates.languages) {
                alternates.languages = {};
            }
            alternates.languages[altLocale] = `${siteUrl}/${altLocale}`;
        }
    });

    const metadata: Metadata = {
        title: fullTitle,
        description: finalDescription,
        keywords: finalKeywords.split(',').map((k: string) => k.trim()),
        authors: author ? [{ name: author }] : undefined,
        creator: siteNameValue,
        publisher: siteNameValue,
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
            description: finalDescription,
            siteName: siteNameValue,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title || siteNameValue,
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
            description: finalDescription,
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
    dict?: Dictionary;
    [key: string]: unknown;
}) {
    const { type, dict, ...data } = config;
    
    // Use dictionary values if available, otherwise use defaults
    const siteNameValue = dict?.company?.name || siteName;
    const defaultDescriptionValue = dict?.company?.defaultDescription || defaultDescription;

    const baseStructuredData: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': type,
    };

    switch (type) {
        case 'Organization':
            return {
                ...baseStructuredData,
                name: data.name || siteNameValue,
                description: data.description || defaultDescriptionValue,
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
                    telephone: companyInfo.phone,
                    email: companyInfo.email,
                    contactType: 'customer service',
                    areaServed: 'TR',
                    availableLanguage: ['Turkish', 'English', 'German', 'French', 'Russian'],
                },
            };

        case 'WebSite':
            return {
                ...baseStructuredData,
                name: data.name || siteNameValue,
                description: data.description || defaultDescriptionValue,
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
                    name: siteNameValue,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/images/logo.png`,
                    },
                },
            };

        case 'Product':
        case 'Service':
            const productData: Record<string, unknown> = {
                ...baseStructuredData,
                name: data.name,
                description: data.description,
                image: data.image,
                url: data.url,
            };
            if (data.offers && typeof data.offers === 'object' && data.offers !== null) {
                productData.offers = {
                    '@type': 'Offer',
                    ...(data.offers as Record<string, unknown>),
                };
            }
            return productData;

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
    locale: Locale = 'tr',
    dict?: Dictionary
): Array<{ name: string; url: string }> {
    const homeName = dict?.menu?.Home || (locale === 'tr' ? 'Ana Sayfa' : 'Home');
    const home = { name: homeName, url: `/${locale}` };
    return [home, ...items];
}

