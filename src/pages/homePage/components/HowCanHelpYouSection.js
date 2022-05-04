import React from 'react'
import { Link } from 'react-router-dom'

export default function HowCanHelpYouSection() {
  return (
    <React.Fragment>
      <section className="cmt-row bg-base-dark cmt-bg cmt-bgimage-yes bg-img1 clearfix">
        <div className="cmt-row-wrapper-bg-layer cmt-bg-layer bg-base-dark"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- section title --> */}
              <div className="section-title style2 res-991-mb_20">
                <div className="title-header">
                  <h3>Our Company</h3>
                  <h2 className="title">How can we help you?</h2>
                </div>
                <div className="title-desc">
                  <p>Devfox delivers digital transformations and technology services from ideation to execution, enabling Global 20K clients. The collaborative approach that creates customized solutions across the digital value chain.</p>
                </div>
              </div>{/* <!-- section title end --> */}
              <div className="pb-60 res-991-p-0"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="cmt-row padding_zero-section clearfix">
        <div className="container">
          <div className="row mt_140 res-991-mt-40">
            <div className="col-lg-4 col-md-4 col-sm-12">
              {/* <!--featured-imagebox-services--> */}
              <div className="featured-imagebox featured-imagebox-services style1">
                {/* <!-- featured-thumbnail --> */}
                <div className="featured-thumbnail">
                  <Link to="/consultancy"><img className="img-fluid auto_size" src="images/services/services-01.jpg" alt="image" width="740" height="500" /></Link>
                </div>{/* <!-- featured-thumbnail end--> */}
                <div className="featured-content">
                  <div className="ser_category">Our Service</div>
                  <div className="featured-title">
                    <h3>How we can help</h3>
                  </div>
                  <div className="ser_num"></div>
                  <div className="ser_readmore"><Link to="/consultancy" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></Link></div>
                </div>
              </div>{/* <!-- featured-imagebox-services end--> */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              {/* <!--featured-imagebox-services--> */}
              <div className="featured-imagebox featured-imagebox-services style1">
                {/* <!-- featured-thumbnail --> */}
                <div className="featured-thumbnail">
                  <Link to="/experience"><img className="img-fluid auto_size" src="images/services/services-02.jpg" alt="image" width="740" height="500" /></Link>
                </div>{/* <!-- featured-thumbnail end--> */}
                <div className="featured-content">
                  <div className="ser_category">Our expertise</div>
                  <div className="featured-title">
                    <h3>Why partner with us</h3>
                  </div>
                  <div className="ser_num"></div>
                  <div className="ser_readmore"><Link to="/experience" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></Link></div>
                </div>
              </div>{/* <!-- featured-imagebox-services end--> */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              {/* <!--featured-imagebox-services--> */}
              <div className="featured-imagebox featured-imagebox-services style1">
                {/* <!-- featured-thumbnail --> */}
                <div className="featured-thumbnail">
                  <Link to="/digital"><img className="img-fluid auto_size" src="images/services/services-03.jpg" alt="image" width="740" height="500" /></Link>
                </div>{/* <!-- featured-thumbnail end--> */}
                <div className="featured-content">
                  <div className="ser_category">Our customers</div>
                  <div className="featured-title">
                    <h3>Client success stories</h3>
                  </div>
                  <div className="ser_num"></div>
                  <div className="ser_readmore"><Link to="/digital" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></Link></div>
                </div>
              </div>{/* <!-- featured-imagebox-services end--> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-25 text-center text-base-dark">Stop wasting time and money on technology. <Link to="/about" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline">Explore our company</Link></div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}
