'use client';

export default function BlogSection() {
    return (
        <>

            <div className="section techwix-blog-section section-padding-02">
                <div className="container">
                    <div className="section-title text-center">
                        <h4 className="sub-title">latest Blog</h4>
                        <h2 className="title">From the news room</h2>
                    </div>
                    <div className="techwix-blog-wrap">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <a href="blog-details.html"><img src="/assets/images/blog/blog-1.jpg"
                                                                         alt=""/></a>
                                        <div className="top-meta">
                                            <span className="date"><span>08</span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">Andrew Paker</a></span>
                                            <span><i className="far fa-comments"></i> 0 Comments</span>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">How to become a successful
                                            businessman
                                        </a></h3>
                                        <div className="blog-btn">
                                            <a className="blog-btn-link" href="blog-details.html">Read Full <i
                                                className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <a href="blog-details.html"><img src="/assets/images/blog/blog-2.jpg"
                                                                         alt=""/></a>
                                        <div className="top-meta">
                                            <span className="date"><span>10</span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">Andrew Paker</a></span>
                                            <span><i className="far fa-comments"></i> 0 Comments</span>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Who Needs Extract Value From
                                            Data?
                                        </a></h3>
                                        <div className="blog-btn">
                                            <a className="blog-btn-link" href="blog-details.html">Read Full <i
                                                className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <a href="blog-details.html"><img src="/assets/images/blog/blog-3.jpg"
                                                                         alt=""/></a>
                                        <div className="top-meta">
                                            <span className="date"><span>12</span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">Andrew Paker</a></span>
                                            <span><i className="far fa-comments"></i> 0 Comments</span>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Easy and Most Powerful Server
                                            and
                                            Platform.</a></h3>
                                        <div className="blog-btn">
                                            <a className="blog-btn-link" href="blog-details.html">Read Full <i
                                                className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}