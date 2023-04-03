import React from "react";

export default function Footer1(props) {
  const mainCssClass = props.mainCssClass;
  return (
    <footer id="footer-1" className={mainCssClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-info mb-40">
              <img
                className="footer-logo mb-25"
                src="images/logo-01.png"
                alt="footer-logo"
              />

              <p className="p-md">GENIXO Bilişim ve Teknoloji A.Ş.</p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 style={{marginLeft:"20px"}} className="h6-xl">Services</h6>
            <div className="footer-links mb-40">
              <h6 className="h6-xl"></h6>

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#custom-software-development">
                    Web Application
                    </a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#dev-ops">  Solution Architecture</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 className="h6-xl"> <span style={{color:"white"}}>.</span> </h6>
            <div className="footer-links mb-40">
              <h6 className="h6-xl"></h6>

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#custom-software-development">
                      Custom Software Development
                    </a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#dev-ops">DevOps Sevices</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 className="h6-xl"> <span style={{color:"white"}}>.</span> </h6>
            <div className="footer-links mb-40">
              <h6 className="h6-xl"></h6>

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#cloud-development">Cloud Development</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#mobile-app">Mobile Development</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 className="h6-xl"> <span style={{color:"white"}}>.</span> </h6>
            <div className="footer-links mb-40">
              <h6 className="h6-xl"></h6>

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#support-services">Support Services</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#data-science">Data Science</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div style={{ marginTop: 5, marginBottom: 5 }}>
                <p className="p-lg" style={{ fontSize: 16 }}>
                  <b>Main Office</b><br />
                  BİLKENT CYBERPARK, Cyberplaza No:4/B Kat: 2 No:229 Bilkent ANKARA, Türkiye
                  
                  
                </p>
              </div>
              <div style={{ marginTop: 5, marginBottom: 5 }}>
                <a
                  className=""
                  href="mailto:hello@genixo.ai"
                  style={{ fontSize: 16, textDecoration: "underline" }}
                >
                  hello@genixo.ai
                </a>
              </div>

              <div style={{ marginTop: 5, marginBottom: 5 }}>
                <div className="footer-copyright">
                  <p>&copy; 2022 Genixo. All Rights Reserved</p>
                </div>
              </div>
            </div>
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a target="_blank"
                      href="https://instagram.com/genixo.global?igshid=NmZiMzY2Mjc="
                    >Instagram</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/genixoai?originalSubdomain=tr"
                    >
                      LinkedIn
                    </a>
                  </p>
                </li>
                {/* <li className="last-li"><p><a href="#">Dribbble</a></p></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
