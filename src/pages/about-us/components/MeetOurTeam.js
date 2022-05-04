import React from 'react'
import { Link } from "react-router-dom";
const teamData = require("../../../data/team.json")

export default function MeetOurTeam() {
    return (
        <section className="cmt-row team-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="section-title style2">
                            <div className="title-header">
                                <h3>Meet Our Team</h3>
                                <h2 className="title">Excellent Team Of Experts IT</h2>
                            </div>
                            <div className="title-desc">
                                <p>Every IT team is different, based on the culture and needs of its company, the experience and skills of the team members and the types of systems on which they are working. Here's the Devfox's. &nbsp; <Link to="/team" className="cmt-btn cmt-btn-size-md cmt-btn-color-skincolor btn-inline btn-underline"> More Team Members</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row slick_slider" data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "dots":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":992,"settings":{"slidesToShow": 3}}, {"breakpoint":778,"settings":{"slidesToShow": 2}}, {"breakpoint":575,"settings":{"slidesToShow": 1}}]}'>

                    {
                        teamData.map((member, key) =>
                            <div key={key} className="cmt-box-col-wrapper col-lg-3">

                                <div className="featured-imagebox featured-imagebox-team style1">
                                    <div className="featured-thumbnail">
                                        <img width="370" height="346" className="img-fluid" src={member.photo} alt="genixo" />
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
                </div>
            </div>
        </section>
    )
}
