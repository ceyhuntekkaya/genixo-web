import React from "react";
import Footer1 from "./components/Footer1";
import Header from "./components/Header";
import axios from "axios";

export default function Contact() {
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
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div className="section-title title-02 mb-20">
                  <h2 className="h2-xs">
                    Have a question? Need help? Don't hesitate, drop us a line
                  </h2>
                  <p className="p-xl">Contact Form</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="form-holder">
                  <form name="contactform" className="row contact-form">
                    <div className="col-md-12 input-subject">
                      <p className="p-lg">This question is about: </p>
                      <span>
                        Choose a topic, so we know who to send your request to:{" "}
                      </span>
                      <select
                        id="questionAbout"
                        className="form-select subject"
                        aria-label="Default select example"
                      >
                        <option>This question is about...</option>
                        <option>Web Application</option>
                        <option>Solution Architecture</option>
                        <option>Custom Software Development</option>
                        <option>DevOps Services</option>
                        <option>Cloud Development</option>
                        <option>Mobile Development</option>
                        <option>Support Services</option>
                        <option>Data Science</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <p className="p-lg">Your Name: </p>
                      <span>Please enter your real name.</span>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control name"
                        placeholder="Your Name*"
                      />
                    </div>
                    <div className="col-md-12">
                      <p className="p-lg">Company Name: </p>
                      <span>Please enter your company name.</span>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        className="form-control name"
                        placeholder="Company Name*"
                      />
                    </div>
                    <div className="col-md-12">
                      <p className="p-lg">Your Email Address: </p>
                      <span>Please double-check your email address.</span>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control email"
                        placeholder="Email Address*"
                      />
                    </div>
                    <div className="col-md-12">
                      <p className="p-lg">Explain your question in details: </p>
                      <span>Please explain your question in details.</span>
                      <textarea
                        className="form-control message"
                        id="tellUsMore"
                        name="tellUsMore"
                        rows="6"
                        placeholder="I have a problem with..."
                      ></textarea>
                    </div>
                    <div className="col-md-12 mt-15 form-btn text-right">
                      <button
                        type="button"
                        onClick={(e) => submitForm(e)}
                        className="btn btn-skyblue tra-grey-hover submit"
                      >
                        Submit Request
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
        </section>
        <section id="contacts-2" className="bg-snow  contacts-section division">
          <div className="container">
            <div className="row justify-content-center ml-5 mr-5">
              <div className="col-md-5 col-lg-5  border rounded  m-2 p-3">
                <div>
                  <h2 className="h3-xs">Address</h2>
                  <p className="p-lg" style={{ marginLeft: 20 }}>
                    Bahçelievler Mahallesi 323/1 A Blok - Gazi Üniversitesi
                    Teknokent Binası No:10/50 C/80 Gölbaşı - Ankara, Türkiye
                  </p>
                </div>
                <br />
                <div>
                  <h2 className="h3-xs">Socials</h2>
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
                    <h2 className="h3-xs">Reach us</h2>
                    <div style={{ marginLeft: 20, marginTop: 10 }}>
                      <div className="p-lg">
                        <a href="tel:+905332794171">+(90) 533 279 41 71</a>
                      </div>
                      <div>
                        <a href="tel:+905322076730">+(90) 532 207 67 30</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 m-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.1114813516679!2d32.807840858201004!3d39.77955145617169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd788e492032799f9!2zMznCsDQ2JzQ2LjQiTiAzMsKwNDgnMzIuMiJF!5e0!3m2!1str!2str!4v1658147595590!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />
        <Footer1 mainCssClass="bg-snow footer division" />
      </div>
    </React.Fragment>
  );
}
