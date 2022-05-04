import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <section className="cmt-row blog-section bg-base-grey mt_332 res-991-mt-20 clearfix">
    <div className="container">
        <div className="row">
            <div className="pt-345 res-991-pt-0"></div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                    <div className="title-header">
                        <h3>Quick Facts</h3>
                        <h2 className="title">Believe in Spreading Knowledge</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb_15">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="featured-imagebox featured-imagebox-post style4">
                    <div className="featured-thumbnail">
                        <img width="370" height="200" className="img-fluid" src="images/blog/blog-01-370x200.jpg" alt="" />
                        <div className="post-category"><Link to="#">Cost & Features</Link></div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-content-inner">
                            <div className="post-header">
                                <div className="post-meta">
                                    <span className="cmt-meta-line post-date">
                                        <i className="icon-calendar"></i>
                                        <Link to="#" rel="bookmark">
                                            <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">On May  4,2021</time>
                                        </Link>
                                    </span>
                                </div>
                                <div className="post-title featured-title">
                                    <h3><Link to="/blogsingle">8 Tips To Protect Your Business Data From Phishing Attack</Link></h3>
                                </div>
                                <div className="cmt-blogbox-footer-readmore">
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/blogsingle">read more<i className="icon-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="featured-imagebox featured-imagebox-post style4">
                    <div className="featured-thumbnail">
                        <img width="370" height="200" className="img-fluid" src="images/blog/blog-02-370x200.jpg" alt="" />
                        <div className="post-category"><Link to="#">Content Engineering</Link></div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-content-inner">
                            <div className="post-header">
                                <div className="post-meta">
                                    <span className="cmt-meta-line post-date">
                                        <i className="icon-calendar"></i>
                                        <Link to="#" rel="bookmark">
                                            <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">On May  14,2021</time>
                                        </Link>
                                    </span>
                                </div>
                                <div className="post-title featured-title">
                                    <h3><Link to="/blogsingle">How To Review Some General Types Of Data Backups</Link></h3>
                                </div>
                                <div className="cmt-blogbox-footer-readmore">
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/blogsingle">read more<i className="icon-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="post-list pb-15 res-991-mt_15">
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
                    </div>
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
                    </div>
                </div>
                <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-15" to="/bloglist"><i className="icon-right"></i><span>view more</span></Link>
            </div>
        </div>
    </div>
</section>
  )
}
