import React from 'react'

export default function LetsStarted() {
    return (
        <section className="cmt-row bg-img4 clearfix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">

                        <div className="section-title">
                            <div className="title-header">
                                <h3>Let’s get started</h3>
                                <h2 className="title">Are you ready to get <span className="text-base-skin">IT</span> Solutions?</h2>
                            </div>
                        </div>
                        <div className="row mt_15">
                            <div className="col-sm-6">
                                <div className="featured-icon-box icon-align-before-title">
                                    <div className="featured-icon">
                                        <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-style-round cmt-icon_element-color-grey cmt-icon_element-size-xs">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="featured-title">
                                        <h3 className="fs-16 fw-normal">Experts around the world</h3>
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
                                        <h3 className="fs-16 fw-normal">Best Practice for industry</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark mt-50 res-991-mt-30" href="portfolio-single.html"><i className="icon-right"></i><span>see more plans</span></a>
                    </div>
                    <div className="col-lg-4">
                        <div className="res-991-mt-30 ml_60 res-991-ml-0">
                            <img width="443" height="285" className="img-fluid" src="images/single-img-icons.png" alt="single-img-icons" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
