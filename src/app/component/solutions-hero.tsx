"use client";

import type { Dictionary } from "@/i18n/types";

interface SolutionsHeroProps {
  dict: Dictionary;
}

export default function SolutionsHero({ dict }: SolutionsHeroProps) {
  return (
    <div
      className="section genixo-hero-section-03 d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(/images/solutions-main-final.jpg)` }}
    >
      {/* Overlay for better text readability */}
      <div className="hero-overlay"></div>
      
      <div className="shape-1 hero-shape-animate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 944 894"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="PSgrad_0_solutions"
              x1="88.295%"
              x2="0%"
              y1="0%"
              y2="46.947%"
            >
              <stop offset="0%" stopColor="rgb(67,186,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(113,65,177)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="rgb(43, 142, 254)"
            d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
          />
          <path
            fill="url(#PSgrad_0_solutions)"
            d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
          />
        </svg>
      </div>
      <div
        className="shape-2 hero-shape-animate"
        style={{ animationDelay: "0.2s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 726.5 726.5"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            stroke="rgb(255, 255, 255)"
            strokeWidth="1px"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity="0.302"
            fill="none"
            d="M28.14,285.269 L325.37,21.216 C358.860,-8.852 410.655,-5.808 440.723,28.14 L704.777,325.37 C734.846,358.860 731.802,410.654 697.979,440.723 L400.956,704.777 C367.133,734.845 315.338,731.802 285.269,697.979 L21.216,400.955 C-8.852,367.132 -5.808,315.337 28.14,285.269 Z"
          />
        </svg>
      </div>
      <div
        className="shape-3 hero-shape-animate"
        style={{ animationDelay: "0.4s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 515 515"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="PSgrad_1_solutions"
              x1="0%"
              x2="89.879%"
              y1="0%"
              y2="43.837%"
            >
              <stop offset="0%" stopColor="rgb(67,186,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(113,65,177)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="rgb(43, 142, 254)"
            d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"
          />
          <path
            fill="url(#PSgrad_1_solutions)"
            d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"
          />
        </svg>
      </div>
      <div
        className="shape-4 hero-shape-animate"
        style={{ animationDelay: "0.3s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 972.5 970.5"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            stroke="rgb(255, 255, 255)"
            strokeWidth="1px"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
            d="M38.245,381.103 L435.258,28.158 C480.467,-12.32 549.697,-7.964 589.888,37.244 L942.832,434.257 C983.23,479.466 978.955,548.697 933.746,588.888 L536.733,941.832 C491.524,982.23 422.293,977.955 382.103,932.746 L29.158,535.733 C-11.32,490.524 -6.963,421.293 38.245,381.103 Z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-12 col-sm-11 col-md-10 col-lg-10 col-xl-8 mx-auto mx-md-0">
            <div className="hero-content hero-content-animate">
              <h3 className="sub-title hero-subtitle-animate">
                {dict.about.slogan}
              </h3>
              <h1 className="title hero-title-animate">
                {dict.menu.Solutions}
              </h1>
              <p className="description hero-description-animate">
                {dict.seo?.solutions?.description ||
                  "Web uygulaması, mobil geliştirme, bulut çözümleri, DevOps ve veri bilimi hizmetleri."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
