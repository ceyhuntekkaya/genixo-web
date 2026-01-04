'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";
import Link from "next/link";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function BlogSection({ dict, locale }: PageProps) {
    const blogs = dict.blogs ? Object.keys(dict.blogs)
        .filter(key => {
            const blog = dict.blogs[key];
            return blog && blog.active !== false;
        })
        .slice(0, 3) // Show maximum 3 items on homepage
        .map((key) => {
            const blog = dict.blogs[key];
            const slug = key === 'ai-not-just-technology' 
                ? (locale === 'tr' ? 'yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu' : 'ai-not-just-technology')
                : key;
            
            return { key, blog, slug };
        })
        .filter(item => item.blog) : [];

    // Format date
    const formatDate = (dateString: string, locale: Locale) => {
        const date = new Date(dateString);
        if (locale === 'tr') {
            const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
            return `${date.getDate()} ${months[date.getMonth()]}`;
        }
        return date.toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'de' ? 'de-DE' : locale === 'fr' ? 'fr-FR' : 'ru-RU', {
            month: 'short',
            day: 'numeric'
        });
    };

    if (blogs.length === 0) {
        return null;
    }

    return (
        <div className="section techwix-blog-section section-padding-02">
            <div className="container">
                <div className="section-title text-center">
                    <h4 className="sub-title">{dict.blog.latestBlog}</h4>
                    <h2 className="title">{dict.blog.fromNewsRoom}</h2>
                </div>
                <div className="techwix-blog-wrap">
                    <div className="row">
                        {blogs.map(({ key, blog, slug }) => (
                            <div key={key} className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <Link href={`/${locale}/blog/${slug}`}>
                                            <img src={blog.image} alt={blog.title} />
                                            <div className="top-meta">
                                                <span className="date">
                                                    <span>{new Date(blog.date).getDate()}</span>
                                                    {formatDate(blog.date, locale)}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">{blog.author.name}</a></span>
                                        </div>
                                        <h3 className="title">
                                            <Link href={`/${locale}/blog/${slug}`}>{blog.title}</Link>
                                        </h3>
                                        {blog.excerpt && (
                                            <p className="mb-3" style={{ fontSize: '14px', color: '#666' }}>
                                                {blog.excerpt.substring(0, 100)}...
                                            </p>
                                        )}
                                        <div className="blog-btn">
                                            <Link className="blog-btn-link" href={`/${locale}/blog/${slug}`}>
                                                {dict.blog.readFull} <i className="fas fa-long-arrow-alt-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
