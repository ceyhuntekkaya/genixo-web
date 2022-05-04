import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="cmt-row about-section clearfix">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-6 col-md-12">
                <div className="cmt_single_image-wrapper d-table border-rad_5 overflow-hidden res-991-mt_15">
                    <img width="1400" height="1200" className="img-fluid" src="images/single-img-12.jpg" alt="single-12"/>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="res-1199-pt-40">
                    <div className="section-title">
                        <div className="title-header">
                            <h3>About Us</h3>
                            <h2 className="title">We have a smart solution for each IT challenge</h2>
                        </div>
                        <div className="title-desc">
                            <p>Devfox is high-tech industries play an important role in the modern economy & often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s for web applications reliable & solutions.</p>
                        </div>
                    </div>
                    <div className="d-sm-flex pt-10 res-767-pt-0">
                        <div className="d-flex res-575-mb-30">
                            <div className="pl-2 res-575-pl-0 bg-base-skin"></div>
                            <div className="about-overlay-01">
                                <h3>IT solution</h3>
                            </div>
                            <ul className="cmt-list cmt-list-style-icon pt-15 res-575-pt-0">
                                <li>
                                    <i className="icon-asterisk text-base-skin"></i>
                                    <span className="cmt-list-li-content text-base-dark">An well experienced IT services & solution provider</span>
                                </li>
                                <li>
                                    <i className="icon-asterisk text-base-skin"></i>
                                    <span className="cmt-list-li-content text-base-dark">Backed up by a highly talented and knowledgeable team</span>
                                </li>
                                <li>
                                    <i className="icon-asterisk text-base-skin"></i>
                                    <span className="cmt-list-li-content text-base-dark">100% resilient, and stable IT infrastructure available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cmt-horizontal_sep mt-40 res-991-mt-30 mb-25 res-991-mb-30"></div>
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-12">
                            <div className="cmt-fid inside style6">
                                <div className="cmt-fid-contents text-left">
                                    <h4 className="cmt-fid-inner">
                                        <span   data-appear-animation = "animateDigits"
                                        data-from             = "0"
                                        data-to               = "12"
                                        data-interval         = "5"
                                        data-before           = ""
                                        data-before-style     = "sup"
                                        data-after            = "+"
                                        data-after-style      = "sub"
                                    >12</span>
                                    </h4>
                                    <h3 className="cmt-fid-title">Years <br/> Experience</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-9 col-sm-12">
                            <h3 className="pl-5 res-991-pl-0 mb-0 pt-15 res-767-pt-20">The IT Solutions & Services Company <br/>Funded in<strong className="text-base-skin"> 1987</strong></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
