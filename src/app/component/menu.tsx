'use client';

import Link from "next/link";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";
import LanguageSwitcher from "@/app/component/language-switcher";

interface MenuSectionProps {
    locale: Locale;
    dict: Dictionary; // Çeviri objesi
}

export default function MenuSection({ locale, dict }: MenuSectionProps) {

    return (
        <>
            <div className="header-menu d-none d-lg-block">
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

            <div className="header-meta">
                <LanguageSwitcher currentLocale={locale} />
                <div className="header-toggle d-lg-none">
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </>
    );
}