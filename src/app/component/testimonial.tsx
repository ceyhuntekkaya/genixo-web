"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <>
      <div className="section genixo-testimonial-section-02 genixo-testimonial-section-03 section-padding-02">
        <div className="container">
          <div className="testimonial-wrap-02">
            <div className="section-title text-center">
              <h3 className="sub-title-modern">Testimonial</h3>
              <h2 className="title">20k+ satisfied clients worldwide</h2>
            </div>
            <div className="testimonial-content-wrap-02">
              <div className="swiper-container testimonial-02-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-testimonial-02">
                      <div className="testimonial-thumb">
                        <div
                          style={{
                            position: "relative",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src="/images/testi-3.jpg"
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div
                          style={{
                            position: "relative",
                            width: "60px",
                            height: "60px",
                          }}
                        >
                          <Image
                            src="/images/testi-icon.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                            unoptimized
                          />
                        </div>
                        <p>
                          Accelerate innovation with world-className tech teams
                          Beyond more stoic this along goodness hey this this
                          wow manatee{" "}
                        </p>
                        <span className="name">Mike Holder </span>
                        <span className="designation"> / CEO, Harlond inc</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-testimonial-02">
                      <div className="testimonial-thumb">
                        <div
                          style={{
                            position: "relative",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src="/images/testi-4.jpg"
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div
                          style={{
                            position: "relative",
                            width: "60px",
                            height: "60px",
                          }}
                        >
                          <Image
                            src="/images/testi-icon.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                            unoptimized
                          />
                        </div>
                        <p>
                          Accelerate innovation with world-className tech teams
                          Beyond more stoic this along goodness hey this this
                          wow manatee{" "}
                        </p>
                        <span className="name">Mike Fermalin </span>
                        <span className="designation"> / CEO, Harlond inc</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-testimonial-02">
                      <div className="testimonial-thumb">
                        <div
                          style={{
                            position: "relative",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src="/images/testi-3.jpg"
                            alt=""
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div
                          style={{
                            position: "relative",
                            width: "60px",
                            height: "60px",
                          }}
                        >
                          <Image
                            src="/images/testi-icon.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                            unoptimized
                          />
                        </div>
                        <p>
                          Accelerate innovation with world-className tech teams
                          Beyond more stoic this along goodness hey this this
                          wow manatee{" "}
                        </p>
                        <span className="name">Mike Holder </span>
                        <span className="designation"> / CEO, Harlond inc</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
