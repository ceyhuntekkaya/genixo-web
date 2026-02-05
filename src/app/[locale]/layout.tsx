import FooterSection from "@/app/component/footer";
import logo from "@/app/assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import MenuSection from "@/app/component/menu";
import MenuList from "@/app/component/menu-list";
import BootstrapScript from "@/app/component/bootstrap-script";
import CTASection from "@/app/component/cta-section";
import { Locale, locales } from "@/i18n/config";
import { getDictionary } from '@/i18n/getDictionary';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const typedLocale = locale as Locale;
    const dict = await getDictionary(typedLocale);

    return (
        <>
        <BootstrapScript />
        <div className="main-wrapper">
            <div id="header" className="section header-section">
                <div className="container">
                    <div className="header-wrap">
                        <div className="header-logo">
                            <Link href={`/${typedLocale}`}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="w-35 h-auto mt-4"
                                />
                            </Link>
                        </div>
                        <MenuSection locale={typedLocale} dict={dict} />
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" id="offcanvasExample">
                <div className="offcanvas-header">
                    <div className="offcanvas-logo">
                        <Link href={`/${typedLocale}`}>
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
                        <MenuList locale={typedLocale} dict={dict} />
                    </div>
                </div>
            </div>

            {children}

            <CTASection dict={dict} />

            <FooterSection locale={typedLocale} dict={dict} />

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </div>
        </>
    );
}