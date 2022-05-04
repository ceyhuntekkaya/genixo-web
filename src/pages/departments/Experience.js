import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import DepartmentMenu from './components/DepartmentMenu'

export default function Experience() {
    return (
        <React.Fragment>

            <div className="page">
                <header id="masthead" className="header cmt-header-style-01">
                    <TopBar />
                    <SiteHeaderMenu />
                </header>
                <PageTitle />
                <p className="rs-p-wp-fix"></p>
                <div className="site-main">
                    <div className="cmt-row sidebar cmt-sidebar-left clearfix">
                        <div className="container">

                            <div className="row">
                                <DepartmentMenu />
                                <div className="col-lg-8 content-area">
                                    <div className="cmt-service-single-content-area">
                                        <div className="cmt-service-description">
                                            <h3>App installation & cloud services</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <u><Link className="tm-skincolor" to="/consultancy"> tempor incididunt</Link></u> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                                            <div className="row g-0 border-rad_5 overflow-hidden mt-30">
                                                <div className="col-md-6 col-sm-12">

                                                    <div className="cmt-bg cmt-col-bgimage-yes col-bg-img-eight z-index-2">
                                                        <div className="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
                                                        <div className="layer-content">
                                                        </div>
                                                    </div>
                                                    <img className="img-fluid cmt-equal-height-image w-100" src="images/bg-image/col-bgimage-8.jpg" alt="bg-image" />
                                                </div>
                                                <div className="col-md-6">

                                                    <div className="col-bg-img-six cmt-bg cmt-col-bgimage-yes bg-base-dark h-100 p-30 ml_15 res-991-ml-0">
                                                        <div className="cmt-col-wrapper-bg-layer cmt-bg-layer">
                                                            <div className="cmt-col-wrapper-bg-layer-inner"></div>
                                                        </div>
                                                        <div className="layer-content d-flex flex-column justify-content-center">
                                                            <h2 className="fs-24">Our services includes</h2>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmods.</p>
                                                            <ul className="cmt-list fs-15 cmt-list-style-icon text-base-white">
                                                                <li>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <div className="cmt-list-li-content">Restroom Disinfection</div>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <div className="cmt-list-li-content">Hosting Services</div>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <div className="cmt-list-li-content">Cyber Security</div>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <div className="cmt-list-li-content">Content Engineering</div>
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <div className="cmt-list-li-content">Restroom Disinfection</div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mt-30">
                                                <h3>Servies we provide</h3>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-sm-6">

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
                                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/about">More Details<i className="icon-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">

                                                        <div className="featured-icon-box icon-align-top-content style1">
                                                            <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                                            <div className="featured-icon">
                                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                                    <i className="flaticon flaticon-server"></i>
                                                                </div>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h3>Backup &amp; recovery</h3>
                                                            </div>
                                                            <div className="featured-hover-content">
                                                                <div className="featured-title">
                                                                    <h3>Backup &amp; recovery</h3>
                                                                </div>
                                                                <div className="featured-desc">
                                                                    <p>The process of storing copies of data, organizations against of data.</p>
                                                                </div>
                                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/about2">More Details<i className="icon-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6">

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
                                                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" to="/service">More Details<i className="icon-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-30 res-575-mt-10">
                                                    <h3>Commercial Planning</h3>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <b>tempor incididunt</b> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="ttm_single_image-wrapper border-rad_5 overflow-hidden">
                                                                <img width="370" height="300" className="img-fluid" src="images/single-img-08.png" alt="single-08" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="ttm_single_image-wrapper border-rad_5 overflow-hidden res-575-mt-15">
                                                                <img width="370" height="300" className="img-fluid" src="images/single-img-09.jpg" alt="single-09" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <Footer />
                <Link id="totop" to="#top">
                    <i className="icon-angle-up"></i>
                </Link>
            </div>
        </React.Fragment>




    )
}
