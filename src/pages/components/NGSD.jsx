import React from 'react'
import {useTranslation} from "react-i18next";

export default function NGSD() {
    const {t} = useTranslation('common');
    
    return (
        <section id="content-7" className="content-7 bg-whitesmoke wide-60 content-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 order-last order-md-2">
                        <div className="txt-block left-column wow fadeInLeft">
                            <div className="txt-box mb-25 text-center">
                                <h2 className="h2-md">Genixo <span style={{color:"#f48603"}}> NGSD </span></h2>
                                <p className="p-lg">{t('ngsd.description')}</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-7 order-last order-md-2">
                        <div className="txt-block left-column wow fadeInLeft">
                            <div className="txt-box">
                                <h5 className="h5-lg">{t('ngsd.question')}</h5>
                                <p className="p-lg">{t('ngsd.answer')}</p>
                            </div>
                    </div>
                        <div className="txt-block left-column wow fadeInLeft">
                            <div className="txt-box">
                                <h5 className="h5-lg">{t('ngsd.what_is')}</h5>
                                <p className="p-lg">{t('ngsd.what_is_description')}
                                    <br /> <br /><span style={{fontSize:"24px"}}><b>{t('ngsd.remote')}:</b></span> {t('ngsd.remote_description')}
                                    <br /> <br /> <span style={{fontSize:"24px"}}><b>{t('ngsd.dynamic')}:</b></span> {t('ngsd.dynamic_description')}
                                    <br /> <br /> <span style={{fontSize:"24px"}}><b>{t('ngsd.global')}:</b></span> {t('ngsd.global_description')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 order-first order-md-2">
                        <div className="content-7-img wow fadeInRight">
                            <img className="img-fluid" src="images/dashboard-01.png" alt="ngsd" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
