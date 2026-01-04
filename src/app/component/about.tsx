'use client';


import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";
import Image from "next/image";
import {companyInfo} from "@/utils/company";

interface PageProps {
    locale: Locale;
    dict: Dictionary;
}

export default function AboutSection({ dict, locale }: PageProps) {
    return (
        <>

            <div className="section genixo-about-section-04 section-padding">
                <div className="shape-1"></div>
                <div className="container">
                    <div className="about-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-content-wrap">
                                    <div className="section-title">
                                        <h3 className="sub-title">{dict.about.WhoWeAre}</h3>
                                        <h2 className="title">{dict.about.slogan}</h2>
                                    </div>
                                    <p className="text">{dict.about.short}</p>
                                    <div className="about-author-info-wrap">
                                        <div className="about-author">
                                            {
                                                /*
                                                 <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                                <Image src="/images/sign.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                            </div>
                                                */
                                            }
                                           
                                            <h3 className="name">{dict.about.authorName}</h3>
                                            <span className="designation">{dict.about.authorTitle}</span>
                                        </div>
                                        <div className="about-info">
                                            <p>{dict.about.callToAsk}</p>
                                            <h3 className="number"><a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-img-wrap">
                                    <div className="play-btn-02">
                                        <a className="popup-video"
                                           href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"><i
                                            className="fas fa-play"></i></a>
                                    </div>
                                    <div className="about-img about-img-big">
                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                                            <Image src="/images/about-big2.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="about-img about-img-sm">
                                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '250px' }}>
                                            <Image src="/images/about-sm2.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
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