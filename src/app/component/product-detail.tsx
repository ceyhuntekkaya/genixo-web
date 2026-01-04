import Image from "next/image";
import pageBanner from "@/app/assets/images/bg/page-banner.jpg";
import PageBanner from "@/app/component/page-banner";
import CounterSection from "@/app/component/counter-section";
import ChooseUsSection from "@/app/component/choose-us-section";
import type { Dictionary } from "@/i18n/types";
import { productSlugToKey } from "@/utils/slugMapping";
import { Locale } from "@/i18n/config";

interface ProductDetailProps {
    productKey: keyof Dictionary['products'];
    dict: Dictionary;
    locale: Locale;
}

export default function ProductDetail({ productKey, dict, locale }: ProductDetailProps) {
    const product = dict.products[productKey];
    
    if (!product) {
        return (
            <div className="section section-padding">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>The requested product could not be found.</p>
                </div>
            </div>
        );
    }

    const homeLabel = locale === 'tr' ? 'Ana Sayfa' : locale === 'en' ? 'Home' : locale === 'de' ? 'Startseite' : locale === 'fr' ? 'Accueil' : 'Главная';
    
    // Get product slug from key
    const productSlug = Object.keys(productSlugToKey).find(slug => productSlugToKey[slug] === productKey) || productKey.toLowerCase();

    return (
        <>
            <PageBanner
                bannerLink={pageBanner.src}
                title={product.name}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Products, href: `/${locale}/products` },
                    { label: product.name, href: `/${locale}/products/${productSlug}` },
                ]}
            />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-detail-wrap">
                                <div className="section-title text-center mb-5">
                                    <h2 className="title">{product.name}</h2>
                                    {product.summary && (
                                        <p className="text-muted lead">{product.summary}</p>
                                    )}
                                </div>

                                {product.image && (
                                    <div className="product-image mb-5 text-center">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={800}
                                            height={400}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                )}

                                <div className="product-description mb-5">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div 
                                                className="content"
                                                dangerouslySetInnerHTML={{ __html: product.description }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {product.features && product.features.length > 0 && (
                                    <div className="product-features mt-5">
                                        <div className="row">
                                            <div className="col-lg-8 mx-auto">
                                                <h3 className="mb-4">Key Features</h3>
                                                <div className="row">
                                                    {product.features.map((feature, index) => (
                                                        <div key={index} className="col-md-6 mb-3">
                                                            <div className="feature-item d-flex align-items-start">
                                                                <i className="flaticon-check-mark me-3 mt-1 text-primary"></i>
                                                                <span>{feature}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="product-cta text-center mt-5">
                                    <a href={`/${locale}/contact`} className="btn btn-primary btn-lg">
                                        {dict.menu.ContactUs}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CounterSection locale={locale} />

            <ChooseUsSection locale={locale} />
        </>
    );
}

