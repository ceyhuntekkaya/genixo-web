import React from 'react'
import Footer from '../generalComponents/Footer'
import PageTitle from '../generalComponents/PageTitle'
import SiteHeaderMenu from '../generalComponents/SiteHeaderMenu'
import TopBar from '../generalComponents/TopBar'
import PartnersSection from '../homePage/components/PartnersSection'
import QuickFactsSection from '../homePage/components/QuickFactsSection'
import { Link } from "react-router-dom";

const teamData = require("../../data/team.json")

export default function OurTeam() {
    return (

        <React.Fragment>
            <div className="page">
                <header id="masthead" className="header cmt-header-style-01">
                    <TopBar />
                    <SiteHeaderMenu />
                </header>
                <PageTitle />
                <p className="rs-p-wp-fix"></p>
                <div className="site-main">
                    <section className="cmt-row padding_bottom_zero-section clearfix">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="section-title style2">
                                        <div className="title-header">
                                            <h3>Meet Our Team</h3>
                                            <h2 className="title">Our powerful team members</h2>
                                        </div>
                                        <div className="title-desc">
                                            <p>The positive distinction within the World Inspiring of Success &amp; Connections of People and Organizations. Devfox's pillar of strength is rely on our team members who running the whole show.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb_15">
                                {
                                    teamData.map((member, key) =>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="featured-imagebox featured-imagebox-team style1">
                                                <div className="featured-thumbnail">
                                                    <img width="535" height="500" className="img-fluid" src={member.photo} alt="image" />
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



                    <QuickFactsSection />
                    <PartnersSection />

                </div>



                <Footer />
                <a id="totop" href="#top">
                    <i className="icon-angle-up"></i>
                </a>
            </div>
        </React.Fragment>



    )
}
