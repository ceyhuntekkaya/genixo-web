import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div id="site-header-menu" className="site-header-menu">
    <div className="site-header-menu-inner cmt-stickable-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                   
                    <div className="site-navigation d-flex align-items-center justify-content-between">
                       
                        <div className="site-branding me-auto">
                            <Link className="home-link" to="/" title="Devfox" rel="home">
                                <img id="logo-img" height="48" width="147" className="img-fluid auto_size" src="images/logo-img.svg" alt="logo-img"/>
                            </Link>
                        </div>
                        <div className="btn-show-menu-mobile menubar menubar--squeeze">
                            <span className="menubar-box">
                                <span className="menubar-inner"></span>
                            </span>
                        </div>
                        
                        <nav className="main-menu menu-mobile" id="menu">
                            <ul className="menu">
                                <li className="mega-menu-item active">
                                    <Link to="#" className="mega-menu-link">Home</Link>
                                    <ul className="mega-submenu">
                                        <li><Link to="/">Homepage 1</Link></li>
                                        <li className="active"><Link to="/2">Homepage 2</Link></li>
                                        <li><Link to="/h3">Homepage 3</Link></li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <Link to="#" className="mega-menu-link">Company</Link>
                                    <ul className="mega-submenu">
                                        <li className="mega-menu-item">
                                            <Link to="#" className="mega-menu-link">About Us</Link>
                                            <ul className="mega-submenu">
                                                <li><Link to="/about">About Us One</Link></li>
                                                <li><Link to="/about2">About Us Two</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <Link to="#" className="mega-menu-link">Services</Link>
                                            <ul className="mega-submenu">
                                                <li><Link to="/service">Services One</Link></li>
                                                <li><Link to="/service2">Services Two</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/team">Our Team</Link></li>
                                        <li><Link to="team-details">Team Details</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/error">Error Page</Link></li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <Link to="#" className="mega-menu-link">IT Solutions</Link>
                                    <ul className="mega-submenu">
                                        <li><Link to="/consultancy">IT Consultancy</Link></li>
                                        <li><Link to="/experience">Experience Design</Link></li>
                                        <li><Link to="/digital">Digital Services</Link></li>
                                        <li><Link to="/data">Data Structuring</Link></li>
                                        <li><Link to="/advisory">Advisory Services</Link></li>
                                        <li><Link to="content">Content Engineering</Link></li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <Link to="#" className="mega-menu-link">Case Study</Link>
                                    <ul className="mega-submenu">
                                        <li><Link to="/project">Case Study 01</Link></li>
                                        <li><Link to="/project">Case Study 02</Link></li>
                                        <li><Link to="/portfolio">Case Study Single</Link></li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <Link to="#" className="mega-menu-link">IT Blog</Link>
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
                        </nav> 
                        
                        <div className="header_extra d-flex flex-row align-items-center">
                            <div className="header_btn"><Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/contact">Need A Help<i className="icon-right"></i></Link></div>
                            <div className="header_search">
                                <Link to="#" className="btn-default search_btn"><i className="icon-search-1"></i></Link>
                                <div className="header_search_content">
                                    <div className="header_search_content_inner">
                                        <Link to="#" className="close_btn"><i className="icon-cancel-2"></i></Link>
                                        <form id="searchbox" method="get" action="#">
                                            <input className="search_query" type="text" id="search_query_top" name="s" placeholder="Type Your Search..." value=""/>
                                            <button type="submit" className="btn close-search"><i className="icon-search-1"></i></button>
                                        </form>
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
  )
}
