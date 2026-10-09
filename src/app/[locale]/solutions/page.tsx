import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import type {Dictionary} from "@/i18n/types";
import {buildMetadata} from "@/utils/seo";
import PageHero from "@/app/component/page-hero";
import JsonLd from "@/app/component/json-ld";
import {SITE_URL, shortDefinitionFor} from "@/content/entity";
import {collectionPage} from "@/utils/schema";

import Link from "next/link";
import Image from "next/image";

type ServiceItem = Dictionary['services'][number];

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const copy = dict.seo?.pages?.solutions;
    return buildMetadata({
        locale,
        path: "/solutions",
        title: copy?.title || dict.menu.Solutions,
        description: copy?.description || shortDefinitionFor(locale),
    });
}

export default async function SolutionsPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const services = Array.isArray(dict.services)
        ? (dict.services as ServiceItem[]).filter((service) => service.active !== false)
        : [];
    const copy = dict.seo?.pages?.solutions;

    return (
        <>
            <JsonLd
                data={collectionPage({
                    url: `${SITE_URL}/${locale}/solutions`,
                    name: copy?.title || dict.menu.Solutions,
                    description: copy?.description || shortDefinitionFor(locale),
                    locale,
                    items: services.map((service) => ({
                        name: service.name,
                        url: `${SITE_URL}/${locale}/solutions/${service.slug}`,
                    })),
                })}
            />
            <PageHero
                title={dict.menu.Solutions}
                subtitle={dict.about.slogan}
                description={dict.seo?.pages?.solutions?.description}
                backgroundImage={dict.solutionsHero?.backgroundImage}
            />

            {/* Solutions Cards Section */}
            <div className="section genixo-choose-us-section section-padding"
                 style={{backgroundImage: 'url(/images/bg/choose-us-bg.jpg)'}}>
                <div className="container">
                    <div className="choose-us-wrap">
                        <div className="choose-us-content-wrap">
                            <div className="row">
                                {Array.isArray(dict.services) && (dict.services as ServiceItem[])
                                    .filter((s) => s.active !== false)
                                    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                                    .map((solution) => (
                                        <div key={solution.slug} className="col-lg-4 col-md-6">
                                            <div className="choose-us-item">
                                                <div className="choose-us-img">
                                                    <Link href={`/${locale}/solutions/${solution.slug}`}>
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
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

