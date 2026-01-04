import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";

import Image from "next/image";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    return generateSEOMetadata({
        title: dict.menu.Blog,
        description: dict.seo?.blog?.description || dict.menu.Blog,
        keywords: `${dict.seo?.blog?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/blog`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const homeLabel = dict.menu.Home;

    return (
        <>
            <PageBanner
                bannerLink={"/images/bg/page-banner.jpg"}
                title={dict.menu.Blog}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Blog, href: `/${locale}/blog` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    <div className="genixo-blog-wrap">
                        <div className="row">
                            {dict.blogs && Object.keys(dict.blogs)
                                .filter(key => {
                                    const blog = dict.blogs?.[key as keyof typeof dict.blogs];
                                    return blog && blog.active !== false;
                                })
                                .map((key) => {
                                    const blog = dict.blogs?.[key as keyof typeof dict.blogs];
                                    const slug = key === 'ai-not-just-technology' 
                                        ? (locale === 'tr' ? 'yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu' : 'ai-not-just-technology')
                                        : key;
                                    
                                    if (!blog) return null;

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
                                        <div key={key} className="col-lg-4 col-md-6 mb-4">
                                            <div className="single-blog">
                                                <div className="blog-image">
                                                    <a href={`/${locale}/blog/${slug}`}>
                                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '250px' }}>
                                                            <Image src={blog.image} alt={blog.title} fill style={{ objectFit: 'cover' }} unoptimized />
                                                        </div>
                                                        <div className="top-meta">
                                                            <span className="date">
                                                                <span>{new Date(blog.date).getDate()}</span>
                                                                {locale === 'tr' 
                                                                    ? ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'][new Date(blog.date).getMonth()]
                                                                    : new Date(blog.date).toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'de' ? 'de-DE' : locale === 'fr' ? 'fr-FR' : 'ru-RU', { month: 'short' })
                                                                }
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-meta">
                                                        <span><i className="fas fa-user"></i> <a href="#">{blog.author.name}</a></span>
                                                        <span><i className="far fa-calendar"></i> {formatDate(blog.date, locale)}</span>
                                                    </div>
                                                    <h3 className="title">
                                                        <a href={`/${locale}/blog/${slug}`}>{blog.title}</a>
                                                    </h3>
                                                    {blog.excerpt && (
                                                        <p className="mb-3">{blog.excerpt.substring(0, 150)}...</p>
                                                    )}
                                                    <div className="blog-btn">
                                                        <a className="blog-btn-link" href={`/${locale}/blog/${slug}`}>
                                                            {dict.blog?.readFull || 'Read More'} <i className="fas fa-long-arrow-alt-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

