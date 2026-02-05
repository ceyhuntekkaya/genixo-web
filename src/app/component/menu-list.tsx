'use client';

import Link from "next/link";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";
import { useEffect, useState } from "react";

interface MenuListProps {
    locale: Locale;
    dict: Dictionary;
}

interface BootstrapWindow extends Window {
    bootstrap?: {
        Offcanvas: {
            getInstance: (element: HTMLElement) => {
                hide: () => void;
            } | null;
        };
    };
}

export default function MenuList({ locale, dict }: MenuListProps) {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById('offcanvasExample');
        if (!offcanvasElement) return;

        if (typeof window !== 'undefined') {
            const win = window as BootstrapWindow;
            const Bootstrap = win.bootstrap;

            // Her durumda backdrop'u temizle
            const removeBackdrop = () => {
                const backdrops = document.querySelectorAll('.offcanvas-backdrop');
                backdrops.forEach((backdrop) => {
                    backdrop.classList.remove('show', 'fade');
                    backdrop.remove();
                });
            };

            if (Bootstrap && Bootstrap.Offcanvas) {
                // Bootstrap API kullanarak kapat
                const offcanvasInstance = Bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }
                // Bootstrap ile bile backdrop temizliği yap
                setTimeout(removeBackdrop, 100);
            } else {
                // Manuel olarak kapat
                offcanvasElement.classList.remove('show');
                offcanvasElement.setAttribute('aria-hidden', 'true');
                offcanvasElement.removeAttribute('aria-modal');
                offcanvasElement.removeAttribute('role');
                
                // Backdrop'u hemen kaldır
                removeBackdrop();
            }
            
            // Body stillerini temizle
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    };

    const handleLinkClick = (e?: React.MouseEvent) => {
        // Eğer event varsa ve submenu toggle butonu değilse kapan
        if (e) {
            const target = e.target as HTMLElement;
            if (target.closest('.submenu-toggle')) {
                return; // Toggle butonuna tıklandıysa kapanma
            }
        }
        closeOffcanvas();
        setOpenSubMenu(null);
    };

    const toggleSubMenu = (e: React.MouseEvent, menuName: string) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenSubMenu(openSubMenu === menuName ? null : menuName);
    };

    useEffect(() => {
        // Sayfa değiştiğinde offcanvas'ı kapat
        return () => {
            setOpenSubMenu(null);
        };
    }, []);

    return (
        <ul className="main-menu mobile-menu">
            {(!dict.menu.active || dict.menu.active.Solutions !== false) && (
                <li className={openSubMenu === 'solutions' ? 'active-menu' : ''}>
                    <div className="menu-item-wrapper">
                        <Link 
                            href={`/${locale}/solutions`}
                            onClick={handleLinkClick}
                            className="menu-link"
                        >
                            <span>{dict.menu.Solutions}</span>
                        </Link>
                        <button 
                            className="submenu-toggle"
                            onClick={(e) => toggleSubMenu(e, 'solutions')}
                            aria-label="Toggle submenu"
                            type="button"
                        >
                            <i className={`fas fa-chevron-${openSubMenu === 'solutions' ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                    <ul className={`sub-menu ${openSubMenu === 'solutions' ? 'show' : ''}`}>
                        {Array.isArray(dict.services) && dict.services
                            .filter((s) => s.active !== false)
                            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                            .map((service) => (
                                <li key={service.slug}>
                                    <Link 
                                        href={`/${locale}/solutions/${service.slug}`}
                                        onClick={handleLinkClick}
                                    >
                                        <i className="fas fa-angle-right"></i>
                                        <span>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.Products !== false) && (
                <li className={openSubMenu === 'products' ? 'active-menu' : ''}>
                    <div className="menu-item-wrapper">
                        <Link 
                            href={`/${locale}/products`}
                            onClick={handleLinkClick}
                            className="menu-link"
                        >
                            <span>{dict.menu.Products}</span>
                        </Link>
                        <button 
                            className="submenu-toggle"
                            onClick={(e) => toggleSubMenu(e, 'products')}
                            aria-label="Toggle submenu"
                            type="button"
                        >
                            <i className={`fas fa-chevron-${openSubMenu === 'products' ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                    <ul className={`sub-menu ${openSubMenu === 'products' ? 'show' : ''}`}>
                        {dict.products?.ILC?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/ilc`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.ILC}</span>
                                </Link>
                            </li>
                        )}
                        {dict.products?.StudyScoreAI?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/study-score-ai`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.StudyScoreAI}</span>
                                </Link>
                            </li>
                        )}
                        {dict.products?.Egitimiste?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/egitimiste`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.Egitimiste}</span>
                                </Link>
                            </li>
                        )}
                        {dict.products?.GenixoWorkAI?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/genixo-work-ai`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.GenixoWorkAI}</span>
                                </Link>
                            </li>
                        )}
                        {dict.products?.GenixoAssistant?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/genixo-assistant`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.GenixoAssistant}</span>
                                </Link>
                            </li>
                        )}
                        {dict.products?.TOMEREYadis?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/tomer-e-yadis`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.TOMEREYadis}</span>
                                </Link>
                            </li>
                        )}
                        {dict.products?.RetiredTravelApp?.active !== false && (
                            <li>
                                <Link 
                                    href={`/${locale}/products/retired-travel-app`}
                                    onClick={handleLinkClick}
                                >
                                    <i className="fas fa-angle-right"></i>
                                    <span>{dict.menu.RetiredTravelApp}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.SuccessStories !== false) && (
                <li>
                    <Link 
                        href={`/${locale}/case-study`}
                        onClick={handleLinkClick}
                        className="menu-link"
                    >
                        <span>{dict.menu.SuccessStories}</span>
                    </Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.GovernmentSupport !== false) && (
                <li>
                    <Link 
                        href={`/${locale}/government-support`}
                        onClick={handleLinkClick}
                        className="menu-link"
                    >
                        <span>{dict.menu.GovernmentSupport}</span>
                    </Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.NGSD !== false) && (
                <li>
                    <Link 
                        href={`/${locale}/ngsd`}
                        onClick={handleLinkClick}
                        className="menu-link"
                    >
                        <span>{dict.menu.NGSD}</span>
                    </Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.AboutUs !== false) && (
                <li>
                    <Link 
                        href={`/${locale}/about`}
                        onClick={handleLinkClick}
                        className="menu-link"
                    >
                        <span>{dict.menu.AboutUs}</span>
                    </Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.Blog !== false) && (
                <li>
                    <Link 
                        href={`/${locale}/blog`}
                        onClick={handleLinkClick}
                        className="menu-link"
                    >
                        <span>{dict.menu.Blog}</span>
                    </Link>
                </li>
            )}
            {(!dict.menu.active || dict.menu.active.ContactUs !== false) && (
                <li>
                    <Link 
                        href={`/${locale}/contact`}
                        onClick={handleLinkClick}
                        className="menu-link"
                    >
                        <span>{dict.menu.ContactUs}</span>
                    </Link>
                </li>
            )}
        </ul>
    );
}

