import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import BlogCategory from './components/BlogCategory'
import BlogPost from './components/BlogPost'
import BlogPromo from './components/BlogPromo'
import BlogSearch from './components/BlogSearch'
import BlogTags from './components/BlogTags'
import BlogTrending from './components/BlogTrending'

export default function Blog() {
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
                                    <BlogPost />
                                    <BlogPost />
                                    <BlogPost />
                                    <BlogPost />
                                    <BlogPost />
                                    <div className="pagination-block">
                                        <span className="page-numbers current">1</span>
                                        <a className="page-numbers" href="#">2</a>
                                        <a className="next page-numbers" href="#"><i className="icon-right"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 widget-area sidebar-right">
                                    <BlogSearch />
                                    <BlogCategory />
                                    <BlogTrending />
                                    <BlogTags />
                                    <BlogPromo />
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
