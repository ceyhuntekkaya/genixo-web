"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/utils/company";
import { Dictionary } from "@/i18n/types";

interface CTASectionProps {
  dict: Dictionary;
}

export default function CTASection({ dict }: CTASectionProps) {
  const pathname = usePathname();
  // The homepage ends with its own contact section.
  if (/^\/[a-z]{2}\/?$/.test(pathname ?? "")) return null;

  return (
    <div className="section genixo-cta-section-02">
      <div className="container">
        <div className="cta-wrap" style={{ backgroundImage: "url(/images/bg/cta-bg.jpg)" }}>
          <div className="row align-items-center">
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="cta-content">
                <div className="cta-icon">
                  <Image 
                    src="/images/cta-icon2.png" 
                    alt="Customer support icon" 
                    fill 
                    style={{ objectFit: 'contain', padding: '15px' }} 
                    unoptimized 
                  />
                </div>
                <p>{dict.general.ctaMessage}</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
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
