import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function MobileApp() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="mobile-app" name="MobileApp" className="wide-60 features-section division">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01 mb-70">
                            <h2 className="h2-md">{t('services.mobile.mobileApplicationHeader')}</h2>
                            <p className="p-xl">{t('services.mobile.mobilelicationDescription')}</p>
                        </div>
                    </div>
                </div>
                <div className="fbox-8-wrapper text-center">
                    <div className="row row-cols-1 row-cols-md-3">
                        {
                            serviceData.mobile.services.map(service =>
                                <div className="col">
                                    <div className="fbox-8 mb-40 wow fadeInUp">
                                        <div className="fbox-img bg-whitesmoke-gradient">
                                            <img className="img-fluid" src={service.image} alt="feature-icon" />
                                        </div>
                                        <h5 className="h5-md">{t(`services.mobile.${service.name}`)}</h5>
                                        <p className="p-lg">{t(`services.mobile.${service.description}`)}</p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
