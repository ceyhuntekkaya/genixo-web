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
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.ContactUs}</h1>
                    <p>{dict.contact.pageContent}</p>
                </div>
            </div>
        </>
    )
}