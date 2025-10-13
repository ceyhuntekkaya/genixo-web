'use client';


import {Dictionary} from "@/i18n/types";

interface PageProps {
    dict: Dictionary;
}
export default function SolutionAISection({ dict }: PageProps) {
    return (
        <>

            <div className="section techwix-solution-section section-padding">
                <div className="container">
                    <div className="solution-wrap">
                        <div className="section-title text-center">
                            <h3 className="sub-title"> WE Deliver Excellence</h3>
                            <h2 className="title">Solutions To Common AI Problems</h2>
                        </div>
                        <div className="solution-content-wrap">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="solution-item solution-item-big">
                                        <div className="solution-img">
                                            <a href="#"><img src="/assets/images/solution-1.jpg" alt=""/></a>
                                        </div>
                                        <div className="solution-content">
                                            <div className="solution-title">
                                                <h4 className="sub-title">Machine</h4>
                                                <h3 className="title"><a href="#">Categorizing Airbnb Listing Photos Using Tensorflow</a></h3>
                                            </div>
                                            <a className="play-btn popup-video" href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="solution-item solution-item-sm">
                                                <div className="solution-img">
                                                    <a href="#"><img src="/assets/images/solution-img2.jpg" alt=""/></a>
                                                </div>
                                                <div className="solution-content">
                                                    <div className="solution-title">
                                                        <h4 className="sub-title">Data Mining</h4>
                                                        <h3 className="title"><a href="#">Generative Adversarial Networks With Ml</a></h3>
                                                    </div>
                                                    <a className="play-btn popup-video" href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"><i className="fas fa-play"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="solution-item solution-item-sm">
                                                <div className="solution-img">
                                                    <a href="#"><img src="/assets/images/solution-img3.jpg" alt=""/></a>
                                                </div>
                                                <div className="solution-content">
                                                    <div className="solution-title">
                                                        <h4 className="sub-title">Data Mining</h4>
                                                        <h3 className="title"><a href="#">Generative Adversarial Networks With Ml</a></h3>
                                                    </div>
                                                    <a className="play-btn popup-video" href="https://www.youtube.com/watch?time_continue=3&amp;v=_X0eYtY8T_U"><i className="fas fa-play"></i></a>
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






        </>
    )
}