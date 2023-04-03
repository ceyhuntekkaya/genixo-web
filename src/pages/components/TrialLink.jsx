import React from 'react'
import {useTranslation} from "react-i18next";
const lang = require('../../data/pages.json')

export default function TrialLink() {
    const {t, i18n} = useTranslation('common');
    return (
        <section id="cta-3" className="cta-section division">
            <div className="cta-3-holder bg-lightgrey">
                <div className="container">
                    <div className="bg-white cta-3-wrapper">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-7 col-lg-8">
                                <div className="cta-3-txt">
                                    <h4 className="h4-xl">{lang.trial.text}</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-end">
                                    <div className="cta-3-btn text-center">
                                        <a href="/contact-us" className="btn btn-skyblue tra-grey-hover">{lang.trial.button}</a>
                                        <p>{lang.trial.read}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>	  
            </div>
        </section>
    )
}
