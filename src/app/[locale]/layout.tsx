import FooterSection from "@/app/component/footer";
import logo from "@/app/assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import MenuSection from "@/app/component/menu";
import MenuList from "@/app/component/menu-list";
import BootstrapScript from "@/app/component/bootstrap-script";
import { Locale } from "@/i18n/config";
import { getDictionary } from '@/i18n/getDictionary';
import {companyInfo} from "@/utils/company";

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
        <BootstrapScript />
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
                            <Image 
                                src={logo} 
                                alt="Logo" 
                                width={130}
                                height={50}
                                style={{ width: '130px', height: 'auto' }}
                                priority={false}
                            />
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
                        <MenuList locale={locale} dict={dict} />
                    </div>
                </div>
            </div>

            {children}

            <div className="section genixo-cta-section-02">
                <div className="container">
                    <div className="cta-wrap" style={{ backgroundImage: "url(/images/bg/cta-bg.jpg)" }}>
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-8">
                                <div className="cta-content">
                                    <div className="cta-icon">
                                        <Image src="/images/cta-icon2.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                    </div>
                                    <p>{dict.general.ctaMessage}</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="cta-btn">
                                    <a className="btn btn-white" href="#">
                                        {companyInfo.phone}
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