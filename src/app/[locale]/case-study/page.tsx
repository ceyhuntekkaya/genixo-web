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
        title: dict.menu.SuccessStories,
        description: `Genixo Bilişim ve Teknoloji başarı hikayeleri. Müşterilerimizin başarılı projeleri ve çözümlerimiz.`,
        keywords: `başarı hikayeleri, case study, müşteri projeleri, yazılım projeleri, ${dict.about.slogan}`,
        url: `/${locale}/case-study`,
        locale,
        alternateLocales,
    });
}

export default async function CaseStudyPage({
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
                title={dict.menu.SuccessStories}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.SuccessStories, href: `/${locale}/case-study` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.SuccessStories}</h1>
                    <p>Success stories page content will be added here.</p>
                </div>
            </div>
        </>
    )
}

