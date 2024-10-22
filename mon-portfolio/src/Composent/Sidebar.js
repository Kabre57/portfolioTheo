import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // État pour gérer le défilement

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Écouteur d'événement pour le défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Modifiez ce seuil si nécessaire
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={`solutek_nav_manu ${isSticky ? 'sticky' : ''}`}>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <Link to="/" title="solutek">
                  <img src="assets/images/logo.png" alt="logo" />
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
  <div className="header-menu-btn d-flex align-items-center justify-content-end">
    <div className="sidebar-button">
      <button className="nav-btn navSidebar-button" aria-label="Open sidebar">
        <i className="fas fa-bars"></i>
      </button>
    </div>
    <div className="solutek-btn">
      <a className="btn-2" href="/contact">Get A Quote NOW</a>
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
              <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
              <li><Link to="/About" onClick={closeSidebar}>About</Link></li>
              <li><Link to="/Service" onClick={closeSidebar}>Service</Link></li>
              <li><Link to="/Contact" onClick={closeSidebar}>Contact</Link></li>
              <li><Link to="/contact" onClick={closeSidebar}>Get A Quote NOW</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar;