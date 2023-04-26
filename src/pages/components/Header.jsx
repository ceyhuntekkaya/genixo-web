import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import tr from "../../assets/tr.png";
import en from "../../assets/en.jpg";
import { SiteContext } from "../../SiteContextProvider";

const menus = require("../../data/menu.json");

export default function Header(props) {
  const { t } = useTranslation("common");
  const mainCssClass = props.mainCssClass;
  const { language, setLanguage } = useContext(SiteContext);

  const changeLang = (lang) => {
    setLanguage(lang);
  };



  return (
    <header id="header" className={mainCssClass}>
      <div className="header-wrapper">
        <div className="wsmobileheader">
          <a className="smllogo">
            <img src="images/logo-01.png" alt="mobile-logo" />
          </a>
          <div
            id="wsnavtoggle"
            onClick={() => {
              document.body.classList.toggle("wsactive");
            }}
          >
            <a className="wsanimated-arrow">
              <span></span>
            </a>
          </div>
        </div>

        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            <div className="desktoplogo">
              <a href="/" className="logo-black">
                <img src="images/logo-01.png" alt="header-logo" />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="/" className="logo-white">
                <img src="images/logo-02.png" alt="header-logo" />
              </a>
            </div>
            <nav className="wsmenu clearfix" style={{ height: "100%" }}>
              <ul className="wsmenu-list nav-orange-red-hover">
                {menus.map((menu, key) =>
                  menu.sub ? (
                    menu.colSize === 1 ? (
                      <li aria-haspopup="true" className="mg_link" key={key}>
                        <a href="#">
                          {t(`menu.${menu.menu}`)}
                          <span className="wsarrow"></span>
                        </a>
                        <div className="wsmegamenu w-75 clearfix">
                          <div className="container">
                            <div className="row">
                              <ul className="col-md-12 col-lg-3 link-list">
                                {menu.sub.map((sub, key) => (
                                  <li>
                                    <a key={key} href={sub.link}>
                                      {t(`menu.${sub.menu}`)}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li aria-haspopup="true">
                        <a href="#">
                          {t(`menu.${menu.menu}`)}{" "}
                          <span className="wsarrow"></span>
                        </a>
                        <ul className="sub-menu">
                          {menu.sub.map((sub, key) => (
                            <li
                              aria-haspopup="true"
                              onClick={() => {
                                if (
                                  document.body.className.includes("wsactive")
                                ) {
                                  document.body.classList.toggle("wsactive");
                                }
                              }}
                            >
                              <a key={key} href={sub.link}>
                                {t(`menu.${sub.menu}`)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  ) : (
                    <li className="nl-simple" aria-haspopup="true">
                      <a
                        href={menu.link}
                        className={menu.css ? menu.css : null}
                      >
                        {t(`menu.${menu.menu}`)}
                      </a>
                    </li>
                  )
                )}
                <li
                  className="nl-simple white-color header-socials ico-20 clearfix"
                  aria-haspopup="true"
                >
                  <span>
                    <a
                      href="https://www.linkedin.com/company/genixoglobal/"
                      target="_blank"
                      className="ico-linkedin"
                    >
                      <span className="flaticon-linkedin"></span>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://instagram.com/genixo.global?igshid=NmZiMzY2Mjc="
                      target="_blank"
                      className="ico-instagram"
                    >
                      <span className="flaticon-instagram"></span>
                    </a>
                  </span>

                  
                    {
                      language === "tr" ? 
                      <span>
                      <div
                        className="cursor-pointer"
                        onClick={() => changeLang("en")}
                        style={{padding: "18px"}}
                      >
                        <img src={en} alt="en" className="w-10" />
                      </div>
                    </span> : null
                    }
                 
                 {
                      language === "en" ? 
                  <span>
                    <div
                      className="cursor-pointer"
                      style={{padding: "18px"}}
                      onClick={() => changeLang("tr")}
                    >
                      <img src={tr} alt="tr" className="w-10" />
                    </div>
                  </span>
                  : null
                }
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
