"use client";

import Image from "next/image";

export default function SolutionSection() {
  return (
    <>
      <div
        className="section genixo-case-study-section-02 section-padding"
        style={{ backgroundImage: "url(/images/bg/case-study-bg.jpg)" }}
      >
        <div className="container">
          <div className="case-study-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title-modern">From our Case studies</h3>
              <h2 className="title white">We delivered best solution</h2>
            </div>
          </div>
        </div>
        <div className="case-study-content-wrap">
          <div className="swiper-container case-study-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="single-case-study-02">
                  <div className="case-study-img">
                    <a href="#">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          minHeight: "300px",
                        }}
                      >
                        <Image
                          src="/images/case-4.jpg"
                          alt=""
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized
                        />
                      </div>
                    </a>
                  </div>
                  <div className="case-study-content">
                    <p className="sub-title">Database Security</p>
                    <h3 className="title">
                      <a href="#">
                        <span>Structure</span> <br />{" "}
                        <span>of Malnufication</span>
                      </a>
                    </h3>
                    <p className="text">
                      Accelerate innovation with world-className tech teams
                      We’ll match you to an entire remote team of incredible
                      freelance talent for all your{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="single-case-study-02">
                  <div className="case-study-img">
                    <a href="#">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          minHeight: "300px",
                        }}
                      >
                        <Image
                          src="/images/case-5.jpg"
                          alt=""
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized
                        />
                      </div>
                    </a>
                  </div>
                  <div className="case-study-content">
                    <p className="sub-title">Database Security</p>
                    <h3 className="title">
                      <a href="#">
                        <span>Multifunctional</span> <br />{" "}
                        <span>of Technology</span>
                      </a>
                    </h3>
                    <p className="text">
                      Accelerate innovation with world-className tech teams
                      We’ll match you to an entire remote team of incredible
                      freelance talent for all your{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="single-case-study-02">
                  <div className="case-study-img">
                    <a href="#">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          minHeight: "300px",
                        }}
                      >
                        <Image
                          src="/images/case-6.jpg"
                          alt=""
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized
                        />
                      </div>
                    </a>
                  </div>
                  <div className="case-study-content">
                    <p className="sub-title">Database Security</p>
                    <h3 className="title">
                      <a href="#">
                        <span>Blockchain</span> <br />{" "}
                        <span>of technology</span>
                      </a>
                    </h3>
                    <p className="text">
                      Accelerate innovation with world-className tech teams
                      We’ll match you to an entire remote team of incredible
                      freelance talent for all your{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
}
