import React from 'react'

export default function HomePage3() {
  return (
    <div className="page">
   
        
    <!--header start-->
    <header id="masthead" className="header cmt-header-style-02">
            <!-- site-header-menu -->
            <div id="site-header-menu" className="site-header-menu">
                <div className="site-header-menu-inner cmt-stickable-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <!--site-navigation -->
                                <div className="site-navigation d-flex align-items-center justify-content-between">
                                    <!-- site-branding -->
                                    <div className="site-branding me-auto">
                                        <Link className="home-link" to="/" title="Devfox" rel="home">
                                            <img id="logo-img" height="48" width="147" className="img-fluid auto_size" src="images/logo-img.svg" alt="logo-img"/>
                                        </Link>
                                    </div><!-- site-branding end -->
                                    <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                        <span className="menubar-box">
                                            <span className="menubar-inner"></span>
                                        </span>
                                    </div>
                                    <!-- menu -->
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
                                    </nav><!-- menu end -->
                                    <!-- header_extra -->
                                    <div className="header_extra d-flex flex-row align-items-center">
                                        <div className="header_btn"><Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/contact">Need A Help<i className="icon-right"></i></Link></div>
                                        <div className="header_search">
                                            <Link to="#" className="btn-default search_btn"><i className="icon-search-1"></i></Link>
                                            <div className="header_search_content">
                                                <div className="header_search_content_inner">
                                                    <Link to="#" className="close_btn"><i className="icon-cancel-2"></i></Link>
                                                    <form id="searchbox" method="get" action="#">
                                                        <input className="search_query" type="text" id="search_query_top" name="s" placeholder="Type Your Search..." value="">
                                                        <button type="submit" className="btn close-search"><i className="icon-search-1"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- header_extra end -->
                                </div><!-- site-navigation end-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- site-header-menu end-->
            <div className="cmt-header-box-inner">
                <!-- START decfoxSlider 1 REVOLUTION SLIDER 6.5.9 --><p className="rs-p-wp-fix"></p>
                <rs-module-wrap id="rev_slider_3_1_wrapper" data-source="gallery">
                    <rs-module id="rev_slider_3_1" style="" data-version="6.5.9">
                        <rs-slides>
                            <rs-slide data-key="rs-1" data-title="Slide" data-thumb="images/slides/slider-mainbg-005.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">

                                <img src="images/slides/slider-mainbg-005.jpg" title="slider-img-01.jpg" width="1920" height="750" className="rev-slidebg tp-rs-img" data-no-retina/><!--
                                --><rs-layer
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
                                    style="z-index:8;font-family:'Lato', sans-serif;"
                                >Information Technology Business 
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:9;font-family:'Lato', sans-serif;"
                                >Challenges with
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:10;font-family:'Lato', sans-serif;"
                                > Innovative <span className="text-base-skin"> Ideas</span>
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:11;font-family:'Lato', sans-serif;"
                                >Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. 
                                </rs-layer><!--

                    
                                --><Link
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
                                    style="z-index:15;font-family:'Lato', sans-serif;"
                                ><i className="icon-right text-center text-base-white"></i><span>Discover Our Services</span>
                                </Link><!--

                                --><rs-layer
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
                                    style="z-index:3;background-color:#05255f;"
                                > 
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:5;"
                                ><img src="images/slides/single-01.png" className="img-fluid" width="675" height="750" alt="image" data-no-retina/> 
                                </rs-layer><!--
                            -->
                            </rs-slide>
                            <rs-slide data-key="rs-4" data-title="Slide" data-thumb="images/slides/slider-mainbg-006.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">

                                <img src="images/slides/slider-mainbg-006.jpg" title="slider-img-01.jpg" width="1920" height="750" className="rev-slidebg tp-rs-img" data-no-retina/><!--
                                --><rs-layer
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
                                    style="z-index:8;font-family:'Lato', sans-serif;"
                                >One-Top Services 
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:9;font-family:'Lato', sans-serif;"
                                >Data Sciences
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:10;font-family:'Lato', sans-serif;"
                                > and <span className="text-base-skin fw-700">Analysis SASS</span>
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:11;font-family:'Lato', sans-serif;"
                                >Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. 
                                </rs-layer><!--

                    
                                --><Link
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
                                    style="z-index:15;font-family:'Lato', sans-serif;"
                                ><i className="icon-right text-center text-base-white"></i><span>Discover Our Services</span>
                                </Link><!--

                                --><rs-layer
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
                                    style="z-index:3;background-color:#05255f;"
                                > 
                                </rs-layer><!--

                                --><rs-layer
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
                                    style="z-index:5;"
                                ><img src="images/slides/single-01.png" className="img-fluid" width="675" height="750" alt="image" data-no-retina/> 
                                </rs-layer><!--
                            -->
                            </rs-slide>
                        </rs-slides>
                    </rs-module>
                </rs-module-wrap>
                <!-- END REVOLUTION SLIDER -->
            </div>
    </header><!--header end-->

   
    <!--site-main start-->
    <div className="site-main">


        <!--padding_bottom_zero-section-->
        <section className="cmt-row padding_bottom_zero-section clearfix">
            <div className="container">
                <!-- row -->
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <!--cmt_single_image-wrapper-->
                                <div className="cmt_single_image-wrapper mt-30 res-991-mt-0 mb-30 border-rad_5 overflow-hidden">
                                    <img width="810" height="540" className="img-fluid" src="images/single-img-13.jpg" alt="single_13"/>
                                </div>
                                <!-- testimonials -->
                                <div className="testimonials cmt-testimonial-box-view-style3">
                                    <div className="testimonial-content">
                                        <div className="testimonial-quote-icon">
                                            <i className="icon-quote-right-alt"></i>
                                        </div>
                                        <blockquote className="testimonial-text"> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</blockquote>
                                        <div className="testimonial-caption">
                                            <h3>John Doe</h3>
                                            <label>Ceo</label>
                                        </div>
                                    </div>
                                </div><!-- testimonials end -->
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <!--cmt_single_image-wrapper-->
                                <div className="cmt_single_image-wrapper res-991-pt-30 border-rad_5 overflow-hidden">
                                    <img width="540" height="1100" className="img-fluid" src="images/single-img-14.jpg" alt="single_14"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="res-1199-pt-40 pt-10">
                            <!-- section title -->
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>About Us</h3>
                                    <h2 className="title">We have a smart solution for each IT challenge</h2>
                                </div>
                                <div className="title-desc">
                                    <p>DevFox IT Solutions has been established with the motive of becoming one of the best
                                     IT & Software company Worldwide. Our objective is to create custom base software
                                     solutions for the offshore clients providing quality work and within their budget. We
                                     keep up with industry trends by constantly enhancing our solutions and offerings and
                                     develop solutions to best fit your business needs.</p>
                                </div>
                            </div><!-- section title end -->
                            <div className="row pt-10 res-991-pt-0">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex">
                                        <div className="pr-25">
                                            <img width="148" height="107" className="img-fluid" src="images/author_01.png" alt="autho_01"/>
                                        </div>
                                        <div className="pr-25">
                                            <img width="149" height="107" className="img-fluid" src="images/author_02.png" alt="autho_02"/>
                                        </div>
                                        <div className="pr-0">
                                            <img width="157" height="107" className="img-fluid" src="images/author_03.png" alt="autho_03"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-25">
                                <h3>20 years of excellence, tremendous dedication & modern technological inventions for stimulating progress</h3>
                            </div>
                        </div>
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!--padding_bottom_zero-section end-->


        <!--fid-section-->
        <section className="cmt-row fid-section clearfix">
            <div className="container">
                <div className="row mt_15 mb_15">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- cmt-fid -->
                        <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style2">
                            <div className="cmt-fid-icon-wrapper">
                                <i className="flaticon-world"></i>
                            </div>
                            <div className="cmt-fid-contents">
                                <h4 className="cmt-fid-inner">
                                    <span   data-appear-animation="animateDigits" 
                                            data-from="0" 
                                            data-to="2" 
                                            data-interval="1" 
                                            data-before="" 
                                            data-before-style="sup" 
                                            data-after="+" 
                                            data-after-style="sub" 
                                            className="numinate">2
                                    </span>
                                    <span className="ml_10">M</span>
                                </h4>
                                <h3 className="cmt-fid-title">Global reach</h3>
                            </div>
                            <div className="cmt-fid-desc">
                                <p>our great work has been reach to global clients & their satisfaction</p>
                            </div>
                        </div><!-- cmt-fid end -->
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- cmt-fid -->
                        <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style2">
                            <div className="cmt-fid-icon-wrapper">
                                <i className="flaticon-suitcase"></i>
                            </div>
                            <div className="cmt-fid-contents">
                                <h4 className="cmt-fid-inner">
                                    <span   data-appear-animation="animateDigits" 
                                            data-from="0" 
                                            data-to="35" 
                                            data-interval="5" 
                                            data-before="" 
                                            data-before-style="sup" 
                                            data-after="+" 
                                            data-after-style="sub" 
                                            className="numinate">35
                                    </span>
                                    <span className="ml_10">k</span>
                                </h4>
                                <h3 className="cmt-fid-title">Years Experience</h3>
                            </div>
                            <div className="cmt-fid-desc">
                                <p>Celebrating 35 years! Let's take the moment to reflect milestone</p>
                            </div>
                        </div><!-- cmt-fid end -->
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- cmt-fid -->
                        <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style2">
                            <div className="cmt-fid-icon-wrapper">
                                <i className="flaticon-happy"></i>
                            </div>
                            <div className="cmt-fid-contents">
                                <h4 className="cmt-fid-inner">
                                    <span   data-appear-animation="animateDigits" 
                                            data-from="0" 
                                            data-to="1" 
                                            data-interval="1" 
                                            data-before="" 
                                            data-before-style="sup" 
                                            data-after="+" 
                                            data-after-style="sub" 
                                            className="numinate">1
                                    </span>
                                    <span className="ml_10">k</span>
                                </h4>
                                <h3 className="cmt-fid-title">Satisfied Clients</h3>
                            </div>
                            <div className="cmt-fid-desc">
                                <p>Provided the best quality services in IT and help business to grow</p>
                            </div>
                        </div><!-- cmt-fid end -->
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- cmt-fid -->
                        <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style2">
                            <div className="cmt-fid-icon-wrapper">
                                <i className="flaticon-award"></i>
                            </div>
                            <div className="cmt-fid-contents">
                                <h4 className="cmt-fid-inner">
                                    <span   data-appear-animation="animateDigits" 
                                            data-from="0" 
                                            data-to="170" 
                                            data-interval="10" 
                                            data-before="" 
                                            data-before-style="sup" 
                                            data-after="+" 
                                            data-after-style="sub" 
                                            className="numinate">170
                                    </span>
                                    <span className="ml_10">k</span>
                                </h4>
                                <h3 className="cmt-fid-title">Awards Win</h3>
                            </div>
                            <div className="cmt-fid-desc">
                                <p>To be honored peers is incredibly gratifying and we’re so thankful</p>
                            </div>
                        </div><!-- cmt-fid end -->
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!--fid-section end-->


        <!-- padding_top_zero-section -->
        <section className="cmt-row padding_top_zero-section position-relative z-index-1 clearfix">
            <div className="container">
                <!--row -->
                <div className="row">
                    <div className="col-lg-12">
                        <!-- section title -->
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>Case studies</h3>
                                <h2 className="title">Our recent launched projects</h2>
                            </div>
                        </div><!-- section title end -->
                    </div>
                </div><!-- row end -->
            </div>
            <div className="container-fluid">
                <!-- row -->
                <div className="row slick_slider ps-3 pe-3" data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "arrows":false, "autoplay":true, "dots":false, "infinite":true, "responsive":[{"breakpoint":1200,"settings": {"slidesToShow": 4}}, {"breakpoint":992,"settings":{"slidesToShow": 3}},{"breakpoint":768,"settings":{"slidesToShow": 2}},{"breakpoint":500,"settings":{"slidesToShow": 1}}]}'>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="featured-imagebox featured-imagebox-portfolio style1">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-01-700x800.jpg" alt="portfolio_img"/>
                            </div>
                            <div className="featured-content">
                                <span className="pf-icon"><img src="images/bootstrap1.png" alt="bootstrap"/></span>
                                <div className="category">
                                    <span>Image Documentary</span>
                                </div>
                                <div className="featured-title">
                                    <h3><Link to="/portfolio">Bootstrap modal plugin</Link></h3>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="featured-imagebox featured-imagebox-portfolio style1">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-02-700x800.jpg" alt="portfolio_img"/>
                            </div>
                            <div className="featured-content">
                                <span className="pf-icon"><img src="images/elementor1.png" alt="elementor"/></span>
                                <div className="category">
                                    <span>SM Management</span>
                                </div> 
                                <div className="featured-title">
                                    <h3><Link to="/portfolio">Elementor plugin</Link></h3>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="featured-imagebox featured-imagebox-portfolio style1">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-03-700x800.jpg" alt="portfolio_img"/>
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
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="featured-imagebox featured-imagebox-portfolio style1">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-04-700x800.jpg" alt="portfolio_img"/>
                            </div>
                            <div className="featured-content">
                                <span className="pf-icon"><img src="images/rev-slider1.png" alt="rev-slider"/></span>
                                <div className="category">
                                    <span>Revolution slider</span>
                                </div> 
                                <div className="featured-title">
                                    <h3><Link to="/portfolio">Network Cabelling</Link></h3>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="featured-imagebox featured-imagebox-portfolio style1">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-05-700x800.jpg" alt="portfolio_img"/>
                            </div>
                            <div className="featured-content">
                                <span className="pf-icon"><img src="images/wp1.png" alt="wp1"/></span>
                                <div className="category">
                                    <span>Image Documentary</span>
                                </div> 
                                <div className="featured-title">
                                    <h3><Link to="/portfolio">WordPress plugin</Link></h3>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="featured-imagebox featured-imagebox-portfolio style1">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" height="800" width="700" src="images/portfolio/portfolio-06-700x800.jpg" alt="portfolio_img"/>
                            </div>
                            <div className="featured-content">
                                <span className="pf-icon"><img src="images/wp-bakery1.png" alt="html"/></span>
                                <div className="category">
                                    <span>Author Projects</span>
                                </div> 
                                <div className="featured-title">
                                    <h3><Link to="/portfolio">Wp bakery plugin</Link></h3>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div><!-- row end-->
            </div>
        </section>
        <!-- padding_top_zero-section end-->


        <!--step-section-->
        <section className="cmt-row step-section bg-base-grey mt_250 res-991-mt-0 clearfix">
            <div className="container">
                <!-- row -->
                <div className="row">
                    <div className="cpl-lg-12">
                        <div className="pt-150 res-991-pt-0"></div>
                    </div> 
                </div>
                <div className="cmt-horizontal_sep mb-35 res-991-mb-0"></div>
                <div className="row">
                    <div className="col-lg-12">
                        <!-- slick_slider -->
                        <div className="slick_slider" data-slick='{"slidesToShow": 6, "slidesToScroll": 1, "arrows":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":1200,"settings":{"slidesToShow": 5}}, {"breakpoint":1024,"settings":{"slidesToShow": 4}}, {"breakpoint":777,"settings":{"slidesToShow": 3}},{"breakpoint":575,"settings":{"slidesToShow": 2}},{"breakpoint":380,"settings":{"slidesToShow": 1}}]}'>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="152" height="60" className="img-fluid" src="images/client/client-01.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="128" height="60" className="img-fluid" src="images/client/client-02.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="142" height="60" className="img-fluid" src="images/client/client-03.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="182" height="61" className="img-fluid" src="images/client/client-04.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="152" height="60" className="img-fluid" src="images/client/client-01.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="128" height="60" className="img-fluid" src="images/client/client-02.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client-box">
                                <div className="cmt-client-logo-tooltip">
                                    <div className="cmt-client-logo-tooltip-inner">
                                        <div className="client-thumbnail">
                                            <img width="142" height="60" className="img-fluid" src="images/client/client-03.png" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- cmt-client end -->  
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mt-25 text-center">DevFox Takes <Link to="/about" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline">Sponsorship </Link> From The Leading Brands Worldwide</div>
                    </div>
                </div>
                <div className="row">
                   <div className="col-lg-12">
                       <div className="pb-70 res-991-pb-60"></div>
                   </div> 
                </div>
                <!-- row -->
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="cmt-tabs cmt-tab-style-03 clearfix" data-effect="fadeIn">
                            <ul className="tabs">
                                <!-- section title -->
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Our Services</h3>
                                        <h2 className="title">What We Do?</h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>We keep up with industry trends by constantly enhancing your solutions and offerings and develop solutions to best fit your business needs.</p>
                                    </div>
                                </div><!-- section title end -->
                                <li className="tab active"><Link to="#">Hosting Services</Link></li>
                                <li className="tab"><Link to="#">Backup & recovery</Link></li>
                                <li className="tab"><Link to="#">Cyber Security</Link></li>
                                <li className="tab"><Link to="#">Management services</Link></li>
                                <li className="tab"><Link to="#">Cloud Services</Link></li>
                                <li className="tab"><Link to="#">Network Security</Link></li>
                                <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-40 pt-30 res-767-pb-20" to="/project"><i className="icon-right"></i><span>See More Services</span></Link>
                            </ul>
                            <div className="content-tab">
                                <!-- content-inner -->
                                <div className="content-inner active">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-cloud"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-cloud"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Hosting Services</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Once a website is placed on the same server can be access by many clients.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-01-570x630.jpg" alt="project-01"/></p>
                                </div><!-- content-inner end-->
                                <!-- content-inner -->
                                <div className="content-inner">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-server"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Backup & recovery</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Process of storing copies into the database,organizations against of data.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-01-570x630.jpg" alt="project-01"/></p>
                                </div><!-- content-inner end-->
                                <!-- content-inner -->
                                <div className="content-inner">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-server"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Backup & recovery</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Process of storing copies into the database,organizations against of data.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-01-570x630.jpg" alt="project-01"/></p>
                                </div><!-- content-inner end-->
                                <!-- content-inner -->
                                <div className="content-inner">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-cyber-security"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-cyber-security"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Cyber Security</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>The application of technologies processes and controls to protect systems</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-03-570x630.jpg" alt="project-03"/></p>
                                </div><!-- content-inner end-->
                                <!-- content-inner -->
                                <div className="content-inner">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-data-management"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-data-management"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Management services</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>An Accurate robust solution need to deliver wide range of functionalities.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-04-570x630.jpg" alt="project-04"/></p>
                                </div><!-- content-inner end-->
                                <!-- content-inner -->
                                <div className="content-inner">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-gear"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-gear"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Cloud Services</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Infrastructure, platforms, and software that are provided by third-party</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-05-570x630.jpg" alt="project-05"/></p>
                                </div><!-- content-inner end-->
                                <!-- content-inner -->
                                <div className="content-inner">
                                    <!--featured-icon-box-->
                                    <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                        <div className="bg_icon"><i className="flaticon flaticon-cyber-security-1"></i></div>
                                        <div className="featured-icon">
                                            <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                <i className="flaticon flaticon-cyber-security-1"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Network Security</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Protection for the ever-growing landscape of cyber threats in the wild today.</p>
                                            </div>
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                        </div>
                                    </div><!-- featured-icon-box end-->
                                    <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-06-570x630.jpg" alt="project-06"/></p>
                                </div><!-- content-inner end-->
                            </div>
                        </div>
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!--padding_top_zero-section end-->


        <!-- pricing-section -->
        <section className="cmt-row pricing-section clearfix">
            <div className="container">
                <!--row -->
                <div className="row">
                    <div className="col-lg-12">
                        <!-- section title -->
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>Pricing & Plan</h3>
                                <h2 className="title">Our Awesome Pricing Plans</h2>
                            </div>
                        </div><!-- section title end -->
                    </div>
                </div>
                <!--row end-->
                <div className="row mb_30 mt-15">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <!--cmt-pricing-plan-->
                        <div className="cmt-pricing-plan pricing-recommended-plan_1">
                            <div className="cmt-p_table-icon">
                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                    <i className="flaticon flaticon-secure-shield"></i>
                                </div>
                            </div>
                            <div className="cmt-p_table-head">
                                <div className="cmt-p_table-title"><h3>Regular Plan</h3></div>
                                <div className="cmt-p_table-desc">Quis autem vel eum iure reprehes derit quin voluptate velite</div>
                            </div>
                            <div className="cmt-p_table-body">
                                <div className="cmt-p_table-amount">
                                    <span className="cur_symbol">$</span>19.00<span className="pac_frequency">monthly</span>
                                </div>
                                <ul className="cmt-p_table-features">
                                    <li>IT Consulting</li>
                                    <li>Product Engineering</li>
                                    <li>Digital Solutions</li>
                                </ul>
                            </div>
                            <div className="cmt-p_table-footer">
                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/about">see more<i className="icon-right"></i></Link>
                            </div>
                        </div><!--cmt-pricing-plan end-->
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <!--cmt-pricing-plan-->
                        <div className="cmt-pricing-plan pricing-recommended-plan">
                            <div className="cmt-p_table-icon">
                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                    <i className="flaticon flaticon-diamond"></i>
                                </div>
                            </div>
                            <div className="cmt-p_table-head">
                                <div className="cmt-p_table-title"><h3>Premium Plan</h3></div>
                                <div className="cmt-p_table-desc">Quis autem vel eum iure reprehes derit quin voluptate velite</div>
                            </div>
                            <div className="cmt-p_table-body">
                                <div className="cmt-p_table-amount">
                                    <span className="cur_symbol">$</span>49.00<span className="pac_frequency">monthly</span>
                                </div>
                                <ul className="cmt-p_table-features">
                                    <li>IT Consulting</li>
                                    <li>Product Engineering</li>
                                    <li>Digital Solutions</li>
                                </ul>
                            </div>
                            <div className="cmt-p_table-footer">
                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/about">see more<i className="icon-right"></i></Link>
                            </div>
                        </div><!--cmt-pricing-plan end-->
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <!--cmt-pricing-plan-->
                        <div className="cmt-pricing-plan pricing-recommended-plan_1">
                            <div className="cmt-p_table-icon">
                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-size-xl cmt-icon_element-color-skincolor">
                                    <i className="flaticon flaticon-medal"></i>
                                </div>
                            </div>
                            <div className="cmt-p_table-head">
                                <div className="cmt-p_table-title"><h3>Extended Plan</h3></div>
                                <div className="cmt-p_table-desc">Quis autem vel eum iure reprehes derit quin voluptate velite</div>
                            </div>
                            <div className="cmt-p_table-body">
                                <div className="cmt-p_table-amount">
                                    <span className="cur_symbol">$</span>99.00<span className="pac_frequency">monthly</span>
                                </div>
                                <ul className="cmt-p_table-features">
                                    <li>IT Consulting</li>
                                    <li>Product Engineering</li>
                                    <li>Digital Solutions</li>
                                </ul>
                            </div>
                            <div className="cmt-p_table-footer">
                                <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/about">see more<i className="icon-right"></i></Link>
                            </div>
                        </div><!--cmt-pricing-plan end-->
                    </div>
                </div>
            </div>
        </section>
        <!-- pricing-section end-->


        <!-- services-section -->
        <section className="cmt-row services-section bg-img2 cmt-bgimage-yes cmt-bg clearfix">
            <div className="container">
                <!-- row -->
                <div className="row">
                    <div className="col-lg-12">
                        <!-- section title -->
                        <div className="section-title title-style-center_text res-991-mb_20">
                            <div className="title-header">
                                <h3>Our Statistics</h3>
                                <h2 className="title text-base-white">A Collection of Our Work</h2>
                            </div>
                        </div><!-- section title end -->
                    </div>
                    <div className="col-lg-12">
                        <div className="d-table p-40 bg-base-skin position-relative border-rad_5 text-center m-auto me-lg-0 ms-lg-auto mt_110 res-991-mt-40 z-index-1 cmt-play-icon">
                            <div className="cmt-play-icon-animation">
                                <Link to="https://youtu.be/7e90gBu4pas" target="_self" className="cmt_prettyphoto">
                                    <div className="cmt-icon cmt-icon_element-border border-2 cmt-icon_element-color-white cmt-icon_element-size-md cmt-icon_element-style-rounded mb-0">
                                        <i className="fas fa-play fs-20"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="pt-130 pb-100 res-991-p-0"></div>
                    </div>
                </div>
                <!-- row end -->
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pb-60 res-991-pb-0"></div>
                    </div> 
                </div>
            </div>
        </section>
        <!-- services-section end-->


        <!-- padding_zero-section -->
        <section className="cmt-row padding_zero-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cmt-bg cmt-col-bgcolor-yes bg-base-white cmt-bg spacing-9 border-rad_10 overflow-visible mb_15">
                            <div className="row">
                                <div className="col-lg-5">
                                    <!-- section title -->
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h3>our services</h3>
                                            <h2 className="title">Let's help you with technology needs</h2>
                                        </div>
                                        <div className="title-desc">
                                            <p>DevFox provides complete IT solutions to turn an organizational needs, 
                                            process and technology changes into powerful business</p>
                                        </div>
                                    </div><!-- section title end -->
                                    <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-40" to="/project"><i className="icon-right"></i><span>See More Services</span></Link>
                                </div>
                                <div className="col-lg-7">
                                    <div className="accordion mt-0 mb-20 res-991-mt-20 res-991-mb-0">
                                        <!-- toggle -->
                                        <div className="toggle cmt-toggle_style_default">
                                            <div className="toggle-title"><Link to="#" className="active">Will send me a progress report of basis detailing the work?</Link></div>
                                            <div className="toggle-content show">
                                                <p>We will send you a report every two weeks (i.e. after each sprint, when the next version of the software is completed) or every month if you prefer. The reports include info on what we plan to achieve in the next sprint.</p>
                                            </div>
                                        </div><!-- toggle end -->
                                        <!-- toggle -->
                                        <div className="toggle cmt-toggle_style_default">
                                            <div className="toggle-title"><Link to="#">How much time will it take for you to make my app?</Link></div>
                                            <div className="toggle-content">
                                                <p>we will give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we’ll be able to estimate how long will it take.</p>
                                            </div>
                                        </div><!-- toggle end -->
                                        <!-- toggle -->
                                        <div className="toggle cmt-toggle_style_default">
                                            <div className="toggle-title"><Link to="#"> How can I be sure you work at my project ASAP declare?</Link></div>
                                            <div className="toggle-content">
                                                <p>We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Devfox to track time spent on your project. we can quickly assign additional team</p>
                                            </div>
                                        </div><!-- toggle end -->
                                        <!-- toggle -->
                                        <div className="toggle cmt-toggle_style_default">
                                            <div className="toggle-title"><Link to="#">What you about say your Business palnning?</Link></div>
                                            <div className="toggle-content">
                                                <p>We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Devfox to track time spent on your project. we can quickly assign additional team</p>
                                            </div>
                                        </div><!-- toggle end -->
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- padding_zero-section end-->

        
        <!--blog-section-->
        <section className="cmt-row blog-section bg-base-grey mt_332 res-991-mt-20 clearfix">
            <div className="container">
                <div className="row">
                    <div className="pt-345 res-991-pt-0"></div>    
                </div>
                <!-- row -->
                <div className="row">
                    <div className="col-lg-12">
                        <!-- section title -->
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>Quick Facts</h3>
                                <h2 className="title">Believe in Spreading Knowledge</h2>
                            </div>
                        </div><!-- section title end -->
                    </div>
                </div>
                <div className="row mb_15">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <!-- featured-imagebox-post -->
                        <div className="featured-imagebox featured-imagebox-post style4">
                            <div className="featured-thumbnail">
                                <img width="370" height="200" className="img-fluid" src="images/blog/blog-01-370x200.jpg" alt=""/>
                                <div className="post-category"><Link to="#">Cost & Features</Link></div>
                            </div>
                            <!-- featured-content -->
                            <div className="featured-content">
                                <div className="featured-content-inner">
                                    <div className="post-header">
                                        <!-- post-meta -->
                                        <div className="post-meta">
                                            <span className="cmt-meta-line post-date">
                                                <i className="icon-calendar"></i>
                                                <Link to="#" rel="bookmark">
                                                    <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">On May  4,2021</time>
                                                </Link>
                                            </span>
                                        </div><!-- post-meta end -->
                                        <div className="post-title featured-title">
                                            <h3><Link to="/blogsingle">8 Tips To Protect Your Business Data From Phishing Attack</Link></h3>
                                        </div>
                                        <div className="cmt-blogbox-footer-readmore">
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/blogsingle">read more<i className="icon-right"></i></Link>
                                        </div>
                                    </div>
                                </div><!-- featured-content end -->
                            </div><!-- featured-imagebox-post end -->
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <!-- featured-imagebox-post -->
                        <div className="featured-imagebox featured-imagebox-post style4">
                            <div className="featured-thumbnail">
                                <img width="370" height="200" className="img-fluid" src="images/blog/blog-02-370x200.jpg" alt=""/>
                                <div className="post-category"><Link to="#">Content Engineering</Link></div>
                            </div>
                            <!-- featured-content -->
                            <div className="featured-content">
                                <div className="featured-content-inner">
                                    <div className="post-header">
                                        <!-- post-meta -->
                                        <div className="post-meta">
                                            <span className="cmt-meta-line post-date">
                                                <i className="icon-calendar"></i>
                                                <Link to="#" rel="bookmark">
                                                    <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">On May  14,2021</time>
                                                </Link>
                                            </span>
                                        </div><!-- post-meta end -->
                                        <div className="post-title featured-title">
                                            <h3><Link to="/blogsingle">How To Review Some General Types Of Data Backups</Link></h3>
                                        </div>
                                        <div className="cmt-blogbox-footer-readmore">
                                            <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/blogsingle">read more<i className="icon-right"></i></Link>
                                        </div>
                                    </div>
                                </div><!-- featured-content end -->
                            </div><!-- featured-imagebox-post end -->
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="post-list pb-15 res-991-mt_15">
                            <!-- featured-imagebox-post -->
                            <div className="featured-imagebox featured-imagebox-post style1">
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="cmt-meta-line post-date">
                                            <i className="icon-calendar"></i>
                                            <Link to="#" rel="bookmark">
                                                <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">On May  8,2021</time>
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><Link to="/blogsingle">How To Build Human Firewall For Rock Solid Cybersecurity</Link></h3>
                                    </div>
                                </div>
                            </div><!-- featured-imagebox-post end-->
                            <!-- featured-imagebox-post -->
                            <div className="featured-imagebox featured-imagebox-post style1">
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="cmt-meta-line post-date">
                                            <i className="icon-calendar"></i>
                                            <Link to="#" rel="bookmark">
                                                <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">On May  10,2021</time>
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><Link to="/blogsingle">Get Spotlight On Cybersecurtiry Awareness Month- 2022</Link></h3>
                                    </div>
                                </div>
                            </div><!-- featured-imagebox-post end-->
                        </div>
                        <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-15" to="/bloglist"><i className="icon-right"></i><span>view more</span></Link>
                    </div>
                </div>
            </div>
        </section>
        <!--blog-section end-->


    </div><!--site-main end-->


    <!--footer start-->
    <footer className="footer widget-footer bg-base-dark text-base-white clearfix">
        <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
        <div className="second-footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                        <div className="widget widget_text clearfix">
                            <div className="footer-logo">
                                <img id="footer-logo-img" className="img-fluid auto_size" height="42" width="132" src="images/footer-logo.svg" alt="image"/>
                            </div>
                            <div className="textwidget widget-text">
                                <p>An excellent service management in the area of IT providing solutions. High level efficient solution to businesses growth</p>
                            </div>
                            <div className="widget_social_wrapper social-icons pt-40">
                                <h3 className="fs-18 mb-25">Social Info</h3>
                                <ul className="list-inline">
                                    <li><Link to="https://www.facebook.com/cymolthemes.191219" rel="noopener" aria-label="facebook"><i className="icon-facebook"></i></Link></li>
                                    <li><Link to="https://twitter.com/CymolThemes" rel="noopener" aria-label="twitter"><i className="icon-twitter"></i></Link></li>
                                    <li><Link to="https://www.behance.net/cymolthemes191219" rel="noopener" aria-label="linkedin"><i className="icon-linkedin"></i></Link></li>
                                    <li><Link to="https://in.pinterest.com/cymolthemes/" rel="noopener" aria-label="pinterest"><i className="icon-pinterest"></i></Link></li>
                                    <li><Link to="https://dribbble.com/cymol_themes" rel="noopener" aria-label="dribbble"><i className="icon-dribbble"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                        <div className="widget widget_cta clearfix">
                            <h4>+0022 6544 9977</h4>
                            <ul className="widget_contact_wrapper">
                                <li><i className="flaticon-envelope"></i><Link to="mailto:info@example.com.com">support@cymolthemes.com</Link>24 x 7 Online Support</li>
                                <li><i className="flaticon-pin"></i>8477 Paris Hill St. Falls Church, VA 22041</li>
                            </ul>
                            <div className="g-map">
                                <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
                        <div className="widget multi_widget clearfix">
                            <div className="newsletter_widget clearfix">
                                <h3 className="widget-title">Signup for our newsletter</h3>
                                <p>Sign up to our newsletter to get the latest news.</p>
                                <form id="subscribe-form" className="newsletter-form" action="#" data-mailchimp="true">
                                    <div className="mailchimp-inputbox clearfix" id="subscribe-content"> 
                                        <p>
                                            <input type="email" name="email" placeholder="Enter Your Email Address..." required="">
                                        </p>
                                        <p><button className="submit cmt-btn cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-border cmt-btn-color-skincolor" type="submit"><i className="icon-right"></i></button></p>
                                    </div>
                                    <div id="subscribe-msg"></div>
                                </form>
                            </div>
                            <div className="widget_nav_menu clearfix">
                               <h3 className="widget-title">Quick links</h3>
                               <ul className="menu-footer-quick-links links-1">
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Meet Our Team</Link></li>
                                    <li><Link to="#">News & Media</Link></li>
                                    <li><Link to="#">Case Studies</Link></li>
                                </ul>
                            </div>
                            <div className="widget_nav_menu clearfix">
                               <h3 className="widget-title">Solutions</h3>
                               <ul className="menu-footer-quick-links links-2">
                                    <li><Link to="#">IT Management</Link></li>
                                    <li><Link to="#">Cyber Security</Link></li>
                                    <li><Link to="#">Software Dev</Link></li>
                                    <li><Link to="#">Backup & Recovery</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer-text copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="cpy-text">Copyright © 2022 DevfoxTemplates. Designed and Developed by<span className="text-base-skin u1"><Link to="https://www.cymolthemes.com/"> Cymolthemes </Link></span>only on <span className="text-green u1"><Link to="https://themeforest.net/user/cymolthemes">Envato Market.</Link></span></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--footer end-->

<!--back-to-top start-->
<Link id="totop" to="#top">
    <i className="icon-angle-up"></i>
</Link>
<!--back-to-top end-->

</div>
  )
}
