'use client';


import {Dictionary} from "@/i18n/types";

interface PageProps {
    dict: Dictionary;
}
export default function ServiceAISection({ dict }: PageProps) {
    return (
        <>

            <div className="section techwix-service-section-05">
                <div className="container">
                    <div className="service-wrap section-padding-02">
                        <div className="section-title text-center">
                            <h3 className="sub-title">Whats included in service</h3>
                            <h2 className="title">Building everything you need for your business</h2>
                        </div>
                        <div className="service-content-wrap">
                            <div className="row">
                                <div className="col-xl-3 col-sm-6">
                                    <div className="service-item-04">
                                        <div className="service-img">
                                            <img src="/assets/images/ser-icon13.png" alt=""/>
                                        </div>
                                        <div className="service-content">
                                            <h3 className="title"><a href="service.html">AI base business solution</a></h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote team .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="service-item-04">
                                        <div className="service-img">
                                            <img src="/assets/images/ser-icon14.png" alt=""/>
                                        </div>
                                        <div className="service-content">
                                            <h3 className="title"><a href="service.html">Chatbot with Real meeting</a></h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote team .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="service-item-04">
                                        <div className="service-img">
                                            <img src="/assets/images/ser-icon15.png" alt=""/>
                                        </div>
                                        <div className="service-content">
                                            <h3 className="title"><a href="service.html">Automate data saving</a></h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote team .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="service-item-04">
                                        <div className="service-img">
                                            <img src="/assets/images/ser-icon16.png" alt=""/>
                                        </div>
                                        <div className="service-content">
                                            <h3 className="title"><a href="service.html">Robotic Automation</a></h3>
                                            <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote team .</p>
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