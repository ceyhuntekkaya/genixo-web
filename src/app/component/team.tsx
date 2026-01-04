'use client';

import Image from "next/image";

export default function TeamSection() {
    return (
        <>

            <div className="section genixo-team-section section-padding-02">
                <div className="container">
                    <div className="team-wrap">
                        <div className="section-title text-center">
                            <h3 className="sub-title">Our expert team </h3>
                            <h2 className="title"> We have world expert team</h2>
                        </div>
                        <div className="team-content-wrap">
                            <div className="swiper-container team-active">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="single-team">
                                            <div className="team-img">
                                                <a href="team.html">
                                                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                                                        <Image src="/images/team/team-1.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="name"><a href="team.html">Andrew <br/> Max Fetcher</a>
                                                </h3>
                                                <span className="designation">CEO, genixo</span>
                                                <div className="team-social">
                                                    <ul className="social">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-team">
                                            <div className="team-img">
                                                <a href="team.html">
                                                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                                                        <Image src="/images/team/team-2.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="name"><a href="team.html">Arnold <br/> human</a></h3>
                                                <span className="designation">CEO, genixo</span>
                                                <div className="team-social">
                                                    <ul className="social">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-team">
                                            <div className="team-img">
                                                <a href="team.html">
                                                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                                                        <Image src="/images/team/team-3.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="name"><a href="team.html">Mike <br/> Holder</a></h3>
                                                <span className="designation">CEO, genixo</span>
                                                <div className="team-social">
                                                    <ul className="social">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-team">
                                            <div className="team-img">
                                                <a href="team.html">
                                                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                                                        <Image src="/images/team/team-4.jpg" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="team-content">
                                                <h3 className="name"><a href="team.html">Joakim <br/> Ken</a></h3>
                                                <span className="designation">CEO, genixo</span>
                                                <div className="team-social">
                                                    <ul className="social">
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}