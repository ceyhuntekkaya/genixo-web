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
        title: dict.menu.Solutions,
        description: `Genixo Bilişim ve Teknoloji çözümleri. Web uygulaması, mobil geliştirme, bulut çözümleri, DevOps ve veri bilimi hizmetleri.`,
        keywords: `yazılım çözümleri, web uygulaması, mobil geliştirme, bulut çözümleri, DevOps, veri bilimi, ${dict.about.slogan}`,
        url: `/${locale}/solutions`,
        locale,
        alternateLocales,
    });
}

export default async function SolutionsPage({
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
                title={dict.menu.Solutions}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Solutions, href: `/${locale}/solutions` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.Solutions}</h1>
                    <p>Solutions page content will be added here.</p>
                </div>
            </div>
        </>
    )
}

