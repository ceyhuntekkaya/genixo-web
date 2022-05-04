import React from 'react'
import { Link } from 'react-router-dom'

export default function Toolbar() {
  return (
    <div className="top_bar bg-base-skin text-base-white clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="top_bar_inner bg-base-dark text-base-white">
                    <div className="top_bar_contact_item with-icon">
                        <div className="top_bar_icon"><i className="icon-phone"></i></div>
                        <span>Helpline:</span> +0022 6544 9977
                    </div>
                    <div className="top_bar_contact_item">
                        <Link to="mailto:info@example.com.com">support@cymolthemes.com</Link>
                    </div>
                    <div className="top_bar_contact_item with-icon ms-auto">
                        <div className="top_bar_icon"><i className="icon-megaphone"></i></div>
                        <span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?
                    </div>
                </div>
                <div className="side-menu-container">
                    <div className="side-menu"><Link to="#"><i className="icon-menu"></i></Link></div>
                    
                    <div className="side-overlay">
                        <div className="side bg-base-dark">
                            <Link to="#" className="close-side"><i className="icon-close"></i></Link>
                            <div className="d-flex align-items-center pb-30">
                                <div className="flotingbar-img ">
                                    <img className="img-fluid rounded-circle" src="images/flotingbar-img.png" height="60" width="60" alt="flotingbar-img"/>
                                </div>
                                <div className="pl-20">
                                    <h3 className="fs-18 mb-0">Alex william</h3>
                                    <label className="text-base-skin">Support Expert</label>
                                </div>
                            </div>
                            <p>An excellent service management in the area of IT providing solutions. High level efficient solution to businesses growth.  </p>
                            <div className="cmt-detailss"> 
                                <ul>
                                    <li><span className="cmt-li"> Call us Now! : </span><span> +123-456 -7890 </span></li>
                                    <li><span className="cmt-li"> Email :</span><span className="cmt-li4"><Link to="mailto:info@example.com.com">example.supoort@gmail.com</Link> </span></li>
                                </ul>
                            </div>
                            <aside className="widget_text clearfix">
                                <h3>Quick contact info</h3>
                                <p className="mb-25">Our Solutions pride on world class customer service.</p>
                                <form action="#" className="cta_form wrap-form clearfix" method="post">
                                    <label>
                                        <span className="text-input"><input name="name" type="text" value="" placeholder="Enter your name here..." required="required"/></span>
                                    </label>
                                    <label>
                                        <span className="text-input"><input name="email" type="text" value="" placeholder="Enter your email address here..." required="required"/></span>
                                    </label>
                                    <label>
                                        <span className="text-input"><textarea name="message" rows="4" placeholder="Type your message here" required="required"></textarea></span>
                                    </label>
                                    <button className="submit cmt-btn btn-default cmt-icon-btn-left cmt-btn-size-md cmt-btn-color-white mt-15" type="submit"><i className="icon-right"></i><span>Send Message</span></button>
                                </form>
                            </aside>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
