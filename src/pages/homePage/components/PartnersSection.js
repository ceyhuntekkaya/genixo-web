import React from 'react'

export default function PartnersSection() {
  return (
    <section className="cmt-row partner-section bg-img4 clearfix">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          {/* <!-- cmt-fid --> */}
          <div className="cmt-fid inside cmt-fid-without-icon bg-base-grey style1">
            <div className="cmt-fid-contents">
              <h2 className="cmt-fid-inner">
                <span data-appear-animation="animateDigits"
                  data-from="0"
                  data-to="38"
                  data-interval="2"
                  data-before=""
                  data-before-style="sup"
                  data-after=""
                  data-after-style="sub"
                  className="numinate">
                  38
                </span><span>k+</span>
              </h2>
              <h3 className="cmt-fid-title">Partners in world wide</h3>
            </div>
          </div>{/* <!-- cmt-fid end --> */}
        </div>
        <div className="col-lg-8">
          <div className="d-sm-flex align-items-center justify-content-between border-bottom res-991-mt-40">
            <h3 className="fs-26 mb-20">Our Partners</h3>
            <p className="mb-20">Trusted by over <span className="text-base-skin fs-18"><strong><i>38k+</i></strong></span> Ambitious Brands Across the World</p>
          </div>
          {/* <!-- slick_slider --> */}
          <div className="slick_slider" data-slick='{"slidesToShow": 4, "slidesToScroll": 1, "arrows":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":1200,"settings":{"slidesToShow": 5}}, {"breakpoint":1024,"settings":{"slidesToShow": 4}}, {"breakpoint":777,"settings":{"slidesToShow": 3}},{"breakpoint":575,"settings":{"slidesToShow": 2}},{"breakpoint":380,"settings":{"slidesToShow": 1}}]}'>
            <div className="client-box">
              <div className="cmt-client-logo-tooltip">
                <div className="cmt-client-logo-tooltip-inner">
                  <div className="client-thumbnail">
                    <img width="152" height="60" className="img-fluid" src="images/client/client-01.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="client-box">
              <div className="cmt-client-logo-tooltip">
                <div className="cmt-client-logo-tooltip-inner">
                  <div className="client-thumbnail">
                    <img width="128" height="60" className="img-fluid" src="images/client/client-02.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="client-box">
              <div className="cmt-client-logo-tooltip">
                <div className="cmt-client-logo-tooltip-inner">
                  <div className="client-thumbnail">
                    <img width="142" height="60" className="img-fluid" src="images/client/client-03.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="client-box">
              <div className="cmt-client-logo-tooltip">
                <div className="cmt-client-logo-tooltip-inner">
                  <div className="client-thumbnail">
                    <img width="182" height="61" className="img-fluid" src="images/client/client-04.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="client-box">
              <div className="cmt-client-logo-tooltip">
                <div className="cmt-client-logo-tooltip-inner">
                  <div className="client-thumbnail">
                    <img width="142" height="60" className="img-fluid" src="images/client/client-03.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>{/* <!-- cmt-client end --> */}
        </div>
      </div>
    </div>
  </section>
  )
}
