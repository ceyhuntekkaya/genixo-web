import PageBanner from "@/app/component/page-banner";
import CounterSection from "@/app/component/counter-section";
import ChooseUsSection from "@/app/component/choose-us-section";
import type { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import { getServiceDescription } from "@/utils/serviceDescription";

type ServiceItem = Dictionary['services'][number];

interface SolutionDetailProps {
    service: ServiceItem;
    dict: Dictionary;
    locale: Locale;
}

async function ServiceDescription({ description }: { description: string }) {
    // Check if description is a file path (starts with @/)
    const htmlContent = description.startsWith('@/')
        ? await getServiceDescription(description)
        : description;

    if (!htmlContent) {
        return null;
    }

    return (
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}

export default async function SolutionDetail({ service, dict, locale }: SolutionDetailProps) {
    const homeLabel = dict.menu.Home;
    const solutionSlug = service.slug;

    return (
        <>
            <PageBanner
                bannerLink="/images/bg/page-banner.jpg"
                title={service.name}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.Solutions, href: `/${locale}/solutions` },
                    { label: service.name, href: `/${locale}/solutions/${solutionSlug}` },
                ]}
            />

            <div className="section genixo-about-section-07 section-padding">
                <div className="shape-1"></div>
                <div className="container">
                    <div className="about-wrap">
                        <div className="row">
                            {(service.description) && (
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <ServiceDescription
                                            description={service.description}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {
                //   <CounterSection locale={locale} />
            }

          

            <ChooseUsSection locale={locale} />
        </>
    );
}
