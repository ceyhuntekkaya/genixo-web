import React from 'react'
import MethodologyList from './components/MethodologyList'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Methodology() {

    return (
        <React.Fragment>
            <div id="page" className="page">
                <Header mainCssClass="header tra-menu navbar-dark" />
                <div className='mt-3'></div>
                <MethodologyList />
                <Footer mainCssClass="footer division" />
            </div>
        </React.Fragment>
    )
}