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

    const homeLabel = dict.menu.Home;
    
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

            <div className="section techwix-about-section-07 section-padding">
                <div className="shape-1"></div>
                <div className="container">
                    <div className="about-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img-wrap">
                                    <img className="shape-1" src="/assets/images/shape/about-shape2.png" alt="" />
                                    <div className="about-img">
                                        <img 
                                            src={product.image1 || `/images/products/${productSlug}.jpg`} 
                                            alt={product.name} 
                                        />
                                    </div>
                                    <div className="about-img about-img-2">
                                        <img 
                                            src={product.image2 || product.image1 || `/images/products/${productSlug}.jpg`} 
                                            alt={product.name} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-wrap">
                                    <div className="section-title">
                                        <h3 className="sub-title">{dict.menu.Products}</h3>
                                        <h2 className="title">{product.name}</h2>
                                    </div>
                                    {product.summary && (
                                        <p className="text">{product.summary}</p>
                                    )}
                                </div>
                            </div>
                            {(product.longDescription || product.description) && (
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <div 
                                            className="content"
                                            dangerouslySetInnerHTML={{ 
                                                __html: product.longDescription || product.description 
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <CounterSection locale={locale} />

            <ChooseUsSection locale={locale} />
        </>
    );
}

