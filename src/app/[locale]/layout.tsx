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
                            <li>
                                <Link href={`/${locale}/solutions`}>{dict.menu.Solutions}</Link>
                                <ul className="sub-menu">
                                    <li><Link href={`/${locale}/solutions/web`}>{dict.menu.WebApplication}</Link></li>
                                    <li><Link href={`/${locale}/solutions/arch`}>{dict.menu.SolutionArchitecture}</Link></li>
                                    <li><Link href={`/${locale}/solutions/custom`}>{dict.menu.CustomSoftwareDevelopment}</Link></li>
                                    <li><Link href={`/${locale}/solutions/dev`}>{dict.menu.DevOpsServices}</Link></li>
                                    <li><Link href={`/${locale}/solutions/cloud`}>{dict.menu.CloudDevelopment}</Link></li>
                                    <li><Link href={`/${locale}/solutions/mobile`}>{dict.menu.MobileDevelopment}</Link></li>
                                    <li><Link href={`/${locale}/solutions/support`}>{dict.menu.SupportServices}</Link></li>
                                    <li><Link href={`/${locale}/solutions/data`}>{dict.menu.DataScience}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={`/${locale}/products`}>{dict.menu.Products}</Link>
                                <ul className="sub-menu">
                                    <li><Link href={`/${locale}/products/ilc`}>{dict.menu.ILC}</Link></li>
                                    <li><Link href={`/${locale}/products/study-score-ai`}>{dict.menu.StudyScoreAI}</Link></li>
                                    <li><Link href={`/${locale}/products/egitimiste`}>{dict.menu.Egitimiste}</Link></li>
                                    <li><Link href={`/${locale}/products/genixo-work-ai`}>{dict.menu.GenixoWorkAI}</Link></li>
                                    <li><Link href={`/${locale}/products/genixo-assistant`}>{dict.menu.GenixoAssistant}</Link></li>
                                    <li><Link href={`/${locale}/products/tomer-e-yadis`}>{dict.menu.TOMEREYadis}</Link></li>
                                    <li><Link href={`/${locale}/products/retired-travel-app`}>{dict.menu.RetiredTravelApp}</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={`/${locale}/case-study`}>{dict.menu.SuccessStories}</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/government-support`}>{dict.menu.GovernmentSupport}</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/ngsd`}>{dict.menu.NGSD}</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/about`}>{dict.menu.AboutUs}</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/blog`}>{dict.menu.Blog}</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/contact`}>{dict.menu.ContactUs}</Link>
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
                                    <p>{dict.general.ctaMessage}</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="cta-btn">
                                    <a className="btn btn-white" href="#">
                                        +90 532 207 67 30
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