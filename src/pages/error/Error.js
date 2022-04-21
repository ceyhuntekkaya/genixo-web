import React from 'react'

export default function Error() {
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

                    <section className="error-404">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6 col-9 m-auto">
                                    <div className="cmt-404-img">
                                        <img width="570" height="445" className="img-fluid" src="images/404.png" alt="404.png" />
                                    </div>
                                    <div className="page-content"><p>This page may have been moved or deleted. Be sure to check your spelling.</p></div>
                                    <a className="cmt-btn cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-border cmt-btn-color-dark" href="index.html">Back To Home</a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>




                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>




    )
}
