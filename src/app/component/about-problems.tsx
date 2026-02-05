import type { Dictionary } from "@/i18n/types";
import Image from "next/image";

interface AboutProblemsProps {
  dict: Dictionary;
}

export default function AboutProblems({ dict }: AboutProblemsProps) {
  // Check if about has whyDigitalTransformation data
  if (
    !dict.about.whyDigitalTransformation ||
    !Array.isArray(dict.about.whyDigitalTransformation.problems) ||
    dict.about.whyDigitalTransformation.problems.length === 0
  ) {
    return null;
  }

  const { subtitle, title, problems } = dict.about.whyDigitalTransformation;

  // Icon mapping for different benefit cards
  const getIconPath = (index: number) => {
    const icons = [
      "/images/ser-icon13.png",
      "/images/ser-icon14.png",
      "/images/ser-icon15.png",
      "/images/ser-icon16.png",
      "/images/ser-icon13.png",
      "/images/ser-icon14.png",
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
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div
      className="section genixo-choose-us-section section-padding"
      style={{ backgroundImage: "url(/images/bg/choose-us-bg.jpg)" }}
    >
      <div className="container">
        <div className="choose-us-wrap">
          <div className="section-title text-center">
            <h3 className="sub-title-modern">{subtitle}</h3>
            <h2 className="title">{title}</h2>
          </div>

          <div className="choose-us-content-wrap">
            <div className="row">
              {problems.map((problem, index) => (
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
                            alt={problem.title}
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
                        {problem.title}
                      </h3>
                      <p className="mb-3" style={{ lineHeight: "1.6" }}>
                        {problem.problem}
                      </p>
                      <div
                        className="solution-box"
                        style={{
                          background: "rgba(67, 186, 255, 0.05)",
                          borderLeft: "3px solid",
                          borderImage: getGradientColor(index),
                          borderImageSlice: 1,
                          padding: "12px 15px",
                          borderRadius: "4px",
                          marginTop: "15px",
                        }}
                      >
                        <p
                          className="mb-0"
                          style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                        >
                          <strong style={{ color: "#2b8efe" }}>✓ Çözüm:</strong>{" "}
                          {problem.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
