import React from 'react'
import { useTranslation } from "react-i18next";

const methodologyData = require('../../data/methodology_data.json')

export default function MethodologyList() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="features-8" className="wide-60 features-section division">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01 mb-70">
                            <h2 className="h2-md">{t(`methodology.${methodologyData.header}`)}</h2>
                            <p className="p-xl">{t(`methodology.${methodologyData.headerDescription}`)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fbox-8-wrapper text-center">
                    <div className="row row-cols-1 row-cols-md-3">
                        {
                            methodologyData.methodologyList.map((method, key) =>
                                <div className="col" key={key}>
                                    <div className="fbox-4 mb-10 wow fadeInUp">
                                        <div className="fbox-img bg-whitesmoke-gradient">
                                            <img className="img-fluid" src={method.image} alt="feature-icon" />
                                        </div>
                                        <h5 className="h5-md">{t(`methodology.${method.name}`)}</h5>
                                        <p className="p-l">{t(`methodology.${method.description}`)}</p>
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
