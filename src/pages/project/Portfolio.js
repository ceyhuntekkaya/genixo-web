import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'

export default function Portfolio() {
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
                    <section className="cmt-row project-single-section pt-80 pb-80 clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cmt-pf-single-content-wrapper cmt-pf-view-left-image">
                                        <div className="cmt-pf-single-content-wrapper-innerbox">
                                            <div className="cmt-pf-detail-box">
                                                <div className="ttm_pf_image-wrapper">
                                                    <img width="1200" height="800" className="img-fluid" src="images/portfolio/portfolio-01-1200x800.jpg" alt="portfolio-img" />
                                                </div>
                                                <div className="cmt-pf-single-detail-box">
                                                    <div className="cmt-pf-single-detail-box-title">
                                                        <h4>Bootstrap modal plugin</h4>
                                                    </div>
                                                    <ul className="cmt-pf-detailbox-list">
                                                        <li><span>Project Name: </span><span>Software Management</span></li>
                                                        <li><span>Clients: </span><span>David Joni Poller</span></li>
                                                        <li><span>Category: </span><span>Technology / Ideas</span></li>
                                                        <li><span>Project Year: </span><span>August 09, 2021</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="cmt-pf-single-content-area">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h2>How It Works</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="row mb-30">
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="ttm_single_image-wrapper border-rad_6 overflow-hidden mt-15 mb-15">
                                                            <img width="1200" height="800" className="img-fluid" src="images/blog/blog-02-1200x800.jpg" alt="blog-02" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="ttm_single_image-wrapper border-rad_6 overflow-hidden mt-15 mb-15">
                                                            <img width="1200" height="800" className="img-fluid" src="images/blog/blog-01-1200x800.jpg" alt="blog-01" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="ttm_single_image-wrapper border-rad_6 overflow-hidden mt-15 mb-15">
                                                            <img width="1200" height="800" className="img-fluid" src="images/blog/blog-05-1200x800.jpg" alt="blog-05" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2>Personal Experience</h2>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                      
                                                        <div className="featured-icon-box icon-align-top-content style5">
                                                            <div className="featured-icon">
                                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-xl">
                                                                    <i className="flaticon-world"></i>
                                                                </div>
                                                            </div>
                                                            <div className="featured-content">
                                                                <div className="featured-title">
                                                                    <h3>Digital Marketing</h3>
                                                                </div>
                                                                <div className="featured-desc pb-5">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etfacilisis.</p>
                                                                </div>
                                                                <Link className="cmt-btn btn-inline cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor" to="/contact">view more<i className="icon-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                     
                                                        <div className="featured-icon-box icon-align-top-content style5">
                                                            <div className="featured-icon">
                                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-skincolor cmt-icon_element-size-xl">
                                                                    <i className="flaticon-cloud"></i>
                                                                </div>
                                                            </div>
                                                            <div className="featured-content">
                                                                <div className="featured-title">
                                                                    <h3>Web Development</h3>
                                                                </div>
                                                                <div className="featured-desc pb-5">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etfacilisis.</p>
                                                                </div>
                                                                <Link className="cmt-btn btn-inline cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor" to="/contact">view more<i className="icon-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="social-media-block">
                                                    <div className="d-sm-flex align-items-center justify-content-between">
                                                        <div className="mt-10">
                                                            <div className="cmt-pf-single-category"><span>Tag:</span>
                                                                <a href="#" rel="tag">Image Documentary</a>
                                                            </div>
                                                        </div>
                                                        <div className="cmt-social-share-wrapper mt-10">
                                                            <ul className="social-icons">
                                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cmt-nextprev-bottom-nav">
                                                    <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark" to="/teammember"><i className="icon-right"></i><span>Previous</span></Link>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>


                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>







    )
}
