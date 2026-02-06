import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";
import { locales } from "@/i18n/config";
import PageHero from "@/app/component/page-hero";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const alternateLocales = locales.filter((l) => l !== locale) as Locale[];

  return generateSEOMetadata({
    title: dict.menu.NGSD,
    description: dict.ngsd.subtitle,
    keywords: `${dict.seo?.ngsd?.keywords || ""}, ${dict.about.slogan}`,
    url: `/${locale}/ngsd`,
    locale,
    alternateLocales,
    dict,
  });
}

export default async function NGSDPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.menu.NGSD}
        subtitle={dict.ngsd.forWho.content}
        description={dict.ngsd.subtitle}
        backgroundImage={dict.ngsd?.hero?.backgroundImage}
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
                    <h3 className="sub-title-modern">
                      {dict.ngsd.forWho.content}
                    </h3>
                    <h2 className="title">{dict.ngsd.title}</h2>
                  </div>
                  <p className="text">{dict.ngsd.whatIs.content}</p>
                </div>
              </div>
              <div className="col-lg-6 col-12 mb-5 mb-lg-0 d-none d-md-block">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "450px",
                  }}
                >
                  <Image
                    src="/images/ngsd-team-collaboration.jpg"
                    alt={dict.ngsd.images.mainAlt}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    unoptimized
                  />
                </div>
              </div>

              {/* Features Section */}
              <div className="row mt-5">
                {/* Remote Feature */}
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-8 col-md-7 col-12 order-1 order-md-1 mb-3 mb-md-0">
                    <h3 className="title">{dict.ngsd.remote.title}</h3>
                    <p>{dict.ngsd.remote.content}</p>
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
                        src="/images/ngsd-remote-work.jpg"
                        alt={dict.ngsd.images.remoteAlt}
                        fill
                        style={{
                          objectFit: "cover",
                          borderRadius: "10px",
                          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                        }}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Dynamic Feature */}
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
                        src="/images/ngsd-dynamic-team.jpg"
                        alt={dict.ngsd.images.dynamicAlt}
                        fill
                        style={{
                          objectFit: "cover",
                          borderRadius: "10px",
                          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                        }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7 col-12 order-1 order-md-2 mb-3 mb-md-0">
                    <h3 className="title">{dict.ngsd.dynamic.title}</h3>
                    <p>{dict.ngsd.dynamic.content}</p>
                  </div>
                </div>

                {/* Global Feature */}
                <div className="row mt-4 align-items-center">
                  <div className="col-lg-8 col-md-7 col-12 order-1 order-md-1 mb-3 mb-md-0">
                    <h3 className="title">{dict.ngsd.global.title}</h3>
                    <p>{dict.ngsd.global.content}</p>
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
                        src="/images/ngsd-global-business.jpg"
                        alt={dict.ngsd.images.globalAlt}
                        fill
                        style={{
                          objectFit: "cover",
                          borderRadius: "10px",
                          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                        }}
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
    </>
  );
}
