'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function BlogSection({ dict, locale }: PageProps) {
    const blogsData = dict.blogs;
    const blogs = blogsData ? Object.keys(blogsData)
        .filter(key => {
            const blog = blogsData[key];
            return blog && blog.active !== false;
        })
        .slice(0, 3) // Show maximum 3 items on homepage
        .map((key) => {
            const blog = blogsData[key];
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

    if (blogs.length === 0 || !dict.blog) {
        return null;
    }

    const blogDict = dict.blog;

    // 1 blog: tek kolon, 2 blog: iki kolon, 3+: üç kolon
    const colClass = blogs.length === 1
        ? 'col-12'
        : blogs.length === 2
            ? 'col-lg-6 col-md-6'
            : 'col-lg-4 col-md-4';

    return (
        <div className="section genixo-blog-section">
            <div className="container">
               
                <div className="genixo-blog-wrap">
                    <div className="row">
                        {blogs.map(({ key, blog, slug }) => (
                            <div key={key} className={colClass}>
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <Link href={`/${locale}/blog/${slug}`}>
                                            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '250px' }}>
                                                <Image 
                                                    src={blog.image} 
                                                    alt={blog.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    unoptimized
                                                />
                                                <span
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        padding: '20px',
                                                        background: 'rgba(0,0,0,0.4)',
                                                        color: '#fff',
                                                        fontSize: '1.75rem',
                                                        fontWeight: 700,
                                                        lineHeight: 1.3,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {blog.title}
                                                </span>
                                            </div>
                                           
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        
                                        <h3 className="title">
                                            <Link href={`/${locale}/blog/${slug}`}>{blog.title}</Link>
                                        </h3>
                                        {blog.excerpt && (
                                            <p className="mb-3" style={{ fontSize: '14px', color: '#666' }}>
                                                {blog.excerpt.substring(0, 300)}...
                                            </p>
                                        )}
                                        <div className="blog-btn">
                                            <Link className="blog-btn-link" href={`/${locale}/blog/${slug}`}>
                                                {blogDict.readFull} <i className="fas fa-long-arrow-alt-right"></i>
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
