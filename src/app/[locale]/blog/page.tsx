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
        title: dict.menu.Blog,
        description: `Genixo Bilişim ve Teknoloji blog sayfası. Yazılım geliştirme, teknoloji trendleri ve sektör haberleri hakkında güncel içerikler.`,
        keywords: `blog, yazılım blog, teknoloji haberleri, yazılım geliştirme, ${dict.about.slogan}`,
        url: `/${locale}/blog`,
        locale,
        alternateLocales,
    });
}

export default async function BlogPage({
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
                title={dict.menu.Blog}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Blog, href: `/${locale}/blog` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.Blog}</h1>
                    <p>Blog page content will be added here.</p>
                </div>
            </div>
        </>
    )
}

