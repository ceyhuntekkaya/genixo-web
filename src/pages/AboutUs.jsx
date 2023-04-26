import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import {useTranslation} from "react-i18next";

export default function AboutUs() {
    const {t} = useTranslation('common');//.    {t('ngsd.description')}
    
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
                                        <h2 className="h2-xl">{t('about_us.name')}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="about-2-images">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col col-md-5">
                                        <img className="img-fluid" src="images/about-1-img.jpg" alt="about" />
                                    </div>
                                    <div className="col col-md-7">
                                        <img className="img-fluid" src="images/about-2-img.jpg" alt="about" />
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
                                        <h2 className="h2-xs">{t('about_us.dynamism')}</h2>
                                        <p className="p-lg">{t('about_us.dynamism_description')}</p>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-6 order-first order-md-2">
                                    <div className="img-block left-column wow fadeInLeft">
                                        <img className="img-fluid" src="images/img-16.png" alt="content" />
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
                                            <h2 className="h2-xs">{t('about_us.passion')}</h2>
                                            <p className="p-lg">{t('about_us.passion_description')}</p>
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
                                        <h2 className="h2-xs">{t('about_us.professionalism')}</h2>
                                        <p className="p-lg">{t('about_us.professionalism_description')}</p>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-6">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="images/img-15.png" alt="content" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="divider" />

                <Footer mainCssClass="footer division" />
            </div>
        </React.Fragment>
    )
}
