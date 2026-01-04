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
        title: dict.menu.GovernmentSupport,
        description: `Genixo Bilişim ve Teknoloji devlet destekleri ve danışmanlık hizmetleri. KOSGEB, TÜBİTAK ve diğer devlet destekleri için danışmanlık.`,
        keywords: `devlet destekleri, KOSGEB, TÜBİTAK, danışmanlık, yazılım danışmanlığı, ${dict.about.slogan}`,
        url: `/${locale}/government-support`,
        locale,
        alternateLocales,
    });
}

export default async function GovernmentSupportPage({
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
                title={dict.menu.GovernmentSupport}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.GovernmentSupport, href: `/${locale}/government-support` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.GovernmentSupport}</h1>
                    <p>Government support & consulting page content will be added here.</p>
                </div>
            </div>
        </>
    )
}

