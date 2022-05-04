import React from 'react'
import { Link } from 'react-router-dom'
export default function Pricing() {
  return (
    <section className="cmt-row pricing-section clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                    <div className="title-header">
                        <h3>Pricing & Plan</h3>
                        <h2 className="title">Our Awesome Pricing Plans</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb_30 mt-15">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="cmt-pricing-plan pricing-recommended-plan_1">
                    <div className="cmt-p_table-icon">
                        <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                            <i className="flaticon flaticon-secure-shield"></i>
                        </div>
                    </div>
                    <div className="cmt-p_table-head">
                        <div className="cmt-p_table-title"><h3>Regular Plan</h3></div>
                        <div className="cmt-p_table-desc">Quis autem vel eum iure reprehes derit quin voluptate velite</div>
                    </div>
                    <div className="cmt-p_table-body">
                        <div className="cmt-p_table-amount">
                            <span className="cur_symbol">$</span>19.00<span className="pac_frequency">monthly</span>
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
                <div className="cmt-pricing-plan pricing-recommended-plan">
                    <div className="cmt-p_table-icon">
                        <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                            <i className="flaticon flaticon-diamond"></i>
                        </div>
                    </div>
                    <div className="cmt-p_table-head">
                        <div className="cmt-p_table-title"><h3>Premium Plan</h3></div>
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
                <div className="cmt-pricing-plan pricing-recommended-plan_1">
                    <div className="cmt-p_table-icon">
                        <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                            <i className="flaticon flaticon-medal"></i>
                        </div>
                    </div>
                    <div className="cmt-p_table-head">
                        <div className="cmt-p_table-title"><h3>Extended Plan</h3></div>
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
