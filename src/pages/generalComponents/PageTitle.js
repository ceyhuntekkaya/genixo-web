import React from 'react'
import { Link } from "react-router-dom";

export default function PageTitle() {
  return (
    <div className="cmt-page-title-row bg-base-dark cmt-bg cmt-bgimage-yes clearfix">
            <div className="cmt-titlebar-wrapper-bg-layer cmt-bg-layer"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="cmt-page-title-row-inner">
                            <div className="page-title-heading">
                                <h2 className="title">Garreth Mills</h2>
                            </div>
                            <div className="breadcrumb-wrapper">
                                <span>
                                    <Link to="/">Home</Link>
                                </span>
                                <span>team details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
  )
}
