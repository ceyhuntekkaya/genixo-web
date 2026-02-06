import RelatedSolutionsSection from "@/app/component/related-solutions";
import SolutionProblems from "@/app/component/solution-problems";
import PageHero from "@/app/component/page-hero";
import type { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import { getServiceDescription } from "@/utils/serviceDescription";

type ServiceItem = Dictionary["services"][number];

interface SolutionDetailProps {
  service: ServiceItem;
  dict: Dictionary;
  locale: Locale;
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

                {service.description && (
                  <ServiceDescription description={service.description} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
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
