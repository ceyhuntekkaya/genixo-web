import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function SupportServices() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="support-services" className="wide-60 features-section division">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01 mb-70">
                            <h2 className="h2-md">{t('services.support.supportHeader')}</h2>
                            <p className="p-xl">{t('services.support.supportDescription')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fbox-4-wrapper">
                    <div className="row row-cols-1 row-cols-md-2">
                        {
                            serviceData.support.services.map((service, key) =>
                                <div className="col" key={key}>
                                    <div className="fbox-4 pc-25 mb-40 wow fadeInUp">
                                        <div className="fbox-ico">
                                            <div className="ico-60 shape-ico violet-red-color">
                                                <img className="ico-bkg" src={service.image} alt="ico-bkg" />
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                        <div className="fbox-txt">
                                            <h5 className="h5-md">{t(`services.support.${service.name}`)}</h5>
                                            <p className="p-lg">{t(`services.support.${service.description}`)} </p>
                                        </div>
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
