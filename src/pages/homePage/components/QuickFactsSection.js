import React from 'react'

export default function QuickFactsSection() {
  return (
    <section className="cmt-row blog-section clearfix">
    <div className="container">
      {/* <!-- row --> */}
      <div className="row">
        <div className="col-lg-12">
          {/* <!-- section title --> */}
          <div className="section-title title-style-center_text">
            <div className="title-header">
              <h3>Quick Facts</h3>
              <h2 className="title">We believe in counting numbers</h2>
            </div>
          </div>{/* <!-- section title end --> */}
        </div>
      </div>
      <div className="row mb_15">
        <div className="col-lg-4">
          <div className="post-list pb-20 res-991-mt_15">
            {/* <!-- featured-imagebox-post --> */}
            <div className="featured-imagebox featured-imagebox-post style1">
              <div className="featured-content">
                <div className="post-meta">
                  <span className="cmt-meta-line post-date">
                    <i className="icon-calendar"></i>
                    <a href="#" rel="bookmark">
                      <time className="entry-date published" datetime="2022-01-11T06:51:39+00:00">January 11, 2022</time>
                    </a>
                  </span>
                </div>
                <div className="featured-title">
                  <h3><a href="blog-single.html">Demanding photographer has a characteristics</a></h3>
                </div>
              </div>
            </div>{/* <!-- featured-imagebox-post end--> */}
            {/* <!-- featured-imagebox-post --> */}
            <div className="featured-imagebox featured-imagebox-post style1">
              <div className="featured-content">
                <div className="post-meta">
                  <span className="cmt-meta-line post-date">
                    <i className="icon-calendar"></i>
                    <a href="#" rel="bookmark">
                      <time className="entry-date published" datetime="2022-01-11T06:50:50+00:00">January 11, 2022</time>
                    </a>
                  </span>
                </div>
                <div className="featured-title">
                  <h3><a href="blog-single.html">Software development solutions for great business</a></h3>
                </div>
              </div>
            </div>{/* <!-- featured-imagebox-post end--> */}
          </div>
          <a className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-40" href="blog.html"><i className="icon-right"></i><span>view more</span></a>
        </div>
        <div className="col-lg-8">
          {/* <!-- featured-imagebox-post --> */}
          <div className="featured-imagebox featured-imagebox-post style2 left-img-view">
            <div className="featured-thumbnail">
              <img width="600" height="650" className="img-fluid" src="images/blog/blog-01-600x650.jpg" alt="" />
              <div className="post-category">Data Structuring</div>
            </div>
            {/* <!-- featured-content --> */}
            <div className="featured-content">
              <div className="featured-content-inner">
                <div className="post-header">
                  {/* <!-- post-meta --> */}
                  <div className="post-meta">
                    <span className="cmt-meta-line post-date">
                      <i className="icon-calendar"></i><a href="#" rel="bookmark"><time className="entry-date published" datetime="2022-01-11T06:46:46+00:00">January 11, 2022</time></a></span>
                  </div>{/* <!-- post-meta end --> */}
                  <div className="post-title featured-title">
                    <h3><a href="blog-single.html">What are insider attacks and how to prevent them</a></h3>
                  </div>
                </div>
                <div className="post-desc featured-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor...</p>
                </div>
              </div>
              <div className="post-view-more">
                <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" href="blog-single.html">view more<i className="icon-right"></i></a>
              </div>
            </div>{/* <!-- featured-content end --> */}
          </div>{/* <!-- featured-imagebox-post end --> */}
        </div>
      </div>
    </div>
  </section>
  )
}
