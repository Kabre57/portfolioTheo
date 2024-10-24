import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Header Area */}
            {/*==================================================*/}
            <div className="header-area" id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="header-logo">
                                <Link to="/"><img src="assets/images/logo-1.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu">
                                <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Service">Service</Link></li>
                                <li><Link to="/Mission">Mission Vision</Link></li>
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                <div className="header-search-icon search-box-outer">
                                    <Link to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
                                </div>
                                <div className="header-button">
                                    <Link to="/contact">Get A Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Header Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Main Menu Area */}
            {/*==================================================*/}
            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
                <div className="mobile-menu">
                    <nav className="header-menu">
                        <ul className="nav_scroll">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Service">Service</Link></li>
                            <li><Link to="/Mission">Mission Vision</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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