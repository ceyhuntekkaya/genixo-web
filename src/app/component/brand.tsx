'use client';

import Image from "next/image";

export default function BrandSection() {
    return (
        <>

            <div className="section techwix-brand-section techwix-brand-section-03">
                <div className="container">
                    <div className="brand-wrapper text-center">

                        <div className="brand-active">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide single-brand">
                                        <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                            <Image src="/images/brand/brand-1.png" alt="Brand" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="swiper-slide single-brand">
                                        <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                            <Image src="/images/brand/brand-2.png" alt="Brand" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="swiper-slide single-brand">
                                        <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                            <Image src="/images/brand/brand-3.png" alt="Brand" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="swiper-slide single-brand">
                                        <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                            <Image src="/images/brand/brand-4.png" alt="Brand" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="swiper-slide single-brand">
                                        <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                            <Image src="/images/brand/brand-5.png" alt="Brand" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
                                    </div>
                                    <div className="swiper-slide single-brand">
                                        <div style={{ position: 'relative', width: '150px', height: '80px' }}>
                                            <Image src="/images/brand/brand-2.png" alt="Brand" fill style={{ objectFit: 'contain' }} unoptimized />
                                        </div>
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