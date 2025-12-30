import HeroSection from "@/app/component/hero";
import ServiceSection from "@/app/component/service";
import AboutSection from "@/app/component/about";
import CaseStudySection from "@/app/component/case-study";
import BlogSection from "@/app/component/blog";
import AboutAISection from "@/app/component/about-ai";
import ServiceAISection from "@/app/component/service-ai";
import CounterAISection from "@/app/component/counter-ai";
import SolutionAISection from "@/app/component/solution-ai";
import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";

export default async function Home({
                                       params,
                                   }: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <>

            <HeroSection dict={dict} locale={locale} />
            <ServiceSection dict={dict} locale={locale} />
            <AboutSection dict={dict} locale={locale} />
            {
                //  <CounterSection/>
            }
            <CaseStudySection dict={dict} locale={locale} />
            {
                //  <SkillSection/>
                // <SolutionSection/>
                //  <TestimonialSection/>
                // <BrandSection/>
                // <TeamSection/>
            }
            <BlogSection dict={dict} locale={locale} />
            <AboutAISection dict={dict} locale={locale} />
            <ServiceAISection dict={dict} locale={locale} />
            <CounterAISection dict={dict} locale={locale} />
            <SolutionAISection dict={dict} locale={locale} />

        </>
    )
}