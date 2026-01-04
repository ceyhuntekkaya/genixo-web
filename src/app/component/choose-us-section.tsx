import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Image from "next/image";

export default async function ChooseUsSection({ locale }: { locale: Locale }) {
    const dict = await getDictionary(locale);

    return (
        <div 
            className="section genixo-choose-us-section section-padding"
            style={{ backgroundImage: `url(/images/bg/choose-us-bg3.jpg)` }}
        >
            <div className="container">
                <div className="choose-us-wrap">
                    <div className="section-title text-center">
                        <h3 className="sub-title">{dict.chooseUs.subtitle}</h3>
                        <h2 className="title">{dict.chooseUs.title}</h2>
                    </div>
                    <div className="choose-us-content-wrap">
                        <div className="row">
                            {dict.chooseUs.items.map((item: { image: string; title: string; description: string; link?: string }, index: number) => (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="choose-us-item-02">
                                        <div className="choose-us-img">
                                            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '200px' }}>
                                                <Image src={item.image} alt={item.title.replace(/<[^>]*>/g, '')} fill style={{ objectFit: 'cover' }} unoptimized />
                                            </div>
                                        </div>
                                        <div className="choose-us-content">
                                            <h3 className="title">
                                                {item.link ? (
                                                    <a href={item.link} dangerouslySetInnerHTML={{ __html: item.title }} />
                                                ) : (
                                                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                                )}
                                            </h3>
                                            <p>{item.description}</p>
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

