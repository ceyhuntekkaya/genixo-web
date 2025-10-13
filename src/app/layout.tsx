import type {Metadata} from 'next'
import './globals.css'

import './assets/css/plugins/bootstrap.min.css'
import './assets/css/plugins/all.min.css'
import './assets/css/plugins/magnific-popup.css'
import FooterSection from "@/app/component/footer";
import logo from "@/app/assets/logo.png";

import ctaIcon from "@/app/assets/images/cta-icon2.png";
import Image from "next/image";

import lang from '@/translations/tr/common.json';
import Link from "next/link";


export const metadata: Metadata = {
    title: lang.welcome.title,
    description: 'Accelerate innovation with world-className tech teams',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {


    return (

        <html lang="en">
        <body>
        <div className="main-wrapper">

            <div id="header" className="section header-section">

                <div className="container">

                    <div className="header-wrap">

                        <div className="header-logo">
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="w-35 h-auto mt-4"
                                />
                            </Link>


                        </div>

                        <div className="header-menu d-none d-lg-block">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <Link href="/">{lang.menu.Home}</Link>
                                </li>
                                <li>
                                    <Link href="/about">{lang.menu.AboutUs}</Link>
                                </li>
                                <li>
                                    <Link href="/service">{lang.menu.Services}</Link>
                                    <ul className="sub-menu">
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
                                </li>
                                <li>
                                    <Link href="/contact">{lang.menu.ContactUs}</Link></li>
                            </ul>
                        </div>

                        <div className="header-meta">
                            <div className="header-toggle d-lg-none">
                                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" id="offcanvasExample">
                <div className="offcanvas-header">
                    <div className="offcanvas-logo">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i
                        className="flaticon-close"></i></button>
                </div>

                <div className="offcanvas-body">
                    <div className="offcanvas-menu">
                        <ul className="main-menu">
                            <li className="active-menu">
                                <Link href="/">{lang.menu.Home}</Link>
                            </li>
                            <li>
                                <Link href="/about">{lang.menu.AboutUs}</Link>
                            </li>
                            <li><Link href="/service">{lang.menu.Services}</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/service/web">{lang.menu.WebApplication}</Link></li>
                                    <li><Link href="/service/arch">{lang.menu.SolutionArchitecture}</Link></li>
                                    <li><Link href="/service/custom">{lang.menu.CustomSoftwareDevelopment}</Link></li>
                                    <li><Link href="/service/dev">{lang.menu.DevOpsServices}</Link></li>
                                    <li><Link href="/service/cloud">{lang.menu.CloudDevelopment}</Link></li>
                                    <li><Link href="/service/mebile">{lang.menu.MobileDevelopment}</Link></li>
                                    <li><Link href="/service/support">{lang.menu.SupportServices}</Link></li>
                                    <li><Link href="/service/data">{lang.menu.DataScience}</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact">{lang.menu.ContactUs}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {children}


            <div className="section techwix-cta-section-02">
                <div className="container">
                    <div className="cta-wrap" style={{backgroundImage: "url(/assets/images/bg/cta-bg.jpg);"}}>
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-8">
                                <div className="cta-content">
                                    <div className="cta-icon">

                                        <Image src={ctaIcon} alt=""/>
                                    </div>
                                    <p>We’re Delivering the best customer Experience</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="cta-btn">
                                    <a className="btn btn-white" href="#">+44 920 090 505</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection/>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>
        </div>
        </body>
        </html>

    )
}