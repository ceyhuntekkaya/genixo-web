import React from 'react'
import { Link } from 'react-router-dom'
export default function Services() {
  return (
    <section className="cmt-row step-section bg-base-grey mt_250 res-991-mt-0 clearfix">
    <div className="container">
        <div className="row">
            <div className="cpl-lg-12">
                <div className="pt-150 res-991-pt-0"></div>
            </div>
        </div>
        <div className="cmt-horizontal_sep mb-35 res-991-mb-0"></div>
        <div className="row">
            <div className="col-lg-12">
                <div className="slick_slider" data-slick='{"slidesToShow": 6, "slidesToScroll": 1, "arrows":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":1200,"settings":{"slidesToShow": 5}}, {"breakpoint":1024,"settings":{"slidesToShow": 4}}, {"breakpoint":777,"settings":{"slidesToShow": 3}},{"breakpoint":575,"settings":{"slidesToShow": 2}},{"breakpoint":380,"settings":{"slidesToShow": 1}}]}'>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="152" height="60" className="img-fluid" src="images/client/client-01.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="128" height="60" className="img-fluid" src="images/client/client-02.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="142" height="60" className="img-fluid" src="images/client/client-03.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="182" height="61" className="img-fluid" src="images/client/client-04.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="152" height="60" className="img-fluid" src="images/client/client-01.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="128" height="60" className="img-fluid" src="images/client/client-02.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <div className="cmt-client-logo-tooltip">
                            <div className="cmt-client-logo-tooltip-inner">
                                <div className="client-thumbnail">
                                    <img width="142" height="60" className="img-fluid" src="images/client/client-03.png" alt="genixo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="mt-25 text-center">DevFox Takes <Link to="/about" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline">Sponsorship </Link> From The Leading Brands Worldwide</div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="pb-70 res-991-pb-60"></div>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="cmt-tabs cmt-tab-style-03 clearfix" data-effect="fadeIn">
                    <ul className="tabs">
                        <div className="section-title">
                            <div className="title-header">
                                <h3>Our Services</h3>
                                <h2 className="title">What We Do?</h2>
                            </div>
                            <div className="title-desc">
                                <p>We keep up with industry trends by constantly enhancing your solutions and offerings and develop solutions to best fit your business needs.</p>
                            </div>
                        </div>
                        <li className="tab active"><Link to="#">Hosting Services</Link></li>
                        <li className="tab"><Link to="#">Backup & recovery</Link></li>
                        <li className="tab"><Link to="#">Cyber Security</Link></li>
                        <li className="tab"><Link to="#">Management services</Link></li>
                        <li className="tab"><Link to="#">Cloud Services</Link></li>
                        <li className="tab"><Link to="#">Network Security</Link></li>
                        <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-40 pt-30 res-767-pb-20" to="/project"><i className="icon-right"></i><span>See More Services</span></Link>
                    </ul>
                    <div className="content-tab">
                        <div className="content-inner active">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-cloud"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-cloud"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Hosting Services</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Once a website is placed on the same server can be access by many clients.</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-01-570x630.jpg" alt="project-01" /></p>
                        </div>
                        <div className="content-inner">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-server"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Backup & recovery</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Process of storing copies into the database,organizations against of data.</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-01-570x630.jpg" alt="project-01" /></p>
                        </div>
                        <div className="content-inner">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-server"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-server"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Backup & recovery</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Process of storing copies into the database,organizations against of data.</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-01-570x630.jpg" alt="project-01" /></p>
                        </div>
                        <div className="content-inner">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-cyber-security"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-cyber-security"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Cyber Security</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>The application of technologies processes and controls to protect systems</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-03-570x630.jpg" alt="project-03" /></p>
                        </div>
                        <div className="content-inner">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-data-management"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-data-management"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Management services</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>An Accurate robust solution need to deliver wide range of functionalities.</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-04-570x630.jpg" alt="project-04" /></p>
                        </div>
                        <div className="content-inner">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-gear"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-gear"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Cloud Services</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Infrastructure, platforms, and software that are provided by third-party</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-05-570x630.jpg" alt="project-05" /></p>
                        </div>
                        <div className="content-inner">
                            <div className="featured-icon-box icon-align-top-content style10 slideInLeft">
                                <div className="bg_icon"><i className="flaticon flaticon-cyber-security-1"></i></div>
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-lg">
                                        <i className="flaticon flaticon-cyber-security-1"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Network Security</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Protection for the ever-growing landscape of cyber threats in the wild today.</p>
                                    </div>
                                    <Link className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-skincolor" to="/consultancy">More Details<i className="icon-right"></i></Link>
                                </div>
                            </div>
                            <p><img width="570" height="630" className="img-fluid" src="images/portfolio/portfolio-06-570x630.jpg" alt="project-06" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
