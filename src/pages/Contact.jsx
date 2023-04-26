import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const services = require("../data/service_list.json");

export default function Contact() {
  const { t } = useTranslation("common");
  const [messageStatus, seMessageStatus] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();

    const params = {
      id: new Date().getTime(),
      questionAbout:
        document.getElementById("questionAbout").options[
          document.getElementById("questionAbout").selectedIndex
        ].value,
      name: document.getElementById("name").value,
      companyName: document.getElementById("companyName").value,
      email: document.getElementById("email").value,
      tellUsMore: document.getElementById("tellUsMore").value,
    };
    try {
      await axios.post(
        "https://3dcpb80rz6.execute-api.eu-west-1.amazonaws.com/prod/contact-us",
        params
      );
      seMessageStatus(true);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <div id="page" className="page">
        <Header mainCssClass="header tra-menu navbar-dark" />
        <section
          id="contacts-2"
          className="bg-snow wide-50 inner-page-hero contacts-section division"
        >
          {messageStatus ? (
            <div className="container p-5">
              <div className="alert alert-success">
                {t("contact.confirmation")}
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="section-title title-02 mb-20">
                    <h2 className="h2-xs">{t("contact.header")}</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="form-holder">
                    <form name="contactform" className="row contact-form">
                      <div className="col-md-12 input-subject">
                        <p className="p-lg">{t("contact.topic")} </p>
                        <span>{t("contact.topic_description")}</span>
                        <select
                          id="questionAbout"
                          className="form-select subject"
                          aria-label="Default select example"
                        >
                          <option>{t("contact.topic")}</option>
                          {services.services.map((service, key) => (
                            <option>
                              {t(`service_list.${service.name}`)}
                            </option>
                          ))}
                          <option>{t("contact.other")}</option>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg"> {t("contact.name")}</p>
                        <span> {t("contact.name_description")}</span>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control name"
                          placeholder={t("contact.name")}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">{t("contact.company")} </p>
                        <span>{t("contact.company_description")}</span>
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          className="form-control name"
                          placeholder={t("contact.company")}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">{t("contact.mail")} </p>
                        <span>{t("contact.mail_description")}</span>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control email"
                          placeholder={t("contact.mail")}
                        />
                      </div>
                      <div className="col-md-12">
                        <p className="p-lg">{t("contact.message")} </p>
                        <span>{t("contact.message_description")}</span>
                        <textarea
                          className="form-control message"
                          id="tellUsMore"
                          name="tellUsMore"
                          rows="6"
                          placeholder={t("contact.message")}
                        ></textarea>
                      </div>
                      <div className="col-md-12 mt-15 form-btn text-right">
                        <button
                          type="button"
                          onClick={(e) => submitForm(e)}
                          className="btn btn-skyblue tra-grey-hover submit"
                        >
                          {t("contact.button")}
                        </button>
                      </div>
                      <div className="col-lg-12 contact-form-msg">
                        <span className="loading"></span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section id="contacts-2" className="bg-snow  contacts-section division">
          <div className="container">
            <div className="row justify-content-center ml-5 mr-5">
              <div className="col-md-5 col-lg-5  border rounded  m-2 p-3">
                <div>
                  <h2 className="h3-xs"> {t("contact.address")}</h2>
                  <p className="p-lg" style={{ marginLeft: 20 }}>
                    <b>{t("contact.office")}</b>
                    <br />
                    BİLKENT CYBERPARK, Cyberplaza H Blok No:8 Bilkent ANKARA,
                    Türkiye
                    <br />
                    <br />
                  </p>
                </div>
                <br />
                <div>
                  <h2 className="h3-xs">{t("contact.social")}</h2>
                  <div style={{ marginLeft: 20, marginTop: 10 }}>
                    <a
                      href="https://www.linkedin.com/company/genixoglobal/"
                      target="_blank"
                      className="ico-linkedin"
                      style={{ marginLeft: 10, marginRight: 10 }}
                    >
                      <span className="flaticon-linkedin"></span>
                    </a>
                    <a
                      href="https://instagram.com/genixo.global?igshid=NmZiMzY2Mjc="
                      target="_blank"
                      className="ico-instagram"
                      style={{ marginLeft: 10, marginRight: 10 }}
                    >
                      <span className="flaticon-instagram"></span>
                    </a>
                  </div>
                  <br />
                  <div>
                    <h2 className="h3-xs">{t("contact.phone")}</h2>
                    <div style={{ marginLeft: 20, marginTop: 10 }}>
                      <div className="p-lg">
                        <a href="tel:+905332794171">+(90) 312 265 04 56</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 m-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.212687878369!2d32.74271604220058!3d39.86957378174462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68727ad146b84599%3A0x82f8f072b8390252!2sGenixo%20Bili%C5%9Fim%20ve%20Teknoloji%20A.%C5%9E.!5e0!3m2!1str!2str!4v1669375841005!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />
        <Footer mainCssClass="bg-snow footer division" />
      </div>
    </React.Fragment>
  );
}
