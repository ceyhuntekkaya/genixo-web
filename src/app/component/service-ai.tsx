"use client";

import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  dict: Dictionary;
  locale: Locale;
}
export default function ServiceAISection({ dict, locale }: PageProps) {
  const ngsd = dict.ngsd;

  // NGSD özelliklerini array olarak al (sadece 3 özellik: remote, dynamic, global)
  const ngsdFeatures = [
    { ...ngsd.remote, icon: "/images/ser-icon13.png" },
    { ...ngsd.dynamic, icon: "/images/ser-icon14.png" },
    { ...ngsd.global, icon: "/images/ser-icon15.png" },
  ];

  return (
    <div className="section genixo-service-section-05 section-padding">
      <div className="container">
        <div className="service-wrap" style={{ padding: "50px 80px 70px" }}>
          <div className="section-title text-center">
            <h3 className="sub-title-modern">{ngsd.title}</h3>
            <h2 className="title">{ngsd.subtitle}</h2>
            <p className="text" style={{ 
              maxWidth: "800px", 
              margin: "15px auto 0",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#666"
            }}>
              {ngsd.whatIs.content}
            </p>
          </div>
          <div className="service-content-wrap" style={{ paddingTop: "50px" }}>
            <div className="row justify-content-center" style={{ rowGap: "20px" }}>
              {ngsdFeatures.map((feature, index) => (
                <div key={index} className="col-xl-4 col-md-6" style={{ marginBottom: "0" }}>
                  <div className="service-item-04">
                    <div className="service-img" style={{ 
                      display: "flex", 
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <div
                        style={{
                          position: "relative",
                          width: "80px",
                          height: "80px",
                        }}
                      >
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          fill
                          style={{ objectFit: "contain" }}
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link href={`/${locale}/ngsd`}>{feature.title}</Link>
                      </h3>
                      <p style={{ 
                        fontSize: "15px", 
                        lineHeight: "1.8",
                        color: "#666"
                      }}>
                        {feature.content.substring(0, 150)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive CSS */}
      <style jsx>{`
        .service-wrap {
          padding: 50px 80px 70px !important;
        }
        
        .service-item-04 {
          margin-top: 0 !important;
          padding: 25px 20px !important;
        }
        
        .service-item-04 .service-img {
          margin-bottom: 15px !important;
        }
        
        .service-item-04 .service-content .title {
          margin-top: 15px !important;
          margin-bottom: 12px !important;
        }
        
        @media (max-width: 1199px) {
          .service-wrap {
            padding: 45px 60px 65px !important;
          }
        }
        
        @media (max-width: 991px) {
          .service-wrap {
            padding: 40px 50px 60px !important;
          }
          
          .service-content-wrap {
            padding-top: 45px !important;
          }
          
          .section-title .text {
            margin-top: 12px !important;
          }
          
          .row {
            row-gap: 18px !important;
          }
          
          .service-item-04 {
            padding: 20px 15px !important;
          }
        }
        
        @media (max-width: 767px) {
          .service-wrap {
            padding: 35px 30px 50px !important;
          }
          
          .service-content-wrap {
            padding-top: 35px !important;
          }
          
          .section-title .text {
            margin-top: 10px !important;
            font-size: 15px !important;
          }
          
          .row {
            row-gap: 16px !important;
          }
          
          .service-item-04 {
            padding: 18px 12px !important;
          }
          
          .service-item-04 .service-img {
            margin-bottom: 12px !important;
          }
          
          .service-item-04 .service-content .title {
            margin-top: 12px !important;
            margin-bottom: 10px !important;
          }
        }
        
        @media (max-width: 576px) {
          .service-wrap {
            padding: 30px 20px 45px !important;
          }
          
          .service-content-wrap {
            padding-top: 30px !important;
          }
          
          .section-title .text {
            font-size: 14px !important;
            padding: 0 10px;
          }
          
          .row {
            row-gap: 14px !important;
          }
          
          .service-item-04 {
            padding: 15px 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
