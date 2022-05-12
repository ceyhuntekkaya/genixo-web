import React from 'react'
import { Link } from "react-router-dom";
const menuData = require('../../data/lang/menu.json')
const pageData = require("../../data/lang/pages.json")

export default function SiteHeaderMenu() {
    const lang = "en";
    return (
        <div id="site-header-menu" className="site-header-menu">
            <div className="site-header-menu-inner cmt-stickable-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-navigation d-flex align-items-center justify-content-between">
                                <div className="site-branding me-auto">
                                    <Link className="home-link" to="/" title="Devfox" rel="home">
                                        <img id="logo-img" height="60" width="300" className="img-fluid auto_size" src="images/logo.jpg" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                    <span className="menubar-box">
                                        <span className="menubar-inner"></span>
                                    </span>
                                </div>
                                <nav className="main-menu menu-mobile" id="menu">
                                    <ul className="menu">
                                        {
                                            menuData.menu.map(m =>
                                                <li className="mega-menu-item">
                                                    <Link to={m.sub ? "#" : m.link} className="mega-menu-link">{m[lang]}</Link>
                                                    {
                                                        m.sub ?
                                                            <ul className="mega-submenu">
                                                                {
                                                                    m.sub.map(sm =>
                                                                        <li className="mega-menu-item"><Link to={sm.sub ? "#" : sm.link} className="mega-menu-link">{sm[lang]}</Link>
                                                                            {
                                                                                sm.sub ?
                                                                                    <ul className="mega-submenu">
                                                                                        {
                                                                                            sm.sub.map(ssm =>
                                                                                                <li><Link to={ssm.sub ? "#" : ssm.link}>{ssm[lang]}</Link>
                                                                                                </li>
                                                                                            )
                                                                                        }
                                                                                    </ul>
                                                                                    : null
                                                                            }
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                            : null
                                                    }
                                                </li>
                                            )
                                        }
                                    </ul>
                                </nav> 
                                <div className="header_extra d-flex flex-row align-items-center">
                                    <div className="header_btn"><Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to={pageData.home.needHelp.link}>{pageData.home.needHelp[lang]}<i className="icon-right"></i></Link></div>
                                    <div className="header_search">
                                        <Link to="#" className="btn-default search_btn"><i className="icon-search-1"></i></Link>
                                        <div className="header_search_content">
                                            <div className="header_search_content_inner">
                                                <Link to="#" className="close_btn"><i className="icon-cancel-2"></i></Link>
                                                <form id="searchbox" method="get" action="#">
                                                    <input className="search_query" type="text" id="search_query_top" name="s" placeholder="Type Your Search..." />
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
