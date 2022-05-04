import React from 'react'
import { Link } from 'react-router-dom'
export default function OurServices() {
  return (
    <section className="cmt-row padding_zero-section clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="cmt-bg cmt-col-bgcolor-yes bg-base-white cmt-bg spacing-9 border-rad_10 overflow-visible mb_15">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>our services</h3>
                                    <h2 className="title">Let's help you with technology needs</h2>
                                </div>
                                <div className="title-desc">
                                    <p>DevFox provides complete IT solutions to turn an organizational needs,
                                        process and technology changes into powerful business</p>
                                </div>
                            </div>
                            <Link className="cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark res-991-pb-40" to="/project"><i className="icon-right"></i><span>See More Services</span></Link>
                        </div>
                        <div className="col-lg-7">
                            <div className="accordion mt-0 mb-20 res-991-mt-20 res-991-mb-0">
                                <div className="toggle cmt-toggle_style_default">
                                    <div className="toggle-title"><Link to="#" className="active">Will send me a progress report of basis detailing the work?</Link></div>
                                    <div className="toggle-content show">
                                        <p>We will send you a report every two weeks (i.e. after each sprint, when the next version of the software is completed) or every month if you prefer. The reports include info on what we plan to achieve in the next sprint.</p>
                                    </div>
                                </div>
                                
                                <div className="toggle cmt-toggle_style_default">
                                    <div className="toggle-title"><Link to="#">How much time will it take for you to make my app?</Link></div>
                                    <div className="toggle-content">
                                        <p>we will give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we’ll be able to estimate how long will it take.</p>
                                    </div>
                                </div>
                               
                                <div className="toggle cmt-toggle_style_default">
                                    <div className="toggle-title"><Link to="#"> How can I be sure you work at my project ASAP declare?</Link></div>
                                    <div className="toggle-content">
                                        <p>We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Devfox to track time spent on your project. we can quickly assign additional team</p>
                                    </div>
                                </div>
                               
                                <div className="toggle cmt-toggle_style_default">
                                    <div className="toggle-title"><Link to="#">What you about say your Business palnning?</Link></div>
                                    <div className="toggle-content">
                                        <p>We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Devfox to track time spent on your project. we can quickly assign additional team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
