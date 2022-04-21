import React from 'react'

export default function ContactForm() {
    return (
        <section className="cmt-row padding_top_zero-section bg-layer-equal-height clearfix">
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="cmt-bg cmt-col-bgcolor-yes bg-base-dark cmt-bg border-rad_5 overflow-hidden spacing-6">
                            <div className="cmt-col-wrapper-bg-layer cmt-bg-layer bg-base-dark">
                                <div className="cmt-col-wrapper-bg-layer-inner"></div>
                            </div>
                            <div className="layer-content">

                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Need Some Advice?</h3>
                                        <h2 className="title">Feel free to contact Devfox!</h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>Devfox IT Solutions pride on world class customer service. To help you contact the right department for your query we’ve put it all in one central place for you</p>
                                    </div>
                                </div>
                                <div className="g-map mt-30" id="map">
                                    <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="pl-10 res-991-pl-0 res-991-pt-40">
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>Need Some Advice?</h3>
                                    <h2 className="title">Contact Us To Learn More.</h2>
                                </div>
                            </div>
                            <form action="#" className="query_form wrap-form clearfix" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="name" type="text" value="" placeholder="First Name" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="name" type="text" value="" placeholder="Last Name" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="email" type="text" value="" placeholder="Email Address" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="phone" type="text" value="" placeholder="Phone" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <label>
                                            <span className="text-input select-option">
                                                <select name="menu-232">
                                                    <option value="Experience Design">Experience Design</option>
                                                    <option value="IT Consultancy">IT Consultancy</option>
                                                </select>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <label>
                                            <span className="text-input"><textarea name="message" rows="4" placeholder="Message goes here" required="required"></textarea></span>
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="submit cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-dark mt-5" type="submit"><i className="icon-right"></i><span>Send Message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
