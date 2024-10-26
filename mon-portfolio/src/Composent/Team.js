import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Breadcumb Area */}
            {/*==================================================*/}
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcumb-content">
                                <h4>Our Team</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>&gt;</li>
                                    <li>Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Breadcumb Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Team Area Style One */}
            {/*==================================================*/}
            <div className="team-area style-one inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title left style-two">
                                <h4>Dedicated Team</h4>
                                <h1>Meet Our Dedicated Member</h1>
                                <h1>For Any Enquiry</h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="toptech-button style-one">
                                <Link to="#">All Member<i className="bi bi-arrow-right-circle-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { name: "Arianna Bibi", role: "Web Developer", img: "team1.jpg" },
                            { name: "Nazmul Hossen", role: "UI/UX Designer", img: "team2.jpg" },
                            { name: "Roman Soltana", role: "Manager", img: "team3.jpg" },
                            { name: "Ghaura Mogibor", role: "UI/UX Developer", img: "team4.jpg" }
                        ].map(member => (
                            <div className="col-lg-3 col-md-6" key={member.name}>
                                <div className="single-team-box">
                                    <div className="team-thumb">
                                        <img src={`assets/images/home-1/${member.img}`} alt={member.name} />
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h4>{member.name}</h4>
                                            <p>{member.role}</p>
                                        </div>
                                        <div className="team-social-icon">
                                            <ul>
                                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Team Area Style One */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Subscribe Area Style Three */}
            {/*==================================================*/}
            <div className="subscribe-area style-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title left inner-style">
                                <h1>Get Latest Update from Toptech</h1>
                                <h1>Stay Connect with Us</h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="#">
                                <div className="single-subscribe-box">
                                    <input type="text" name="Email" placeholder="Enter your Email" required />
                                    <button type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Subscribe Area Style Three */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Process Area Style Three */}
            {/*==================================================*/}
            <div className="process-area style-three inner">
                <div className="container">
                    <div className="row add-bg">
                        {[
                            { title: "Account Register", description: "Opportunities before extensible market Dramatically pursue us", img: "process-1.png" },
                            { title: "Add New Card", description: "Opportunities before extensible market Dramatically pursue us", img: "process-2.png" },
                            { title: "Verified Account", description: "Opportunities before extensible market Dramatically pursue us", img: "process-3.png" }
                        ].map(process => (
                            <div className="col-lg-4 col-md-6" key={process.title}>
                                <div className="single-process-box">
                                    <div className="process-icon">
                                        <img src={`assets/images/home-3/${process.img}`} alt={process.title} />
                                    </div>
                                    <div className="process-content">
                                        <h4>{process.title}</h4>
                                        <p>{process.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Process Area Style Three */}
            {/*==================================================*/}
        </>
    );
}

export default Team;