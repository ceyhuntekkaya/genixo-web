import React from 'react'

export default function DepartmentMenu() {
    return (
        <div className="col-lg-4 widget-area sidebar-left">
            <aside className="widget widget-nav-menu with-title">
                <h3 className="widget-title">Departments</h3>
                <ul>
                    <li><a href="it-consultancy.html"> IT Consultancy </a></li>
                    <li><a href="experience-design.html"> Experience Design </a></li>
                    <li><a href="digital-services.html"> Digital Services </a></li>
                    <li><a href="data-structuring.html"> Data Structuring </a></li>
                    <li className="active"><a href="advisory-services.html"> Advisory Services </a></li>
                    <li><a href="content-engineering.html"> Content Engineering </a></li>
                </ul>
            </aside>
            <aside className="widget widget-banner with-title">
                <div className="cmt-col-bgcolor-yes bg-base-skin text-base-white col-bg-img-five cmt-col-bgimage-yes cmt-bg">
                    <div className="cmt-col-wrapper-bg-layer cmt-bg-layer bg-base-skin">
                        <div className="cmt-col-wrapper-bg-layer-inner bg-base-skin"></div>
                    </div>
                    <div className="layer-content text-center">
                        <div className="icon-img mb-25">
                            <img src="images/icon-service.png" alt="icon-service.png" />
                        </div>
                        <h3>For Tommorow We Can Take Action Today!</h3>
                        <a className="cmt-btn btn-inline cmt-icon-btn-right cmt-btn-size-md cmt-btn-color-white" href="contact-us.html">Join With Us<i className="icon-right"></i></a>
                    </div>
                </div>
            </aside>
            <aside className="widget widget-download with-title">
                <h3 className="widget-title">Download</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <div className="d-flex">
                    <div className="download_block mr-15">
                        <a href="#">
                            <div className="download_img_icon">
                                <img className="img-fluid auto_size" width="59" height="72" src="images/icon.png" alt="download-pdf-img" />
                            </div>
                            <span>PDF Presentation</span>
                        </a>
                    </div>
                    <div className="download_block ml-15">
                        <a href="#">
                            <div className="download_img_icon">
                                <img className="img-fluid auto_size" width="59" height="72" src="images/icon.png" alt="download-pdf-img" />
                            </div>
                            <span>PDF Presentation</span>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    )
}
