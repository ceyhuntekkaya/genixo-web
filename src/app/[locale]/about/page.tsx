import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/app/component/page-hero";
import AboutProblems from "@/app/component/about-problems";
import { SITE_URL, definitionFor, entity, jobTitleFor, shortDefinitionFor } from "@/content/entity";
import { webPage } from "@/utils/schema";
import { getProductSlug } from "@/utils/slugMapping";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict.seo?.pages?.about;
  return buildMetadata({
    locale,
    path: "/about",
    title: copy?.title || dict.menu.AboutUs,
    description: copy?.description || shortDefinitionFor(locale),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const url = `${SITE_URL}/${locale}/about`;
  const copy = dict.seo?.pages?.about;
  const products = (["ILC", "StudyScoreAI", "Egitimiste"] as const)
    .map((key) => {
      const product = dict.products[key];
      const slug = getProductSlug(key);
      if (!product || !("name" in product) || product.active === false || !slug) return null;
      return { name: product.name, slug };
    })
    .filter((item): item is { name: string; slug: string } => Boolean(item));

  return (
    <>
      <JsonLd
        data={webPage({
          url,
          name: copy?.title || dict.menu.AboutUs,
          description: copy?.description || definitionFor(locale),
          locale,
          type: "AboutPage",
          mainEntity: `${SITE_URL}/#organization`,
        })}
      />
      <PageHero
        title={dict.menu.AboutUs}
        subtitle={dict.about.WhoWeAre}
        description={dict.about.slogan}
        backgroundImage="/images/about-hero-final.jpg"
      />

      <div className="section genixo-about-section-07 section-padding">
        <div className="shape-1"></div>
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              {/* Main Introduction Section */}
              <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                <div className="about-content-wrap">
                  <div className="section-title">
                    <h3 className="sub-title-modern">{dict.about.WhoWeAre}</h3>
                    <h2 className="title">{dict.about.slogan}</h2>
                  </div>
                  <p className="text">{definitionFor(locale)}</p>
                  <p className="text">{dict.about.description}</p>
                </div>
              </div>
              <div className="col-lg-6 col-12 mb-5 mb-lg-0 d-none d-md-block">
                <div style={{ position: "relative", width: "100%", height: "450px" }}>
                  <Image
                    src="/images/about-team-collaboration.jpg"
                    alt={dict.about.images.mainAlt}
                    fill
                    style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    unoptimized
                  />
                </div>
              </div>

              {/* Values Section */}
              <div className="row mt-5">
                {/* Dynamism */}
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-8 col-md-7 col-12 order-1 order-md-1 mb-3 mb-md-0">
                    <h3 className="title">{dict.about.values.dynamism.title}</h3>
                    <p>{dict.about.values.dynamism.content}</p>
                  </div>
                  <div className="col-lg-4 col-md-5 col-12 order-2 order-md-2 mb-4 mb-md-0 d-none d-md-block">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        minHeight: "250px",
                        maxHeight: "350px",
                      }}
                    >
                      <Image
                        src="/images/about-dynamism.jpg"
                        alt={dict.about.images.dynamismAlt}
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Passion and Commitment */}
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-4 col-md-5 col-12 order-2 order-md-1 mb-3 mb-md-0 d-none d-md-block">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        minHeight: "250px",
                        maxHeight: "350px",
                      }}
                    >
                      <Image
                        src="/images/about-passion.jpg"
                        alt={dict.about.images.passionAlt}
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7 col-12 order-1 order-md-2 mb-3 mb-md-0">
                    <h3 className="title">{dict.about.values.passion.title}</h3>
                    <p>{dict.about.values.passion.content}</p>
                  </div>
                </div>

                {/* Professionalism */}
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-8 col-md-7 col-12 order-1 order-md-1 mb-3 mb-md-0">
                    <h3 className="title">{dict.about.values.professionalism.title}</h3>
                    <p>{dict.about.values.professionalism.content}</p>
                  </div>
                  <div className="col-lg-4 col-md-5 col-12 order-2 order-md-2 mb-3 mb-md-0 d-none d-md-block">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        minHeight: "250px",
                        maxHeight: "350px",
                      }}
                    >
                      <Image
                        src="/images/about-professionalism.jpg"
                        alt={dict.about.images.professionalismAlt}
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" }}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-padding">
        <div className="container">
          <h2>{locale === "tr" ? "Ürünlerimiz" : "Our products"}</h2>
          <ul>
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/${locale}/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
          <h2>{locale === "tr" ? "Ekip" : "Team"}</h2>
          <p>
            <Link href={`/${locale === "tr" ? "tr" : "en"}/authors/${entity.founder.id}`}>{entity.founder.name}</Link>
            {` · ${jobTitleFor(locale)}`}
          </p>
          <h2>{locale === "tr" ? "Kanıtlar" : "Proof"}</h2>
          <ul>
            {entity.memberships.map((item) => (
              <li key={item.url}>
                <a href={item.url} rel="noopener">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AboutProblems dict={dict} />
      {
        //   <CounterSection locale={locale} />
      }

      {/* <ChooseUsSection locale={locale} /> */}
    </>
  );
}
