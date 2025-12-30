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
                    <li className="active-menu">
                        <Link href={`/${locale}`}>{dict.menu.Home}</Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/about`}>{dict.menu.AboutUs}</Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/service`}>{dict.menu.Services}</Link>
                        <ul className="sub-menu">
                            <li><Link href={`/${locale}/service/web`}>{dict.menu.WebApplication}</Link></li>
                            <li><Link href={`/${locale}/service/arch`}>{dict.menu.SolutionArchitecture}</Link></li>
                            <li><Link href={`/${locale}/service/custom`}>{dict.menu.CustomSoftwareDevelopment}</Link></li>
                            <li><Link href={`/${locale}/service/dev`}>{dict.menu.DevOpsServices}</Link></li>
                            <li><Link href={`/${locale}/service/cloud`}>{dict.menu.CloudDevelopment}</Link></li>
                            <li><Link href={`/${locale}/service/mobile`}>{dict.menu.MobileDevelopment}</Link></li>
                            <li><Link href={`/${locale}/service/support`}>{dict.menu.SupportServices}</Link></li>
                            <li><Link href={`/${locale}/service/data`}>{dict.menu.DataScience}</Link></li>
                        </ul>
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