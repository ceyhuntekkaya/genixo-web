import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export default async function CounterSection({ locale }: { locale: Locale }) {
    const dict = await getDictionary(locale);

    return (
        <div className="section genixo-counter-section-03 genixo-counter-section-04">
            <div className="container">
                <div className="counter-wrap" style={{ backgroundImage: `url(/images/bg/counter-bg2.jpg)` }}>
                    <div className="row">
                        {dict.counter.items.map((item: { value: string; label: string }, index: number) => (
                            <div key={index} className="col-lg-3 col-sm-6">
                                <div className="single-counter-02 text-center">
                                    <span>{item.value}</span>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

