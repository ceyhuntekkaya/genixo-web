"use client";

import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import Image from "next/image";
import { companyInfo } from "@/utils/company";

interface PageProps {
  locale: Locale;
  dict: Dictionary;
}

export default function AboutSection({ dict }: PageProps) {
  return (
    <div className="section genixo-about-section-04 section-padding">
      <div className="shape-1"></div>
      <div className="container">
        <div className="about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content-wrap">
                <div className="section-title">
                  <h3 className="sub-title-modern">{dict.about.WhoWeAre}</h3>
                  <h2 className="title">{dict.about.slogan}</h2>
                </div>
                <p className="text">{dict.about.short}</p>
                <div className="about-author-info-wrap">
                  <div className="about-author">
                    <h3 className="name">{dict.about.authorName}</h3>
                    <span className="designation">
                      {dict.about.authorTitle}
                    </span>
                  </div>
                  <div className="about-info">
                    <p>{dict.about.callToAsk}</p>
                    <h3 className="number">
                      <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                        {companyInfo.phone}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <div className="about-img about-img-big">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "500px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Image
                      src="/images/about-us-1.jpg"
                      alt="About Genixo"
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                      priority
                    />
                  </div>
                </div>
                <div className="about-img about-img-sm">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "280px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Image
                      src="/images/about-sm2.jpg"
                      alt="Genixo team"
                      fill
                      style={{ objectFit: "cover" }}
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
  );
}
