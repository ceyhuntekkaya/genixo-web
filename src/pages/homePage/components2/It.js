import React from 'react'
import { Link } from 'react-router-dom'

export default function It() {
  return (
    <section className="cmt-row bg-base-grey clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title style3 res-991-mb_20">
                    <div className="title-header">
                        <h3>Our Services</h3>
                        <h2 className="title">The specialize IT services</h2>
                    </div>
                    <div className="title-desc">
                        <p>Our technical excellence makes us a go-to partner for your businesses. Let’s
                        connect & discuss how Team can assist you as technology partner from Fully or Co-Managed IT Services <Link to="/about" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline">Continue Reading</Link></p>
                    </div>
                </div> 
                <div className="pb-60 res-991-p-0"></div>
            </div>                        
        </div>
    </div>
</section>
  )
}
