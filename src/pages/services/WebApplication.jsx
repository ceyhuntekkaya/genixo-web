import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function WebApplication() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="web-application" className="bg-snow content-3 wide-60 content-section division">
            <div className="container">
                <div className="top-row pb-50">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5 col-lg-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="images/img-09.png" alt="content-image" />
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6">
                            <div className="txt-block right-column wow fadeInLeft">

                                <h2 className="h2-xs">{t('services.web.webApplicationHeader')} </h2>
                                <p className="p-lg">{t('services.web.webApplicationDescription')}</p>
                                <div className='row'>
                                    {
                                        serviceData.web.services.map((service, key) =>
                                            <div className='col-12 mb-4' key={key}>
                                                <h3 className='mb-1'>{t(`services.web.${service.name}`)}</h3>
                                                {t(`services.web.${service.description}`)}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="tools-list">
                                    <h6 className="h6-xl">{t('services.web.technologiesHeader')}</h6>
                                    <img src="images/services/react.png" style={{ height: "50px" }} />
                                    <img src="images/services/java.png" style={{ height: "50px" }} />
                                    <img src="images/services/net.png" style={{ height: "50px" }} />
                                    <img src="images/services/python.png" style={{ height: "50px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
