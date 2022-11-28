import React from 'react'
import {useTranslation} from "react-i18next";

export default function Banner() {
    const {t, i18n} = useTranslation('common');

    return (
        <section id="hero-3" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-3-txt white-color">
                            <h2 className="h2-lg wow fadeInUp">{t('banner.title')}</h2>
                            <p className="p-xl wow fadeInUp">{t('banner.explanation')}</p>
                            <div className="btns-group mb-30 wow fadeInUp">
                                <a href="/contact-us" className="btn btn-green tra-white-hover mr-15"
                                >{t('banner.button')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-3-img wow fadeInRight">
                            <img className="img-fluid" src={t('banner.image')} alt="hero-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195"><path fill="#ffffff" fillOpacity="1" d="M0,192L1440,96L1440,320L0,320Z"></path></svg>
            </div>
        </section>
    )
}
