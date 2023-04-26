import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function DataScience() {
    const { t, i18n } = useTranslation('common');
    return (
        <section id="data-science" className="content-2 bg-lightgrey wide-60 content-section division">
            <div className="container">
                <div className="row d-flex align-items-start">
                    <div className="col-md-5 col-lg-6">
                        <div className="rel img-block left-column wow fadeInRight">
                            <img className="img-fluid" src="images/img-05.png" alt="content-image" />
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block right-column wow fadeInLeft">
                            <span className="section-id txt-upcase">{t('services.data.dataApplicationTitle')}</span>
                            <h2 className="h2-xs">{t('services.data.dataApplicationHeader')}</h2>
                            <p>{t('services.data.dataApplicationDescription')}</p>
                            <ul className="simple-list">
                                {
                                    serviceData.data.services.map((service, key) =>
                                        <React.Fragment key={key}>
                                            <p className="p-lg mb-0 mt-3"><b>{t(`services.data.${service.name}`)}</b></p>
                                            <li className="list-item">{t(`services.data.${service.description}`)} </li>
                                        </React.Fragment>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block right-column wow fadeInLeft">
                            <p><b>{t('services.data.techniquesDescription')}</b></p>
                            <ul className="simple-list">
                                {
                                    serviceData.data.techniques.map((service, key) =>
                                        <React.Fragment key={key}>
                                            <p className="p-lg mb-0 mt-3"><b>{t(`services.data.${service.name}`)}</b>
                                            </p>
                                            <li className="list-item">{t(`services.data.${service.description}`)}
                                            </li>
                                        </React.Fragment>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6 ">
                        <div className="txt-block right-column wow fadeInLeft">
                            <p><b>{t('services.data.techniqueusedDescription')}</b></p>
                            <ul className="simple-list mb-3">
                                {
                                    serviceData.data.techniqueused.map((service, key) =>
                                        <li className="list-item" key={key}>{t(`services.data.${service.description}`)}
                                        </li>
                                    )
                                }
                            </ul>
                            <div className="tools-list mt-5">
                                <h6 className="h6-xl">{t('services.web.technologiesHeader')}</h6>
                                <img src="images/data-science/scikit-learn.png" style={{ height: "50px" }} className="p-2" />
                                <img src="images/data-science/TensorFlow.png" style={{ height: "50px" }} className="p-2" />
                                <img src="images/data-science/keras.png" style={{ height: "50px" }} className="p-2" />
                                <img src="images/data-science/PyTorch.png" style={{ height: "50px" }} className="p-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
