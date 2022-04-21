import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import DepartmantLinks from './components/DepartmantLinks'

export default function Faq() {
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

                  
                    <section className="cmt-row padding_bottom_zero-section bg-layer-equal-height clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                 
                                    <div className="section-title title-style-center_text">
                                        <div className="title-header">
                                            <h3>have any questions?</h3>
                                            <h2 className="title">Recently Asked Questions?</h2>
                                        </div>
                                        <div className="title-desc"><p>Devfox delivers the digital transformations and technology services from ideation to execution, enabling Global 20K clients to outperform the competition.</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mt-15">
                                
                                    <div className="cmt-bg cmt-col-bgimage-yes col-bg-img-seven z-index-2 border-rad_5 overflow-hidden">
                                        <div className="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
                                        <div className="layer-content">
                                        </div>
                                    </div>
                                    <img className="img-fluid cmt-equal-height-image w-100 border-rad_5" src="images/bg-image/col-bgimage-7.jpg" alt="bg-image" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion mt-15 mb-20 res-991-mt-40 res-991-mb-0">
                                      
                                        <div className="toggle cmt-toggle_style_classic cmt-control-right-true">
                                            <div className="toggle-title"><a href="#" className="active">Will send me a progress report of basis detailing the work?</a></div>
                                            <div className="toggle-content show">
                                                <p>We will send you a report every two weeks (i.e. after each sprint, when the next version of the software is completed) or every month if you prefer. The reports include info on what we plan to achieve in the next sprint.</p>
                                            </div>
                                        </div>
                                      
                                        <div className="toggle cmt-toggle_style_classic cmt-control-right-true">
                                            <div className="toggle-title"><a href="#">How much time will it take for you to make my app?</a></div>
                                            <div className="toggle-content">
                                                <p>we will give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we’ll be able to estimate how long will it take.</p>
                                            </div>
                                        </div>
                                       
                                        <div className="toggle cmt-toggle_style_classic cmt-control-right-true">
                                            <div className="toggle-title"><a href="#"> How can I be sure you work at my project ASAP declare?</a></div>
                                            <div className="toggle-content">
                                                <p>We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Devfox to track time spent on your project. we can quickly assign additional team</p>
                                            </div>
                                        </div>
                                       
                                        <div className="toggle cmt-toggle_style_classic cmt-control-right-true">
                                            <div className="toggle-title"><a href="#">What you about say your Business palnning?</a></div>
                                            <div className="toggle-content">
                                                <p>We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Devfox to track time spent on your project. we can quickly assign additional team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   <DepartmantLinks/>


                </div>




                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>



    )
}
