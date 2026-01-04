'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function AboutAISection({ dict, locale }: PageProps) {
    // Get first two values for the list items
    const values = dict.about.values;
    const valueKeys = Object.keys(values);
    const firstValue = values[valueKeys[0] as keyof typeof values];
    const secondValue = values[valueKeys[1] as keyof typeof values];

    return (
        <div className="section techwix-about-section-05 section-padding">
            <div className="container">
                <div className="about-wrap">
                    <div className="section-title text-center">
                        <h3 className="sub-title">{dict.about.WhoWeAre}</h3>
                        <h2 className="title">{dict.about.slogan}</h2>
                    </div>
                    <div className="about-content-wrap">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img-wrap">
                                    <div className="about-img about-img-big">
                                        <img src="/assets/images/about-big3.jpg" alt=""/>
                                    </div>
                                    <div className="about-img about-img-sm">
                                        <img src="/assets/images/about-sm3.jpg" alt=""/>
                                        <div className="shape-01"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <p className="title">{dict.about.short}</p>
                                    <p className="text">{dict.about.description.substring(0, 200)}...</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}