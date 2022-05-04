import React from 'react'
import { Link } from 'react-router-dom'
export default function Statistics() {
  return (
    <section className="cmt-row services-section bg-img2 cmt-bgimage-yes cmt-bg clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title title-style-center_text res-991-mb_20">
                    <div className="title-header">
                        <h3>Our Statistics</h3>
                        <h2 className="title text-base-white">A Collection of Our Work</h2>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="d-table p-40 bg-base-skin position-relative border-rad_5 text-center m-auto me-lg-0 ms-lg-auto mt_110 res-991-mt-40 z-index-1 cmt-play-icon">
                    <div className="cmt-play-icon-animation">
                        <Link to="https://youtu.be/7e90gBu4pas" target="_self" className="cmt_prettyphoto">
                            <div className="cmt-icon cmt-icon_element-border border-2 cmt-icon_element-color-white cmt-icon_element-size-md cmt-icon_element-style-rounded mb-0">
                                <i className="fas fa-play fs-20"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="pt-130 pb-100 res-991-p-0"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="pb-60 res-991-pb-0"></div>
            </div>
        </div>
    </div>
</section>
  )
}
