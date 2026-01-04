'use client';
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/app/assets/Genixo_Logo_White.png";
import { Locale } from "@/i18n/config";
import {Dictionary} from "@/i18n/types";
import {getProductSlug, getSolutionSlug} from "@/utils/slugMapping";
import {companyInfo} from "@/utils/company";

interface FooterSectionProps {
    locale: Locale;
    dict: Dictionary;
}

export default function FooterSection({ locale, dict }: FooterSectionProps) {
    if (!dict.footer) {
        return null;
    }

    const footer = dict.footer;

    // Aktif ürünleri al
    const activeProducts = Object.keys(dict.products)
        .filter(key => {
            const product = dict.products[key as keyof typeof dict.products];
            return product && product.active !== false;
        })
        .map(key => {
            const productKey = key as keyof import('@/i18n/types').Dictionary['products'];
            const product = dict.products[productKey];
            const productSlug = getProductSlug(productKey);
            return { key, product, slug: productSlug };
        })
        .filter(item => item.product && item.slug);

    // Aktif hizmetleri al
    const activeServices = Object.keys(dict.services)
        .filter(key => {
            if (key === 'general') return false;
            const service = dict.services[key as keyof typeof dict.services];
            return service && 'active' in service && service.active !== false && 'name' in service;
        })
        .map(key => {
            const serviceKey = key as keyof import('@/i18n/types').Dictionary['services'];
            const service = dict.services[serviceKey];
            const solutionSlug = getSolutionSlug(serviceKey);
            return { key, service, slug: solutionSlug };
        })
        .filter(item => item.service && item.slug && 'name' in item.service);
    return (
        <div className="section footer-section footer-section-03"
             style={{
                 backgroundImage: "url(/images/bg/footer-bg.jpg)"
             }}>
            <div className="container">
                <div className="footer-widget-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget-about">
                                <Link className="footer-logo" href={`/${locale}`}>
                                    <Image
                                        src={footerLogo}
                                        alt="Logo"
                                        className="w-35 h-auto mt-4"
                                    />
                                </Link>
                              
                                <div className="footer-social">
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">{dict.menu.Products}</h4>
                                <div className="widget-link">
                                    <ul className="link">
                                        {activeProducts.map((item) => (
                                            <li key={item.key}>
                                                <Link href={`/${locale}/products/${item.slug}`}>{item.product.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">{dict.menu.Solutions}</h4>
                                <div className="widget-link">
                                    <ul className="link">
                                        {activeServices.map((item) => (
                                            <li key={item.key}>
                                                <Link href={`/${locale}/solutions/${item.slug}`}>
                                                    {'name' in item.service ? item.service.name : item.key}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-widget-title">{footer.contactInfo}</h4>
                                <div className="widget-info">
                                    <ul>
                                        <li>
                                            <div className="info-icon">
                                                <i className="flaticon-phone-call"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href={`#`}>{companyInfo.phone}</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="far fa-envelope-open"></i>
                                            </div>
                                            <div className="info-text">
                                                <span><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <i className="flaticon-pin"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>{companyInfo.address}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright-area">
                <div className="container">
                    <div className="footer-copyright-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="copyright-text text-center">
                                    <p>{footer.copyright}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}