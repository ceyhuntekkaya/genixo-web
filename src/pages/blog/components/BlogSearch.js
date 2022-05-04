import React from 'react'

export default function BlogSearch() {
    return (
        <aside className="widget widget-search with-title">
            <form role="search" method="get" className="search-form" action="#">
                <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input type="search" className="input-text" placeholder="Search …" name="s" />
                </label>
                <button className="btn cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-fill cmt-btn-color-dark" type="submit"><i className="icon-search-1"></i> </button>
            </form>
        </aside>
    )
}
