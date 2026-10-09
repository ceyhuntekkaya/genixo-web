import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {buildMetadata} from "@/utils/seo";
import PageHero from "@/app/component/page-hero";
import {getAllPosts} from "@/lib/content";
import Link from "next/link";


export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const hasCases = getAllPosts(locale, "case-study").length > 0;
    return buildMetadata({
        locale,
        path: "/case-study",
        title: dict.menu.SuccessStories,
        description: "Genixo proje kayıtları: sorun, kullanılan teknoloji, süre ve ölçülen sonuç. Müşteri adı yalnızca yazılı izinle yayınlanır.",
        noindex: !hasCases,
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
                    {getAllPosts(locale, "case-study").length === 0 ? (
                        <p>{locale === "tr" ? "Vaka çalışmaları hazırlanıyor." : "Case studies are being prepared."}</p>
                    ) : (
                        <ul>
                            {getAllPosts(locale, "case-study").map((item) => (
                                <li key={item.slug}>
                                    <Link href={`/${locale}/case-study/${item.slug}`}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

