import RelatedProductsSection from "@/app/component/related-products";
import ProductFeatures from "@/app/component/product-features";
import ProductProblems from "@/app/component/product-problems";
import PageHero from "@/app/component/page-hero";
import type { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";
import Image from "next/image";

type ProductsDict = Dictionary["products"];
type ProductKey = Exclude<keyof ProductsDict, "hero">;
type Product = ProductsDict[ProductKey];

interface ProductDetailProps {
  productKey: ProductKey;
  dict: Dictionary;
  locale: Locale;
}

export default async function ProductDetail({
  productKey,
  dict,
  locale,
}: ProductDetailProps) {
  const product = dict.products[productKey];

  if (!product) {
    return null;
  }

  // Get hero background image from product data
  const heroImage =
    "heroImage" in product && typeof product.heroImage === "string"
      ? product.heroImage
      : product.image1 || "/images/bg/page-banner.jpg";

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={product.name}
        subtitle={dict.about.slogan}
        description={product.summary}
        backgroundImage={heroImage}
      />

      {/* Content Section with Image */}
      <ContentSection product={product} locale={locale} />

      {/* Problems Section */}
      <ProductProblems product={product} />

      {/* Features Section */}
      <ProductFeatures product={product} locale={locale} />

      {/* Related Products Section */}
      <RelatedProductsSection
        locale={locale}
        currentProductKey={productKey}
        maxItems={3}
      />
    </>
  );
}

// Content Section Component
function ContentSection({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
}) {
  return (
    <section
      className="section section-padding"
      style={{ background: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-start g-4 g-lg-5">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="product-detail-image">
              <Image
                src={product.image1 || "/images/about-3.jpg"}
                alt={product.name}
                width={700}
                height={700}
                priority
              />
            </div>

            {/* Logo and CTA Button Below Image */}
            {product.webLink && product.webLink.trim() !== "" && (
              <div className="mt-4">
                {/* Logo */}
                {"logo" in product &&
                product.logo &&
                typeof product.logo === "string" ? (
                  <div className="product-logo-box">
                    <Image
                      src={product.logo}
                      alt={`${product.name} Logo`}
                      width={200}
                      height={60}
                      unoptimized
                    />
                  </div>
                ) : null}

                {/* CTA Button */}
                <a
                  href={product.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-visit-btn"
                >
                  <i className="fas fa-external-link-alt"></i>
                  {locale === "tr"
                    ? "Web Sitesini Ziyaret Edin"
                    : "Visit Website"}
                </a>
              </div>
            )}
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <div className="w-100">
              <h2 className="product-content-title">{product.summary}</h2>

              {product.description && (
                <div className="product-content-description">
                  <p>{product.description}</p>
                </div>
              )}

              {product.longDescription && (
                <div
                  className="product-content-description"
                  dangerouslySetInnerHTML={{
                    __html: product.longDescription,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Video Section */}
        {product.videoLink && product.videoLink.trim() !== "" && (
          <div className="row mt-5 pt-5">
            <div className="col-12">
              <div
                className="video-wrapper mx-auto"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                  maxWidth: "1000px",
                  background: "#000",
                }}
              >
                {product.videoLink.endsWith(".mp4") ? (
                  <video
                    controls
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  >
                    <source src={product.videoLink} type="video/mp4" />
                    {locale === "tr"
                      ? "Tarayıcınız video etiketini desteklemiyor."
                      : "Your browser does not support the video tag."}
                  </video>
                ) : (
                  <iframe
                    src={product.videoLink.replace("watch?v=", "embed/")}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={locale === "tr" ? "Ürün Videosu" : "Product Video"}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
