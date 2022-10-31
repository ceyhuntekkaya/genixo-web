import React from 'react'
import Footer1 from './components/Footer1'
import Header from './components/Header'
import TrialLink from './components/TrialLink'
import MobileApp from './services/MobileApp'
import WebApplication from './services/WebApplication'
import CustomSoftwareDevelopment from './services/CustomSoftwareDevelopment'
import DevOps from './services/DevOps'
import SolutionArchitecture from './services/SolutionArchitecture'
import CloudDevelopment from './services/CloudDevelopment'
import DataScience from './services/DataScience'
import SupportServices from './services/SupportServices'

export default function Services() {
    return (
            <div id="page" className="page">
                <div className='mt-3'></div>
                <Header mainCssClass="header tra-menu navbar-dark" />
                <WebApplication />
                <SolutionArchitecture />
                <CustomSoftwareDevelopment />
                <DevOps />
                <CloudDevelopment />
                <MobileApp />
                <SupportServices />
                <hr className="divider" />
                <DataScience />
                <TrialLink />
                <Footer1 mainCssClass="bg-lightgrey footer division" />
            </div>
    )
}
