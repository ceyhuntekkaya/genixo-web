"use client";

import Image from "next/image";
import { companyInfo } from "@/utils/company";
import { Dictionary } from "@/i18n/types";

interface CTASectionProps {
  dict: Dictionary;
}

export default function CTASection({ dict }: CTASectionProps) {
  return (
    <div className="section genixo-cta-section-02">
      <div className="container">
        <div className="cta-wrap" style={{ backgroundImage: "url(/images/bg/cta-bg.jpg)" }}>
          <div className="row align-items-center">
            <div className="col-xl-9 col-lg-8">
              <div className="cta-content">
                <div className="cta-icon">
                  <Image src="/images/cta-icon2.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                </div>
                <p>{dict.general.ctaMessage}</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="cta-btn">
                <a className="btn btn-white" href={`tel:${companyInfo.phone}`}>
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
