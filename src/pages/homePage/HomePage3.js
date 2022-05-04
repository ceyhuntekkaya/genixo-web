import React from 'react'
import Blog from './components3/Blog'
import Case from './components3/Case'
import Footer from './components3/Footer'
import Header from './components3/Header'
import OurServices from './components3/OurServices'
import Pricing from './components3/Pricing'
import Services from './components3/Services'
import Statistics from './components3/Statistics'
import Testimonials from './components3/Testimonials'
import Works from './components3/Works'
import { Link } from 'react-router-dom'

export default function HomePage3() {
    return (
        <div className="page">
            <Header />
            <div className="site-main">
                <Testimonials />
                <Works />
                <Case />
                <Services />
                <Pricing />
                <Statistics />
                <OurServices />
                <Blog />
            </div>
            <Footer />
            <Link id="totop" to="#top">
                <i className="icon-angle-up"></i>
            </Link>
        </div>
    )
}
