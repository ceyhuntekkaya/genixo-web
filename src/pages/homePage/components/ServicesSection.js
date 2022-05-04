import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesSection() {
    return (<React.Fragment>
        <section className="cmt-row services-section bg-img2 cmt-bgimage-yes cmt-bg clearfix">
            <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- section title --> */}
                        <div className="section-title title-style-center_text res-991-mb_20">
                            <div className="title-header">
                                <h3>Our Statistics</h3>
                                <h2 className="title text-base-white">A Collection of Our Work</h2>
                            </div>
                        </div>{/* <!-- section title end --> */}
                    </div>
                    <div className="col-lg-12">
                        <div className="d-table p-40 bg-base-skin position-relative border-rad_5 text-center m-auto me-lg-0 ms-lg-auto mt_110 res-991-mt-40 z-index-1 cmt-play-icon">
                            <div className="cmt-play-icon-animation">
                                <a href="https://youtu.be/7e90gBu4pas" target="_self" className="cmt_prettyphoto">
                                    <div className="cmt-icon cmt-icon_element-border border-2 cmt-icon_element-color-white cmt-icon_element-size-md cmt-icon_element-style-rounded mb-0">
                                        <i className="fas fa-play fs-20"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="pt-130 pb-100 res-991-p-0"></div>
                    </div>
                </div>
                {/* <!-- row end --> */}
            </div>
        </section>
        <section className="cmt-row padding_zero-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cmt-bg cmt-col-bgcolor-yes bg-base-white cmt-bg spacing-1 border-rad_10 overflow-visible mb_15">
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <!-- section title --> */}
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h3>our services</h3>
                                            <h2 className="title">We provide IT & Business solutions</h2>
                                        </div>
                                    </div>{/* <!-- section title end --> */}
                                </div>
                                <div className="col-lg-6">
                                    <p>We enable the world’s leading companies with cutting-edge digital & IT service as a competitive advantage ahead of schedule.</p>
                                    <ul className="cmt-list cmt-bordered-lists cmt-list-style-icon cmt-list-icon-color-skincolor text-base-dark">
                                        <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Connect to a wide range of API’s that will innovate and increase customer</span></li>
                                        <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Visitors can browse with peace of mind without exposing any personal data.</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-cloud"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-cloud"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>Hosting Services</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>Hosting Services</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>One's website is placed on the same server as many other clients.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-server"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>Backup & recovery</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>Backup & recovery</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>The process of storing copies of data, organizations against of data.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/experience">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-cyber-security"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-cyber-security"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>Cyber Security</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>Cyber Security</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>It is a Practice of protecting networks from digital marketing.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/digital">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-data-management"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-data-management"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>Management services</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>Management services</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>The robust solution needs to be deliver a wide range of features.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/data">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-gear"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-gear"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>Cloud Services</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>Cloud Services</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Infrastructure, platforms, and software that are by third-party</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/advisory">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1 active">
                                        <div className="bg_icon"><i className="flaticon flaticon-cyber-security-1"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-cyber-security-1"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>Network Security</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>Network Security</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Any activities designed to protect the usability & integrity of network</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/content">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-communities"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-communities"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>IT Consulting</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>IT Consulting</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>A management of Computer repairs maintenance of networks.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    {/* <!--featured-icon-box--> */}
                                    <div className="featured-icon-box icon-align-top-content style1">
                                        <div className="bg_icon"><i className="flaticon flaticon-support"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-support"></i>
                                            </div>
                                        </div>
                                        <div className="featured-title">
                                            <h3>24/7 Support</h3>
                                        </div>
                                        <div className="featured-hover-content">
                                            <div className="featured-title">
                                                <h3>24/7 Support</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Range of customer services to assist client in making effective</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/experience">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div>{/* <!-- featured-icon-box end--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </React.Fragment>

    )
}
