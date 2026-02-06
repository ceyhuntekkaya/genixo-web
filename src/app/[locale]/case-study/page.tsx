import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {generateMetadata as generateSEOMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import PageHero from "@/app/component/page-hero";


export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    return generateSEOMetadata({
        title: dict.menu.SuccessStories,
        description: dict.menu.SuccessStories,
        keywords: `${dict.seo?.caseStudy?.keywords || ''}, ${dict.about.slogan}`,
        url: `/${locale}/case-study`,
        locale,
        alternateLocales,
        dict,
    });
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <>
            <PageHero
                title={dict.menu.SuccessStories}
                subtitle={dict.about.slogan}
                backgroundImage={dict.caseStudy?.hero?.backgroundImage}
            />
            <div className="section section-padding">
                <div className="container">
                    <h1>{dict.menu.SuccessStories}</h1>
                    <p>Success stories page content will be added here.</p>
                </div>
            </div>
        </>
    )
}

