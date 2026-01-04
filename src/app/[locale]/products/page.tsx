import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";
import pageBannerImage from "@/app/assets/images/bg/page-banner.jpg";

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
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.Products}</h1>
                    <p>Products page content will be added here.</p>
                </div>
            </div>
        </>
    )
}

