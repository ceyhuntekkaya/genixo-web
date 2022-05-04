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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.20077570631!2d32.7428523154908!3d39.86974039664744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347acc4350fa9%3A0x22720cefb175c933!2sBilkent%20CYBERPARK!5e0!3m2!1sen!2str!4v1651653748302!5m2!1sen!2str"  loading="lazy"></iframe>
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
                                            <span className="text-input"><input name="name" type="text"  placeholder="First Name" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="name" type="text"  placeholder="Last Name" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="email" type="text" placeholder="Email Address" required="required" /></span>
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label>
                                            <span className="text-input"><input name="phone" type="text"  placeholder="Phone" required="required" /></span>
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
