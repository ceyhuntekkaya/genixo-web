import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header id="masthead" className="header cmt-header-style-02">
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
                                                    <li><Link to="/h2">Homepage 2</Link></li>
                                                    <li className="active"><Link to="/h3">Homepage 3</Link></li>
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
                                                    <li><Link to="/teammember">Team Details</Link></li>
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
             
            <div className="cmt-header-box-inner">
                  <p className="rs-p-wp-fix"></p>
                <rs-module-wrap id="rev_slider_3_1_wrapper" data-source="gallery">
                    <rs-module id="rev_slider_3_1" style={{}} data-version="6.5.9">
                        <rs-slides>
                            <rs-slide data-key="rs-1" data-title="Slide" data-thumb="images/slides/slider-mainbg-005.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">

                                <img src="images/slides/slider-mainbg-005.jpg" title="slider-img-01.jpg" width="1920" height="750" className="rev-slidebg tp-rs-img" data-no-retina/>
                                <rs-layer
                                    id="slider-1-slide-1-layer-0" 
                                    data-type="text"
                                    data-color="#ff382f"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,0;yo:191px,185px,83px,80px;"
                                    data-text="w:normal;s:16,16,16,14;l:26,26,26,24;fw:700;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:190;sp:1200;sR:190;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7610;"
                                    style={{ zIndex: 8, fontfamily: 'Lato' }}
                                >Information Technology Business 
                                </rs-layer>

                                <rs-layer
                                    id="slider-1-slide-1-layer-1" 
                                    data-type="text"
                                    data-color="#fff"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,0;yo:231px,226px,116px,108px;"
                                    data-text="w:normal;s:54,54,44,30;l:64,64,54,40;fw:400;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:310;sp:1200;sR:310;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7490;"
                                    style={{ zIndex: 9, fontfamily: 'Lato' }}
                                >Challenges with
                                </rs-layer>

                                <rs-layer
                                    id="slider-1-slide-1-layer-2" 
                                    data-type="text"
                                    data-color="#fff"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,1px;yo:296px,291px,169px,151px;"
                                    data-text="w:normal;s:54,54,44,30;l:64,64,54,40;fw:700;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:440;sp:1200;sR:440;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7360;"
                                    style={{ zIndex: 10, fontfamily: 'Lato' }}
                                > Innovative <span className="text-base-skin"> Ideas</span>
                                </rs-layer>

                                <rs-layer
                                    id="slider-1-slide-1-layer-3" 
                                    data-type="text"
                                    data-color="#ffffffb3"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,666px;yo:381px,376px,237px,240px;"
                                    data-text="w:normal;s:15;l:25;a:left,left,center,center"
                                    data-vbility="t,t,t,f"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:680;sp:1200;sR:680;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7120;"
                                    style={{ zIndex: 11, fontfamily: 'Lato' }}
                                >Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua. 
                                </rs-layer>

                    
                                <Link
                                    id="slider-1-slide-1-layer-4" 
                                    to="/contact"
                                    className="rs-layer cmt-btn btn-default cmt-btn-color-white cmt-icon-btn-left cmt-btn-size-md"
                                    data-type="text"
                                    data-color="#05255f"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,15px,15px;y:t,t,t,m;yo:466px,460px,309px,63px;"
                                    data-text="w:normal;s:16,16,16,15;l:25,25,25,25;fw:600;fs:i;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:1140;sp:500;sR:1140;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7360;"
                                    style={{ zIndex: 15, fontfamily: 'Lato' }}
                                ><i className="icon-right text-center text-base-white"></i><span>Discover Our Services</span>
                                </Link>

                                <rs-layer
                                    id="slider-1-slide-1-layer-5" 
                                    data-type="shape"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-261px,0px,0,0;y:m;yo:0,0,0,0;"
                                    data-text="w:normal;s:20,20,12,7;l:0,0,15,9;"
                                    data-dim="w:675px,675px,475px,392px;h:780px,780px,339px,275px;"
                                    data-vbility="t,t,t,t"
                                    data-frame_0="x:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="sp:800;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:8200;"
                                    style={{ zIndex: 3, fontfamily: 'Lato', backgroundColor: "#05255f" }}
                                > 
                                </rs-layer>

                                 <rs-layer
                                    id="slider-1-slide-1-layer-6" 
                                    data-type="image"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-261px,0px,0,0;y:m;yo:0,0,0,0;"
                                    data-text="w:normal;"
                                    data-dim="w:675px,675px,475px,375px;h:780px,770px,554px,450px;"
                                    data-vbility="t,t,t,t"
                                    data-frame_0="y:50;"
                                    data-frame_1="sp:1000;"
                                    data-frame_999="o:0;st:w;"
                                    style={{ zIndex: 5}}
                                ><img src="images/slides/single-01.png" className="img-fluid" width="675" height="750" alt="genixo" data-no-retina/> 
                                </rs-layer> 
                            
                            </rs-slide>
                            <rs-slide data-key="rs-4" data-title="Slide" data-thumb="images/slides/slider-mainbg-006.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">

                                <img src="images/slides/slider-mainbg-006.jpg" title="slider-img-01.jpg" width="1920" height="750" className="rev-slidebg tp-rs-img" data-no-retina/>
                                 <rs-layer
                                    id="slider-1-slide-4-layer-0" 
                                    data-type="text"
                                    data-color="#ff382f"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,0;yo:191px,185px,83px,80px;"
                                    data-text="w:normal;s:16,16,16,14;l:26,26,26,24;fw:700;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:190;sp:1200;sR:190;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7610;"
                                    style={{ zIndex: 8, fontfamily: 'Lato' }}
                                >One-Top Services 
                                </rs-layer> 

                                 <rs-layer
                                    id="slider-1-slide-4-layer-1" 
                                    data-type="text"
                                    data-color="#fff"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,0;yo:231px,226px,116px,108px;"
                                    data-text="w:normal;s:54,54,44,30;l:64,64,54,40;fw:400;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:310;sp:1200;sR:310;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7490;"
                                    style={{ zIndex: 9, fontfamily: 'Lato' }}
                                >Data Sciences
                                </rs-layer> 

                                 <rs-layer
                                    id="slider-1-slide-4-layer-2" 
                                    data-type="text"
                                    data-color="#fff"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,1px;yo:296px,291px,169px,151px;"
                                    data-text="w:normal;s:54,54,44,30;l:64,64,54,40;fw:400;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:440;sp:1200;sR:440;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7360;"
                                    style={{ zIndex: 10, fontfamily: 'Lato' }}
                                > and <span className="text-base-skin fw-700">Analysis SASS</span>
                                </rs-layer> 

                                 <rs-layer
                                    id="slider-1-slide-4-layer-3" 
                                    data-type="text"
                                    data-color="#ffffffb3"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,0,666px;yo:381px,376px,237px,240px;"
                                    data-text="w:normal;s:15;l:25;a:left,left,center,center"
                                    data-vbility="t,t,t,f"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:680;sp:1200;sR:680;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7120;"
                                    style={{ zIndex: 11, fontfamily: 'Lato' }}
                                >Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua. 
                                </rs-layer> 

                    
                                 <Link
                                    id="slider-1-slide-4-layer-4" 
                                    to="/contact"
                                    className="rs-layer cmt-btn btn-default cmt-btn-color-white cmt-icon-btn-left cmt-btn-size-md"
                                    data-type="text"
                                    data-color="#05255f"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-100px,35px,15px,15px;y:t,t,t,m;yo:466px,460px,309px,63px;"
                                    data-text="w:normal;s:16,16,16,15;l:25,25,25,25;fw:600;fs:i;"
                                    data-frame_0="y:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="st:1140;sp:500;sR:1140;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:7360;"
                                    style={{ zIndex: 15, fontfamily: 'Lato' }}
                                ><i className="icon-right text-center text-base-white"></i><span>Discover Our Services</span>
                                </Link> 

                                 <rs-layer
                                    id="slider-1-slide-4-layer-5" 
                                    data-type="shape"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-261px,0px,0,0;y:m;yo:0,0,0,0;"
                                    data-text="w:normal;s:20,20,12,7;l:0,0,15,9;"
                                    data-dim="w:675px,675px,475px,392px;h:780px,780px,339px,275px;"
                                    data-vbility="t,t,t,t"
                                    data-frame_0="x:-100%;"
                                    data-frame_0_mask="u:t;"
                                    data-frame_1="sp:800;"
                                    data-frame_1_mask="u:t;"
                                    data-frame_999="o:0;st:w;sR:8200;"
                                    style={{ zIndex: 3, backgroundColor:"#05255f" }}
                                > 
                                </rs-layer>

                                <rs-layer
                                    id="slider-1-slide-4-layer-6" 
                                    data-type="image"
                                    data-rsp_ch="on"
                                    data-xy="x:l,l,c,c;xo:-261px,0px,0,0;y:m;yo:0,0,0,0;"
                                    data-text="w:normal;"
                                    data-dim="w:675px,675px,475px,375px;h:780px,770px,554px,450px;"
                                    data-vbility="t,t,t,t"
                                    data-frame_0="y:50;"
                                    data-frame_1="sp:1000;"
                                    data-frame_999="o:0;st:w;"
                                    style={{ zIndex: 5 }}
                                ><img src="images/slides/single-01.png" className="img-fluid" width="675" height="750" alt="genixo" data-no-retina/> 
                                </rs-layer> 
                            </rs-slide>
                        </rs-slides>
                    </rs-module>
                </rs-module-wrap>
            </div>
    </header>
  )
}
