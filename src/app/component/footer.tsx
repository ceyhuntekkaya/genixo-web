'use client';
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/app/assets/Genixo_Logo_White.png";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";
import {companyInfo} from "@/utils/company";

interface FooterSectionProps {
    locale: Locale;
    dict: Dictionary;
}

export default function FooterSection({ locale, dict }: FooterSectionProps) {
    if (!dict.footer) {
        return null;
    }

    const footer = dict.footer;
    return (
        <div className="section footer-section footer-section-03"
             style={{
                 backgroundImage: "url(/images/bg/footer-bg.jpg)"
             }}>
            <div className="container">
                <div className="footer-widget-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget-about">
                                <Link className="footer-logo" href={`/${locale}`}>
                                    <Image
                                        src={footerLogo}
                                        alt="Logo"
                                        className="w-35 h-auto mt-4"
                                    />
                                </Link>
                              
                                <div className="footer-social">
                                    <ul className="social">
                                        <li><a href="https://www.linkedin.com/company/genixoglobal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://www.instagram.com/genixo.global/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">{footer?.partnerships}</h4>
                                <div className="widget-link">
                                    <ul className="link" style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '20px' }}>
                                            <a href="https://www.cyberpark.com.tr/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                                                <Image 
                                                    src="/images/logos/cyberpark-logo.png" 
                                                    alt="Bilkent Cyberpark Logo"
                                                    width={50}
                                                    height={50}
                                                    style={{ objectFit: 'contain', marginRight: '15px', filter: 'brightness(0) invert(1)' }}
                                                />
                                                <div>
                                                    <strong style={{ display: 'block', color: '#fff' }}>{footer?.cyberpark?.title}</strong>
                                                    <small style={{ color: '#aaa' }}>{footer?.cyberpark?.description}</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '20px' }}>
                                            <a href="https://www.tbd.org.tr/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                                                <Image 
                                                    src="/images/logos/tbd-logo.png" 
                                                    alt="TBD Logo"
                                                    width={50}
                                                    height={50}
                                                    style={{ objectFit: 'contain', marginRight: '15px', filter: 'brightness(0) invert(1)' }}
                                                />
                                                <div>
                                                    <strong style={{ display: 'block', color: '#fff' }}>{footer?.tbd?.title}</strong>
                                                    <small style={{ color: '#aaa' }}>{footer?.tbd?.description}</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '20px' }}>
                                            <a href="https://www.alte.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                                                <Image 
                                                    src="/images/logos/alte-logo.png" 
                                                    alt="ALTE Logo"
                                                    width={50}
                                                    height={50}
                                                    style={{ objectFit: 'contain', marginRight: '15px', filter: 'brightness(0) invert(1)' }}
                                                />
                                                <div>
                                                    <strong style={{ display: 'block', color: '#fff' }}>{footer?.alte?.title}</strong>
                                                    <small style={{ color: '#aaa' }}>{footer?.alte?.description}</small>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            {/* Empty column for spacing */}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">{footer.contactInfo}</h4>
                                <div className="widget-info">
                                    <ul>
                                        <li>
                                            <div className="info-icon">
                                                <i className="flaticon-phone-call"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href={`#`}>{companyInfo.phone}</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="far fa-envelope-open"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="flaticon-pin"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>{companyInfo.address}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright-area">
                <div className="container">
                    <div className="footer-copyright-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="copyright-text text-center">
                                    <p>{footer.copyright}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}