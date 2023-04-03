import React from 'react'
import Footer1 from './components/Footer1'
import Header from './components/Header'
import {useTranslation} from "react-i18next";

export default function AboutUs() {
    const {t, i18n} = useTranslation('common');
    
    return (
        <React.Fragment>
            <div id="page" className="page">
                <Header mainCssClass="header tra-menu navbar-dark" />
                <section id="about-2" className="about-section">
                    <div className="bg-inner bg-lightgrey inner-page-hero division">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-8">
                                    <div className="text-center m-auto">
                                        <h2 className="h2-xl">Software Solution Partner & Innovation Company</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="about-2-images">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col col-md-5">
                                        <img className="img-fluid" src="images/about-1-img.jpg" alt="about-image" />
                                    </div>
                                    <div className="col col-md-7">
                                        <img className="img-fluid" src="images/about-2-img.jpg" alt="about-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <hr className="divider" />
                <section id="content-3" className="content-3 wide-60 content-section division">
                    <div className="container">
                        <div className="top-row pb-50">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-6 order-last order-lg-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        <h2 className="h2-xs">Dynamism</h2>
                                        <p className="p-lg">Informatics is the sector with the largest trackable market share in the world, and the interesting thing is that it did not take long to reach this size. So how did this happen? With technology and therefore with innovation. Development and change are so fast that it can be difficult to follow. It is getting harder to keep up with new dynamics and to act proactively. As Genixo, our mission here is clear, and that is to stay dynamic. Genixo's vision in this regard is to always stay up-to-date and respond to the needs of the day, no matter how fast the world of informatics changes and how different the needs are. We have a corporate mentality that calculates the future by adopting a constantly pro-active attitude and can give an appropriate reaction when faced with unforeseen problems. Thus, we can stay dynamic all the time!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-6 order-first order-md-2">
                                    <div className="img-block left-column wow fadeInLeft">
                                        <img className="img-fluid" src="images/img-16.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="bottom-row">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block left-column wow fadeInRight">
                                        <img className="img-fluid" src="images/img-17.png" alt="video-preview" />
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        <div className="txt-box mb-25">
                                            <h2 className="h2-xs">Passion & Devotion</h2>
                                            <p className="p-lg">There is no devotion without passion. Without devotion, a passion will never come close to its potential and is doomed to be less successful. Being aware of this, Genixo is more than a company, it is a community of people who are aware of the fact that there is no limit to personal development, aim to develop themselves continuously, are passionate about their goals and are dedicated to achieving these goals. In line with this community consciousness built on passion and devotion, we invite ourselves and everyone we collaborate with to further their potential, to think bigger, to work more devotedly and to be more successful!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="content-5" className="content-5 ws-wrapper content-section division">
                    <div className="container">
                        <div className="content-5-wrapper bg-whitesmoke">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-6">
                                    <div className="txt-block left-column wow fadeInRight">
                                        <h2 className="h2-xs">Professionalism</h2>
                                        <p className="p-lg">Success is achievable once you are skilled or experienced at a job. However, in order to maintain the persistence of the success achieved, a professional approach is essential, otherwise, you will definitely shorten the life of the success you have achieved. Genixo mentality always aims for persistence and sustainable success both on a personal and corporate basis by having a brand culture in which talented and experienced people work professionally. With our professional business awareness, we do not leave success to chance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="images/img-15.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="divider" />

                <Footer1 mainCssClass="footer division" />
            </div>
        </React.Fragment>
    )
}
