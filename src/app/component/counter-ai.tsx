'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function CounterAISection({ dict, locale }: PageProps) {
    if (!dict.counterAI) {
        return null;
    }

    const counterAI = dict.counterAI;

    return (
        <>

            <div className="section genixo-counter-section-03" style={{backgroundImage: "url(/images/bg/counter-bg.jpg)"}}>
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span><span className="counter">354</span>+</span>
                                    <p>{counterAI.completedProjects}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span><span className="counter">119</span>+</span>
                                    <p>{counterAI.roboticAutomation}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span><span className="counter">99</span>%</span>
                                    <p>{counterAI.webSiteAnalyse}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span><span className="counter">321</span>+</span>
                                    <p>{counterAI.clientsSupportDone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}