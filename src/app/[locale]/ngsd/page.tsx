import pageBanner from "@/app/assets/images/bg/page-banner.jpg";
import PageBanner from "@/app/component/page-banner";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";
import { locales } from "@/i18n/config";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    return generateSEOMetadata({
        title: dict.menu.NGSD,
        description: dict.ngsd.subtitle,
        keywords: `${dict.seo?.ngsd?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/ngsd`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function NGSDPage({
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
                bannerLink={pageBanner.src}
                title={dict.menu.NGSD}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.NGSD, href: `/${locale}/ngsd` },
                ]}
            />

            <div className="section techwix-about-section-07 section-padding">
                <div className="shape-1"></div>
                <div className="container">
                    <div className="about-wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-5">
                                    <h2 className="title">{dict.ngsd.title}</h2>
                                    <h3 className="sub-title">{dict.ngsd.subtitle}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="section-title mb-4">
                                    <h3 className="title">{dict.ngsd.forWho.title}</h3>
                                    <p className="text">{dict.ngsd.forWho.content}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="section-title mb-4">
                                    <h3 className="title">{dict.ngsd.whatIs.title}</h3>
                                    <p className="text">{dict.ngsd.whatIs.content}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="section-title mb-4">
                                    <h3 className="title">{dict.ngsd.remote.title}</h3>
                                    <p className="text">{dict.ngsd.remote.content}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="section-title mb-4">
                                    <h3 className="title">{dict.ngsd.dynamic.title}</h3>
                                    <p className="text">{dict.ngsd.dynamic.content}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="section-title mb-4">
                                    <h3 className="title">{dict.ngsd.global.title}</h3>
                                    <p className="text">{dict.ngsd.global.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

