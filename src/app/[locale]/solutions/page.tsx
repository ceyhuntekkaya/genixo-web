import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";
import pageBannerImage from "@/app/assets/images/bg/page-banner.jpg";
import Link from "next/link";
import {getSolutionSlug} from "@/utils/slugMapping";

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
            <div className="section techwix-choose-us-section section-padding"
                 style={{backgroundImage: 'url(/assets/images/bg/choose-us-bg.jpg)'}}>
                <div className="container">
                    <div className="choose-us-wrap">
                        <div className="choose-us-content-wrap">
                            <div className="row">
                                {Object.keys(dict.services).filter(key => key !== 'general').map((key) => {
                                    const solution = dict.services[key as keyof typeof dict.services];
                                    const solutionSlug = getSolutionSlug(key as keyof typeof dict.services);
                                    
                                    if (!solution || !solutionSlug || !('name' in solution) || !('summary' in solution)) {
                                        return null;
                                    }

                                    // Only show active solutions (default is true if not set)
                                    if (solution.active === false) {
                                        return null;
                                    }

                                    return (
                                        <div key={key} className="col-lg-4 col-md-6">
                                            <div className="choose-us-item">
                                                <div className="choose-us-img">
                                                    <Link href={`/${locale}/solutions/${solutionSlug}`}>
                                                        <img 
                                                            src={solution.image1 || "/assets/images/choose-us1.jpg"} 
                                                            alt={solution.name}
                                                        />
                                                        <div className="choose-us-content">
                                                            <h3 className="title">{solution.name}</h3>
                                                            <p>{solution.summary}</p>
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

