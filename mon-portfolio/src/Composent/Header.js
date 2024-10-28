import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ initialClass }) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        // Fait défiler la page vers le haut
        window.scrollTo(0, 0);
    };

    return (
        <div className={`header-area ${initialClass} ${isSticky ? 'sticky' : ''}`} id="sticky-header">
            {/*==================================================*/}
            {/* Start Toptech Header Area */}
            {/*==================================================*/}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="header-logo">
                            <Link to="/" onClick={handleLinkClick}>
                                <img src="assets/images/logo-1.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="header-menu">
                            <ul>
                                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                                <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
                                <li><Link to="/Mission" onClick={handleLinkClick}>Mission</Link></li>
                                <li><Link to="/Blog" onClick={handleLinkClick}>Blog</Link></li>
                                <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                            </ul>
                            <div className="header-search-icon search-box-outer">
                                <Link to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
                            </div>
                            <div className="header-button">
                                <Link to="/contact" onClick={handleLinkClick}>Get A Quote</Link>
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

            <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
                <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                        <a href="#nav" className="meanmenu-reveal">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                        <nav className="mean-nav">
                            <ul className="nav_scroll">
                                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                                <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
                                <li><Link to="/Mission" onClick={handleLinkClick}>Mission</Link></li>
                                <li><Link to="/Blog" onClick={handleLinkClick}>Blog</Link></li>
                                <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Main Menu Area */}
            {/*==================================================*/}

            
        </div>
    );
}

export default Header;