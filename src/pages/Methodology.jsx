import React from 'react'
import MethodologyList from './components/MethodologyList'
import Footer1 from './components/Footer1'
import Header from './components/Header'

export default function Methodology() {
    return (
        <React.Fragment>
            <div id="page" className="page">
                <Header mainCssClass="header tra-menu navbar-dark" />
                <div className='mt-3'></div>
                <MethodologyList />
                <Footer1 mainCssClass="footer division" />
            </div>
        </React.Fragment>
    )
}