import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        // Ferme le menu et fait défiler la page vers le haut
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
            <div className="mobile-menu mean-container">
                <div className="mean-bar">
                    <a
                        href="#nav"
                        className={`meanmenu-reveal ${isOpen ? 'meanclose' : ''}`}
                        onClick={handleMenuToggle}
                        style={{
                            right: '0px',
                            left: 'auto',
                            textAlign: 'center',
                            textIndent: '0px',
                            fontSize: '20px',
                        }}
                    >
                        {isOpen ? <span>X</span> : <><span></span><span></span><span></span></>}
                    </a>
                    <nav className="mean-nav" style={{ display: isOpen ? 'block' : 'none' }}>
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
    );
}

export default MobileHeader;