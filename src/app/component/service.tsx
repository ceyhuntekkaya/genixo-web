'use client';
import {Dictionary} from "@/i18n/types";
import Link from "next/link";
import {Locale} from "@/i18n/config";

interface PageProps {
    locale: Locale;
    dict: Dictionary;
}
export default function ServiceSection({ dict, locale }: PageProps) {
    const featuredServices = Array.isArray(dict.services)
        ? dict.services
            .filter((s) => s.showOnHomepage === true && s.active !== false)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .slice(0, 1)
        : [];
    const first = featuredServices[0];

    return (
        <>
            <div className="section genixo-service-section-03"
                 style={{backgroundImage: `url(/images/bg/service-bg3.jpg)`}}>
                <div className="container">
                    <div className="service-wrap-03">
                        <div className="row">
                            {first && (
                                <div className="col-xl-12 col-md-6">
                                    <div className="service-item-03">
                                        <div className="service-content">
                                            <h3 className="title"><Link href={`/${locale}/solutions/${first.slug}`}>{first.name}</Link></h3>
                                            <p>{first.summary}</p>
                                            <div className="read-more">
                                                <Link href={`/${locale}/solutions/${first.slug}`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}