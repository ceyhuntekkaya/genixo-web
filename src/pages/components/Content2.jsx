import React from 'react'
import {useTranslation} from "react-i18next";

export default function Condddddddtent2() {
    const {t, i18n} = useTranslation('common');
    return (
        <section id="content-2" className="content-2 pb-60 content-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 col-lg-6">
                        <div className="rel img-block left-column wow fadeInRight">
                            <img className="img-fluid" src={t('content2.image')} alt="content-image" />
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block right-column wow fadeInLeft">
                            <span className="section-id txt-upcase">{t('content2.title')}</span>
                            <h2 className="h2-xs">{t('content2.text')}</h2>
                            <p className="p-lg">{t('content2.explanation')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
