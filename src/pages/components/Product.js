import React from "react";
const lang = require("../../data/pages.json");

export default function Product() {
  return (
    <section id="cta-3" className="cta-section division">
      <div className="cta-3-holder bg-lightgrey">
        <div className="container">
          <div className="bg-white cta-3-wrapper">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-lg-6">
                <div className="cta-3-txt p-7 text-center"><a href="https://www.ilccentre.com" target="_blank">
                  <img src="images/ilclogo.png" className="w-50" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-6 col-lg-6">
                <div className="cta-3-txt p-7 text-center"><a href="https://www.catchupper.com" target="_blank">
                  <img src="images/catchupperlogo.png" className="w-50" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
