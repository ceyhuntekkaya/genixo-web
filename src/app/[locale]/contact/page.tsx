import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";
import Image from "next/image";
import {companyInfo} from "@/utils/company";
import ContactForm from "@/app/component/contact-form";


export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    return generateSEOMetadata({
        title: dict.menu.ContactUs,
        description: dict.seo?.contact?.description || dict.menu.ContactUs,
        keywords: `${dict.seo?.contact?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/contact`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const homeLabel = dict.menu.Home;
    const contactDict = dict.contact;

    return (
        <>
            <PageBanner
                bannerLink={"/images/bg/page-banner.jpg"}
                title={dict.menu.ContactUs}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.ContactUs, href: `/${locale}/contact` },
                ]}
            />
            
            <div className="main-wrapper">
                <div className="section contact-info-section section-padding-02">
                    <div className="container">
                        <div className="contact-info-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-contact-info text-center">
                                        <div className="info-icon">
                                            <Image 
                                                src="/images/info-1.png" 
                                                alt="" 
                                                width={80} 
                                                height={80}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="info-content">
                                            <h5 className="title">{contactDict.phone.title}</h5>
                                            <p><a href={`#`}>{companyInfo.phone}</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-contact-info text-center">
                                        <div className="info-icon">
                                            <Image 
                                                src="/images/info-2.png" 
                                                alt="" 
                                                width={80} 
                                                height={80}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="info-content">
                                            <h5 className="title">{contactDict.email.title}</h5>
                                            <p><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-contact-info text-center">
                                        <div className="info-icon">
                                            <Image 
                                                src="/images/info-3.png" 
                                                alt="" 
                                                width={80} 
                                                height={80}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="info-content">
                                            <h5 className="title">{contactDict.address.title}</h5>
                                            <p>{companyInfo.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section techwix-contact-section techwix-contact-section-02 techwix-contact-section-03 section-padding-02">
                    <ContactForm dict={dict} locale={locale} />
                </div>

                <div className="section contact-map-section">
                    <div className="contact-map-wrap">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5262.220320156964!2d32.75510767743412!3d39.88195487153056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68727ad146b84599%3A0x82f8f072b8390252!2sGenixo%20Bili%C5%9Fim%20ve%20Teknoloji%20A.%C5%9E.!5e1!3m2!1sen!2str!4v1767530487737!5m2!1sen!2str" 
                            style={{border: 0, width: '100%', height: '550px'}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Genixo Bilişim ve Teknoloji A.Ş. Lokasyon"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}