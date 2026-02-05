import type { Dictionary } from "@/i18n/types";
import Image from "next/image";

type ProductKey = keyof Dictionary['products'];

interface ProductFeaturesProps {
  product: Dictionary['products'][ProductKey];
  locale: string;
}

export default function ProductFeatures({ product, locale }: ProductFeaturesProps) {
  // Check if product has features data
  if (
    !product.features ||
    !Array.isArray(product.features) ||
    product.features.length === 0
  ) {
    return null;
  }

  // Icon mapping for different feature cards
  const getIconPath = (index: number) => {
    const icons = [
      "/images/ser-icon13.png",
      "/images/ser-icon14.png",
      "/images/ser-icon15.png",
      "/images/ser-icon16.png",
    ];
    return icons[index % icons.length];
  };

  // Gradient colors for different cards
  const getGradientColor = (index: number) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    ];
    return gradients[index % gradients.length];
  };

  const sectionTitle = locale === 'tr' ? 'Temel Özellikler' : 'Key Features';
  const sectionSubtitle = locale === 'tr' ? 'Neler Sunuyoruz' : 'What We Offer';

  // Check if features are objects or strings
  const isObjectFeatures = typeof product.features[0] === 'object' && product.features[0] !== null;

  return (
    <div
      className="section genixo-choose-us-section section-padding products-section"
      style={{ backgroundImage: "url(/images/bg/choose-us-bg.jpg)" }}
    >
      <div className="container">
        <div className="choose-us-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title-modern">{sectionSubtitle}</h3>
            <h2 className="title">{sectionTitle}</h2>
          </div>

          <div className="choose-us-content-wrap">
            <div className="row">
              {product.features.map((feature, index) => {
                // Support both string and object formats
                const featureTitle = isObjectFeatures ? (feature as { title: string; description?: string }).title : (feature as string);
                const featureDescription = isObjectFeatures ? (feature as { title: string; description?: string }).description : undefined;
                
                return (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div className="choose-us-item-02 benefit-item">
                      <div className="benefit-icon-wrapper">
                        <div
                          className="benefit-icon-box"
                          style={{ background: getGradientColor(index) }}
                        >
                          <div className="benefit-icon-inner">
                            <Image
                              src={getIconPath(index)}
                              alt={featureTitle}
                              width={50}
                              height={50}
                              style={{ objectFit: "contain" }}
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                      <div className="choose-us-content">
                        <h3
                          className="title card-title-accent"
                          style={
                            {
                              "--card-accent": getGradientColor(index),
                            } as React.CSSProperties
                          }
                        >
                          {featureTitle}
                        </h3>
                        {featureDescription && <p>{featureDescription}</p>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
