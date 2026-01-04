'use client';
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/app/assets/Genixo_Logo_White.png";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";

interface FooterSectionProps {
    locale: Locale;
    dict: Dictionary;
}

export default function FooterSection({ locale }: FooterSectionProps) {
    return (
        <div className="section footer-section footer-section-03"
             style={{
                 backgroundImage: "url(/assets/images/bg/footer-bg.jpg)"
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
                                <p>Accelerate innovation with world-class tech teams. We will match you to an entire remote team of incredible freelance talent.</p>
                                <div className="footer-social">
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">Useful Links</h4>
                                <div className="widget-link">
                                    <ul className="link">
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Payment Gateway</a></li>
                                        <li><a href="#">Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">Our Services</h4>
                                <div className="widget-link">
                                    <ul className="link">
                                        <li><Link href={`/${locale}/solutions/web`}>Web Application</Link></li>
                                        <li><Link href={`/${locale}/solutions/arch`}>Solution Architecture</Link></li>
                                        <li><Link href={`/${locale}/solutions/custom`}>Custom Software Development</Link></li>
                                        <li><Link href={`/${locale}/solutions/dev`}>DevOps Services</Link></li>
                                        <li><Link href={`/${locale}/solutions/cloud`}>Cloud Development</Link></li>
                                        <li><Link href={`/${locale}/solutions/mobile`}>Mobile Development</Link></li>
                                        <li><Link href={`/${locale}/solutions/support`}>Support Services</Link></li>
                                        <li><Link href={`/${locale}/solutions/data`}>Data Science</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">Contact Information</h4>
                                <div className="widget-info">
                                    <ul>
                                        <li>
                                            <div className="info-icon">
                                                <i className="flaticon-phone-call"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href="#">+91 458 654 528</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="far fa-envelope-open"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href="#">hello@genixo.ai</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="flaticon-pin"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Bilkent Cyberpark</span>
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
                                    <p>© Copyrights 2022 techwix All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}