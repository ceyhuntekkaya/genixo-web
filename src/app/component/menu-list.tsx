import Link from "next/link";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";

interface MenuListProps {
    locale: Locale;
    dict: Dictionary;
}

export default function MenuList({ locale, dict }: MenuListProps) {
    return (
        <ul className="main-menu">
            {(!dict.menu.active || dict.menu.active.Solutions !== false) && (
                <li>
                    <Link href={`/${locale}/solutions`}>{dict.menu.Solutions}</Link>
                    <ul className="sub-menu">
                        {Array.isArray(dict.services) && dict.services
                            .filter((s) => s.active !== false)
                            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                            .map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/${locale}/solutions/${service.slug}`}>{service.name}</Link>
                                </li>
                            ))}
                    </ul>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.Products !== false) && (
                <li>
                    <Link href={`/${locale}/products`}>{dict.menu.Products}</Link>
                    <ul className="sub-menu">
                        {dict.products?.ILC?.active !== false && (
                            <li><Link href={`/${locale}/products/ilc`}>{dict.menu.ILC}</Link></li>
                        )}
                        {dict.products?.StudyScoreAI?.active !== false && (
                            <li><Link href={`/${locale}/products/study-score-ai`}>{dict.menu.StudyScoreAI}</Link></li>
                        )}
                        {dict.products?.Egitimiste?.active !== false && (
                            <li><Link href={`/${locale}/products/egitimiste`}>{dict.menu.Egitimiste}</Link></li>
                        )}
                        {dict.products?.GenixoWorkAI?.active !== false && (
                            <li><Link href={`/${locale}/products/genixo-work-ai`}>{dict.menu.GenixoWorkAI}</Link></li>
                        )}
                        {dict.products?.GenixoAssistant?.active !== false && (
                            <li><Link href={`/${locale}/products/genixo-assistant`}>{dict.menu.GenixoAssistant}</Link></li>
                        )}
                        {dict.products?.TOMEREYadis?.active !== false && (
                            <li><Link href={`/${locale}/products/tomer-e-yadis`}>{dict.menu.TOMEREYadis}</Link></li>
                        )}
                        {dict.products?.RetiredTravelApp?.active !== false && (
                            <li><Link href={`/${locale}/products/retired-travel-app`}>{dict.menu.RetiredTravelApp}</Link></li>
                        )}
                    </ul>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.SuccessStories !== false) && (
                <li>
                    <Link href={`/${locale}/case-study`}>{dict.menu.SuccessStories}</Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.GovernmentSupport !== false) && (
                <li>
                    <Link href={`/${locale}/government-support`}>{dict.menu.GovernmentSupport}</Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.NGSD !== false) && (
                <li>
                    <Link href={`/${locale}/ngsd`}>{dict.menu.NGSD}</Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.AboutUs !== false) && (
                <li>
                    <Link href={`/${locale}/about`}>{dict.menu.AboutUs}</Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.Blog !== false) && (
                <li>
                    <Link href={`/${locale}/blog`}>{dict.menu.Blog}</Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.ContactUs !== false) && (
                <li>
                    <Link href={`/${locale}/contact`}>{dict.menu.ContactUs}</Link>
                </li>
            )}
        </ul>
    );
}

