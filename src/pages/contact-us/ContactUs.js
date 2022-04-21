import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import OurPartners from './components/OurPartners'
import MeetOurTeamSection from '../homePage/components/MeetOurTeamSection'

export default function ContactUs() {
    return (
        <React.Fragment>
            <div className="page">
                <header id="masthead" className="header cmt-header-style-01">
                    <TopBar />
                    <SiteHeaderMenu />
                </header>
                <PageTitle />
                <p className="rs-p-wp-fix"></p>
                <div className="site-main">
                    <ContactInfo />
                    <ContactForm />
                    <MeetOurTeamSection />
                    <OurPartners />
                </div>
                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>
    )
}
