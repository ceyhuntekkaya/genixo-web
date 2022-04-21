import React from 'react'

export default function Testimonials() {
  return (
    <section className="cmt-row padding_zero-section mt_65 res-991-mt-0 clearfix">
    <div className="container">
        <div className="row">
            <div className="col-xl-5 col-lg-8 col-md-8 col-sm-10">
                <div className="ttm_single_image-wrapper position-relative d-table border-rad_5 overflow-hidden mr-10 res-991-mr-0 res-991-mt-60 z-index-1">
                    <img width="493" height="356" className="img-fluid w-100" src="images/single-img-06.jpg" alt="single-06" />
                    <div className="d-table text-start bg-base-dark text-base-white p-30 pt-20 pb-20 pr-40">
                        <div className="fs-16 lh-lg"><span className="mr-10"><strong className="underline">99.9% Customer Satisfaction</strong> based on <b className="text-base-skin">750+</b> reviews and <b className="text-base-skin">14,530 </b> Objective Resource</span><img className="d-inline" src="images/star-01.png" width="88" height="15" alt="rating" /></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-7">
                <div className="cmt-bg cmt-col-bgcolor-yes bg-base-grey cmt-right-span cmt-expandcontent-yes spacing-4">
                    <div className="cmt-col-wrapper-bg-layer cmt-bg-layer bg-base-grey"></div>
                    <div className="layer-content cmt-expandcontent_column">
                        <div className="row slick_slider" data-slick='{"slidesToShow": 2, "slidesToScroll": 1, "arrows":false, "autoplay":true, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 2}},{"breakpoint":767,"settings":{"slidesToShow": 1}}]}'>
                            <div className="col-lg-6">
                              
                                <div className="testimonials cmt-testimonial-box-view-style2">
                                    <div className="testimonial-content">
                                        <div className="testimonial-avatar">
                                            <div className="testimonial-img">
                                                <img width="70" height="70" className="img-fluid" src="images/testimonial/01.jpg" alt="testimonial-img" />
                                            </div>
                                        </div>
                                        <div className="testimonial-caption">
                                            <h3>Victor Wilson</h3>
                                            <label>Web Developer</label>
                                        </div>
                                        <blockquote className="testimonial-text">We are still not sure how we got here, but we’re excited about where we’re going. Their innovators & engineer makes things easy and in a timely matter.</blockquote>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-6">
                               
                                <div className="testimonials cmt-testimonial-box-view-style2">
                                    <div className="testimonial-content">
                                        <div className="testimonial-avatar">
                                            <div className="testimonial-img">
                                                <img width="70" height="70" className="img-fluid" src="images/testimonial/02.jpg" alt="testimonial-img" />
                                            </div>
                                        </div>
                                        <div className="testimonial-caption">
                                            <h3>Aenna Bell</h3>
                                            <label>IT Manager</label>
                                        </div>
                                        <blockquote className="testimonial-text">An excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</blockquote>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-6">
                                
                                <div className="testimonials cmt-testimonial-box-view-style2">
                                    <div className="testimonial-content">
                                        <div className="testimonial-avatar">
                                            <div className="testimonial-img">
                                                <img width="70" height="70" className="img-fluid" src="images/testimonial/03.jpg" alt="testimonial-img" />
                                            </div>
                                        </div>
                                        <div className="testimonial-caption">
                                            <h3>Er. john Martin</h3>
                                            <label>WordPress Expert</label>
                                        </div>
                                        <blockquote className="testimonial-text">An excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</blockquote>
                                    </div>
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
