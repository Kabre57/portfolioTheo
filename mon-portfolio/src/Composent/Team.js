import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Breadcrumb Area */}
            {/*==================================================*/}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h4>Team </h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li> & </li>
                                    <li>Team </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Breadcrumb Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Team Details Area */}
            {/*==================================================*/}
            <div className="team-details-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-thumb">
                                <img src="assets/images/team/team-details.jpg" alt="Team Member" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details-right">
                                <div className="team-details-content">
                                    <div className="team-member-title">
                                        <h4>Anowar Hossin Omio</h4>
                                        <p>Dream-IT Founder & CEO</p>
                                    </div>
                                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor creative
                                    labore et dolore magna aliqua ipsum suspendisse ultrices gravida commodo viverra accu
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="row add-bg">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="contact-info-box">
                                            <div className="contact-info-icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="contact-info-content">
                                                <h4>Call us Any time</h4>
                                                <p>+123 (4567) 890</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="contact-info-box">
                                            <div className="contact-info-icon">
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                            <div className="contact-info-content">
                                                <h4>Send E-Mail</h4>
                                                <p>info@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-details-social-icon">
                                    <ul>
                                        <li>Social Media</li>
                                        <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-pinterest-p"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="team-details-location-box">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>Location</h4>
                                        <p>21 King Street 5th Floor Hamilton, Ontario Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="team-details-skills">
                                <h4>My Skills</h4>
                                <div className="wrapper">
                                    <div className="skill">
                                        <p>Design Analytics</p>
                                        <div className="skill-bar skill1 wow slideInLeft animated animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                            <span className="skill-count1">95%</span>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <p>Software Development</p>
                                        <div className="skill-bar skill2 wow slideInLeft animated animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                            <span className="skill-count2">85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details-skills">
                                <h4>Success Project</h4>
                                <div className="wrapper">
                                    <div className="skill">
                                        <p>UI/UX Design & Development</p>
                                        <div className="skill-bar skill1 wow slideInLeft animated animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                            <span className="skill-count1">95%</span>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <p>Content Strategy</p>
                                        <div className="skill-bar skill2 wow slideInLeft animated animated" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                            <span className="skill-count2">85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Team Details Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Brand Area Style Two */}
            {/*==================================================*/}
            <div className="brand-area style-two">
                <div className="container">
                    <div className="row">
                        <div className="brand-list-1 owl-carousel">
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-1.png" alt="Brand 1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-2.png" alt="Brand 2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-3.png" alt="Brand 3" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-4.png" alt="Brand 4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-5.png" alt="Brand 5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Brand Area Style Two */}
            {/*==================================================*/}
        </>
    );
}

export default Team;