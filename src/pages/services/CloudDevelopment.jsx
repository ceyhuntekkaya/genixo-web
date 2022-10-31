import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function CloudDevelopment() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="cloud-development" className="content-1 wide-60 inner-page-hero content-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-6 order-last order-md-2">
                        <div className="txt-block left-column wow fadeInRight">
                            <span className="section-id txt-upcase">{t('services.cloud.cloudApplicationDescription')}</span>
                            <h2 className="h2-xs">{t('services.cloud.cloudApplicationHeader')}</h2>
                            <span className='mb-3'>Due to its scalability, speed and price performance, cloud solutions are increasingly preferred by businesses and Genixo offers end-to-end solutions for the needs of your business in this area.</span>
                            
                            <div className='row mt-3'>
                                {
                                    serviceData.cloud.services.map(service =>
                                        <div className='col-6 mt-2'><h3>
                                            {t(`services.cloud.${service.name}`)}</h3>{t(`services.cloud.${service.description}`)}</div>

                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6 order-first order-md-2">
                        <div className="rel img-block right-column wow fadeInLeft">
                            <img className="img-fluid" src="images/img-07.png" alt="content-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
