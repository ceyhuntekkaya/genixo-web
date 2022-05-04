import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectSection() {
  return (
    <section className="cmt-row padding_bottom_zero-section position-relative z-index-1 clearfix">
    <div className="container">
      {/* <!--row --> */}
      <div className="row">
        <div className="col-md-8">
          <div className="section-title">
            <div className="title-header">
              <h3>Case studies</h3>
              <h2 className="title">Our recent launched projects</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-end res-767-pb-30">
            <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark" to="/project"><i className="icon-right"></i><span>see more projects</span></Link>
          </div>
        </div>
      </div>{/* <!-- row end --> */}
    </div>
    <div className="container-fluid">
      {/* <!-- row --> */}
      <div className="row slick_slider ps-3 pe-3" data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "arrows":false, "autoplay":true, "dots":false, "infinite":true, "responsive":[{"breakpoint":1200,"settings": {"slidesToShow": 4}}, {"breakpoint":992,"settings":{"slidesToShow": 3}},{"breakpoint":768,"settings":{"slidesToShow": 2}},{"breakpoint":500,"settings":{"slidesToShow": 1}}]}'>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            <div className="featured-thumbnail">
              <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-01-700x800.jpg" alt="portfolio_img" />
            </div>
            <div className="featured-content">
              <span className="pf-icon"><img src="images/bootstrap1.png" alt="bootstrap" /></span>
              <div className="category">
                <span>Image Documentary</span>
              </div>
              <div className="featured-title">
                <h3><Link to="/portfolio">Bootstrap modal plugin</Link></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            <div className="featured-thumbnail">
              <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-02-700x800.jpg" alt="portfolio_img" />
            </div>
            <div className="featured-content">
              <span className="pf-icon"><img src="images/elementor1.png" alt="elementor" /></span>
              <div className="category">
                <span>SM Management</span>
              </div>
              <div className="featured-title">
                <h3><Link to="/portfolio">Elementor plugin</Link></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            <div className="featured-thumbnail">
              <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-03-700x800.jpg" alt="portfolio_img" />
            </div>
            <div className="featured-content">
              <span className="pf-icon"><img src="images/html-5.png" alt="html" /></span>
              <div className="category">
                <span>Software Development</span>
              </div>
              <div className="featured-title">
                <h3><Link to="/portfolio">HTML 5 language</Link></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            <div className="featured-thumbnail">
              <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-04-700x800.jpg" alt="portfolio_img" />
            </div>
            <div className="featured-content">
              <span className="pf-icon"><img src="images/rev-slider1.png" alt="rev-slider" /></span>
              <div className="category">
                <span>Revolution slider</span>
              </div>
              <div className="featured-title">
                <h3><Link to="/portfolio">Network Cabelling</Link></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            <div className="featured-thumbnail">
              <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-05-700x800.jpg" alt="portfolio_img" />
            </div>
            <div className="featured-content">
              <span className="pf-icon"><img src="images/wp1.png" alt="wp1" /></span>
              <div className="category">
                <span>Image Documentary</span>
              </div>
              <div className="featured-title">
                <h3><Link to="/portfolio">WordPress plugin</Link></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="featured-imagebox featured-imagebox-portfolio style1">
            <div className="featured-thumbnail">
              <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-06-700x800.jpg" alt="portfolio_img" />
            </div>
            <div className="featured-content">
              <span className="pf-icon"><img src="images/wp-bakery1.png" alt="html" /></span>
              <div className="category">
                <span>Author Projects</span>
              </div>
              <div className="featured-title">
                <h3><Link to="/portfolio">Wp bakery plugin</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>{/* <!-- row end--> */}
    </div>
  </section>
  )
}
