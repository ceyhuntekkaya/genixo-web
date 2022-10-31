import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function SolutionArchitecture() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="solution-architecture" className="bg-snow content-3 wide-60 content-section division">
            <div className="container">
                <div className="bottom-row">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 order-last order-lg-2">
                            <div className="txt-block slim-column left-column wow fadeInRight">
                                <div className="txt-box mb-20">
                                    <h2 className="h2-title-xs statistic-number">{t('services.solution.solutionApplicationTitle')}</h2>
                                    {
                                        serviceData.solution.services.map(service =>
                                            <React.Fragment>
                                                <h5 className="h5-lg mt-4 mb-1">{t(`services.solution.${service.name}`)}</h5>
                                                {t(`services.solution.${service.description}`)}
                                            </React.Fragment>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-first order-lg-2">
                            <div className="cb-wrapper">
                                <div className="cb-holder wow fadeInLeft">
                                    <div className="cb-single-box">
                                        <h3 className="h2-title-xs mb-3">{t('services.solution.solutionApplicationHeader')}</h3>
                                        <p className="p-md mt-5 ico-10">{t('services.solution.solutionlicationDescription')} </p>
                                    </div>
                                    <hr className="divider" />
                                    <div className="cb-single-box cb-box-rounded bg-green white-color mt-25">
                                        <p className="p-lg">{t('services.solution.solutionlicationDescriptionGreen')}</p>
                                    </div>
                                </div>
                                <div className="cb-shape-1">
                                    <img className="img-fluid" src="images/bg-shape-1.png" alt="content-image" />
                                </div>
                                <div className="cb-shape-2">
                                    <img className="img-fluid" src="images/bg-shape-2.png" alt="content-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
