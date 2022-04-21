import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import Faq from './components/Faq'
import HowWeWork from './components/HowWeWork'
import MeetOurTeam from './components/MeetOurTeam'

export default function AboutUs2() {
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
                    <section className="cmt-row about-section clearfix">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="res-991-pb-15">
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>About us</h3>
                                                <h2 className="title">We help business teams to be productive & creative</h2>
                                            </div>
                                            <div className="title-desc">
                                                <p>Devfox delivers the digital transformations and technology services from ideation to execution, enabling Global 20K clients to outperform the competition. It Takes an agile, collaborative approach to creating customized solutions across the core of a digital value chain. Our expertise can get you there.</p>
                                            </div>
                                        </div>
                                        <div className="pt-15">
                                            <h2 className="fs-18">If you're in a hurry, Quickly call us.<br/> Our supporters are
                                                <span className="text-base-skin"> 24/7 </span>and will help you asap.</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">

                                                <div className="featured-icon-box icon-align-before-content p-20 bg-base-grey border-rad_5">
                                                    <div className="featured-icon">
                                                        <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-round">
                                                            <i className="flaticon flaticon-phone-call"></i>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content">
                                                        <div className="featured-title">
                                                            <h2 className="fs-18 mb-0">Contact Us</h2>
                                                            <h3 className="text-base-skin mb-0">+000 897 4561</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">

                                                <div className="featured-icon-box icon-align-before-content p-20 bg-base-grey border-rad_5">
                                                    <div className="featured-icon">
                                                        <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-color-darkgrey cmt-icon_element-size-sm cmt-icon_element-style-round">
                                                            <i className="flaticon flaticon-clock"></i>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content">
                                                        <div className="featured-title">
                                                            <h2 className="fs-18 mb-0">Working Hours</h2>
                                                            <p className="mb-0">Mon-Sat 09:00-06:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 col-sm-12">
                                    <div className="ttm_single_image-wrapper d-table border-rad_5 overflow-hidden">
                                        <img width="1140" height="1200" className="img-fluid" src="images/single-img-04.jpg" alt="single-04" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <HowWeWork />
                    <Faq />
                    <MeetOurTeam />
                </div>
                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>
    )
}
