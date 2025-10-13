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

            <HeroSection dict={dict} />
            <ServiceSection dict={dict} />
            <AboutSection dict={dict} />
            {
                //  <CounterSection/>
            }
            <CaseStudySection dict={dict} />
            {
                //  <SkillSection/>
                // <SolutionSection/>
                //  <TestimonialSection/>
                // <BrandSection/>
                // <TeamSection/>
            }
            <BlogSection dict={dict} />
            <AboutAISection dict={dict} />
            <ServiceAISection dict={dict} />
            <CounterAISection dict={dict} />
            <SolutionAISection dict={dict} />

        </>
    )
}