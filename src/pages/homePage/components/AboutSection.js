import React from 'react'

export default function AboutSection() {
  return (
    <section className="cmt-row about-section clearfix">
    <div className="container">
      {/* <!-- row --> */}
      <div className="row align-items-center">
        <div className="col-xl-6 col-md-12">
          <div className="ttm_single_image-wrapper d-table border-rad_5 overflow-hidden">
            <img width="1140" height="1300" className="img-fluid" src="images/single-img-01.jpg" alt="single-01" />
          </div>
          <div className="d-table bg-base-skin text-base-white position-relative mt_20 ml-30 pl-30 pr-30 pt-10 pb-10 border-rad_5">
            <div className="fs-16 lh-sm"><strong>410+</strong> Total Projects Complete</div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="res-1199-pt-40">
            {/* <!-- section title --> */}
            <div className="section-title">
              <div className="title-header">
                <h3>About Our Company</h3>
                <h2 className="title">We have a smart solution for each IT challenge</h2>
              </div>
              <div className="title-desc">
                <p>Devfox is high-tech industries play an important role in the modern economy & often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s for web applications reliable & solutions.</p>
              </div>
            </div>{/* <!-- section title end --> */}
            <div className="row pt-15 res-991-pt-0">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="fs-20">Custom Development</h3>
                <p>Our expert designer team will deliver enriched website with capabilities that grow business faster</p>
                <div className="cmt-horizontal_sep width-100 mt-25 pb-20"></div>
                <h3 className="fs-20">Software Development</h3>
                <p>Custom software will help create the necessary tools to effectively complete monitor improvement</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-table border-rad_5 overflow-hidden mb-15 res-991-mb-0 res-767-mt-30">
                  <div className="ttm_single_image-wrapper text-start">
                    <img width="810" height="519" className="img-fluid" src="images/single-img-02.jpg" alt="single-02" />
                    <div className="bg-base-dark text-left pt-15 pb-15 pl-25 pr-25">
                      <p className="mb-5"><img width="88" height="15" src="images/star-01.png" alt="rate-star" /></p>
                      <p className="text-base-white lh-base mb-0">Rated 4.7 out of 5 based on <br />over<strong><span className="text-base-skin"> 1000+ Reviews</span></strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* <!-- row end --> */}
    </div>
  </section>
  )
}
