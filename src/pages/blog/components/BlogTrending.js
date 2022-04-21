import React from 'react'
import { Link } from "react-router-dom";

export default function BlogTrending() {
    return (
        <aside className="widget widget-recent-post with-title">
            <h3 className="widget-title">Trending Posts</h3>
            <ul className="widget-post cmt-recent-post-list">
                <li>
                    <div className="post-detail">
                        <span className="post-date"><i className="icon-calendar"></i>January 11, 2022</span>
                        <Link to="/blogsingle">Demanding photographer has a characteristics</Link>
                    </div>
                </li>
                <li>
                    <div className="post-detail">
                        <span className="post-date"><i className="icon-calendar"></i>January 11, 2022</span>
                        <Link to="/blogsingle">Software development solutions for great business</Link>
                    </div>
                </li>
            </ul>
        </aside>
    )
}
