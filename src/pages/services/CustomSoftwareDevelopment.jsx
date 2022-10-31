import React from 'react'
import { useTranslation } from "react-i18next";
const serviceData = require('../../data/services.json')

export default function CustomSoftwareDevelopment() {
    const { t, i18n } = useTranslation('common');

    return (
        <section id="custom-software-development" className="content-2 bg-04 wide-60 content-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 col-lg-6">
                        <div className="rel img-block left-column video-preview wow fadeInRight">
                            <img className="img-fluid" src="images/img-08.png" alt="video-preview" />
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block right-column white-color wow fadeInLeft">
                            <span className="section-id txt-upcase">{t('services.custom.customApplicationTitle')}</span>
                            <h2 className="h2-xs">{t('services.custom.customApplicationHeader')}</h2>
                            <p className="p-lg">{t('services.custom.customApplicationDescription')}</p>
                            <ul className="simple-list">
                                {/* {
                                    serviceData.custom.services.map(service =>
                                        <li className="list-item mt-4 mb-1">
                                            <p className="p-lg">{t(`services.custom.${service.name}`)}</p>{parseHtml(t(`services.custom.${service.description}`))}</li>
                                    )
                                } */}
                                <h2>Software Product Development</h2>
                                Customer Solutions!
                                <br />If you want to develop a software product, let's talk about some of the benefits:
                                <br />- Privacy
                                <br />- Customized Trackability and Management
                                <br />- Ease/Cost-efficiency of Integrations
                                <br />- Quick Adaptation
                                <br />- Enhanced Efficiency
                                <br /><br />
                                <h2>Enterprise Software Development</h2>
                                Corporate Solutions!
                                <br />If you want to develop an enterprise software, let's talk about some of the benefits:
                                <br />- Benefits for the team
                                <br />- Belonging
                                <br />- Productivity
                                <br /><br />Benefits for the management
                                <br />- Prestige
                                <br />- Privacy
                                <br />- Independence
                                <br />- Customized Trackability and Management
                                <br />- Ease/Cost-efficiency of Integrations
                                <br />- Quick Adaptation
                                <br />- Enhanced Efficiency
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
