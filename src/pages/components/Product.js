import React from "react";

export default function Product() {
  return (
    <section id="cta-3" className="cta-section division">
      <div className="cta-3-holder bg-lightgrey">
        <div className="container">
          <div className="bg-white cta-3-wrapper">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-lg-6">
                <div className="cta-3-txt p-7 text-center">
                  <a href="https://www.ilccentre.com" target="_blank">
                    <img
                      src="images/ilclogo.png"
                      className="w-50 pb-7"
                      alt=""
                    />
                  </a>
                  <div className="w-full">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/OdfJ9m0wYv0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-lg-6">
                <div className="cta-3-txt p-7 text-center">
                  <a href="https://www.catchupper.com" target="_blank">
                    <img
                      src="images/catchupperlogo.png"
                      className="w-50"
                      alt=""
                    />
                  </a>
                  <div className="w-full pt-7">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/WHA9kK1UHxg"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
