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
                  <p className="title">{dict.about.short}</p>
                  <p className="text">
                    {dict.about.description.substring(0, 200)}...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
