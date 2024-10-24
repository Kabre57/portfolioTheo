import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Header Area */}
            {/*==================================================*/}
            <div className="header-area style-foure" id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="header-logo">
                                <Link to="/#">
                                    <img src="assets/images/logo-4.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-menu">
                                <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Home1">Home1</Link></li>
                                <li><Link to="/Services">Service</Link></li>
                                <li><Link to="/Mission">Mission</Link></li>
                                <li><Link to="/About">About</Link></li>                                                        
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                </ul>
                                <div className="header-button">
                                    <Link to="/Contact">Get A Quote</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="social-media d-flex align-items-center">
                                <h3 className="social-title">Social:</h3>
                                <ul className="social-icon">
                                    <li><a href="https://www.facebook.com/theo.sasuke"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/theogeoffroy5"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/theo-kabre-8bb5a5169"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Header Area Style foure */}
            {/*==================================================*/}
            
            {/*==================================================*/}
            {/* Start Main Menu Area */}
            {/*==================================================*/}
            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
                <div className="mobile-menu">
                    <nav className="header-menu">
                        <ul className="nav_scroll">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Services">Service</Link></li>
                            <li><Link to="/Mission">Mission</Link></li>
                            <li><Link to="/About">About</Link></li>                                                        
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Main Menu Area */}
            {/*==================================================*/}
        </>
    );
}

export default Header;