'use client';
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/app/assets/Genixo_Logo_White.png";
import lang from "@/translations/tr/common.json";

export default function FooterSection() {
    return (
            <div className="section footer-section footer-section-03"
                 style={{
                     backgroundImage: "url(/assets/images/bg/footer-bg.jpg);"
                 }}>
                <div className="container">
                    <div className="footer-widget-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget-about">
                                    <Link className="footer-logo" href="/">
                                        <Image
                                            src={footerLogo}
                                            alt="Logo"
                                            className="w-35 h-auto mt-4"
                                        /></Link>
                                    <p>Accelerate innovation with world-className tech teams We’ll match you to an
                                        entire
                                        remote
                                        team of incredible freelance talent.</p>
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
                                            <li><a href="#">Payment Gatway</a></li>
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
                                            <li><Link href="/service/web">{lang.menu.WebApplication}</Link></li>
                                            <li><Link href="/service/arch">{lang.menu.SolutionArchitecture}</Link></li>
                                            <li><Link href="/service/custom">{lang.menu.CustomSoftwareDevelopment}</Link>
                                            </li>
                                            <li><Link href="/service/dev">{lang.menu.DevOpsServices}</Link></li>
                                            <li><Link href="/service/cloud">{lang.menu.CloudDevelopment}</Link></li>
                                            <li><Link href="/service/mebile">{lang.menu.MobileDevelopment}</Link></li>
                                            <li><Link href="/service/support">{lang.menu.SupportServices}</Link></li>
                                            <li><Link href="/service/data">{lang.menu.DataScience}</Link></li>
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
                                        <p>© Copyrights 2022 techwix All rights reserved. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}