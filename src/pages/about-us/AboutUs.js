import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import PartnersSection from '../homePage/components/PartnersSection'
import CustomesrSays from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

export default function AboutUs() {
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
                                <div className="col-xl-6 col-md-12 col-sm-12">
                                    <div className="ttm_single_image-wrapper d-table border-rad_5 overflow-hidden">
                                        <img width="1140" height="1300" className="img-fluid" src="images/single-img-01.jpg" alt="single-01" />
                                    </div>
                                    <div className="d-table bg-base-skin text-base-white position-relative mt_20 ml-30 pl-30 pr-30 pt-10 pb-10 border-rad_6">
                                        <div className="fs-16 lh-sm"><strong>410+</strong> Total Projects Complete</div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="pl-20 res-1199-pt-40 mb-20 res-1199-mb-0 res-1199-pl-0">

                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>About us</h3>
                                                <h2 className="title">Leveraging tech to drive a better IT experience</h2>
                                            </div>
                                            <div className="title-desc">
                                                <p>Devfox delivers the digital transformations and technology services from ideation to execution, enabling Global 20K clients to outperform the competition. Takes an agile, collaborative approach to creating customized solutions across the core digital value chain. Our expertise can get you there.</p>
                                            </div>
                                        </div>
                                        <div className="d-sm-flex pt-15 pb-40">
                                            <div className="d-flex res-575-mb-30">
                                                <div className="pl-10 bg-base-skin"></div>
                                                <div className="bg-base-grey d-flex justify-content-center flex-column p-20">
                                                    <h2 className="fs-20">We are giving worldclass services Since <span className="text-base-skin">1987</span></h2>
                                                </div>
                                            </div>
                                            <div className="ttm_single_image-wrapper text-start flex-grow-0 flex-shrink-0 flex-basis-auto">
                                                <img className="img-fluid" width="260" height="120" src="images/single-img-03.jpg" alt="single-03" />
                                            </div>
                                        </div>
                                        <a className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark" href="project-style-01.html"><i className="icon-right"></i><span>see more projects</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <WhyChooseUs />
                    <CustomesrSays />
                    <PartnersSection />
                </div>
                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>




    )
}
