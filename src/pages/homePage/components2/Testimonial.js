import React from 'react'
import { Link } from 'react-router-dom'

export default function Testimonial() {
  return (
    <section className="cmt-row padding_top_zero-section bg-img10 cmt-bgimage-yes cmt-bg clearfix">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="cmt-bg cmt-col-bgimage-yes pt-60 res-991-pt-0">
                    <div className="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
                    <div className="layer-content">
                        <div className="slick_slider" data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "arrows":false, "autoplay":true, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 1}},{"breakpoint":840,"settings":{"slidesToShow": 1}}]}'>
                            <div className="testimonials cmt-testimonial-box-view-style1">
                                <div className="testimonial-content">
                                    <div className="testimonial-quote-icon">
                                        <i className="icon-quote-right-alt"></i>
                                    </div>
                                    <blockquote className="testimonial-text">We are still not sure how we got here, but we’re excited about where we’re going. Their innovators & engineer makes things easy and in a timely matter.</blockquote>
                                    <div className="testimonial-caption">
                                        <h3>Victor Wilson</h3>
                                        <label>Web Developer</label>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonials cmt-testimonial-box-view-style1"> 
                                <div className="testimonial-content">
                                    <div className="testimonial-quote-icon">
                                        <i className="icon-quote-right-alt"></i>
                                    </div>
                                    <blockquote className="testimonial-text">An excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</blockquote>
                                    <div className="testimonial-caption">
                                        <h3>Aenna Bell</h3>
                                        <label>IT Manager</label>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonials cmt-testimonial-box-view-style1"> 
                                <div className="testimonial-content">
                                    <div className="testimonial-quote-icon">
                                        <i className="icon-quote-right-alt"></i>
                                    </div>
                                    <blockquote className="testimonial-text">An excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</blockquote>
                                    <div className="testimonial-caption">
                                        <h3>Er. john Martin</h3>
                                        <label>WordPress Expert</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cmt-horizontal_sep width-100 mt-40 mb-70 res-991-mt-15 res-991-mb-35"></div>
                        <div className="row g-0">
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Let’s get started</h3>
                                        <h2 className="title">Are you ready to get <span className="text-base-skin">IT</span> Solutions?</h2>
                                    </div>
                                </div>
                                <div className="row mt_15">
                                    <div className="col-lg-5 col-sm-6">
                                        <div className="featured-icon-box icon-align-before-title">
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-style-round cmt-icon_element-color-grey cmt-icon_element-size-xs">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3 className="fs-18 fw-normal">Experts around the world</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="featured-icon-box icon-align-before-title">
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-style-round cmt-icon_element-color-grey cmt-icon_element-size-xs">
                                                    <i className="fas fa-check"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3 className="fs-18 fw-normal">Best Practice for industry</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark mt-50 res-991-mt-30" to="/project"><i className="icon-right"></i><span>see more plans</span></Link>
                            </div>
                            <div className="col-lg-4">
                                <div className="res-991-mt-30 ml_60 res-991-ml-0">
                                    <img width="443" height="285" className="img-fluid" src="images/single-img-icons.png" alt="single-img-icons"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>
  )
}
