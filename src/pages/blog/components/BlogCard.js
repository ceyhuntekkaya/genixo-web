import React from 'react'
import { Link } from "react-router-dom";
export default function BlogCard() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="featured-imagebox featured-imagebox-post style3">
                <div className="featured-thumbnail">
                    <img width="1200" height="800" className="img-fluid" src="images/blog/blog-02-1200x800.jpg" alt="" />
                    <div className="post-category"><a href="#">Content Engineering</a></div>
                </div>
                <div className="featured-content">
                    <div className="featured-content-inner">
                        <div className="post-header">

                            <div className="post-meta">
                                <span className="cmt-meta-line date-link"><i className="icon-calendar"></i><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">January 4, 2022</time></span>
                            </div>
                            <div className="post-title featured-title">
                                <h3><Link to="/blogsingle">Demanding photographer has a characteristics</Link></h3>
                            </div>
                            <div className="post-desc featured-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
