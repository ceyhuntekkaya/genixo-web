import React from 'react'
import { Link } from 'react-router-dom'

export default function PricePlan() {
    return (
        <section className="cmt-row bg-base-grey clearfix">
            <div className="container">
                <div className="row mb_30">
                    <div className="col-lg-4">
                        <div className="pt-80 res-991-pt-0 res-991-pb-40">

                            <div className="section-title">
                                <div className="title-header">
                                    <h3>Pricing Plan</h3>
                                    <h2 className="title">Choose An Affordable Plan.</h2>
                                </div>
                                <div className="title-desc">
                                    <p>We are offering high quality services in wide range. You can have any of them according to your business and services needs.</p>
                                </div>
                            </div> 
                            <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark" to="/contact"><i className="icon-right"></i><span>see more plans</span></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">

                        <div className="cmt-pricing-plan pricing-recommended-plan">
                            <div className="cmt-p_table-head">
                                <div className="cmt-p_table-title"><h3>Regular Plan</h3></div>
                                <div className="cmt-p_table-desc">Quis autem vel eum iure reprehes derit quin voluptate velite</div>
                            </div>
                            <div className="cmt-p_table-body">
                                <div className="cmt-p_table-amount">
                                    <span className="cur_symbol">$</span>49.00<span className="pac_frequency">monthly</span>
                                </div>
                                <ul className="cmt-p_table-features">
                                    <li>IT Consulting</li>
                                    <li>Product Engineering</li>
                                    <li>Digital Solutions</li>
                                </ul>
                            </div>
                            <div className="cmt-p_table-footer">
                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/about">see more<i className="icon-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">

                        <div className="cmt-pricing-plan">
                            <div className="cmt-p_table-head">
                                <div className="cmt-p_table-title"><h3>Premium Plan</h3></div>
                                <div className="cmt-p_table-desc">Quis autem vel eum iure reprehes derit quin voluptate velite</div>
                            </div>
                            <div className="cmt-p_table-body">
                                <div className="cmt-p_table-amount">
                                    <span className="cur_symbol">$</span>99.00<span className="pac_frequency">monthly</span>
                                </div>
                                <ul className="cmt-p_table-features">
                                    <li>IT Consulting</li>
                                    <li>Product Engineering</li>
                                    <li>Digital Solutions</li>
                                </ul>
                            </div>
                            <div className="cmt-p_table-footer">
                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/about">see more<i className="icon-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
