import React from 'react'
import { Link } from 'react-router-dom'

export default function DepartmantLinks() {
    return (
        <section className="cmt-row grid-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="featured-icon-box icon-align-before-content style4">
                            <div className="featured-icon">
                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                    <i className="flaticon-cloud"></i>
                                </div>
                            </div>
                            <div className="featured-content">
                                <span className="number"></span>
                                <div className="featured-title">
                                    <h3><Link to="/consultancy">IT Services</Link></h3>
                                </div>
                                <div className="featured-desc">
                                    <p>Gain digital transformations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="featured-icon-box icon-align-before-content style4">
                            <div className="featured-icon">
                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                    <i className="flaticon-cyber-security"></i>
                                </div>
                            </div>
                            <div className="featured-content">
                                <span className="number"></span>
                                <div className="featured-title">
                                    <h3><Link to="/consultancy">Effective data</Link></h3>
                                </div>
                                <div className="featured-desc">
                                    <p>A safe and structured is keys</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">

                        <div className="featured-icon-box icon-align-before-content style4">
                            <div className="featured-icon">
                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                    <i className="flaticon-server"></i>
                                </div>
                            </div>
                            <div className="featured-content">
                                <span className="number"></span>
                                <div className="featured-title">
                                    <h3><Link to="/consultancy">IT Threat Security</Link></h3>
                                </div>
                                <div className="featured-desc">
                                    <p>Take safety to the next level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
