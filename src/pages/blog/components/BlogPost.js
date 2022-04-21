import React from 'react'
import { Link } from "react-router-dom";

export default function BlogPost() {
    return (
        <article className="post cmt-blog-classic clearfix">

            <div className="cmt-post-featured-wrapper cmt-featured-wrapper">
                <div className="cmt-post-featured">
                    <img width="1200" height="800" className="img-fluid" src="images/blog/blog-01-1200x800.jpg" alt="blog-img" />
                    <div className="cmt-box-post-cat">
                        <a href="#">Advisory Services</a>
                    </div>
                </div>
            </div>
            <div className="cmt-blog-classic-content">
                <div className="cmt-post-entry-header">
                    <div className="post-meta">
                        <span className="cmt-meta-line date"><i className="icon-calendar"></i><time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">January 11, 2022</time></span>
                        <span className="cmt-meta-line category"><i className="icon-folder-open-empty"></i><a href="#"> Advisory Services</a></span>
                        <span className="cmt-meta-line comment"><i className="icon-comment-empty"></i><a href="#">0 Comments</a></span>
                    </div>
                    <header className="entry-header">
                        <h2 className="entry-title"><Link to="/blogsingle">Demanding photographer has a characteristics</Link></h2>
                    </header>
                </div>
                <div className="entry-content">
                    <div className="cmt-box-desc-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et do eiusmod tempor</p>
                    </div>
                    <div className="cmt-blogbox-footer-readmore">
                        <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/blogsingle">read more<i className="icon-right"></i></Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
