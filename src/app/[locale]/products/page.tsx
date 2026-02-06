import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageHero from "@/app/component/page-hero";

import Link from "next/link";
import {getProductSlug} from "@/utils/slugMapping";
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
        title: dict.menu.Products,
        description: dict.seo?.products?.description || dict.menu.Products,
        keywords: `${dict.seo?.products?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/products`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <>
            <PageHero
                title={dict.menu.Products}
                subtitle={dict.about.slogan}
                description={dict.seo?.products?.description || "Yenilikçi dijital ürünlerimiz ile işinizi güçlendirin."}
                backgroundImage={dict.products?.hero?.backgroundImage}
            />

            {/* Products Cards Section */}
            <div className="section genixo-choose-us-section section-padding products-section"
                 style={{backgroundImage: 'url(/images/bg/choose-us-bg.jpg)'}}>
                <div className="container">
                    <div className="choose-us-wrap">
                        <div className="choose-us-content-wrap">
                            <div className="row">
                                {Object.keys(dict.products).map((key) => {
                                    const productKey = key as keyof import('@/i18n/types').Dictionary['products'];
                                    const product = dict.products[productKey];
                                    const productSlug = getProductSlug(productKey);
                                    
                                    if (!product || !productSlug || !('name' in product) || !('summary' in product)) {
                                        return null;
                                    }

                                    // Only show active products (default is true if not set)
                                    if (product.active === false) {
                                        return null;
                                    }

                                    return (
                                        <div key={key} className="col-lg-4 col-md-6">
                                            <div className="choose-us-item">
                                                <div className="choose-us-img">
                                                    <Link href={`/${locale}/products/${productSlug}`}>
                                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

