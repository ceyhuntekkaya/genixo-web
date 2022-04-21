import React from 'react'

export default function BlogTrending() {
    return (
        <aside className="widget widget-recent-post with-title">
            <h3 className="widget-title">Trending Posts</h3>
            <ul className="widget-post cmt-recent-post-list">
                <li>
                    <div className="post-detail">
                        <span className="post-date"><i className="icon-calendar"></i>January 11, 2022</span>
                        <a href="blog-single.html">Demanding photographer has a characteristics</a>
                    </div>
                </li>
                <li>
                    <div className="post-detail">
                        <span className="post-date"><i className="icon-calendar"></i>January 11, 2022</span>
                        <a href="blog-single.html">Software development solutions for great business</a>
                    </div>
                </li>
            </ul>
        </aside>
    )
}
