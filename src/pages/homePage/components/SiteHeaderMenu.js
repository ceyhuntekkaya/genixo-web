import React from 'react'

export default function SiteHeaderMenu() {
    return (
        <div id="site-header-menu" className="site-header-menu">
            <div className="site-header-menu-inner cmt-stickable-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--site-navigation --> */}
                            <div className="site-navigation d-flex align-items-center justify-content-between">
                                {/* <!-- site-branding --> */}
                                <div className="site-branding me-auto">
                                    <a className="home-link" href="index.html" title="Devfox" rel="home">
                                        <img id="logo-img" height="48" width="147" className="img-fluid auto_size" src="images/logo-img.svg" alt="logo-img" />
                                    </a>
                                </div>{/* <!-- site-branding end --> */}
                                <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                    <span className="menubar-box">
                                        <span className="menubar-inner"></span>
                                    </span>
                                </div>
                                {/* <!-- menu --> */}
                                <nav className="main-menu menu-mobile" id="menu">
                                    <ul className="menu">
                                        <li className="mega-menu-item active">
                                            <a href="#" className="mega-menu-link">Home</a>
                                            <ul className="mega-submenu">
                                                <li className="active"><a href="index.html">Homepage 1</a></li>
                                                <li><a href="homepage-2.html">Homepage 2</a></li>
                                                <li><a href="homepage-3.html">Homepage 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">Company</a>
                                            <ul className="mega-submenu">
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-link">About Us</a>
                                                    <ul className="mega-submenu">
                                                        <li><a href="about-us.html">About Us One</a></li>
                                                        <li><a href="about-us-2.html">About Us Two</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-link">Services</a>
                                                    <ul className="mega-submenu">
                                                        <li><a href="services-1.html">Services One</a></li>
                                                        <li><a href="services-2.html">Services Two</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="our-team.html">Our Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="error.html">Error Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">IT Solutions</a>
                                            <ul className="mega-submenu">
                                                <li><a href="it-consultancy.html">IT Consultancy</a></li>
                                                <li><a href="experience-design.html">Experience Design</a></li>
                                                <li><a href="digital-services.html">Digital Services</a></li>
                                                <li><a href="data-structuring.html">Data Structuring</a></li>
                                                <li><a href="advisory-services.html">Advisory Services</a></li>
                                                <li><a href="content-engineering.html">Content Engineering</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">Case Study</a>
                                            <ul className="mega-submenu">
                                                <li><a href="project-style-01.html">Case Study 01</a></li>
                                                <li><a href="project-style-02.html">Case Study 02</a></li>
                                                <li><a href="portfolio-single.html">Case Study Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">IT Blog</a>
                                            <ul className="mega-submenu">
                                                <li><a href="blog.html">Blog Classic</a></li>
                                                <li><a href="blog-grid.html">Blog Grid View</a></li>
                                                <li><a href="blog-single.html">Blog Single View</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="contact-us.html">Contact us</a>
                                        </li>
                                    </ul>
                                </nav>{/* <!-- menu end --> */}
                                {/* <!-- header_extra --> */}
                                <div className="header_extra d-flex flex-row align-items-center">
                                    <div className="header_btn"><a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" href="contact-us.html">Need A Help<i className="icon-right"></i></a></div>
                                    <div className="header_search">
                                        <a href="#" className="btn-default search_btn"><i className="icon-search-1"></i></a>
                                        <div className="header_search_content">
                                            <div className="header_search_content_inner">
                                                <a href="#" className="close_btn"><i className="icon-cancel-2"></i></a>
                                                <form id="searchbox" method="get" action="#">
                                                    <input className="search_query" type="text" id="search_query_top" name="s" placeholder="Type Your Search..." value="" />
                                                    <button type="submit" className="btn close-search"><i className="icon-search-1"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* <!-- header_extra end --> */}
                            </div>{/* <!-- site-navigation end--> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
