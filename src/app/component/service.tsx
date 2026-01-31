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
            <div className="section genixo-service-section-03"
                 style={{backgroundImage: `url(/images/bg/service-bg3.jpg)`}}>
                <div className="container">
                    <div className="service-wrap-03">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="service-item-03">
                                    
                                    <div className="service-content">
                                        <h3 className="title"><Link href={`/${locale}/solutions/web`}>{dict.services.WebApplication.name}</Link></h3>
                                        <p>{dict.services.WebApplication.summary}</p>
                                        <div className="read-more">
                                            <Link href={`/${locale}/solutions/web`}><i className="fas fa-plus"></i> {dict.general.ReadMore}</Link>
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