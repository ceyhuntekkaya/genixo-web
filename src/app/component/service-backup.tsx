'use client';
import {Dictionary} from "@/i18n/types";
import Link from "next/link";
import {Locale} from "@/i18n/config";
import Image from "next/image";

const SER_ICONS = ["/images/ser-icon9.png", "/images/ser-icon10.png", "/images/ser-icon11.png", "/images/ser-icon12.png"];

interface PageProps {
    locale: Locale;
    dict: Dictionary;
}
export default function ServiceSectionBackup({ dict, locale }: PageProps) {
    const services = Array.isArray(dict.services)
        ? dict.services
            .filter((s) => s.active !== false)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .slice(0, 4)
        : [];

    return (
        <>
            <div className="section genixo-service-section-03"
                 style={{backgroundImage: `url(/images/bg/service-bg3.jpg)`}}>
                <div className="container">
                    <div className="service-wrap-03">
                        <div className="row">
                            {services.map((service, index) => (
                                <div key={service.slug} className="col-xl-3 col-md-6">
                                    <div className="service-item-03">
                                        <div className="service-img">
                                            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                                <Image src={SER_ICONS[index] || SER_ICONS[0]} alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h3 className="title"><Link href={`/${locale}/solutions/${service.slug}`}>{service.name}</Link></h3>
                                            <p>{service.summary}</p>
                                            <div className="read-more">
                                                <Link href={`/${locale}/solutions/${service.slug}`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}