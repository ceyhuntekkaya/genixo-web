'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";
import LanguageSwitcher from "@/app/component/language-switcher";

interface BootstrapWindow extends Window {
    bootstrap?: {
        Offcanvas: new (element: HTMLElement) => {
            show: () => void;
            hide: () => void;
        };
    };
}

interface MenuSectionProps {
    locale: Locale;
    dict: Dictionary; // Çeviri objesi
}

export default function MenuSection({ locale, dict }: MenuSectionProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleMenuToggle = async () => {
        const offcanvasElement = document.getElementById('offcanvasExample');
        if (!offcanvasElement) return;

        // Bootstrap'in yüklenip yüklenmediğini kontrol et
        if (typeof window !== 'undefined') {
            const win = window as BootstrapWindow;
            let Bootstrap = win.bootstrap;
            
            // Eğer Bootstrap henüz yüklenmemişse, yüklemeyi dene
            if (!Bootstrap) {
                try {
                    // @ts-expect-error - Bootstrap type definitions yok
                    const bootstrapModule = await import('bootstrap');
                    Bootstrap = bootstrapModule.default || bootstrapModule;
                    win.bootstrap = Bootstrap;
                } catch (error) {
                    console.error('Bootstrap yüklenirken hata:', error);
                }
            }
            
            if (Bootstrap && Bootstrap.Offcanvas) {
                // Bootstrap yüklü, API kullan
                const offcanvas = new Bootstrap.Offcanvas(offcanvasElement);
                offcanvas.show();
            } else {
                // Bootstrap henüz yüklenmemiş, manuel olarak aç
                offcanvasElement.classList.add('show');
                offcanvasElement.setAttribute('aria-hidden', 'false');
                offcanvasElement.setAttribute('aria-modal', 'true');
                offcanvasElement.setAttribute('role', 'dialog');
                document.body.classList.add('modal-open');
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = '0px';
                
                // Backdrop ekle (Bootstrap'in standart davranışı)
                const backdrop = document.createElement('div');
                backdrop.className = 'offcanvas-backdrop fade show';
                backdrop.setAttribute('data-bs-dismiss', 'offcanvas');
                backdrop.onclick = () => {
                    offcanvasElement.classList.remove('show');
                    offcanvasElement.setAttribute('aria-hidden', 'true');
                    offcanvasElement.removeAttribute('aria-modal');
                    document.body.classList.remove('modal-open');
                    document.body.style.overflow = '';
                    document.body.style.paddingRight = '';
                    backdrop.classList.remove('show');
                    setTimeout(() => backdrop.remove(), 150);
                };
                document.body.appendChild(backdrop);
            }
        }
    };

    useEffect(() => {
        // Bootstrap yüklendiğinde kontrol et
        const checkBootstrap = () => {
            if (typeof window !== 'undefined') {
                const win = window as BootstrapWindow;
                if (win.bootstrap) {
                    // Bootstrap yüklendi
                }
            }
        };

        // Sayfa yüklendiğinde kontrol et
        if (typeof window !== 'undefined') {
            checkBootstrap();
            // Bootstrap script yüklendiğinde de kontrol et
            window.addEventListener('load', checkBootstrap);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('load', checkBootstrap);
            }
        };
    }, []);

    return (
        <>
            <div className="header-menu d-none d-lg-block">
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
                                {dict.products.ILC?.active !== false && (
                                    <li><Link href={`/${locale}/products/ilc`}>{dict.menu.ILC}</Link></li>
                                )}
                                {dict.products.StudyScoreAI?.active !== false && (
                                    <li><Link href={`/${locale}/products/study-score-ai`}>{dict.menu.StudyScoreAI}</Link></li>
                                )}
                                {dict.products.Egitimiste?.active !== false && (
                                    <li><Link href={`/${locale}/products/egitimiste`}>{dict.menu.Egitimiste}</Link></li>
                                )}
                                {dict.products.GenixoWorkAI?.active !== false && (
                                    <li><Link href={`/${locale}/products/genixo-work-ai`}>{dict.menu.GenixoWorkAI}</Link></li>
                                )}
                                {dict.products.GenixoAssistant?.active !== false && (
                                    <li><Link href={`/${locale}/products/genixo-assistant`}>{dict.menu.GenixoAssistant}</Link></li>
                                )}
                                {dict.products.TOMEREYadis?.active !== false && (
                                    <li><Link href={`/${locale}/products/tomer-e-yadis`}>{dict.menu.TOMEREYadis}</Link></li>
                                )}
                                {dict.products.RetiredTravelApp?.active !== false && (
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
            </div>

            <div className="header-meta">
                <LanguageSwitcher currentLocale={locale} />
                <div className="header-toggle d-lg-none">
                    <button 
                        ref={buttonRef}
                        onClick={handleMenuToggle}
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasExample"
                        type="button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </>
    );
}