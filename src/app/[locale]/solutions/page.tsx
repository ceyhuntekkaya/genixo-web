import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";

import Link from "next/link";
import {getSolutionSlug} from "@/utils/slugMapping";
import Image from "next/image";

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
        description: dict.seo?.solutions?.description || dict.menu.Solutions,
        keywords: `${dict.seo?.solutions?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/solutions`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function SolutionsPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const homeLabel = dict.menu.Home;

    return (
        <>
            <PageBanner
                bannerLink={"/images/bg/page-banner.jpg"}
                title={dict.menu.Solutions}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Solutions, href: `/${locale}/solutions` },
                ]}
            />
            <div className="section techwix-choose-us-section section-padding"
                 style={{backgroundImage: 'url(/images/bg/choose-us-bg.jpg)'}}>
                <div className="container">
                    <div className="choose-us-wrap">
                        <div className="choose-us-content-wrap">
                            <div className="row">
                                {Object.keys(dict.services).filter(key => key !== 'general').map((key) => {
                                    const solutionKey = key as keyof import('@/i18n/types').Dictionary['services'];
                                    const solution = dict.services[solutionKey];
                                    const solutionSlug = getSolutionSlug(solutionKey);
                                    
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
                                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                                                            <Image 
                                                                src={solution.image1 || "/images/choose-us1.jpg"} 
                                                                alt={solution.name}
                                                                fill
                                                                style={{ objectFit: 'cover' }}
                                                                unoptimized
                                                            />
                                                        </div>
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

