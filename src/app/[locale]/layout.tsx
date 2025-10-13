import FooterSection from "@/app/component/footer";
import logo from "@/app/assets/logo.png";
import ctaIcon from "@/app/assets/images/cta-icon2.png";
import Image from "next/image";
import Link from "next/link";
import MenuSection from "@/app/component/menu";
import { Locale } from "@/i18n/config";
import { getDictionary } from '@/i18n/getDictionary';

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;  // ← Promise oldu
}) {
    const { locale } = await params;  // ← await eklendi
    const dict = await getDictionary(locale);

    return (
        <>
        <div className="main-wrapper">
            <div id="header" className="section header-section">
                <div className="container">
                    <div className="header-wrap">
                        <div className="header-logo">
                            <Link href={`/${locale}`}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="w-35 h-auto mt-4"
                                />
                            </Link>
                        </div>
                        <MenuSection locale={locale} dict={dict} />
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" id="offcanvasExample">
                <div className="offcanvas-header">
                    <div className="offcanvas-logo">
                        <Link href={`/${locale}`}>
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="close-btn"
                        data-bs-dismiss="offcanvas"
                    >
                        <i className="flaticon-close"></i>
                    </button>
                </div>

                <div className="offcanvas-body">
                    <div className="offcanvas-menu">
                        <ul className="main-menu">
                            <li className="active-menu">
                                <Link href={`/${locale}`}>Home</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/about`}>About Us</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/service`}>Services</Link>
                                <ul className="sub-menu">
                                    <li><Link href={`/${locale}/service/web`}>Web Application</Link></li>
                                    <li><Link href={`/${locale}/service/arch`}>Solution Architecture</Link></li>
                                    <li><Link href={`/${locale}/service/custom`}>Custom Software</Link></li>
                                    <li><Link href={`/${locale}/service/dev`}>DevOps Services</Link></li>
                                    <li><Link href={`/${locale}/service/cloud`}>Cloud Development</Link></li>
                                    <li><Link href={`/${locale}/service/mebile`}>Mobile Development</Link></li>
                                    <li><Link href={`/${locale}/service/support`}>Support Services</Link></li>
                                    <li><Link href={`/${locale}/service/data`}>Data Science</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={`/${locale}/contact`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {children}

            <div className="section techwix-cta-section-02">
                <div className="container">
                    <div className="cta-wrap" style={{ backgroundImage: "url(/assets/images/bg/cta-bg.jpg)" }}>
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-8">
                                <div className="cta-content">
                                    <div className="cta-icon">
                                        <Image src={ctaIcon} alt="" />
                                    </div>
                                    <p>We are Delivering the best customer Experience</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="cta-btn">
                                    <a className="btn btn-white" href="#">
                                        +44 920 090 505
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection locale={locale} dict={dict} />

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </div>
        </>
    );
}