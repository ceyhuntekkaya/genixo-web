import React from 'react'
import { Link } from 'react-router-dom'

export default function OurCompany() {
  return (
    <section className="cmt-row padding_zero-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cmt-bg cmt-col-bgcolor-yes bg-base-white cmt-bg spacing-8 border-rad_10 overflow-visible mb_15">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title title-style-center_text">
                                        <div className="title-header">
                                            <h3>Our Company</h3>
                                            <h2 className="title">How can we help you?</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="featured-imagebox featured-imagebox-services style3">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid auto_size" src="images/services/services-01.jpg" alt="genixo" height="370" width="250"/>
                                        </div>
                                        <div className="featured-content">
                                            <div className="ser_category">Our Service</div>
                                            <div className="featured-title">
                                                <h3><Link to="/contact">How we can help</Link></h3>
                                            </div>
                                            <div className="ser_readmore"><Link to="/contact" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="featured-imagebox featured-imagebox-services style3">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid auto_size" src="images/services/services-02.jpg" alt="genixo" height="370" width="250"/>
                                        </div>
                                        <div className="featured-content">
                                            <div className="ser_category">Our expertise</div>
                                            <div className="featured-title">
                                                <h3><Link to="/contact">Why partner with us</Link></h3>
                                            </div>
                                            <div className="ser_readmore"><Link to="/contact" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="featured-imagebox featured-imagebox-services style3">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid auto_size" src="images/services/services-03.jpg" alt="genixo" height="370" width="250"/>
                                        </div>
                                        <div className="featured-content">
                                            <div className="ser_category">Our customers</div>
                                            <div className="featured-title">
                                                <h3><Link to="/contact">Client success stories</Link></h3>
                                            </div>
                                            <div className="ser_readmore"><Link to="/contact" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></Link></div>
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
