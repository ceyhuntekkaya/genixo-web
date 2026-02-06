"use client";

import { Dictionary } from "@/i18n/types";
import Image from "next/image";

interface PageProps {
  dict: Dictionary;
}
export default function AboutAISection({ dict }: PageProps) {
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
                <div 
                  className="about-img-wrap"
                  style={{ position: "relative" }}
                >
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
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="about-content-text">
                    {/* Split short text into sentences for better readability */}
                    {dict.about.short.split(/(?<=[.!?])\s+/).filter(s => s.trim()).map((sentence, index) => (
                      <p key={index} className="text" style={{ marginBottom: "15px" }}>
                        {sentence.trim()}
                      </p>
                    ))}
                    
                    <div
                      className="about-success"
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        padding: "30px",
                        borderRadius: "12px",
                        marginTop: "25px",
                        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "15px",
                          lineHeight: "1.8",
                          margin: 0,
                          fontWeight: "400",
                        }}
                      >
                        {dict.about.description}
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
