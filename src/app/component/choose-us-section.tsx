import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Image from "next/image";

/** Site renk paletine uygun 6 border rengi (madde 6'dan fazlaysa başa döner) */
const CARD_BORDER_COLORS = [
    "#086ad8", // primary mavi
    "#42b9ff", // açık mavi
    "#11ddf5", // cyan
    "#ff5538", // turuncu
    "#000c29", // koyu mavi
    "#415674", // slate mavi
];

export default async function ChooseUsSection({ locale }: { locale: Locale }) {
    const dict = await getDictionary(locale);
    const data = dict.whyDigitalTransformation;
    if (!data?.items?.length) return null;

    return (
        <div
            className="section genixo-choose-us-section "
            style={{ backgroundImage: `url(/images/bg/choose-us-bg3.jpg)` }}
        >
            <div className="container">
                <div className="choose-us-wrap">
                    <div className="section-title text-center">
                        <h3 className="sub-title">{data.subtitle}</h3>
                        <h2 className="title">{data.title}</h2>
                    </div>
                    <div className="choose-us-content-wrap">
                        <div className="row">
                            {data.items.map((item: { image: string; title: string; description: string; solution: string }, index: number) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div
                                        className="choose-us-item-02"
                                        style={{
                                            border: `3px solid ${CARD_BORDER_COLORS[index % CARD_BORDER_COLORS.length]}`,
                                            ['--card-accent' as string]: CARD_BORDER_COLORS[index % CARD_BORDER_COLORS.length],
                                        }}
                                    >
                                        <div className="choose-us-content">
                                            <h3 className="title card-title-accent">
                                                <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                            </h3>
                                            <p>{item.description}</p>
                                            {item.solution && <p className="solution">{item.solution}</p>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
