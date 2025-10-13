


import pageBanner from "@/app/assets/images/bg/page-banner.jpg";
import counterLogo from "@/app/assets/images/bg/counter-bg2.jpg";
import chooseUsLogo from "@/app/assets/images/bg/choose-us-bg3.jpg";
import PageBanner from "@/app/component/page-banner";


export default function AboutPage() {

    return (
        <>

           <PageBanner bannerLink={pageBanner.src} />

            <div className="section techwix-about-section-07 section-padding">
                <div className="shape-1"></div>
                <div className="container">
                    <div className="about-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img-wrap">
                                    <img className="shape-1" src="/assets/images/shape/about-shape2.png" alt=""/>
                                    <div className="about-img">
                                        <img src="/assets/images/about-3.jpg" alt=""/>
                                    </div>
                                    <div className="about-img about-img-2">
                                        <img src="/assets/images/about-4.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-wrap">
                                    <div className="section-title">
                                        <h3 className="sub-title">Who we are</h3>
                                        <h2 className="title">Highly Tailored IT Design, Management & Support
                                            Services.</h2>
                                    </div>
                                    <p className="text">Accelerate innovation with world-className tech teams We’ll
                                        match you to
                                        an entire remote team of incredible freelance talent for all your software
                                        development needs.</p>
                                    <div className="about-list-03">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="about-list-item-03">
                                                    <h3 className="title">Our Mission</h3>
                                                    <p>Accelerate innovation with world-className tech teams. We help
                                                        businesses elevate their value.</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="about-list-item-03">
                                                    <h3 className="title">Custom Code</h3>
                                                    <p>Accelerate innovation with world-className tech teams. We help
                                                        businesses elevate their value.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section techwix-counter-section-03 techwix-counter-section-04">
                <div className="container">
                    <div className="counter-wrap" style={{backgroundImage: `url(${counterLogo.src})`}}>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span>354+</span>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span>119+</span>
                                    <p>Robotic Automation</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span>99%</span>
                                    <p>Web Site Analyse</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span>321+</span>
                                    <p>Clients Supoort Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section techwix-choose-us-section section-padding"
                 style={{backgroundImage: `url(${chooseUsLogo.src})`}}>
                <div className="container">
                    <div className="choose-us-wrap">
                        <div className="section-title text-center">
                            <h3 className="sub-title">REASON TO CHOOSE US</h3>
                            <h2 className="title">We provide truly prominent IT solutions.</h2>
                        </div>
                        <div className="choose-us-content-wrap">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/ser-icon9.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Infrustructure <br/> Technology</a>
                                            </h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/counter-3.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Highly professional team
                                                members</a></h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">

                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/ser-icon10.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Security <br/> Management</a>
                                            </h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/ser-icon12.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Desktop <br/> Computing</a>
                                            </h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/counter-1.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Infrustructure <br/> Technology</a>
                                            </h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/counter-2.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Ideas for high return
                                                investment</a></h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/ser-icon21.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Fully high
                                                IT <br/> Managment</a>
                                            </h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <img src="/assets/images/ser-icon22.png" alt=""/>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title"><a href="service.html">Data secure & Managment</a>
                                            </h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to
                                                an
                                                entire.</p>
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