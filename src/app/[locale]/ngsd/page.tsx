import PageBanner from "@/app/component/page-banner";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";
import { locales } from "@/i18n/config";

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

  const homeLabel = dict.menu.Home;

  return (
    <>
      <PageBanner
        bannerLink={"/images/bg/page-banner.jpg"}
        title={dict.menu.NGSD}
        breadcrumbs={[
          { label: homeLabel, href: `/${locale}` },
          { label: dict.menu.NGSD, href: `/${locale}/ngsd` },
        ]}
      />

      <div className="section genixo-about-section-07 section-padding">
        <div className="shape-1"></div>
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img-wrap">
                  <img
                    className="shape-1"
                    src="/images/shape/about-shape2.png"
                    alt=""
                  />
                  <div className="about-img">
                    <img src="/images/solutions-1.jpg" alt="" />
                  </div>
                  <div className="about-img about-img-2">
                    <img src="/images/solutions-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-wrap">
                  <div className="section-title">
                    <h3 className="sub-title-modern">
                      {dict.ngsd.forWho.content}
                    </h3>
                    <h2 className="title">{dict.ngsd.title}</h2>
                  </div>

                  <div className="col-lg-12">
                    <div className="section-title mb-4">
                      <h3 className="sub-title-modern">{dict.ngsd.subtitle}</h3>
                      <p className="text">{dict.ngsd.whatIs.content}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="section-title mb-4">
                        <h3 className="title">{dict.ngsd.remote.title}</h3>
                        <p className="text">{dict.ngsd.remote.content}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="section-title mb-4">
                        <h3 className="title">{dict.ngsd.dynamic.title}</h3>
                        <p className="text">{dict.ngsd.dynamic.content}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="section-title mb-4">
                        <h3 className="title">{dict.ngsd.global.title}</h3>
                        <p className="text">{dict.ngsd.global.content}</p>
                      </div>
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
