import React from 'react'
import { Link } from "react-router-dom";
const teamData = require("../../../data/team.json")

export default function MeetOurTeamSection() {
    return (
        <React.Fragment>
            <section className="cmt-row bg-base-dark cmt-bg cmt-bgimage-yes bg-img3 clearfix">
                <div className="cmt-row-wrapper-bg-layer cmt-bg-layer bg-base-dark"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- section title --> */}
                            <div className="section-title style2 res-991-mb_20">
                                <div className="title-header">
                                    <h3>Meet Our Team</h3>
                                    <h2 className="title">Our powerful team members</h2>
                                </div>
                                <div className="title-desc">
                                    <p>The positive distinction within the World Inspiring of Success & Connections of People and Organizations. Devfox's pillar of strength is rely on our team members who running the whole show. &nbsp; <Link to="/team" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline"> More Team Members</Link></p>
                                </div>
                            </div>{/* <!-- section title end --> */}
                            <div className="pb-100 pt-60 res-991-p-0"></div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cmt-row team-section padding_zero-section cmt-bg clearfix">
                <div className="cmt-row-wrapper-bg-layer cmt-bg-layer"></div>
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row slick_slider mt_240 res-991-mt-40" data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "dots":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":992,"settings":{"slidesToShow": 3}}, {"breakpoint":778,"settings":{"slidesToShow": 2}}, {"breakpoint":575,"settings":{"slidesToShow": 1}}]}'>




                        {
                            teamData.map((member, key) =>

                                <div className="cmt-box-col-wrapper col-lg-3">
                                    <div className="featured-imagebox featured-imagebox-team style1">
                                        <div className="featured-thumbnail">
                                            <img className="img-fluid" width="535" height="500"src={member.photo} alt="image" />
                                        </div>
                                        <div className="featured-content">
                                        <div className="team-position">{member.position}</div>
                                            <div className="featured-title">
                                            <h3><Link to="/teammember">{member.name}</Link></h3>
                                            </div>
                                            <div className="featured-view-more">
                                                <Link className="cmt-btn btn-inline cmt-btn-size-md cmt-btn-color-skincolor" to="/teammember">more details</Link>
                                            </div>
                                            <div className="featured-iconbox cmt-media-link">
                                                <div className="media-block">
                                                    <div className="media-btn"><i className="icon-plus"></i></div>
                                                    <ul className="social-icons list-inline">
                                                    <li className="social-facebook"><a href={member.facebook}><i className="ti ti-facebook"></i></a></li>
                                                    <li className="social-twitter"><a href={member.twitter}><i className="ti ti-twitter-alt"></i></a></li>
                                                    <li className="social-pinterest"><a href={member.pinterest}><i className="ti ti-pinterest"></i></a></li>
                                                    <li className="social-instagram"><a href={member.instagram}><i className="ti ti-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                            )
                        }


                    </div>{/* <!-- row end --> */}
                </div>
            </section>
        </React.Fragment>
    )
}
