import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Dictionary } from "@/i18n/types";
import Link from "next/link";
import Image from "next/image";

type ServiceItem = Dictionary['services'][number];

interface RelatedSolutionsProps {
    locale: Locale;
    currentSlug?: string;
    maxItems?: number;
}

export default async function RelatedSolutionsSection({ 
    locale, 
    currentSlug,
    maxItems = 3 
}: RelatedSolutionsProps) {
    const dict = await getDictionary(locale);

    // Get other solutions (filter out current one if provided)
    const allSolutions = Array.isArray(dict.services) 
        ? (dict.services as ServiceItem[])
            .filter((s) => s.active !== false && s.slug !== currentSlug)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .slice(0, maxItems)
        : [];

    if (allSolutions.length === 0) {
        return null;
    }

    const sectionTitle = currentSlug 
        ? (locale === 'tr' ? 'Diğer Çözümlerimiz' : 'Other Solutions')
        : (locale === 'tr' ? 'Çözümlerimiz' : 'Our Solutions');

    const sectionSubtitle = currentSlug
        ? (locale === 'tr' ? 'Keşfedin' : 'Explore More')
        : (locale === 'tr' ? 'Dijital Dönüşüm' : 'Digital Transformation');

    return (
        <div 
            className="section genixo-choose-us-section section-padding"
            style={{ backgroundImage: 'url(/images/bg/choose-us-bg.jpg)' }}
        >
            <div className="container">
                <div className="choose-us-wrap">
                    <div className="section-title text-center">
                        <h3 className="sub-title-modern">{sectionSubtitle}</h3>
                        <h2 className="title">{sectionTitle}</h2>
                    </div>
                    <div className="choose-us-content-wrap">
                        <div className="row">
                            {allSolutions.map((solution) => (
                                <div key={solution.slug} className="col-lg-4 col-md-6">
                                    <div className="choose-us-item">
                                        <div className="choose-us-img">
                                            <Link href={`/${locale}/solutions/${solution.slug}`}>
                                                <div style={{ 
                                                    position: 'relative', 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    minHeight: '300px' 
                                                }}>
                                                    <Image 
                                                        src={solution.image1 || "/images/choose-us1.jpg"} 
                                                        alt={solution.name}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        unoptimized
                                                    />
                                                </div>
                                                <div className="choose-us-content">
                                                    <h3 className="title">{solution.name}</h3>
                                                    <p>{solution.summary}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {currentSlug && (
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <Link 
                                        href={`/${locale}/solutions`}
                                        className="btn btn-primary"
                                    >
                                        {locale === 'tr' ? 'Tüm Çözümleri Görüntüle' : 'View All Solutions'}
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
