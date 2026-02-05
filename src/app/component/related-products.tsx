import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Dictionary } from "@/i18n/types";
import Link from "next/link";
import Image from "next/image";
import { getProductSlug } from "@/utils/slugMapping";

type ProductKey = keyof Dictionary['products'];

interface RelatedProductsProps {
    locale: Locale;
    currentProductKey?: ProductKey;
    maxItems?: number;
}

export default async function RelatedProductsSection({ 
    locale, 
    currentProductKey,
    maxItems = 3 
}: RelatedProductsProps) {
    const dict = await getDictionary(locale);

    // Get all products and filter out current one if provided
    const allProductKeys = Object.keys(dict.products) as ProductKey[];
    const productsList = allProductKeys
        .filter((key) => {
            const product = dict.products[key];
            // Filter out inactive products and current product
            return product.active !== false && key !== currentProductKey;
        })
        .slice(0, maxItems);

    if (productsList.length === 0) {
        return null;
    }

    const sectionTitle = currentProductKey 
        ? (locale === 'tr' ? 'Diğer Ürünlerimiz' : 'Other Products')
        : (locale === 'tr' ? 'Ürünlerimiz' : 'Our Products');

    const sectionSubtitle = currentProductKey
        ? (locale === 'tr' ? 'Keşfedin' : 'Explore More')
        : (locale === 'tr' ? 'Yenilikçi Çözümler' : 'Innovative Solutions');

    return (
        <div 
            className="section genixo-choose-us-section section-padding products-section"
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
                            {productsList.map((key) => {
                                const product = dict.products[key];
                                const productSlug = getProductSlug(key);

                                if (!productSlug) return null;

                                return (
                                    <div key={key} className="col-lg-4 col-md-6">
                                        <div className="choose-us-item">
                                            <div className="choose-us-img">
                                                <Link href={`/${locale}/products/${productSlug}`}>
                                                    <div style={{ 
                                                        position: 'relative', 
                                                        width: '100%', 
                                                        height: '100%', 
                                                        minHeight: '300px' 
                                                    }}>
                                                        <Image 
                                                            src={product.image1 || "/images/choose-us1.jpg"} 
                                                            alt={product.name}
                                                            fill
                                                            style={{ objectFit: 'cover' }}
                                                            unoptimized
                                                        />
                                                    </div>
                                                    <div className="choose-us-content">
                                                        <h3 className="title">{product.name}</h3>
                                                        <p>{product.summary}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {currentProductKey && (
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <Link 
                                        href={`/${locale}/products`}
                                        className="btn btn-primary"
                                    >
                                        {locale === 'tr' ? 'Tüm Ürünleri Görüntüle' : 'View All Products'}
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
