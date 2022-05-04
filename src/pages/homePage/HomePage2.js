import React from 'react'
import { Link } from 'react-router-dom'
import About from './components2/About'
import Connect from './components2/Connect'
import Footer from './components2/Footer'
import Industries from './components2/Industries'
import It from './components2/It'
import OurCompany from './components2/OurCompany'
import OurServices from './components2/OurServices'
import Services from './components2/Services'
import SiteHeader from './components2/SiteHeader'
import Slider from './components2/Slider'
import Testimonial from './components2/Testimonial'
import Toolbar from './components2/Toolbar'

export default function HomePage2() {
    return (
        <div className="page">
            <header id="masthead" className="header cmt-header-style-01">
                <Toolbar />
                <SiteHeader />
            </header>
            <p className="rs-p-wp-fix"></p>
            <Slider />
            <div className="site-main">
                <It />
                <Connect />
                <About />
                <Services />
                <OurServices />
                <Industries />
                <OurCompany />
                <Testimonial />
            </div>
            <Footer />
            <Link id="totop" to="#top">
                <i className="icon-angle-up"></i>
            </Link>
        </div>
    )
}
