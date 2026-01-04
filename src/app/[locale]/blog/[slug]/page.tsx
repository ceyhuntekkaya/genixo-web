import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata, generateStructuredData} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";

import {notFound} from "next/navigation";
import Script from "next/script";
import Image from "next/image";

// Blog slug mapping
function getBlogKey(slug: string): string | null {
    const slugMap: Record<string, string> = {
        'yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu': 'ai-not-just-technology',
        'ai-not-just-technology': 'ai-not-just-technology',
    };
    return slugMap[slug] || null;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>;
}) {
    const { locale, slug } = await params;
    const dict = await getDictionary(locale);
    const blogKey = getBlogKey(slug);
    
    if (!blogKey) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    const blogData = blogKey ? dict.blogs?.[blogKey as keyof typeof dict.blogs] : undefined;
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    if (!blogData || blogData.active === false) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    return generateSEOMetadata({
        title: blogData.title,
        description: blogData.excerpt || blogData.content.substring(0, 160),
        keywords: `${blogData.title}, ${dict.seo?.common?.blog || 'blog'}, ${dict.about.slogan}`,
        url: `/${locale}/blog/${slug}`,
        type: 'article',
        locale,
        alternateLocales,
        image: blogData.image,
        dict,
    });
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ locale: Locale; slug: string }>;
}) {
    const { locale, slug } = await params;
    const dict = await getDictionary(locale);
    const blogKey = getBlogKey(slug);
    
    if (!blogKey) {
        notFound();
    }

    const blogData = blogKey ? dict.blogs?.[blogKey as keyof typeof dict.blogs] : undefined;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.ai';
    
    if (!blogData || blogData.active === false) {
        notFound();
    }

    const homeLabel = dict.menu.Home;

    // Article Structured Data
    const articleStructuredData = generateStructuredData({
        type: 'Article',
        name: blogData.title,
        description: blogData.excerpt || blogData.content.substring(0, 200),
        url: `${siteUrl}/${locale}/blog/${slug}`,
        image: `${siteUrl}${blogData.image}`,
        datePublished: blogData.date,
        dateModified: blogData.date,
        author: {
            name: blogData.author.name,
        },
        dict,
    });

    // Breadcrumb Structured Data
    const breadcrumbStructuredData = generateStructuredData({
        type: 'BreadcrumbList',
        breadcrumbs: [
            { name: homeLabel, url: `${siteUrl}/${locale}` },
            { name: dict.menu.Blog, url: `${siteUrl}/${locale}/blog` },
            { name: blogData.title, url: `${siteUrl}/${locale}/blog/${slug}` },
        ],
        dict,
    });

    // Format date
    const formatDate = (dateString: string, locale: Locale) => {
        const date = new Date(dateString);
        if (locale === 'tr') {
            const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
            return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        }
        return date.toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'de' ? 'de-DE' : locale === 'fr' ? 'fr-FR' : 'ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Script
                id="article-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
            />
            <Script
                id="breadcrumb-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
            />
            <PageBanner
                bannerLink={"/images/bg/page-banner.jpg"}
                title={blogData.title}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Blog, href: `/${locale}/blog` },
                    { label: blogData.title, href: `/${locale}/blog/${slug}` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <article className="blog-detail">
                                <div className="blog-image mb-4">
                                    <Image
                                        src={blogData.image}
                                        alt={blogData.title}
                                        width={800}
                                        height={450}
                                        className="img-fluid"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                                
                                <div className="blog-meta mb-3">
                                    <span className="me-3">
                                        <i className="fas fa-user me-2"></i>
                                        <strong>{blogData.author.name}</strong>
                                        {blogData.author.title && (
                                            <span className="ms-2 text-muted">- {blogData.author.title}</span>
                                        )}
                                    </span>
                                    <span>
                                        <i className="far fa-calendar me-2"></i>
                                        {formatDate(blogData.date, locale)}
                                    </span>
                                </div>

                                <h1 className="blog-title mb-4">{blogData.title}</h1>
                                
                                <div 
                                    className="blog-content"
                                    dangerouslySetInnerHTML={{ __html: blogData.content }}
                                />
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

