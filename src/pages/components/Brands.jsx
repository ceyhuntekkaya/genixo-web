import React from 'react'
const brands = require('../../data/brands.json')
const lang = require('../../data/pages.json')

export default function Brands() {
    return (
        <div id="brands-2" className="wide-70 brands-section division">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="brands-title text-center">
                            <p className="p-xl">{lang.general.brandsExplain}</p>
                        </div>
                    </div>
                </div>
                <div className="brands-2-wrapper">
                    <div className="row justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-5">
                        {
                            brands.map((brand, key) =>
                                <div className="col d-flex justifiy-content-center align-items-center rounded text-center m-3" 
                                key={key}
                                style={{boxShadow: "rgba(254, 84, 0, 0.15) 0px 6px 24px 0px, rgba(240, 180, 60, 0.18) 0px 0px 0px 1px", borderColor:"#f77d02", minHeight:160}}>
                                    <a href={brand.link} style={{fontSize: 26}} className="w-100 service-box">
                                        {brand.name}
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
