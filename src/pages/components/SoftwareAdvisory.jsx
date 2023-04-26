import React from 'react'
import {useTranslation} from "react-i18next";

export default function SoftwareAdvisory() {
    const {t} = useTranslation('common');//. {t('ngsd.description')}
    return (
        <section id="content-3" className="content-3 wide-60 content-section division">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="section-title title-01 mb-70">
                            <h2 className="h2-md">Genixo <span style={{color:"#f48603"}}>{t('software_advisory.name')} </span></h2>
                            <p className="p-xl">{t('software_advisory.description')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="top-row pb-50">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5 col-lg-5">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="images/img-14.png" alt="_description" />
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                            <div className="txt-block right-column wow fadeInLeft">
                                <div className="txt-box mb-20">
                                    <h5 className="h5-lg">{t('software_advisory.for_whom')}</h5>
                                    <p className="p-lg">I{t('software_advisory.for_whom_description')}</p>
                                </div>
                                <div className="txt-box mb-20">
                                    <h5 className="h5-lg">{t('software_advisory.what_is')}</h5>
                                    <p className="p-lg">{t('software_advisory.what_is_description')}</p>
                                </div>
                                <div className="txt-box mb-20">
                                    <h5 className="h5-lg">{t('software_advisory.architecture')}</h5>
                                    <p className="p-lg">{t('software_advisory.architecture_description')}</p>
                                </div>
                                <div className="txt-box mb-20">
                                    <h5 className="h5-lg">{t('software_advisory.supervision')}</h5>
                                    <p className="p-lg">{t('software_advisory.supervision_description')}</p>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>	 
        </section>
    )
}
