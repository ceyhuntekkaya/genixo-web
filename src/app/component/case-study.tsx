"use client";

import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  dict: Dictionary;
  locale: Locale;
}
export default function CaseStudySection({ dict, locale }: PageProps) {
  if (!dict.caseStudy) {
    return null;
  }

  const caseStudyDict = dict.caseStudy;

  return (
    <>
      <div
        className="section section-padding"
        style={{ backgroundImage: "url(/images/bg/choose-us-bg.jpg)" }}
      >
        <div className="container">
          <div className="choose-us-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title-modern">
                {caseStudyDict.reasonToChooseUs}
              </h3>
              <h2 className="title">{caseStudyDict.prominentSolutions}</h2>
            </div>
            <div className="choose-us-content-wrap">
              <div className="row">
                {Array.isArray(dict.services) &&
                  dict.services
                    .filter(
                      (s) => s.showOnHomepage === true && s.active !== false
                    )
                    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                    .slice(0, 3)
                    .map((solution) => (
                      <div key={solution.slug} className="col-lg-4 col-md-6">
                        <div className="choose-us-item">
                          <div className="choose-us-img">
                            <Link
                              href={`/${locale}/solutions/${solution.slug}`}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
                                  minHeight: "300px",
                                }}
                              >
                                <Image
                                  src={
                                    solution.image1 || "/images/choose-us1.jpg"
                                  }
                                  alt={solution.name}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  unoptimized
                                />
                              </div>
                              <div className="choose-us-content">
                                <h3 className="title">{solution.name}</h3>
                                <p>{solution.summary}</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-choose-content text-center">
                    <p>
                      {caseStudyDict.learnMore}{" "}
                      <Link href={`/${locale}/solutions`}>
                        {caseStudyDict.moreReason}{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </p>
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
