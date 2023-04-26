import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function DevOps() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="tabs-2" className="wide-60 tabs-section division">
            <div className="container" id="dev-ops">
                <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                    <div className="col">
                        <div className="tabs-nav clearfix">
                            <h2>{t('services.devops.devopsApplicationHeader')}</h2>
                            <p>
                            {t('services.devops.devopslicationDescription')}
                            </p>
                            <ul className="tabs-1">
                                {
                                    serviceData.devops.services.map((service, key) =>
                                        <li className="tab-link current" data-tab="tab-1" key={key}>
                                            <h5 className="h5-md">{t(`services.devops.${service.name}`)}</h5>
                                            <p className="p-lg">{t(`services.devops.${service.description}`)}</p>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-block right-column wow fadeInLeft">
                            <div className="tabs-content">
                                <div className="tab-content current">
                                    <img className="img-fluid" src="images/img-06.png" alt="tab-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
