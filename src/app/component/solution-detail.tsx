import Image from "next/image";
import pageBanner from "@/app/assets/images/bg/page-banner.jpg";
import PageBanner from "@/app/component/page-banner";
import CounterSection from "@/app/component/counter-section";
import ChooseUsSection from "@/app/component/choose-us-section";
import type { Dictionary } from "@/i18n/types";
import { solutionSlugToKey } from "@/utils/slugMapping";
import { Locale } from "@/i18n/config";

interface SolutionDetailProps {
    solutionKey: keyof Dictionary['services'];
    dict: Dictionary;
    locale: Locale;
}

export default function SolutionDetail({ solutionKey, dict, locale }: SolutionDetailProps) {
    const solution = dict.services[solutionKey];
    
    if (!solution) {
        return (
            <div className="section section-padding">
                <div className="container">
                    <h1>Solution Not Found</h1>
                    <p>The requested solution could not be found.</p>
                </div>
            </div>
        );
    }

    // Type guard to ensure solution has required properties
    if (!('name' in solution) || !('description' in solution)) {
        return (
            <div className="section section-padding">
                <div className="container">
                    <h1>Solution Not Found</h1>
                    <p>The requested solution could not be found.</p>
                </div>
            </div>
        );
    }

    const homeLabel = locale === 'tr' ? 'Ana Sayfa' : locale === 'en' ? 'Home' : locale === 'de' ? 'Startseite' : locale === 'fr' ? 'Accueil' : 'Главная';
    
    // Get solution slug from key
    const solutionSlug = Object.keys(solutionSlugToKey).find(slug => solutionSlugToKey[slug] === solutionKey) || solutionKey.toLowerCase();

    return (
        <>
            <PageBanner
                bannerLink={pageBanner.src}
                title={solution.name}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Solutions, href: `/${locale}/solutions` },
                    { label: solution.name, href: `/${locale}/solutions/${solutionSlug}` },
                ]}
            />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="solution-detail-wrap">
                                <div className="section-title text-center mb-5">
                                    <h2 className="title">{solution.name}</h2>
                                    {solution.summary && (
                                        <p className="text-muted lead">{solution.summary}</p>
                                    )}
                                </div>

                                <div className="solution-description mb-5">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div 
                                                className="content"
                                                dangerouslySetInnerHTML={{ __html: solution.description }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="solution-cta text-center mt-5">
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

