import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import DepartmentMenu from './components/DepartmentMenu'

export default function DijitalService() {
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
                                        <div className="ttm_fatured_image-wrapper mb-40 res-575-mb-20">
                                            <img width="770" height="500" className="img-fluid" src="images/services/services-01-770x500.jpg" alt="services-1" />
                                        </div>
                                        <div className="cmt-service-description">
                                            <h3>App installation & cloud services</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="featured-icon-box icon-align-before-title">
                                                        <div className="featured-icon">
                                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                                                                <i className="flaticon-suitcase"></i>
                                                            </div>
                                                        </div>
                                                        <div className="featured-title">
                                                            <h3>Growing Your Business Quick</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="featured-icon-box icon-align-before-title">
                                                        <div className="featured-icon">
                                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                                                                <i className="flaticon-project"></i>
                                                            </div>
                                                        </div>
                                                        <div className="featured-title">
                                                            <h3>Leading your business smartly</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="featured-icon-box icon-align-before-title">
                                                        <div className="featured-icon">
                                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-lg">
                                                                <i className="flaticon-cloud"></i>
                                                            </div>
                                                        </div>
                                                        <div className="featured-title">
                                                            <h3>Bring with experiences Team</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                <h3>Areas of expertise</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                                <div className="pt-15">

                                                    <div className="cmt-progress-bar" data-percent="65%">
                                                        <div className="progressbar-title">App Development</div>
                                                        <div className="progress-bar-inner">
                                                            <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                                                        </div>
                                                        <div className="progress-bar-percent" data-percentage="65">65%</div>
                                                    </div>

                                                    <div className="cmt-progress-bar clearfix" data-percent="75%">
                                                        <div className="progressbar-title">Technology Solution</div>
                                                        <div className="progress-bar-inner">
                                                            <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                                                        </div>
                                                        <div className="progress-bar-percent" data-percentage="75">75%</div>
                                                    </div>

                                                    <div className="cmt-progress-bar clearfix" data-percent="90%">
                                                        <div className="progressbar-title">Business Growth</div>
                                                        <div className="progress-bar-inner">
                                                            <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                                                        </div>
                                                        <div className="progress-bar-percent" data-percentage="90">90%</div>
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
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>



    )
}
