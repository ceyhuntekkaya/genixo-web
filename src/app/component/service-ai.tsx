'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function ServiceAISection({ dict, locale }: PageProps) {
    const ngsd = dict.ngsd;
    
    // NGSD özelliklerini array olarak al (sadece 3 özellik: remote, dynamic, global)
    const ngsdFeatures = [
        { ...ngsd.remote, icon: '/images/ser-icon13.png' },
        { ...ngsd.dynamic, icon: '/images/ser-icon14.png' },
        { ...ngsd.global, icon: '/images/ser-icon15.png' },
    ];

    return (
        <div className="section techwix-service-section-05">
            <div className="container">
                <div className="service-wrap section-padding-02">
                    <div className="section-title text-center">
                        <h3 className="sub-title">{ngsd.title}</h3>
                        <h2 className="title">{ngsd.subtitle}</h2>
                        <p className="text mt-3" style={{ maxWidth: '800px', margin: '20px auto 0' }}>
                            {ngsd.whatIs.content}
                        </p>
                    </div>
                    <div className="service-content-wrap">
                        <div className="row">
                            {ngsdFeatures.map((feature, index) => (
                                <div key={index} className="col-xl-4 col-sm-6">
                                    <div className="service-item-04">
                                        <div className="service-img">
                                            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                                <Image src={feature.icon} alt={feature.title} fill style={{ objectFit: 'contain' }} unoptimized />
                                            </div>
                                        </div>
                                        <div className="service-content">
                                            <h3 className="title">
                                                <Link href={`/${locale}/ngsd`}>{feature.title}</Link>
                                            </h3>
                                            <p>{feature.content.substring(0, 120)}...</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}