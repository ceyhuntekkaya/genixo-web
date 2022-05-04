import React from 'react'

export default function Footer() {
  return (
    <footer className="footer widget-footer bg-base-dark text-base-white clearfix">
        <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
        <div className="second-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_text clearfix">
                  <div className="footer-logo">
                    <img id="footer-logo-img" className="img-fluid auto_size" height="42" width="132" src="images/footer-logo.svg" alt="genixo" />
                  </div>
                  <div className="textwidget widget-text">
                    <p>An excellent service management in the area of IT providing solutions. High level efficient solution to businesses growth</p>
                  </div>
                  <div className="widget_social_wrapper social-icons pt-40">
                    <h3 className="fs-18 mb-25">Social Info</h3>
                    <ul className="list-inline">
                      <li><a href="https://www.facebook.com/cymolthemes.191219" rel="noopener" aria-label="facebook"><i className="icon-facebook"></i></a></li>
                      <li><a href="https://twitter.com/CymolThemes" rel="noopener" aria-label="twitter"><i className="icon-twitter"></i></a></li>
                      <li><a href="https://www.behance.net/cymolthemes191219" rel="noopener" aria-label="linkedin"><i className="icon-linkedin"></i></a></li>
                      <li><a href="https://in.pinterest.com/cymolthemes/" rel="noopener" aria-label="pinterest"><i className="icon-pinterest"></i></a></li>
                      <li><a href="https://dribbble.com/cymol_themes" rel="noopener" aria-label="dribbble"><i className="icon-dribbble"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_cta clearfix">
                  <h4>+0022 6544 9977</h4>
                  <ul className="widget_contact_wrapper">
                    <li><i className="flaticon-envelope"></i><a href="mailto:info@example.com.com">support@cymolthemes.com</a>24 x 7 Online Support</li>
                    <li><i className="flaticon-pin"></i>8477 Paris Hill St. Falls Church, VA 22041</li>
                  </ul>
                  <div className="g-map">
                    <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
                <div className="widget multi_widget clearfix">
                  <div className="newsletter_widget clearfix">
                    <h3 className="widget-title">Signup for our newsletter</h3>
                    <p>Sign up to our newsletter to get the latest news.</p>
                    <form id="subscribe-form" className="newsletter-form" action="#" data-mailchimp="true">
                      <div className="mailchimp-inputbox clearfix" id="subscribe-content">
                        <p>
                          <input type="email" name="email" placeholder="Enter Your Email Address..." required="" />
                        </p>
                        <p><button className="submit cmt-btn cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-border cmt-btn-color-skincolor" type="submit"><i className="icon-right"></i></button></p>
                      </div>
                      <div id="subscribe-msg"></div>
                    </form>
                  </div>
                  <div className="widget_nav_menu clearfix">
                    <h3 className="widget-title">Quick links</h3>
                    <ul className="menu-footer-quick-links links-1">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Meet Our Team</a></li>
                      <li><a href="#">News & Media</a></li>
                      <li><a href="#">Case Studies</a></li>
                    </ul>
                  </div>
                  <div className="widget_nav_menu clearfix">
                    <h3 className="widget-title">Solutions</h3>
                    <ul className="menu-footer-quick-links links-2">
                      <li><a href="#">IT Management</a></li>
                      <li><a href="#">Cyber Security</a></li>
                      <li><a href="#">Software Dev</a></li>
                      <li><a href="#">Backup & Recovery</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="cpy-text">Copyright © 2022 DevfoxTemplates. Designed and Developed by<span className="text-base-skin u1"><a href="https://www.cymolthemes.com/"> Cymolthemes </a></span>only on <span className="text-green u1"><a href="https://themeforest.net/user/cymolthemes">Envato Market.</a></span></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
