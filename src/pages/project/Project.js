import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import PartnersSection from '../homePage/components/PartnersSection'
import LetsStarted from './components/LetsStarted'
import { Link } from "react-router-dom";

export default function Project() {
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
                    <section className="cmt-row padding_bottom_zero-section clearfix">
                        <div className="container">
                            <div className="row mt_15 mb_15">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="featured-thumbnail">
                                            <img width="700" height="800" className="img-fluid" src="images/portfolio/portfolio-01-700x800.jpg" alt="portfolio_img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="pf-icon"><img src="images/bootstrap1.png" alt="bootstrap" /></span>
                                            <div className="category">
                                                <span>Image Documentary</span>
                                            </div>
                                            <div className="featured-title">
                                                <h3><Link to="/portfolio">Bootstrap modal plugin</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="featured-thumbnail">
                                            <img width="700" height="800" className="img-fluid" src="images/portfolio/portfolio-02-700x800.jpg" alt="portfolio_img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="pf-icon"><img src="images/elementor1.png" alt="elementor" /></span>
                                            <div className="category">
                                                <span>SM Management</span>
                                            </div>
                                            <div className="featured-title">
                                                <h3><Link to="/portfolio">Elementor plugin</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                   
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="featured-thumbnail">
                                            <img width="700" height="800" className="img-fluid" src="images/portfolio/portfolio-03-700x800.jpg" alt="portfolio_img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="pf-icon"><img src="images/html-5.png" alt="html"/></span>
                                            <div className="category">
                                                <span>Software Development</span>
                                            </div>
                                            <div className="featured-title">
                                            <h3><Link to="/portfolio">HTML 5 language</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                  
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="featured-thumbnail">
                                            <img width="700" height="800" className="img-fluid" src="images/portfolio/portfolio-04-700x800.jpg" alt="portfolio_img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="pf-icon"><img src="images/rev-slider1.png" alt="rev-slider" /></span>
                                            <div className="category">
                                                <span>Revolution slider</span>
                                            </div>
                                            <div className="featured-title">
                                                <h3><Link to="/portfolio">Network Cabelling</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                  
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="featured-thumbnail">
                                            <img width="700" height="800" className="img-fluid" src="images/portfolio/portfolio-05-700x800.jpg" alt="portfolio_img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="pf-icon"><img src="images/wp1.png" alt="wp1" /></span>
                                            <div className="category">
                                                <span>Image Documentary</span>
                                            </div>
                                            <div className="featured-title">
                                                <h3><Link to="/portfolio">WordPress plugin</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                  
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="featured-thumbnail">
                                            <img width="700" height="800" className="img-fluid" src="images/portfolio/portfolio-06-700x800.jpg" alt="portfolio_img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="pf-icon"><img src="images/wp-bakery1.png" alt="html" /></span>
                                            <div className="category">
                                                <span>Author Projects</span>
                                            </div>
                                            <div className="featured-title">
                                                <h3><Link to="/portfolio">Wp bakery plugin</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </section>
                  <LetsStarted/>
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
