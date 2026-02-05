import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import ContactHero from "@/app/component/contact-hero";
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

    const contactDict = dict.contact;

    return (
        <>
            <ContactHero dict={dict} />

            {/* Contact Info Cards Section */}
            <div className="section contact-info-section section-padding" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className="sub-title-modern">{dict.menu.ContactInfo || "İletişim Bilgileri"}</h3>
                        <h2 className="title">{contactDict.form.mainTitle}</h2>
                    </div>
                    <div className="contact-info-wrap mt-5">
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info text-center h-100" style={{
                                    background: 'white',
                                    padding: '50px 35px',
                                    borderRadius: '10px',
                                    boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '5px',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    }}></div>
                                    <div className="info-icon mb-4" style={{
                                        width: '90px',
                                        height: '90px',
                                        margin: '0 auto',
                                        background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image 
                                            src="/images/info-1.png" 
                                            alt={contactDict.phone.title} 
                                            width={50} 
                                            height={50}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="info-content">
                                        <h4 className="title mb-3" style={{fontSize: '22px', fontWeight: '600', color: '#1e293b'}}>{contactDict.phone.title}</h4>
                                        <p style={{fontSize: '16px', color: '#64748b', marginBottom: '0'}}>
                                            <a href={`tel:${companyInfo.phone}`} style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '500'}}>{companyInfo.phone}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info text-center h-100" style={{
                                    background: 'white',
                                    padding: '50px 35px',
                                    borderRadius: '10px',
                                    boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '5px',
                                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                                    }}></div>
                                    <div className="info-icon mb-4" style={{
                                        width: '90px',
                                        height: '90px',
                                        margin: '0 auto',
                                        background: 'linear-gradient(135deg, #f093fb15 0%, #f5576c15 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image 
                                            src="/images/info-2.png" 
                                            alt={contactDict.email.title} 
                                            width={50} 
                                            height={50}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="info-content">
                                        <h4 className="title mb-3" style={{fontSize: '22px', fontWeight: '600', color: '#1e293b'}}>{contactDict.email.title}</h4>
                                        <p style={{fontSize: '16px', color: '#64748b', marginBottom: '0', wordBreak: 'break-word'}}>
                                            <a href={`mailto:${companyInfo.email}`} style={{color: '#3b82f6', textDecoration: 'none', fontWeight: '500'}}>{companyInfo.email}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info text-center h-100" style={{
                                    background: 'white',
                                    padding: '50px 35px',
                                    borderRadius: '10px',
                                    boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '5px',
                                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                                    }}></div>
                                    <div className="info-icon mb-4" style={{
                                        width: '90px',
                                        height: '90px',
                                        margin: '0 auto',
                                        background: 'linear-gradient(135deg, #4facfe15 0%, #00f2fe15 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image 
                                            src="/images/info-3.png" 
                                            alt={contactDict.address.title} 
                                            width={50} 
                                            height={50}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="info-content">
                                        <h4 className="title mb-3" style={{fontSize: '22px', fontWeight: '600', color: '#1e293b'}}>{contactDict.address.title}</h4>
                                        <p style={{fontSize: '16px', color: '#64748b', marginBottom: '0', lineHeight: '1.6'}}>{companyInfo.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="section genixo-contact-form-section section-padding" 
                 style={{backgroundColor: '#ffffff'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <div className="section-title text-center mb-5">
                                <h3 className="sub-title-modern">{contactDict.form.subtitle}</h3>
                                <h2 className="title">{contactDict.form.title}</h2>
                            </div>
                            <ContactForm dict={dict} locale={locale} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="section contact-map-section" style={{marginBottom: '80px'}}>
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
        </>
    )
}