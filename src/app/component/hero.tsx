'use client';

import banner from "@/app/assets/images/hero-bg3.jpg";
import Link from "next/link";
import {Dictionary} from "@/i18n/types";
import {Locale} from "@/i18n/config";

interface PageProps {
    dict: Dictionary;
    locale: Locale;
}
export default function HeroSection({ dict, locale }: PageProps) {
    return (
        <>

            <div className="section techwix-hero-section-03 d-flex align-items-center" style={{backgroundImage: `url(${banner.src})`}}>
                <div className="shape-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="944px" height="894px">
                        <defs>
                            <linearGradient id="PSgrad_0" x1="88.295%" x2="0%" y1="0%" y2="46.947%">
                                <stop offset="0%" stopColor="rgb(67,186,255)" stopOpacity="1"/>
                                <stop offset="100%" stopColor="rgb(113,65,177)" stopOpacity="1"/>
                            </linearGradient>

                        </defs>
                        <path fillRule="evenodd" fill="rgb(43, 142, 254)"
                              d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"/>
                        <path fill="url(#PSgrad_0)"
                              d="M39.612,410.76 L467.344,29.823 C516.51,-13.476 590.638,-9.94 633.939,39.612 L914.192,317.344 C957.492,366.50 953.109,440.638 904.402,483.939 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"/>
                    </svg>
                </div>
                <div className="shape-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="726.5px" height="726.5px">
                        <path fillRule="evenodd" stroke="rgb(255, 255, 255)" strokeWidth="1px" strokeLinecap="butt"
                              strokeLinejoin="miter" opacity="0.302" fill="none"
                              d="M28.14,285.269 L325.37,21.216 C358.860,-8.852 410.655,-5.808 440.723,28.14 L704.777,325.37 C734.846,358.860 731.802,410.654 697.979,440.723 L400.956,704.777 C367.133,734.845 315.338,731.802 285.269,697.979 L21.216,400.955 C-8.852,367.132 -5.808,315.337 28.14,285.269 Z"/>
                    </svg>
                </div>
                <div className="shape-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="515px" height="515px">
                        <defs>
                            <linearGradient id="PSgrad_0" x1="0%" x2="89.879%" y1="0%" y2="43.837%">
                                <stop offset="0%" stopColor="rgb(67,186,255)" stopOpacity="1"/>
                                <stop offset="100%" stopColor="rgb(113,65,177)" stopOpacity="1"/>
                            </linearGradient>

                        </defs>
                        <path fillRule="evenodd" fill="rgb(43, 142, 254)"
                              d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"/>
                        <path fill="url(#PSgrad_0)"
                              d="M19.529,202.281 L230.531,14.699 C254.559,-6.660 291.353,-4.498 312.714,19.529 L500.295,230.531 C521.656,254.559 519.493,291.353 495.466,312.714 L284.463,500.295 C260.436,521.656 223.641,519.493 202.281,495.466 L14.699,284.463 C-6.660,260.435 -4.498,223.641 19.529,202.281 Z"/>
                    </svg>
                </div>
                <div className="shape-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="972.5px" height="970.5px">
                        <path fillRule="evenodd" stroke="rgb(255, 255, 255)" strokeWidth="1px" strokeLinecap="butt"
                              strokeLinejoin="miter" fill="none"
                              d="M38.245,381.103 L435.258,28.158 C480.467,-12.32 549.697,-7.964 589.888,37.244 L942.832,434.257 C983.23,479.466 978.955,548.697 933.746,588.888 L536.733,941.832 C491.524,982.23 422.293,977.955 382.103,932.746 L29.158,535.733 C-11.32,490.524 -6.963,421.293 38.245,381.103 Z"/>
                    </svg>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h3 className="sub-title">{dict.hero.subtitle}</h3>
                                <h2 className="title">{dict.hero.title}</h2>
                                <p>{dict.hero.description}</p>
                                <div className="hero-btn">
                                    <Link className="btn" href={`/${locale}/solutions`}>{dict.hero.button}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}