'use client';
import {Dictionary} from "@/i18n/types";
import Link from "next/link";
import {Locale} from "@/i18n/config";
import Image from "next/image";

interface PageProps {
    locale: Locale;
    dict: Dictionary;
}
export default function ServiceSection({ dict, locale }: PageProps) {
    return (
        <>
            <div className="section techwix-service-section-03"
                 style={{backgroundImage: `url(/images/bg/service-bg3.jpg)`}}>
                <div className="container">
                    <div className="service-wrap-03">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/ser-icon9.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/solutions/web`}>{dict.services.WebApplication.name}</Link></h3>
                                        <p>{dict.services.WebApplication.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/solutions/web`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/ser-icon10.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/solutions/custom`}>{dict.services.CustomSoftwareDevelopment.name}</Link></h3>
                                        <p>{dict.services.CustomSoftwareDevelopment.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/solutions/custom`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/ser-icon11.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/solutions/data`}>{dict.services.DataScience.name}</Link></h3>
                                        <p>{dict.services.DataScience.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/solutions/data`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="service-item-03">
                                    <div className="service-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/ser-icon12.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/solutions/mobile`}>{dict.services.MobileDevelopment.name}</Link></h3>
                                        <p>{dict.services.MobileDevelopment.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/solutions/mobile`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
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