import React from 'react'
import { Link } from "react-router-dom";

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
                                                <li className="active"><Link to="/">Homepage 1</Link></li>
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
                                                        <li><Link to="/about">About Us One</Link></li>
                                                        <li><Link to="/about2">About Us Two</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-link">Services</a>
                                                    <ul className="mega-submenu">
                                                        <li><Link to="/service">Services One</Link></li>
                                                        <li><Link to="/service2">Services Two</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/team">Our Team</Link></li>
                                                <li><Link to="/teammember">Team Details</Link></li>
                                                <li><Link to="/faq">FAQ</Link></li>
                                                <li><Link to="/error">Error Page</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">IT Solutions</a>
                                            <ul className="mega-submenu">
                                                <li><Link to="/consultancy">IT Consultancy</Link></li>
                                                <li><Link to="/experience">Experience Design</Link></li>
                                                <li><Link to="/digital">Digital Services</Link></li>
                                                <li><Link to="/data">Data Structuring</Link></li>
                                                <li><Link to="/advisory">Advisory Services</Link></li>
                                                <li><Link to="/content">Content Engineering</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">Case Study</a>
                                            <ul className="mega-submenu">
                                                <li><Link to="/project">Case Study</Link></li>
                                                <li><Link to="/portfolio">Case Study Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="#" className="mega-menu-link">IT Blog</a>
                                            <ul className="mega-submenu">
                                                <li><Link to="/bloglist">Blog Classic</Link></li>
                                                <li><Link to="/bloggrid">Blog Grid View</Link></li>
                                                <li><Link to="/blogsingle">Blog Single View</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                        <Link to="/contact">Contact us</Link>
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
