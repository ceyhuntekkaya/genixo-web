import React from "react";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Brands from "./components/Brands";
import Content2 from "./components/Content2";
import SoftwareAdvisory from "./components/SoftwareAdvisory";
import NGSD from "./components/NGSD";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TrialLink from "./components/TrialLink";

export default function MainPage() {
  return (
    <React.Fragment>
      <div id="page" className="page">
        <Header mainCssClass="header tra-menu navbar-light" />
        <Banner />
        <Brands />
        <Product/>
       
        <Content2 />
        <NGSD />
        <SoftwareAdvisory />
        <TrialLink />
        <Footer mainCssClass="footer division" />
      </div>
    </React.Fragment>
  );
}


