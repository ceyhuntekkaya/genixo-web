import React from "react";
import {useTranslation} from "react-i18next";

const services = require('../../data/service_list.json')

export default function Footer(props) {

  const {t} = useTranslation('common');

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
          <h6 style={{marginLeft:"20px"}} className="h6-xl">{t(`footer.services`)}</h6>
            <div className="footer-links mb-40">

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#custom-software-development">
                    {t(`service_list.${services.services[0].name}`)}
                    </a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#dev-ops"> {t(`service_list.${services.services[1].name}`)}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 className="h6-xl"> <span style={{color:"white"}}>.</span> </h6>
            <div className="footer-links mb-40">

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#custom-software-development">
                    {t(`service_list.${services.services[2].name}`)}
                    </a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#dev-ops">{t(`service_list.${services.services[3].name}`)}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 className="h6-xl"> <span style={{color:"white"}}>.</span> </h6>
            <div className="footer-links mb-40">

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#cloud-development">{t(`service_list.${services.services[4].name}`)}</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#mobile-app">{t(`service_list.${services.services[5].name}`)}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 col-lg-2">
          <h6 className="h6-xl"> <span style={{color:"white"}}>.</span> </h6>
            <div className="footer-links mb-40">
              

              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/services#support-services">{t(`service_list.${services.services[6].name}`)}</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/services#data-science">{t(`service_list.${services.services[7].name}`)}</a>
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
                  <b>{t(`footer.office`)}</b><br />
                  BİLKENT CYBERPARK, Cyberplaza H Blok No:8 Bilkent ANKARA, Türkiye
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
