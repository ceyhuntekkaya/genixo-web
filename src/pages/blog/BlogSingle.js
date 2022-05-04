import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import BlogCategory from './components/BlogCategory'
import BlogPromo from './components/BlogPromo'
import BlogReply from './components/BlogReply'
import BlogSearch from './components/BlogSearch'
import BlogShare from './components/BlogShare'
import BlogTags from './components/BlogTags'
import BlogTrending from './components/BlogTrending'

export default function BlogSingle() {
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
                    <div className="cmt-row sidebar cmt-sidebar-right clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 content-area">
                               <article className="post cmt-blog-single clearfix">
                                        <div className="cmt-post-featured-wrapper cmt-featured-wrapper">
                                            <div className="cmt-post-featured">
                                                <img width="1200" height="800" className="img-fluid" src="images/blog/blog-01-1200x800.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="cmt-blog-single-content">
                                            <div className="cmt-post-entry-header">
                                                <div className="post-meta">
                                                    <span className="cmt-meta-line date"><i className="icon-calendar"></i><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">January 11, 2022</time></span>
                                                    <span className="cmt-meta-line category"><i className="icon-folder-open-empty"></i><a href="#"> Advisory Services</a></span>
                                                    <span className="cmt-meta-line comment"><i className="icon-comment-empty"></i><a href="#">0 Comments</a></span>
                                                </div>
                                            </div>
                                            <div className="entry-content">
                                                <div className="cmt-box-desc-text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et do eiusmod tempor<span id="more-5416"></span> incididunt ut labore et dolore magna aliqua. Quis ipsum ommodo viverra maecenas suspendisse ultrices gravida.</p>

                                                    <blockquote className="cmt-bgcolor-grey cmt-textcolor-darkgrey"><div className="qoute-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor viverra maecenas accumsan lacus vel facilisis.</p><p><cite className="cmt-textcolor-darkgrey">Garreth Mills, Founder</cite></p></div></blockquote>

                                                    <div className="row mb-30">
                                                        <div className="col-md-12">
                                                            <div className="ttm_single_image-wrapper border-rad_5 overflow-hidden mt-15 mb-15">
                                                                <img width="770" height="330" className="img-fluid w-100" src="images/single-img-10.jpg" alt="single-10" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="ttm_single_image-wrapper border-rad_5 overflow-hidden mt-15 mb-15">
                                                                <img width="370" height="300" className="img-fluid w-100" src="images/single-img-11.jpg" alt="single-11" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="ttm_single_image-wrapper border-rad_5 overflow-hidden mt-15 mb-15">
                                                                <img width="370" height="300" className="img-fluid w-100" src="images/single-img-08.png" alt="single-08" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et do</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ommodo viverra maecenas suspendisse ultrices gravida.</p>

                                                    <div className="social-media-block">
                                                        <div className="ttm_tag_lists">
                                                            <span className="cmt-tags-links-title">Tags:</span>
                                                            <span className="cmt-tags-links"><a href="#">Appliance</a>, <a href="#">Solution</a></span>
                                                        </div>
                                                       <BlogShare/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       <BlogReply/>
                                    </article>
                                </div>
                                <div className="col-lg-4 widget-area sidebar-right">
                                    <BlogSearch/>
                                    <BlogCategory/>
                                    <BlogTrending/>
                                    <BlogTags/>
                                    <BlogPromo/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>
    )
}
