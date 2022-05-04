import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../about-us/components/Testimonials'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import HowCanHelpYouSection from '../homePage/components/HowCanHelpYouSection'
import HowItWorksSection from '../homePage/components/HowItWorksSection'
import PricePlan from './components/PricePlan'
import QuickFact from './components/QuickFact'

export default function Service() {
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
                                <div className="col-xl-12">

                                    <div className="section-title style2 res-991-pb-15">
                                        <div className="title-header">
                                            <h3>Our Services</h3>
                                            <h2 className="title">The smartest IT, smartest solutions!</h2>
                                        </div>
                                        <div className="title-desc">
                                            <p>Devfox IT Company can offer a range of flexible IT & data services. We are in the enviable position of having access to our own data centre & infrastructure. We can build completely bespoke solutions.</p>
                                            <Link to="/consultancy" className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor">view More<i className="icon-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb_15">
                                <div className="col-lg-4 col-md-6 col-sm-6">

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
                                <div className="col-lg-4 col-md-6 col-sm-6">

                                    <div className="featured-icon-box icon-align-before-content style4">
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                                <i className="flaticon-cyber-security"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <span className="number"></span>
                                            <div className="featured-title">
                                                <h3><Link to="/experience">Effective data</Link></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>A safe and structured is keys</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">

                                    <div className="featured-icon-box icon-align-before-content style4">
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                                <i className="flaticon-server"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <span className="number"></span>
                                            <div className="featured-title">
                                                <h3><Link to="/digital">IT Threat Security</Link></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Take safety to the next level.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">

                                    <div className="featured-icon-box icon-align-before-content style4">
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                                <i className="flaticon-award"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <span className="number"></span>
                                            <div className="featured-title">
                                                <h3><Link to="/data">Cloud Services</Link></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Our scalable cloud migration</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">

                                    <div className="featured-icon-box icon-align-before-content style4">
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                                <i className="flaticon-mission"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <span className="number"></span>
                                            <div className="featured-title">
                                                <h3><Link to="/advisory">E-Commerce</Link></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Direct to consumer commerce</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">

                                    <div className="featured-icon-box icon-align-before-content style4 active">
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                                <i className="flaticon-world"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <span className="number"></span>
                                            <div className="featured-title">
                                                <h3><Link href="/content">Digital Security</Link></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Create resilient cyber security</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <QuickFact />
                    <HowCanHelpYouSection />
                    <HowItWorksSection />
                    <PricePlan />
                    <Testimonials />
                </div>
                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>
    )
}
