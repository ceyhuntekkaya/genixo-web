import React from 'react'
import { useTranslation } from "react-i18next";

export default function CustomSoftwareDevelopment() {
    const { t } = useTranslation('common');

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
                                <h2>{t('software_advisory.group1_header')}</h2>
                                {t('software_advisory.group1_list_1')}
                                <br />{t('software_advisory.group1_list_2')}
                                <br />- {t('software_advisory.group1_list_3')}
                                <br />- {t('software_advisory.group1_list_4')}
                                <br />- {t('software_advisory.group1_list_5')}
                                <br />- {t('software_advisory.group1_list_6')}
                                <br />- {t('software_advisory.group1_list_7')}
                                <br /><br />
                                <h2>{t('software_advisory.group2_header')}</h2>
                                {t('software_advisory.group2_list_1')}
                                <br /> {t('software_advisory.group2_list_2')}
                                <br />-  {t('software_advisory.group2_list_3')}
                                <br />-  {t('software_advisory.group2_list_4')}
                                <br />-  {t('software_advisory.group2_list_5')}
                                <br /><br /> {t('software_advisory.group2_list_6')}
                                <br />-  {t('software_advisory.group2_list_7')}
                                <br />-  {t('software_advisory.group2_list_8')}
                                <br />-  {t('software_advisory.group2_list_9')}
                                <br />-  {t('software_advisory.group2_list_10')}
                                <br />-  {t('software_advisory.group2_list_11')}
                                <br />- Q {t('software_advisory.group2_list_12')}
                                <br />-  {t('software_advisory.group2_list_13')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
