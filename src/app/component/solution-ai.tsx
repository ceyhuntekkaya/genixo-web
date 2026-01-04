'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";
import {getProductSlug} from "@/utils/slugMapping";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function SolutionAISection({ dict, locale }: PageProps) {
    if (!dict.solutionAI) {
        return null;
    }

    const solutionAI = dict.solutionAI;

    // Ana sayfada gösterilecek product'ları al
    const homepageProducts = Object.keys(dict.products)
        .filter(key => {
            const product = dict.products[key as keyof typeof dict.products];
            return product && product.active !== false && product.showOnHomepage === true;
        })
        .slice(0, 2) // İlk 3 product'ı al
        .map(key => {
            const productKey = key as keyof import('@/i18n/types').Dictionary['products'];
            const product = dict.products[productKey];
            const productSlug = getProductSlug(productKey);
            return { key, product, slug: productSlug };
        })
        .filter(item => item.product && item.slug);

    if (homepageProducts.length === 0) {
        return null;
    }

    const firstProduct = homepageProducts[0];
    const otherProducts = homepageProducts.slice(1);

    return (
        <div className="section techwix-solution-section section-padding">
            <div className="container">
                <div className="solution-wrap">
                    <div className="section-title text-center">
                        <h3 className="sub-title">{solutionAI.weDeliverExcellence}</h3>
                        <h2 className="title">{solutionAI.solutionsToCommonAIProblems}</h2>
                    </div>
                    <div className="solution-content-wrap">
                        <div className="row">
                            {firstProduct && (
                                <div className="col-lg-7">
                                    <div className="solution-item solution-item-big">
                                        <div className="solution-img">
                                            <a href="#">
                                                <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                                                    <Image src={firstProduct.product.image1 || "/assets/images/solution-1.jpg"} alt={firstProduct.product.name} fill style={{ objectFit: 'cover' }} unoptimized />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="solution-content">
                                            <div className="solution-title">
                                                <h4 className="sub-title">{firstProduct.product.summary?.substring(0, 20) || 'Product'}</h4>
                                                <h3 className="title">
                                                    <Link href={`/${locale}/products/${firstProduct.slug}`}>{firstProduct.product.name}</Link>
                                                </h3>
                                            </div>
                                            {firstProduct.product.videoLink && (
                                                <a className="play-btn popup-video" href={firstProduct.product.videoLink}>
                                                    <i className="fas fa-play"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {otherProducts.length > 0 && (
                                <div className="col-lg-5" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {otherProducts.map((item, index) => (
                                        <div key={item.key} style={{ flex: '1', minHeight: 0 }}>
                                            <div className="solution-item solution-item-sm" style={{ height: '100%' }}>
                                                <div className="solution-img" style={{ height: '100%' }}>
                                                    <a href="#" style={{ display: 'block', height: '100%', position: 'relative' }}>
                                                        <Image 
                                                            src={item.product.image1 || (index === 0 ? "/assets/images/solution-img2.jpg" : "/assets/images/solution-img3.jpg")} 
                                                            alt={item.product.name}
                                                            fill
                                                            style={{ objectFit: 'cover' }}
                                                            unoptimized
                                                        />
                                                    </a>
                                                </div>
                                                <div className="solution-content">
                                                    <div className="solution-title">
                                                        <h4 className="sub-title">{item.product.summary?.substring(0, 20) || 'Product'}</h4>
                                                        <h3 className="title">
                                                            <Link href={`/${locale}/products/${item.slug}`}>{item.product.name}</Link>
                                                        </h3>
                                                    </div>
                                                    {item.product.videoLink && (
                                                        <a className="play-btn popup-video" href={item.product.videoLink}>
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
