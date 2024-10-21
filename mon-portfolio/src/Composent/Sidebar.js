import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="sticky-header" className="solutek_nav_manu style-three">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <Link to="/" title="solutek">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
                <Link to="/" className="main_sticky" title="solutek">
                  <img src="assets/images/footer-logo.png" alt="astute" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <nav className="solutek_menu">
                <ul className="nav_scroll">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Services">Service</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header-menu-btn">
                <div className="sidebar-button">
                  <button 
                    className="nav-btn navSidebar-button" 
                    onClick={toggleSidebar} 
                    aria-label="Open sidebar"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
                <div className="solutek-btn">
                  <Link className="btn-2" to="/contact">Get A Quote NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (Conditionnel) */}
      {isOpen && (
        <div className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#About">About</Link></li>
              <li><Link to="#Service">Service</Link></li>
              <li><Link to="#Work">Work</Link></li>
              <li><Link to="#Contact">Contact</Link></li>
              <li><Link to="/contact">Get A Quote NOW</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar;