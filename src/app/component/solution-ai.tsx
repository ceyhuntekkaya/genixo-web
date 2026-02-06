"use client";

import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import { getProductSlug } from "@/utils/slugMapping";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type ProductsDict = Dictionary["products"];
type RealProductKey = Exclude<keyof ProductsDict, "hero">;
type RealProduct = ProductsDict[RealProductKey];

interface PageProps {
  dict: Dictionary;
  locale: Locale;
}
export default function SolutionAISection({ dict, locale }: PageProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  if (!dict.solutionAI) {
    return null;
  }

  const solutionAI = dict.solutionAI;

  // Video URL'yi embed formatına çevir
  const getEmbedUrl = (url: string): string => {
    if (!url) return "";

    // YouTube URL'leri
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    // Vimeo URL'leri
    if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }

    // Zaten embed URL ise
    if (url.includes("embed")) {
      return url;
    }

    return url;
  };

  // Ana sayfada gösterilecek product'ları al (hero entry hariç)
  const homepageProducts = Object.keys(dict.products)
    .filter((key) => {
      if (key === "hero") return false;
      const product = dict.products[key as keyof typeof dict.products];
      return (
        product &&
        "active" in product &&
        product.active !== false &&
        product.showOnHomepage === true
      );
    })
    .slice(0, 2) // İlk 2 product'ı al
    .map((key) => {
      const productKey = key as RealProductKey;
      const product = dict.products[productKey];
      const productSlug = getProductSlug(productKey);
      return { key: productKey, product, slug: productSlug };
    })
    .filter(
      (item): item is { key: RealProductKey; product: RealProduct; slug: string } =>
        item.product != null && item.slug != null && "name" in item.product
    );

  if (homepageProducts.length === 0) {
    return null;
  }

  const firstProduct = homepageProducts[0];
  const otherProducts = homepageProducts.slice(1);

  const openVideo = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const embedUrl = getEmbedUrl(url);
    setVideoUrl(embedUrl);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <div
      className="section genixo-solution-section section-padding"
      style={{ marginBottom: "60px" }}
    >
      <div className="container">
        <div className="solution-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title-modern">
              {solutionAI.weDeliverExcellence}
            </h3>
            <h2 className="title">{solutionAI.solutionsToCommonAIProblems}</h2>
          </div>
          <div className="solution-content-wrap">
            <div className="row">
              {firstProduct && (
                <div className="col-lg-7">
                  <div
                    className="solution-item solution-item-big"
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      height: "100%",
                    }}
                  >
                    <div
                      className="solution-img solution-img-big"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          minHeight: "420px",
                        }}
                        className="solution-img-container-big"
                      >
                        <Image
                          src={
                            firstProduct.product.image1 ||
                            "/images/solution-1.jpg"
                          }
                          alt={firstProduct.product.name}
                          fill
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                          unoptimized
                        />
                        {/* Gradient overlay */}
                        <div
                          className="gradient-overlay"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
                            pointerEvents: "none",
                            transition: "background 0.3s ease",
                          }}
                        />
                      </div>

                      {/* Play button - merkeze yerleştirildi */}
                      {firstProduct.product.videoLink && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: "none",
                          }}
                        >
                          <button
                            onClick={(e) =>
                              openVideo(firstProduct.product.videoLink!, e)
                            }
                            className="play-btn-center"
                            title="Videoyu İzle"
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              background: "rgba(255, 255, 255, 0.98)",
                              border: "3px solid rgba(102, 126, 234, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              zIndex: 3,
                              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                              transition: "all 0.3s ease",
                              position: "relative",
                              pointerEvents: "auto",
                            }}
                          >
                            <i
                              className="fas fa-play"
                              style={{
                                color: "#667eea",
                                fontSize: "28px",
                                marginLeft: "5px",
                              }}
                            ></i>
                            <div
                              className="play-pulse"
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                border: "2px solid rgba(102, 126, 234, 0.6)",
                                animation: "pulse 2s infinite",
                              }}
                            />
                          </button>
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/${locale}/products/${firstProduct.slug}`}
                      className="solution-content solution-link"
                      style={{
                        padding: "25px 25px 25px 25px",
                        background: "rgba(255,255,255,0.98)",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "all 0.3s ease",
                        borderTop: "2px solid transparent",
                      }}
                    >
                      <div className="solution-title">
                        <h4
                          className="sub-title"
                          style={{
                            fontSize: "13px",
                            color: "#667eea",
                            marginBottom: "10px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {firstProduct.product.summary?.substring(0, 30) ||
                            "Product"}
                        </h4>
                        <h3
                          className="title"
                          style={{
                            marginBottom: "0",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "22px",
                              fontWeight: "700",
                              color: "#1a1a1a",
                              transition: "color 0.3s ease",
                            }}
                          >
                            {firstProduct.product.name}
                          </span>
                        </h3>
                      </div>
                      <div
                        className="arrow-icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "rgba(102, 126, 234, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className="fas fa-arrow-right"
                          style={{
                            color: "#667eea",
                            fontSize: "16px",
                            transition: "transform 0.3s ease",
                          }}
                        ></i>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              {otherProducts.length > 0 && (
                <div
                  className="col-lg-5 solution-right-column"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {otherProducts.map((item, index) => (
                    <div key={item.key} style={{ flex: "1", minHeight: 0 }} className="solution-item-wrapper">
                      <div
                        className="solution-item solution-item-sm"
                        style={{
                          height: "100%",
                          borderRadius: "10px",
                          overflow: "hidden",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div
                          className="solution-img solution-img-small"
                          style={{
                            height: "100%",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "100%",
                            }}
                            className="solution-img-container-small"
                          >
                            <Image
                              src={
                                item.product.image1 ||
                                (index === 0
                                  ? "/images/solution-img2.jpg"
                                  : "/images/solution-img3.jpg")
                              }
                              alt={item.product.name}
                              fill
                              style={{
                                objectFit: "cover",
                                transition: "transform 0.3s ease",
                              }}
                              unoptimized
                            />
                            {/* Gradient overlay */}
                            <div
                              className="gradient-overlay"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background:
                                  "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
                                pointerEvents: "none",
                                transition: "background 0.3s ease",
                              }}
                            />
                          </div>

                          {/* Play button - merkeze yerleştirildi */}
                          {item.product.videoLink && (
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                pointerEvents: "none",
                              }}
                            >
                              <button
                                onClick={(e) =>
                                  openVideo(item.product.videoLink!, e)
                                }
                                className="play-btn-center play-btn-small"
                                title="Videoyu İzle"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  borderRadius: "50%",
                                  background: "rgba(255, 255, 255, 0.98)",
                                  border: "2px solid rgba(102, 126, 234, 0.3)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  cursor: "pointer",
                                  zIndex: 3,
                                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                                  transition: "all 0.3s ease",
                                  position: "relative",
                                  pointerEvents: "auto",
                                }}
                              >
                                <i
                                  className="fas fa-play"
                                  style={{
                                    color: "#667eea",
                                    fontSize: "20px",
                                    marginLeft: "3px",
                                  }}
                                ></i>
                                <div
                                  className="play-pulse"
                                  style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    border:
                                      "2px solid rgba(102, 126, 234, 0.6)",
                                    animation: "pulse 2s infinite",
                                  }}
                                />
                              </button>
                            </div>
                          )}
                        </div>
                        <Link
                          href={`/${locale}/products/${item.slug}`}
                          className="solution-content solution-link"
                          style={{
                            padding: "20px",
                            background: "rgba(255,255,255,0.98)",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            transition: "all 0.3s ease",
                            borderTop: "2px solid transparent",
                          }}
                        >
                          <div className="solution-title">
                            <h4
                              className="sub-title"
                              style={{
                                fontSize: "12px",
                                color: "#667eea",
                                marginBottom: "8px",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {item.product.summary?.substring(0, 25) ||
                                "Product"}
                            </h4>
                            <h3 className="title" style={{ marginBottom: "0" }}>
                              <span
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "700",
                                  color: "#1a1a1a",
                                  transition: "color 0.3s ease",
                                }}
                              >
                                {item.product.name}
                              </span>
                            </h3>
                          </div>
                          <div
                            className="arrow-icon"
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                              background: "rgba(102, 126, 234, 0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className="fas fa-arrow-right"
                              style={{
                                color: "#667eea",
                                fontSize: "14px",
                                transition: "transform 0.3s ease",
                              }}
                            ></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <div
          onClick={closeVideo}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <button
            onClick={closeVideo}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#333",
              zIndex: 10000,
              transition: "all 0.3s ease",
            }}
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "16/9",
              background: "#000",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <iframe
              src={videoUrl}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Hover effects CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .solution-item {
          position: relative;
        }

        .solution-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12) !important;
        }

        .solution-item:hover .solution-img img {
          transform: scale(1.05);
        }

        /* Hover olduğunda gradient daha koyu olsun */
        .solution-item:hover .gradient-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ) !important;
        }

        /* Play button hover */
        .play-btn-center:hover {
          transform: scale(1.15) !important;
          background: rgba(255, 255, 255, 1) !important;
          border-color: rgba(102, 126, 234, 0.8) !important;
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5) !important;
        }

        .play-btn-small:hover {
          transform: scale(1.15) !important;
        }

        /* Solution link hover */
        .solution-link:hover {
          background: rgba(255, 255, 255, 1) !important;
          border-top-color: rgba(102, 126, 234, 0.3) !important;
        }

        .solution-link:hover .title span {
          color: #667eea !important;
        }

        .solution-link:hover .arrow-icon {
          background: rgba(102, 126, 234, 0.2) !important;
          transform: translateX(5px);
        }

        .solution-link:hover .arrow-icon i {
          transform: translateX(3px);
        }

        /* Tablet görünümü için */
        @media (max-width: 991px) {
          .col-lg-7 {
            margin-bottom: 24px;
          }
          
          .solution-right-column {
            gap: 20px !important;
          }
          
          .solution-item-wrapper {
            min-height: 350px;
          }
          
          .solution-img-container-big {
            min-height: 350px !important;
          }
          
          .solution-img-container-small {
            min-height: 250px !important;
          }
        }
        
        /* Mobil görünüm için */
        @media (max-width: 767px) {
          .col-lg-7,
          .col-lg-5 {
            margin-bottom: 20px;
          }
          
          .solution-right-column {
            gap: 16px !important;
          }
          
          .solution-item-wrapper {
            min-height: 300px;
          }
          
          .solution-img-container-big {
            min-height: 280px !important;
          }
          
          .solution-img-container-small {
            min-height: 200px !important;
          }
          
          .solution-content {
            padding: 18px !important;
          }
          
          .solution-title h3.title span {
            font-size: 18px !important;
          }
          
          .solution-title h4.sub-title {
            font-size: 11px !important;
          }
          
          .arrow-icon {
            width: 32px !important;
            height: 32px !important;
          }
          
          .arrow-icon i {
            font-size: 13px !important;
          }
          
          .play-btn-center {
            width: 60px !important;
            height: 60px !important;
          }
          
          .play-btn-center i {
            font-size: 22px !important;
          }
          
          .play-btn-small {
            width: 50px !important;
            height: 50px !important;
          }
          
          .play-btn-small i {
            font-size: 18px !important;
          }
        }
        
        /* Küçük mobil cihazlar için */
        @media (max-width: 576px) {
          .solution-item-wrapper {
            min-height: 280px;
          }
          
          .solution-img-container-big {
            min-height: 250px !important;
          }
          
          .solution-img-container-small {
            min-height: 180px !important;
          }
          
          .solution-content {
            padding: 15px !important;
          }
          
          .solution-title h3.title span {
            font-size: 16px !important;
          }
          
          .solution-title h4.sub-title {
            font-size: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
