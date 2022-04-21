import React from 'react'

export default function HomePage2() {
  return (
    <div className="page">

       
        
    <!--header start-->
    <header id="masthead" className="header cmt-header-style-01">

        <!-- topbar -->
        <div className="top_bar bg-base-skin text-base-white clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="top_bar_inner bg-base-dark text-base-white">
                            <div className="top_bar_contact_item with-icon">
                                <div className="top_bar_icon"><i className="icon-phone"></i></div>
                                <span>Helpline:</span> +0022 6544 9977
                            </div>
                            <div className="top_bar_contact_item">
                                <a href="mailto:info@example.com.com">support@cymolthemes.com</a>
                            </div>
                            <div className="top_bar_contact_item with-icon ms-auto">
                                <div className="top_bar_icon"><i className="icon-megaphone"></i></div>
                                <span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?
                            </div>
                        </div>
                        <div className="side-menu-container">
                            <div className="side-menu"><a href="#"><i className="icon-menu"></i></a></div>
                            <!-- Side Menu -->
                            <div className="side-overlay">
                                <div className="side bg-base-dark">
                                    <a href="#" className="close-side"><i className="icon-close"></i></a>
                                    <div className="d-flex align-items-center pb-30">
                                        <div className="flotingbar-img ">
                                            <img className="img-fluid rounded-circle" src="images/flotingbar-img.png" height="60" width="60" alt="flotingbar-img"/>
                                        </div>
                                        <div className="pl-20">
                                            <h3 className="fs-18 mb-0">Alex william</h3>
                                            <label className="text-base-skin">Support Expert</label>
                                        </div>
                                    </div>
                                    <p>An excellent service management in the area of IT providing solutions. High level efficient solution to businesses growth.  </p>
                                    <div className="cmt-detailss"> 
                                        <ul>
                                            <li><span className="cmt-li"> Call us Now! : </span><span> +123-456 -7890 </span></li>
                                            <li><span className="cmt-li"> Email :</span><span className="cmt-li4"><a href="mailto:info@example.com.com">example.supoort@gmail.com</a> </span></li>
                                        </ul>
                                    </div>
                                    <aside className="widget_text clearfix">
                                        <h3>Quick contact info</h3>
                                        <p className="mb-25">Our Solutions pride on world class customer service.</p>
                                        <form action="#" className="cta_form wrap-form clearfix" method="post">
                                            <label>
                                                <span className="text-input"><input name="name" type="text" value="" placeholder="Enter your name here..." required="required"></span>
                                            </label>
                                            <label>
                                                <span className="text-input"><input name="email" type="text" value="" placeholder="Enter your email address here..." required="required"></span>
                                            </label>
                                            <label>
                                                <span className="text-input"><textarea name="message" rows="4" placeholder="Type your message here" required="required"></textarea></span>
                                            </label>
                                            <button className="submit cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-white mt-15" type="submit"><i className="icon-right"></i><span>Send Message</span></button>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                            <!-- Side Menu -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- topbar end -->

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
                                    <a className="home-link" href="index.html" title="Devfox" rel="home">
                                        <img id="logo-img" height="48" width="147" className="img-fluid auto_size" src="images/logo-img.svg" alt="logo-img"/>
                                    </a>
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
                                            <a href="#" className="mega-menu-link">Home</a>
                                            <ul className="mega-submenu">
                                                <li><a href="index.html">Homepage 1</a></li>
                                                <li className="active"><a href="homepage-2.html">Homepage 2</a></li>
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
                                </nav><!-- menu end -->
                                <!-- header_extra -->
                                <div className="header_extra d-flex flex-row align-items-center">
                                    <div className="header_btn"><a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" href="contact-us.html">Need A Help<i className="icon-right"></i></a></div>
                                    <div className="header_search">
                                        <a href="#" className="btn-default search_btn"><i className="icon-search-1"></i></a>
                                        <div className="header_search_content">
                                            <div className="header_search_content_inner">
                                                <a href="#" className="close_btn"><i className="icon-cancel-2"></i></a>
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
    </header><!--header end-->

    <!-- START decfoxSlider 1 REVOLUTION SLIDER 6.5.9 --><p className="rs-p-wp-fix"></p>
    <rs-module-wrap id="rev_slider_2_1_wrapper" data-source="gallery">
        <rs-module id="rev_slider_2_1" style="" data-version="6.5.9">
            <rs-slides>
                <rs-slide data-key="rs-1" data-title="Slide" data-thumb="images/slides/slider-mainbg-003.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">

                    <img src="images/slides/slider-mainbg-003.jpg" title="slider-img-03.jpg" width="1920" height="693" className="rev-slidebg tp-rs-img" data-no-retina/><!--

                    --><rs-layer
                        id="slider-1-slide-1-layer-0" 
                        data-type="text"
                        data-color="#fff"
                        data-rsp_ch="on"
                        data-xy="x:r,r,c,c;xo:35px,35px,0,0;yo:148px,141px,65px,43px;"
                        data-text="w:normal;s:18,18,18,18;l:28,28,28,28;fw:700;"
                        data-dim="minh:0px,0px,none,none;"
                        data-padding="t:6,6,6,5;r:20,20,19,12;b:6,6,6,5;l:20,20,19,12;"
                        data-border="bor:0px,0px,0px,0px;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:190;sp:1200;sR:190;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7610;"
                        style="z-index:9;background-color:#ff382f;font-family:'Lato', sans-serif;"
                        >Information Technology Business
                    </rs-layer><!--


                    --><rs-layer
                        id="slider-1-slide-1-layer-1" 
                        data-type="text"
                        data-color="#05255f"
                        data-rsp_ch="on"
                        data-xy="x:r,r,c,c;xo:34px,34px,0,0;yo:200px,202px,122px,85px;"
                        data-text="w:normal;s:72,72,60,50;l:92,92,80,70;fw:400;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:310;sp:1200;sR:310;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7490;"
                        style="z-index:10;font-family: 'Lato', sans-serif;"
                    >Challenges with 
                    </rs-layer><!--

                    --><rs-layer
                        id="slider-1-slide-1-layer-2" 
                        data-type="text"
                        data-color="#05255f"
                        data-rsp_ch="on"
                        data-xy="x:r,r,c,c;xo:34px,34px,0,1px;yo:294px,298px,198px,141px;"
                        data-text="w:normal;s:72,72,60,50;l:92,92,80,70;fw:700;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:440;sp:1200;sR:440;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7360;"
                        style="z-index:11;font-family: 'Lato', sans-serif;"
                    >Innovative <span className="text-base-skin">Ideas</span>
                    </rs-layer><!--

                    --><rs-layer
                        id="slider-1-slide-1-layer-3" 
                        data-type="text"
                        data-color="#676b72"
                        data-rsp_ch="on"
                        data-xy="x:r,r,c,c;xo:34px,34px,0,666px;yo:399px,389px,256px,233px;"
                        data-text="w:normal;s:18,18,18,15;l:26,26,26,25;"
                        data-vbility="t,t,f,f"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:680;sp:1200;sR:680;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7120;"
                        style="z-index:12;font-family: 'Lato', sans-serif;"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    </rs-layer><!--

                    --><a
                        id="slider-1-slide-1-layer-4" 
                        href="contact-us.html"
                        className="rs-layer cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark"
                        data-type="text"
                        data-color="#05255f"
                        data-rsp_ch="on"
                        data-xy="x:r,r,c,c;xo:20px,20px,15px,15px;y:t,t,t,m;yo:461px,451px,302px,91px;"
                        data-text="w:normal;s:16,16,16,14;l:25,25,20,20;fw:600;fs:i;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:1140;sp:500;sR:1140;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7360;"
                        style="z-index:15;font-family: 'Lato', sans-serif;"
                    ><i className="icon-right text-center"></i><span>Discover Our Services</span>
                    </a><!--

                -->
                </rs-slide>
                <rs-slide data-key="rs-4" data-title="Slide" data-thumb="images/slides/slider-mainbg-004.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">

                    <img src="images/slides/slider-mainbg-004.jpg" title="slider-img-02.jpg" width="1920" height="693" className="rev-slidebg tp-rs-img" data-no-retina/>
                    <!--

                    --><rs-layer
                        id="slider-1-slide-4-layer-0" 
                        data-type="text"
                        data-color="#ff382f"
                        data-rsp_ch="on"
                        data-xy="x:l,l,c,c;xo:35px,35px,0,0;yo:145px,145px,75px,49px;"
                        data-text="w:normal;s:16,16,16,16;l:26,26,26,26;fw:700;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:190;sp:1200;sR:190;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7610;"
                        style="z-index:9;font-family: 'Lato', sans-serif;"
                    >Welcome To Devfox 
                    </rs-layer><!--

                    --><rs-layer
                        id="slider-1-slide-4-layer-1" 
                        data-type="text"
                        data-color="#05255f"
                        data-rsp_ch="on"
                        data-xy="x:l,l,c,c;xo:35px,35px,0,0;yo:175px,175px,111px,71px;"
                        data-text="w:normal;s:72,72,60,50;l:92,92,80,70;fw:400;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:310;sp:1200;sR:310;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7490;"
                        style="z-index:10;font-family:'Lato', sans-serif;"
                    >IT Managed
                    </rs-layer><!--

                    --><rs-layer
                        id="slider-1-slide-4-layer-2" 
                        data-type="text"
                        data-color="#05255f"
                        data-rsp_ch="on"
                        data-xy="x:l,l,c,c;xo:35px,35px,0,1px;yo:269px,269px,185px,127px;"
                        data-text="w:normal;s:72,72,60,50;l:92,92,80,70;fw:700;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:440;sp:1200;sR:440;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7360;"
                        style="z-index:11;font-family:'Lato', sans-serif;"
                    >Solution <span className="text-base-skin">Partners</span>
                    </rs-layer><!--

                    --><rs-layer
                        id="slider-1-slide-4-layer-3" 
                        data-type="text"
                        data-color="#676b72"
                        data-rsp_ch="on"
                        data-xy="x:l,l,c,c;xo:35px,35px,0,666px;yo:375px,375px,255px,233px;"
                        data-text="w:normal;s:18,18,18,15;l:26,26,26,25;"
                        data-vbility="t,t,f,f"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:680;sp:1200;sR:680;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7120;"
                        style="z-index:12;font-family:'Lato', sans-serif;"
                    >We’ve One Mission to be the Best IT Software Company in UK   
                    </rs-layer><!--

                    --><a
                        id="slider-1-slide-4-layer-5" 
                        href="contact-us.html"
                        className="rs-layer cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark"
                        data-type="text"
                        data-color="#05255f"
                        data-rsp_ch="on"
                        data-xy="x:l,l,c,c;xo:35px,35px,15px,15px;y:t,t,t,m;yo:446px,442px,284px,79px;"
                        data-text="w:normal;s:16,16,16,14;l:25,25,20,20;fw:600;fs:i;"
                        data-frame_0="y:-100%;"
                        data-frame_0_mask="u:t;"
                        data-frame_1="st:1140;sp:500;sR:1140;"
                        data-frame_1_mask="u:t;"
                        data-frame_999="o:0;st:w;sR:7360;"
                        style="z-index:15;font-family:'Lato', sans-serif;"
                    ><i className="icon-right text-center"></i><span>see more projects</span>
                    </a><!--

                    
            --></rs-slide>
            </rs-slides>
        </rs-module>
    </rs-module-wrap>
    <!-- END REVOLUTION SLIDER -->

    <!--site-main start-->
    <div className="site-main">


        <!--bg-base-dark-->
        <section className="cmt-row bg-base-grey clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <!-- section title -->
                        <div className="section-title style3 res-991-mb_20">
                            <div className="title-header">
                                <h3>Our Services</h3>
                                <h2 className="title">The specialize IT services</h2>
                            </div>
                            <div className="title-desc">
                                <p>Our technical excellence makes us a go-to partner for your businesses. Let’s
                                connect & discuss how Team can assist you as technology partner from Fully or Co-Managed IT Services <a href="about-us.html" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline">Continue Reading</a></p>
                            </div>
                        </div><!-- section title end -->
                        <div className="pb-60 res-991-p-0"></div>
                    </div>                        
                </div>
            </div>
        </section>
        <!--bg-base-dark end-->


        <!--padding_zero-section-->
        <section className="cmt-row padding_zero-section clearfix">
            <div className="container">
                <div className="row mt_140 res-991-mt-40 mb_15 res-991-mb-0">
                   <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- featured-imagebox -->
                        <div className="featured-imagebox featured-imagebox-procedure">
                            <span className="number"></span>
                            <div className="featured-thumbnail">
                                <img className="img-fluid auto_size" width="185" height="185" src="images/process-01.jpg" alt="image"/>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h3>Connect with Us</h3>
                                </div>
                                <div className="featured-desc">
                                    <p>Connect with us via our portal or front desk for service</p>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- featured-imagebox -->
                        <div className="featured-imagebox featured-imagebox-procedure">
                            <span className="number"></span>
                            <div className="featured-thumbnail">
                                <img className="img-fluid auto_size" width="185" height="185" src="images/process-02.jpg" alt="image"/>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h3>Meeting Setup</h3>
                                </div>
                                <div className="featured-desc">
                                    <p>Connect with our expert team as per your requirement</p>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- featured-imagebox -->
                        <div className="featured-imagebox featured-imagebox-procedure">
                            <span className="number"></span>
                            <div className="featured-thumbnail">
                                <img className="img-fluid auto_size" width="185" height="185" src="images/process-03.jpg" alt="image"/>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h3>Execute & install</h3>
                                </div>
                                <div className="featured-desc">
                                    <p>We execute the planned things for the best outcomes</p>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <!-- featured-imagebox -->
                        <div className="featured-imagebox featured-imagebox-procedure">
                            <span className="number"></span>
                            <div className="featured-thumbnail">
                                <img className="img-fluid auto_size" width="185" height="185" src="images/process-04.jpg" alt="image"/>
                            </div>
                            <div className="featured-content">
                                <div className="featured-title">
                                    <h3>Client Support</h3>
                                </div>
                                <div className="featured-desc">
                                    <p>We provide top maintenance & support for 6 months</p>
                                </div>
                            </div>
                        </div><!-- featured-imagebox end-->
                    </div>
                </div>
            </div>
        </section>
        <!--padding_zero-section end-->


        <!--about-section-->
        <section className="cmt-row about-section clearfix">
            <div className="container">
                <!-- row -->
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="cmt_single_image-wrapper d-table border-rad_5 overflow-hidden res-991-mt_15">
                            <img width="1400" height="1200" className="img-fluid" src="images/single-img-12.jpg" alt="single-12"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="res-1199-pt-40">
                            <!-- section title -->
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>About Us</h3>
                                    <h2 className="title">We have a smart solution for each IT challenge</h2>
                                </div>
                                <div className="title-desc">
                                    <p>Devfox is high-tech industries play an important role in the modern economy & often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s for web applications reliable & solutions.</p>
                                </div>
                            </div><!-- section title end -->
                            <div className="d-sm-flex pt-10 res-767-pt-0">
                                <div className="d-flex res-575-mb-30">
                                    <div className="pl-2 res-575-pl-0 bg-base-skin"></div>
                                    <div className="about-overlay-01">
                                        <h3>IT solution</h3>
                                    </div>
                                    <ul className="cmt-list cmt-list-style-icon pt-15 res-575-pt-0">
                                        <li>
                                            <i className="icon-asterisk text-base-skin"></i>
                                            <span className="cmt-list-li-content text-base-dark">An well experienced IT services & solution provider</span>
                                        </li>
                                        <li>
                                            <i className="icon-asterisk text-base-skin"></i>
                                            <span className="cmt-list-li-content text-base-dark">Backed up by a highly talented and knowledgeable team</span>
                                        </li>
                                        <li>
                                            <i className="icon-asterisk text-base-skin"></i>
                                            <span className="cmt-list-li-content text-base-dark">100% resilient, and stable IT infrastructure available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cmt-horizontal_sep mt-40 res-991-mt-30 mb-25 res-991-mb-30"></div>
                            <div className="row">
                                <div className="col-lg-4 col-md-3 col-sm-12">
                                    <!--cmt-fid-->
                                    <div className="cmt-fid inside style6">
                                        <div className="cmt-fid-contents text-left">
                                            <h4 className="cmt-fid-inner">
                                                <span   data-appear-animation = "animateDigits"
                                                data-from             = "0"
                                                data-to               = "12"
                                                data-interval         = "5"
                                                data-before           = ""
                                                data-before-style     = "sup"
                                                data-after            = "+"
                                                data-after-style      = "sub"
                                            >12</span>
                                            </h4>
                                            <h3 className="cmt-fid-title">Years <br> Experience</h3>
                                        </div>
                                    </div><!-- cmt-fid end-->
                                </div>
                                <div className="col-lg-8 col-md-9 col-sm-12">
                                    <h3 className="pl-5 res-991-pl-0 mb-0 pt-15 res-767-pt-20">The IT Solutions & Services Company <br>Funded in<strong className="text-base-skin"> 1987</strong></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!--about-section end-->


        <!-- services-section_1 -->
        <section className="cmt-row services-section_1 bg-img2 cmt-bgimage-yes cmt-bg clearfix">
            <div className="container">
                <!-- row -->
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pt-130 pb-100 res-991-p-0"></div>
                    </div>
                </div>
                <!-- row end -->
            </div>
        </section>
        <!-- services-section_1 end-->


        <!-- padding_top_zero-section -->
        <section className="cmt-row padding_top_zero-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cmt-bg cmt-col-bgcolor-yes cmt-left-span bg-base-white spacing-7 border-rad_10 mb_15">
                            <div className="cmt-col-wrapper-bg-layer cmt-bg-layer border-rad_10"></div>
                            <div className="layer-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <!-- section title -->
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>our services</h3>
                                                <h2 className="title">We Provide IT & Business Solutions</h2>
                                            </div>
                                        </div><!-- section title end -->
                                    </div>
                                    <div className="col-lg-6">
                                        <p>We’ll help you navigate today’s ever-changing business environment with teams of
                                        technical experts of industry experience.</p>
                                        <ul className="cmt-list cmt-bordered-lists cmt-list-style-icon cmt-list-icon-color-skincolor text-base-dark">
                                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Connect to a wide range of API’s that will innovate and increase customer</span></li>
                                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">We are maintaining critical IT infrastructure versus a reactive approach</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <!--featured-icon-box-->
                                        <div className="featured-icon-box icon-align-top-content style9">
                                            <div className="bg_icon"><i className="flaticon flaticon-cloud"></i></div>
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                    <i className="flaticon flaticon-cloud"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3>Hosting Services</h3>
                                            </div>
                                            <div className="featured-hover-content">
                                                <div className="featured-title">
                                                    <h3><a href="it-consultancy.html">Hosting Services</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>One's website is placed on the same server as many other clients.</p>
                                                </div>
                                                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="it-consultancy.html">More Details<i className="icon-right"></i></a>
                                            </div>
                                        </div><!-- featured-icon-box end-->
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <!--featured-icon-box-->
                                        <div className="featured-icon-box icon-align-top-content style9">
                                            <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                    <i className="flaticon flaticon-server"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3>Backup & recovery</h3>
                                            </div>
                                            <div className="featured-hover-content">
                                                <div className="featured-title">
                                                    <h3><a href="experience-design.html">Backup & recovery</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>The process of storing copies of data, organizations against of data.</p>
                                                </div>
                                                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="experience-design.html">More Details<i className="icon-right"></i></a>
                                            </div>
                                        </div><!-- featured-icon-box end-->
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <!--featured-icon-box-->
                                        <div className="featured-icon-box icon-align-top-content style9">
                                            <div className="bg_icon"><i className="flaticon flaticon-cyber-security"></i></div>
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                    <i className="flaticon flaticon-cyber-security"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3>Cyber Security</h3>
                                            </div>
                                            <div className="featured-hover-content">
                                                <div className="featured-title">
                                                    <h3><a href="digital-services.html">Cyber Security</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>It is a Practice of protecting networks from digital marketing.</p>
                                                </div>
                                                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="digital-services.html">More Details<i className="icon-right"></i></a>
                                            </div>
                                        </div><!-- featured-icon-box end-->
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <!--featured-icon-box-->
                                        <div className="featured-icon-box icon-align-top-content style9">
                                            <div className="bg_icon"><i className="flaticon flaticon-data-management"></i></div>
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                    <i className="flaticon flaticon-data-management"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3>Management services</h3>
                                            </div>
                                            <div className="featured-hover-content">
                                                <div className="featured-title">
                                                    <h3><a href="data-structuring.html">Management services</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>The robust solution needs to be deliver a wide range of features.</p>
                                                </div>
                                                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="data-structuring.html">More Details<i className="icon-right"></i></a>
                                            </div>
                                        </div><!-- featured-icon-box end-->
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <!--featured-icon-box-->
                                        <div className="featured-icon-box icon-align-top-content style9">
                                            <div className="bg_icon"><i className="flaticon flaticon-gear"></i></div>
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                    <i className="flaticon flaticon-gear"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3>Cloud Services</h3>
                                            </div>
                                            <div className="featured-hover-content">
                                                <div className="featured-title">
                                                    <h3><a href="advisory-services.html">Cloud Services</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Infrastructure, platforms, and software that are by third-party</p>
                                                </div>
                                                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="advisory-services.html">More Details<i className="icon-right"></i></a>
                                            </div>
                                        </div><!-- featured-icon-box end-->
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <!--featured-icon-box-->
                                        <div className="featured-icon-box icon-align-top-content style9">
                                            <div className="bg_icon"><i className="flaticon flaticon-cyber-security-1"></i></div>
                                            <div className="featured-icon">
                                                <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                                    <i className="flaticon flaticon-cyber-security-1"></i>
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h3>Network Security</h3>
                                            </div>
                                            <div className="featured-hover-content">
                                                <div className="featured-title">
                                                    <h3><a href="content-engineering.html">Network Security</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Any activities designed to protect the usability & integrity of network</p>
                                                </div>
                                                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="content-engineering.html">More Details<i className="icon-right"></i></a>
                                            </div>
                                        </div><!-- featured-icon-box end-->
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mt-25 mb-10 text-center text-base-dark">Stop wasting time and money on technology. <a href="about-us.html" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline"> Explore our company</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- padding_top_zero-section end-->


        <!-- fid-section_1 -->
        <section className="cmt-row bg-base-dark fid-section_1 clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <!-- section title -->
                        <div className="section-title">
                            <div className="title-header">
                                <h3>Industries We Serves</h3>
                                <h2 className="title">IT services customized for your industry</h2>
                            </div>
                            <div className="title-desc">
                                <p>IT solution is everywhere holding a team of 100+ developers covering all the domains and providing expert solutions across the globe.</p>
                            </div>
                        </div>
                        <!-- section title end-->
                        <ul className="cmt-list cmt-bordered-lists cmt-list-style-icon text-base-white cmt-list-icon-color-skincolor pt-5">
                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Turn complex data into real-time insights with our edge technology solutions</span></li>
                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Deploy & manage edge computing solutions to drive new business outcomes</span></li>
                            <li><i className="fas fa-arrow-right"></i><span className="cmt-list-li-content">Effectively prioritize requirements, achieve alignment & prepare for change.</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="row pl-30 res-991-pl-0 res-991-pt-30">
                            <div className="col-lg-6 col-md-6 col-sm-6 border-bottom pb-30 res-575-pb-40 pl-0 res-991-pl-15">
                                <!-- cmt-fid -->
                                <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style5">
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
                                            <span>M</span>
                                        </h4>
                                        <h3 className="cmt-fid-title">Global reach</h3>
                                    </div>
                                    <div className="cmt-fid-desc">
                                        <p>our great work has been reach to global clients & their satisfaction</p>
                                    </div>
                                </div><!-- cmt-fid end -->
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 border-left border-bottom pb-30 pl-30 res-575-pl-15 res-575-pb-40">
                                <!-- cmt-fid -->
                                <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style5">
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
                                            <span>k</span>
                                        </h4>
                                        <h3 className="cmt-fid-title">Satisfied Clients</h3>
                                    </div>
                                    <div className="cmt-fid-desc">
                                        <p>Provided the best quality services in IT and help business to grow</p>
                                    </div>
                                </div><!-- cmt-fid end -->
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 pt-30 res-575-pt-0 res-575-pb-40 pl-0 res-991-pl-15">
                                <!-- cmt-fid -->
                                <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style5">
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
                                            <span>+</span>
                                        </h4>
                                        <h3 className="cmt-fid-title">Years Experience</h3>
                                    </div>
                                    <div className="cmt-fid-desc">
                                        <p>Celebrating 35 years! Let's take the moment to reflect milestone</p>
                                    </div>
                                </div><!-- cmt-fid end -->
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 border-left pl-30 res-575-pl-15 pt-30 res-575-pt-0">
                                <!-- cmt-fid -->
                                <div className="cmt-fid inside cmt-fid-with-icon cmt-fid-view-lefticon style5">
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
                                            <span>+</span>
                                        </h4>
                                        <h3 className="cmt-fid-title">Awards Win</h3>
                                    </div>
                                    <div className="cmt-fid-desc">
                                        <p>Honored with incredible awards & really grateful for achievement</p>
                                    </div>
                                </div><!-- cmt-fid end -->
                            </div>
                        </div>
                    </div>
                </div><!-- row end -->
            </div>
        </section>
        <!-- fid-section_1 end -->


        <!-- padding_zero-section -->
        <section className="cmt-row padding_zero-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cmt-bg cmt-col-bgcolor-yes bg-base-white cmt-bg spacing-8 border-rad_10 overflow-visible mb_15">
                            <div className="row">
                                <div className="col-lg-12">
                                    <!-- section title -->
                                    <div className="section-title title-style-center_text">
                                        <div className="title-header">
                                            <h3>Our Company</h3>
                                            <h2 className="title">How can we help you?</h2>
                                        </div>
                                    </div><!-- section title end -->
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <!--featured-imagebox-services-->
                                    <div className="featured-imagebox featured-imagebox-services style3">
                                        <!-- featured-thumbnail -->
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid auto_size" src="images/services/services-01.jpg" alt="image" height="370" width="250"/>
                                        </div><!-- featured-thumbnail end-->
                                        <div className="featured-content">
                                            <div className="ser_category">Our Service</div>
                                            <div className="featured-title">
                                                <h3><a href="contact-us.html">How we can help</a></h3>
                                            </div>
                                            <div className="ser_readmore"><a href="contact-us.html" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></a></div>
                                        </div>
                                    </div><!-- featured-imagebox-services end-->
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <!--featured-imagebox-services-->
                                    <div className="featured-imagebox featured-imagebox-services style3">
                                        <!-- featured-thumbnail -->
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid auto_size" src="images/services/services-02.jpg" alt="image" height="370" width="250"/>
                                        </div><!-- featured-thumbnail end-->
                                        <div className="featured-content">
                                            <div className="ser_category">Our expertise</div>
                                            <div className="featured-title">
                                                <h3><a href="contact-us.html">Why partner with us</a></h3>
                                            </div>
                                            <div className="ser_readmore"><a href="contact-us.html" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></a></div>
                                        </div>
                                    </div><!-- featured-imagebox-services end-->
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <!--featured-imagebox-services-->
                                    <div className="featured-imagebox featured-imagebox-services style3">
                                        <!-- featured-thumbnail -->
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid auto_size" src="images/services/services-03.jpg" alt="image" height="370" width="250"/>
                                        </div><!-- featured-thumbnail end-->
                                        <div className="featured-content">
                                            <div className="ser_category">Our customers</div>
                                            <div className="featured-title">
                                                <h3><a href="contact-us.html">Client success stories</a></h3>
                                            </div>
                                            <div className="ser_readmore"><a href="contact-us.html" className="cmt-btn cmt-btn-size-md cmt-icon-btn-right cmt-btn-color-skincolor btn-inline">Discover Now<i className="icon-right"></i></a></div>
                                        </div>
                                    </div><!-- featured-imagebox-services end-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- padding_zero-section end-->


        <!-- padding_bottom_zero-section -->
        <section className="cmt-row padding_top_zero-section bg-img10 cmt-bgimage-yes cmt-bg clearfix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <!-- col-img-img-two -->
                        <div className="cmt-bg cmt-col-bgimage-yes pt-60 res-991-pt-0">
                            <div className="cmt-col-wrapper-bg-layer cmt-bg-layer"></div>
                            <div className="layer-content">
                                <div className="slick_slider" data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "arrows":false, "autoplay":true, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 1}},{"breakpoint":840,"settings":{"slidesToShow": 1}}]}'>
                                    <!-- testimonials -->
                                    <div className="testimonials cmt-testimonial-box-view-style1">
                                        <div className="testimonial-content">
                                            <div className="testimonial-quote-icon">
                                                <i className="icon-quote-right-alt"></i>
                                            </div>
                                            <blockquote className="testimonial-text">We are still not sure how we got here, but we’re excited about where we’re going. Their innovators & engineer makes things easy and in a timely matter.</blockquote>
                                            <div className="testimonial-caption">
                                                <h3>Victor Wilson</h3>
                                                <label>Web Developer</label>
                                            </div>
                                        </div>
                                    </div><!-- testimonials end -->
                                    <!-- testimonials -->
                                    <div className="testimonials cmt-testimonial-box-view-style1"> 
                                        <div className="testimonial-content">
                                            <div className="testimonial-quote-icon">
                                                <i className="icon-quote-right-alt"></i>
                                            </div>
                                            <blockquote className="testimonial-text">An excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</blockquote>
                                            <div className="testimonial-caption">
                                                <h3>Aenna Bell</h3>
                                                <label>IT Manager</label>
                                            </div>
                                        </div>
                                    </div><!-- testimonials end -->
                                    <!-- testimonials -->
                                    <div className="testimonials cmt-testimonial-box-view-style1"> 
                                        <div className="testimonial-content">
                                            <div className="testimonial-quote-icon">
                                                <i className="icon-quote-right-alt"></i>
                                            </div>
                                            <blockquote className="testimonial-text">An excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.</blockquote>
                                            <div className="testimonial-caption">
                                                <h3>Er. john Martin</h3>
                                                <label>WordPress Expert</label>
                                            </div>
                                        </div>
                                    </div><!-- testimonials end -->
                                </div>
                                <div className="cmt-horizontal_sep width-100 mt-40 mb-70 res-991-mt-15 res-991-mb-35"></div>
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <!-- section title -->
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>Let’s get started</h3>
                                                <h2 className="title">Are you ready to get <span className="text-base-skin">IT</span> Solutions?</h2>
                                            </div>
                                        </div><!-- section title end -->
                                        <div className="row mt_15">
                                            <div className="col-lg-5 col-sm-6">
                                                <div className="featured-icon-box icon-align-before-title">
                                                    <div className="featured-icon">
                                                        <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-style-round cmt-icon_element-color-grey cmt-icon_element-size-xs">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="featured-title">
                                                        <h3 className="fs-18 fw-normal">Experts around the world</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="featured-icon-box icon-align-before-title">
                                                    <div className="featured-icon">
                                                        <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-style-round cmt-icon_element-color-grey cmt-icon_element-size-xs">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="featured-title">
                                                        <h3 className="fs-18 fw-normal">Best Practice for industry</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark mt-50 res-991-mt-30" href="project-style-01.html"><i className="icon-right"></i><span>see more plans</span></a>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="res-991-mt-30 ml_60 res-991-ml-0">
                                            <img width="443" height="285" className="img-fluid" src="images/single-img-icons.png" alt="single-img-icons"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- col-img-bg-img-two end-->
                    </div>
                </div>
            </div>
        </section>
        <!-- padding_bottom_zero-section end -->


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
                                    <li><a href="https://www.facebook.com/cymolthemes.191219" rel="noopener" aria-label="facebook"><i className="icon-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/CymolThemes" rel="noopener" aria-label="twitter"><i className="icon-twitter"></i></a></li>
                                    <li><a href="https://www.behance.net/cymolthemes191219" rel="noopener" aria-label="linkedin"><i className="icon-linkedin"></i></a></li>
                                    <li><a href="https://in.pinterest.com/cymolthemes/" rel="noopener" aria-label="pinterest"><i className="icon-pinterest"></i></a></li>
                                    <li><a href="https://dribbble.com/cymol_themes" rel="noopener" aria-label="dribbble"><i className="icon-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                        <div className="widget widget_cta clearfix">
                            <h4>+0022 6544 9977</h4>
                            <ul className="widget_contact_wrapper">
                                <li><i className="flaticon-envelope"></i><a href="mailto:info@example.com.com">support@cymolthemes.com</a>24 x 7 Online Support</li>
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
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Meet Our Team</a></li>
                                    <li><a href="#">News & Media</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                </ul>
                            </div>
                            <div className="widget_nav_menu clearfix">
                               <h3 className="widget-title">Solutions</h3>
                               <ul className="menu-footer-quick-links links-2">
                                    <li><a href="#">IT Management</a></li>
                                    <li><a href="#">Cyber Security</a></li>
                                    <li><a href="#">Software Dev</a></li>
                                    <li><a href="#">Backup & Recovery</a></li>
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
                        <span className="cpy-text">Copyright © 2022 DevfoxTemplates. Designed and Developed by<span className="text-base-skin u1"><a href="https://www.cymolthemes.com/"> Cymolthemes </a></span>only on <span className="text-green u1"><a href="https://themeforest.net/user/cymolthemes">Envato Market.</a></span></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--footer end-->

<!--back-to-top start-->
<a id="totop" href="#top">
    <i className="icon-angle-up"></i>
</a>
<!--back-to-top end-->

</div>
  )
}
