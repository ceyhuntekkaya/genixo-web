'use client';
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/app/assets/Genixo_Logo_White.png";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";
import {companyInfo} from "@/utils/company";
import {entity, jobTitleFor, shortDefinitionFor, telHref} from "@/content/entity";
import {track} from "@/lib/track";

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
                                <p style={{ color: "#ddd", marginTop: 16 }}>{shortDefinitionFor(locale)}</p>
                                <p style={{ color: "#fff", marginTop: 8 }}>{entity.legalName}</p>
                                <p style={{ color: "#ddd" }}>{entity.founder.name} · {jobTitleFor(locale)}</p>
                                <div className="footer-social">
                                    <ul className="social">
                                        {entity.sameAs.map((href) => (
                                            <li key={href}>
                                                <a href={href} target="_blank" rel="noopener noreferrer">
                                                    <i className={href.includes("instagram") ? "fab fa-instagram" : "fab fa-linkedin-in"}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <ul className="link" style={{ marginTop: 16 }}>
                                    <li><Link href={`/${locale}/blog`}>{dict.menu.Blog}</Link></li>
                                    <li><Link href={`/${locale}/about`}>{dict.menu.AboutUs}</Link></li>
                                    <li><Link href={`/${locale}/contact`}>{dict.menu.ContactUs}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">{footer?.partnerships}</h4>
                                <div className="widget-link">
                                    <ul className="link" style={{ listStyle: 'none', padding: 0 }}>
                                        <li style={{ marginBottom: '20px' }}>
                                            <a href="https://www.cyberpark.com.tr/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 56,
                                                    height: 56,
                                                    backgroundColor: '#fff',
                                                    borderRadius: 8,
                                                    padding: 8,
                                                    marginRight: 15,
                                                    flexShrink: 0,
                                                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
                                                }}>
                                                    <Image 
                                                        src="/images/logos/cyberpark-logo.png" 
                                                        alt="Bilkent Cyberpark Logo"
                                                        width={40}
                                                        height={40}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </span>
                                                <div>
                                                    <strong style={{ display: 'block', color: '#fff' }}>{footer?.cyberpark?.title}</strong>
                                                    <small style={{ color: '#aaa' }}>{footer?.cyberpark?.description}</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '20px' }}>
                                            <a href="https://www.tbd.org.tr/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 56,
                                                    height: 56,
                                                    backgroundColor: '#fff',
                                                    borderRadius: 8,
                                                    padding: 8,
                                                    marginRight: 15,
                                                    flexShrink: 0,
                                                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
                                                }}>
                                                    <Image 
                                                        src="/images/logos/tbd-logo.png" 
                                                        alt="TBD Logo"
                                                        width={40}
                                                        height={40}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </span>
                                                <div>
                                                    <strong style={{ display: 'block', color: '#fff' }}>{footer?.tbd?.title}</strong>
                                                    <small style={{ color: '#aaa' }}>{footer?.tbd?.description}</small>
                                                </div>
                                            </a>
                                        </li>
                                        <li style={{ marginBottom: '20px' }}>
                                            <a href="https://www.alte.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 56,
                                                    height: 56,
                                                    backgroundColor: '#fff',
                                                    borderRadius: 8,
                                                    padding: 8,
                                                    marginRight: 15,
                                                    flexShrink: 0,
                                                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
                                                }}>
                                                    <Image 
                                                        src="/images/logos/alte-logo.png" 
                                                        alt="ALTE Logo"
                                                        width={40}
                                                        height={40}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </span>
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
                                                <span><a href={telHref()} onClick={() => track("phone_click")}>{companyInfo.phone}</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="far fa-envelope-open"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href={`mailto:${companyInfo.email}`} onClick={() => track("email_click")}>{companyInfo.email}</a></span>
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
                                    <p>© {new Date().getFullYear()} {entity.legalName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}