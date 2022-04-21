import React from 'react'

export default function Testimonials() {
  return (
    <section className="cmt-row padding_zero-section clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
               
                <div className="cmt-bg cmt-col-bgimage-yes col-bg-img-two spacing-3">
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
                                    <blockquote className="testimonial-text">We are still not sure how we got here, but we’re excited about where we’re going. Their innovators & engineer makes things easy. I'm referring them to my others partners</blockquote>
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
                                    <blockquote className="testimonial-text">Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. I recommend DevFox to others</blockquote>
                                    <div className="testimonial-caption">
                                        <h3>Er. john Martin</h3>
                                        <label>WordPress Expert</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cmt-horizontal_sep width-100 mt-40"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
