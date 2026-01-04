
import PageBanner from "@/app/component/page-banner";
import CounterSection from "@/app/component/counter-section";
import ChooseUsSection from "@/app/component/choose-us-section";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/utils/seo";
import { locales } from "@/i18n/config";
import Script from "next/script";
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
        title: dict.menu.AboutUs,
        description: dict.about.short || dict.about.slogan,
        keywords: `${dict.seo?.about?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/about`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const siteUrl = process.env.NEXT_PaiLIC_SITE_URL || 'https://genixo.ai';

    // Organization Structured Data
    const organizationStructuredData = generateStructuredData({
        type: 'Organization',
        name: dict.company?.name || dict.welcome.title || 'Genixo',
        description: dict.about.short || dict.about.slogan,
        url: siteUrl,
        dict,
    });

    const homeLabel = dict.menu.Home;

    return (
        <>
            <Script
                id="organization-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
            />
            <PageBanner
                bannerLink={"/images/bg/page-banner.jpg"}
                title={dict.menu.AboutUs}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.AboutUs, href: `/${locale}/about` },
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
                                    <img src="/images/about-1-img.jpg" alt="" />
                                </div>
                                <div className="about-img about-img-2">
                                    <img src="/images/about-2-img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-wrap">
                                    <div className="section-title">
                                        <h3 className="sub-title">{dict.about.WhoWeAre}</h3>
                                        <h2 className="title">{dict.about.slogan}</h2>
                                    </div>
                                    <p className="text">{dict.about.description}</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="row mt-4">
                                    <div className="col-sm-8">
                                        <h3 className="title">{dict.about.values.dynamism.title}</h3>
                                        <p>{dict.about.values.dynamism.content}</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '200px' }}>
                                            <Image src="/images/img-16.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-4">
                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '200px' }}>
                                            <Image src="/images/img-17.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="title">{dict.about.values.passion.title}</h3>
                                        <p>{dict.about.values.passion.content}</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-8">
                                        <h3 className="title">{dict.about.values.professionalism.title}</h3>
                                        <p>{dict.about.values.professionalism.content}</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '200px' }}>
                                            <Image src="/images/img-15.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CounterSection locale={locale} />

            <ChooseUsSection locale={locale} />
        </>
    )
}