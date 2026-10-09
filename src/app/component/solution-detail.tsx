import RelatedSolutionsSection from "@/app/component/related-solutions";
import SolutionProblems from "@/app/component/solution-problems";
import PageHero from "@/app/component/page-hero";
import type { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import { getServiceDescription } from "@/utils/serviceDescription";
import Link from "next/link";
import { contentPath, type ContentDoc } from "@/lib/content";

type ServiceItem = Dictionary["services"][number];

interface SolutionDetailProps {
  service: ServiceItem;
  dict: Dictionary;
  locale: Locale;
  related?: ContentDoc[];
}

async function ServiceDescription({ description }: { description: string }) {
  // Check if description is a file path (starts with @/)
  const htmlContent = description.startsWith("@/")
    ? await getServiceDescription(description)
    : description;

  if (!htmlContent) {
    return null;
  }

  return (
    <div
      className="solution-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default async function SolutionDetail({
  service,
  dict,
  locale,
  related = [],
}: SolutionDetailProps) {
  const solutionSlug = service.slug;

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={service.name}
        subtitle={dict.about.slogan}
        description={service.summary}
        backgroundImage={service.image1 || "/images/bg/page-banner.jpg"}
      />

      {/* Content Section - Hero title bu bölümde başlık olarak gösterilir */}
      <div className="section genixo-about-section-07 section-padding">
        <div className="shape-1"></div>
        <div className="container">
          <div className="about-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-5">
                  <h3 className="sub-title-modern">{dict.menu.Solutions}</h3>
                  <h2 className="title">{service.name}</h2>
                </div>

                <nav aria-label="Breadcrumb">
                  <Link href={`/${locale}`}>{dict.menu.Home}</Link>
                  {" / "}
                  <Link href={`/${locale}/solutions`}>{dict.menu.Solutions}</Link>
                  {" / "}
                  {service.name}
                </nav>
                {service.summary ? <p className="geo-answer">{service.summary}</p> : null}
                {service.description && (
                  <ServiceDescription description={service.description} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {service.faq && service.faq.length > 0 && (
        <div className="section section-padding">
          <div className="container">
            <h2>{locale === "tr" ? "Sık sorulan sorular" : "Frequently asked questions"}</h2>
            {service.faq.map((item) => (
              <details key={item.q} className="geo-faq">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="section">
          <div className="container">
            <h2>{locale === "tr" ? "İlgili yazılar" : "Related reading"}</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${locale}${contentPath(item)}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <SolutionProblems service={service} />

      {/* Related Solutions Section */}
      <RelatedSolutionsSection
        locale={locale}
        currentSlug={solutionSlug}
        currentSolutionTitle={service.name}
        maxItems={3}
      />
    </>
  );
}
