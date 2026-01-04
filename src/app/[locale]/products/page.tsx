import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";
import pageBannerImage from "@/app/assets/images/bg/page-banner.jpg";
import Link from "next/link";
import {getProductSlug} from "@/utils/slugMapping";

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
        description: `Genixo Bilişim ve Teknoloji ürünleri. AI destekli yazılım çözümleri, eğitim platformları ve kurumsal yazılım ürünleri.`,
        keywords: `yazılım ürünleri, AI yazılım, eğitim yazılımı, kurumsal yazılım, ${dict.about.slogan}`,
        url: `/${locale}/products`,
        locale,
        alternateLocales,
    });
}

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const homeLabel = locale === 'tr' ? 'Ana Sayfa' : locale === 'en' ? 'Home' : locale === 'de' ? 'Startseite' : locale === 'fr' ? 'Accueil' : 'Главная';

    return (
        <>
            <PageBanner
                bannerLink={pageBannerImage.src}
                title={dict.menu.Products}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Products, href: `/${locale}/products` },
                ]}
            />
            <div className="section techwix-choose-us-section section-padding"
                 style={{backgroundImage: 'url(/assets/images/bg/choose-us-bg.jpg)'}}>
                <div className="container">
                    <div className="choose-us-wrap">
                        <div className="choose-us-content-wrap">
                            <div className="row">
                                {Object.keys(dict.products).map((key) => {
                                    const product = dict.products[key as keyof typeof dict.products];
                                    const productSlug = getProductSlug(key as keyof typeof dict.products);
                                    
                                    if (!product || !productSlug || !('name' in product) || !('summary' in product)) {
                                        return null;
                                    }

                                    return (
                                        <div key={key} className="col-lg-4 col-md-6">
                                            <div className="choose-us-item">
                                                <div className="choose-us-img">
                                                    <Link href={`/${locale}/products/${productSlug}`}>
                                                        <img 
                                                            src={product.image1 || "/assets/images/choose-us1.jpg"} 
                                                            alt={product.name}
                                                        />
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

