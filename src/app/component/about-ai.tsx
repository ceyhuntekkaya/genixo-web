"use client";

import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import Image from "next/image";

interface PageProps {
  dict: Dictionary;
  locale: Locale;
}
export default function AboutAISection({ dict, locale }: PageProps) {
  // Get first two values for the list items

  return (
    <div className="section genixo-about-section-05 section-padding">
      <div className="container">
        <div className="about-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title-modern">{dict.about.WhoWeAre}</h3>
            <h2 className="title">{dict.about.slogan}</h2>
          </div>
          <div className="about-content-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img-wrap">
                  <div className="about-img about-img-big">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <Image
                        src="/images/about-big3.jpg"
                        alt=""
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="about-img about-img-sm">
                    <div
                      style={{
                        position: "relative",
                        width: "250px",
                        height: "250px",
                      }}
                    >
                      <Image
                        src="/images/about-sm3.jpg"
                        alt=""
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        unoptimized
                      />
                    </div>
                    <div className="shape-01"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="about-content-text">
                    <h3 className="title">
                      Yazılım Çözüm Ortağınız
                    </h3>
                    <p className="text">
                      Başarılı bir yazılım oluşturmak için iş gereksinimlerinizi 
                      anlayan bir geliştirme ekibine ihtiyacınız vardır.
                    </p>
                    <p className="text">
                      Uzmanlarımız fikrinize, zaman çizelgenize ve bütçenize uygun 
                      özel bir çözüm belirleyecek, ardından uygulamayı tasarlayıp 
                      oluşturacak ve gerçek kullanıcılarla test etmenize yardımcı olacaktır.
                    </p>
                    <div className="about-success" style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      padding: "20px 25px",
                      borderRadius: "10px",
                      marginTop: "20px"
                    }}>
                      <p style={{ 
                        color: "#fff",
                        fontSize: "16px",
                        lineHeight: "1.8",
                        margin: 0,
                        fontWeight: "500"
                      }}>
                        💡 Sonuç olarak, işinize fayda sağlayan, kullanıcılar tarafından 
                        sevilen modern bir dijital ürün elde edeceksiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
