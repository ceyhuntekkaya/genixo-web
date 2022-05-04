import React from 'react'
import { Link } from 'react-router-dom'

export default function OurServices() {
  return (
    <section className="cmt-row padding_top_zero-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cmt-bg cmt-col-bgcolor-yes cmt-left-span bg-base-white spacing-7 border-rad_10 mb_15">
                            <div className="cmt-col-wrapper-bg-layer cmt-bg-layer border-rad_10"></div>
                            <div className="layer-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>our services</h3>
                                                <h2 className="title">We Provide IT & Business Solutions</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>We’ll help you navigate today’s ever-changing business environment with teams of
                                        technical experts of industry experience.</p>
                                        <ul className="cmt-list cmt-bordered-lists cmt-list-style-icon cmt-list-icon-color-skincolor text-base-dark">
                                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Connect to a wide range of API’s that will innovate and increase customer</span></li>
                                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">We are maintaining critical IT infrastructure versus a reactive approach</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="featured-icon-box icon-align-top-content style9">
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
                                                    <h3><Link to="/consultancy">Hosting Services</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>One's website is placed on the same server as many other clients.</p>
                                                </div>
                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="featured-icon-box icon-align-top-content style9">
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
                                                    <h3><Link to="/experience">Backup & recovery</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>The process of storing copies of data, organizations against of data.</p>
                                                </div>
                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/experience">More Details<i className="icon-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="featured-icon-box icon-align-top-content style9">
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
                                                    <h3><Link to="/digital">Cyber Security</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>It is a Practice of protecting networks from digital marketing.</p>
                                                </div>
                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/digital">More Details<i className="icon-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                       
                                        <div className="featured-icon-box icon-align-top-content style9">
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
                                                    <h3><Link to="/data">Management services</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>The robust solution needs to be deliver a wide range of features.</p>
                                                </div>
                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/data">More Details<i className="icon-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="featured-icon-box icon-align-top-content style9">
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
                                                    <h3><Link to="/advisory">Cloud Services</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Infrastructure, platforms, and software that are by third-party</p>
                                                </div>
                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/advisory">More Details<i className="icon-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="featured-icon-box icon-align-top-content style9">
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
                                                    <h3><Link to="content">Network Security</Link></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Any activities designed to protect the usability & integrity of network</p>
                                                </div>
                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="content">More Details<i className="icon-right"></i></Link>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mt-25 mb-10 text-center text-base-dark">Stop wasting time and money on technology. <Link to="/about" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline"> Explore our company</Link></div>
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
