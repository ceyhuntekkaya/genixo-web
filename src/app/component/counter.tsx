'use client';

import Image from "next/image";

export default function CounterSection() {
    return (
        <>

            <div className="section genixo-counter-section-02">
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="single-counter">
                                    <div className="counter-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/counter-1.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="counter-content">
                                        <span className="counter">1790</span>
                                        <p>Happy clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="single-counter">
                                    <div className="counter-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/counter-2.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="counter-content">
                                        <span className="counter">491</span>
                                        <p>Finished projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="single-counter">
                                    <div className="counter-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/counter-3.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="counter-content">
                                        <span className="counter">245</span>
                                        <p>Skilled Experts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="single-counter single-counter-4">
                                    <div className="counter-img">
                                        <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                            <Image src="/images/counter-1.png" alt="" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="counter-content">
                                        <span className="counter">1090</span>
                                        <p>Media Posts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}