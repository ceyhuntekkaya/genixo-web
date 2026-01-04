import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageBanner from "@/app/component/page-banner";


export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    return generateSEOMetadata({
        title: dict.menu.GovernmentSupport,
        description: dict.seo?.governmentSupport?.description || dict.menu.GovernmentSupport,
        keywords: `${dict.seo?.governmentSupport?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/government-support`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function GovernmentSupportPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const homeLabel = dict.menu.Home;

    return (
        <>
            <PageBanner
                bannerLink={"/images/bg/page-banner.jpg"}
                title={dict.menu.GovernmentSupport}
                breadcrumbs={[
                    { label: homeLabel, href: `/${locale}` },
                    { label: dict.menu.GovernmentSupport, href: `/${locale}/government-support` },
                ]}
            />
            <div className="section section-padding">
                <div className="container">
                    {locale === 'tr' && dict.seo?.governmentSupport?.title ? (
                        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333', maxWidth: '800px', margin: '20px auto', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                            <div style={{ backgroundColor: '#0056b3', color: '#ffffff', padding: '20px', textAlign: 'center' }}>
                                <h1 style={{ margin: 0, fontSize: '24px' }}>{dict.seo.governmentSupport.title}</h1>
                                <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold' }}>{dict.seo.governmentSupport.subtitle}</p>
                            </div>

                            <div style={{ padding: '25px' }}>
                                <h2 style={{ color: '#0056b3', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px', fontSize: '20px' }}>{dict.seo.governmentSupport.summary.title}</h2>
                                <p>{dict.seo.governmentSupport.summary.content}</p>

                                <div style={{ backgroundColor: '#f8f9fa', borderLeft: '5px solid #28a745', padding: '15px', margin: '20px 0' }}>
                                    <strong style={{ color: '#28a745', fontSize: '18px' }}>{dict.seo.governmentSupport.supportLimit.title}</strong>
                                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}> {dict.seo.governmentSupport.supportLimit.amount}</span>
                                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>({dict.seo.governmentSupport.supportLimit.note})</p>
                                </div>

                                <h3 style={{ color: '#444', fontSize: '18px' }}>{dict.seo.governmentSupport.expenses.title}</h3>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>{dict.seo.governmentSupport.expenses.hardware.title}</strong> {dict.seo.governmentSupport.expenses.hardware.content}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>{dict.seo.governmentSupport.expenses.software.title}</strong> {dict.seo.governmentSupport.expenses.software.content}
                                    </li>
                                    <li style={{ marginBottom: '10px' }}>
                                        <strong>{dict.seo.governmentSupport.expenses.service.title}</strong> {dict.seo.governmentSupport.expenses.service.content}
                                    </li>
                                </ul>

                                <h3 style={{ color: '#444', fontSize: '18px' }}>{dict.seo.governmentSupport.eligibility.title}</h3>
                                <p style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '4px', color: '#856404', fontWeight: 'bold' }}>
                                    {dict.seo.governmentSupport.eligibility.content}
                                </p>
                            </div>

                            <div style={{ backgroundColor: '#f1f1f1', padding: '15px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
                                <p style={{ margin: 0 }}>{dict.seo.governmentSupport.footer.content}</p>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                            <h1>{dict.menu.GovernmentSupport}</h1>
                            <p style={{ fontSize: '18px', color: '#666', marginTop: '20px' }}>
                                {dict.seo?.governmentSupport?.comingSoon || 'This content is being prepared and will be available soon.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

