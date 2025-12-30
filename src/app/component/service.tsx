'use client';
import {Dictionary} from "@/i18n/types";
import Link from "next/link";
import {Locale} from "@/i18n/config";

interface PageProps {
    locale: Locale;
    dict: Dictionary;
}
export default function ServiceSection({ dict, locale }: PageProps) {
    return (
        <>
            <div className="section techwix-service-section-03"
                 style={{backgroundImage: `url(/assets/images/bg/service-bg3.jpg)`}}>
                <div className="container">
                    <div className="service-wrap-03">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <img src="/assets/images/ser-icon9.png" alt=""  />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/service/web`}>{dict.services.WebApplication.name}</Link></h3>
                                        <p>{dict.services.WebApplication.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/service/web`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <img src="/assets/images/ser-icon10.png" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/service/custom`}>{dict.services.CustomSoftwareDevelopment.name}</Link></h3>
                                        <p>{dict.services.CustomSoftwareDevelopment.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/service/custom`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <img src="/assets/images/ser-icon11.png" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/service/data`}>{dict.services.DataScience.name}</Link></h3>
                                        <p>{dict.services.DataScience.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/service/data`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <img src="/assets/images/ser-icon12.png" alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/service/mobile`}>{dict.services.MobileDevelopment.name}</Link></h3>
                                        <p>{dict.services.MobileDevelopment.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/service/mobile`}><i className="fas fa-plus"></i> R{dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}