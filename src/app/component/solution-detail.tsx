import Image from "next/image";
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

    const homeLabel = dict.menu.Home;
    
    // Get solution slug from key
    const solutionSlug = Object.keys(solutionSlugToKey).find(slug => solutionSlugToKey[slug] === solutionKey) || solutionKey.toLowerCase();

    return (
        <>
            <PageBanner
                bannerLink="/images/bg/page-banner.jpg"
                title={solution.name}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Solutions, href: `/${locale}/solutions` },
                    { label: solution.name, href: `/${locale}/solutions/${solutionSlug}` },
                ]}
            />

            <div className="section genixo-about-section-07 section-padding">
                <div className="shape-1"></div>
                <div className="container">
                    <div className="about-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="about-img-wrap">
                                    <img className="shape-1" src="/images/shape/about-shape2.png" alt="" />
                                    <div className="about-img">
                                        <img 
                                            src={solution.image1 || `/images/solutions/${solutionSlug}.jpg`} 
                                            alt={solution.name} 
                                        />
                                    </div>
                                    <div className="about-img about-img-2">
                                        <img 
                                            src={solution.image2 || solution.image1 || `/images/solutions/${solutionSlug}.jpg`} 
                                            alt={solution.name} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-wrap">
                                    <div className="section-title">
                                        <h3 className="sub-title">{dict.menu.Solutions}</h3>
                                        <h2 className="title">{solution.name}</h2>
                                    </div>
                                    {solution.summary && (
                                        <p className="text">{solution.summary}</p>
                                    )}
                                </div>
                            </div>
                            {(solution.longDescription || solution.description) && (
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <div 
                                            className="content"
                                            dangerouslySetInnerHTML={{ 
                                                __html: solution.longDescription || solution.description 
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

