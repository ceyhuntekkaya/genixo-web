'use client';

import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function CounterAISection({ dict }: PageProps) {
    if (!dict.counter || !dict.counter.items || dict.counter.items.length === 0) {
        return null;
    }

    const counterItems = dict.counter.items;

    return (
        <>

            <div className="section genixo-counter-section-03" style={{backgroundImage: "url(/images/bg/counter-bg.jpg)"}}>
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row">
                            {counterItems.map((item, index) => {
                                // Extract number and suffix from value (e.g., "354+" -> number: "354", suffix: "+")
                                const match = item.value.match(/^(\d+)(.*)$/);
                                const number = match ? match[1] : item.value;
                                const suffix = match ? match[2] : '';
                                
                                return (
                                    <div key={index} className="col-lg-3 col-sm-6">
                                        <div className="single-counter-02 text-center">
                                            <span><span className="counter">{number}</span>{suffix}</span>
                                            <p>{item.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}