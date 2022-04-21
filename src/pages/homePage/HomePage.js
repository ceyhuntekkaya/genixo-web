import React from 'react'
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import HowCanHelpYouSection from './components/HowCanHelpYouSection';
import HowItWorksSection from './components/HowItWorksSection';
import MeetOurTeamSection from './components/MeetOurTeamSection';
import PartnersSection from './components/PartnersSection';
import ProjectSection from './components/ProjectSection';
import QuickFactsSection from './components/QuickFactsSection';
import ServicesSection from './components/ServicesSection';
import SiteHeaderMenu from './components/SiteHeaderMenu';
import Slider from './components/Slider';
import TopBar from './components/TopBar';

export default function HomePage() {
  return (
    <div className="page">
    <header id="masthead" className="header cmt-header-style-01">
      <TopBar />
      <SiteHeaderMenu />
    </header>
    <p className="rs-p-wp-fix"></p>
    <Slider />
    <div className="site-main">
      <HowCanHelpYouSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <HowItWorksSection />
      <MeetOurTeamSection />
      <QuickFactsSection />
      <PartnersSection />
    </div>
    <Footer />
    <a id="totop" href="#top">
      <i className="icon-angle-up"></i>
    </a>
  </div>
  )
}
