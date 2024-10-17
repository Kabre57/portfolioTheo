/** @format */

import React from "react";

function Sidebar() {
  return (

    <div id="sticky-header" className="solutek_nav_manu style-three">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2">
            <div className="logo">
              <a className="logo_img" href="index.html" title="solutek">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <a className="main_sticky" href="index.html" title="solutek">
                <img src="assets/images/footer-logo.png" alt="astute" />
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <nav className="solutek_menu">
              <ul className="nav_scroll">
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Service">Service</a></li>
                <li><a href="#Work">Work</a></li>						
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header-menu-btn">
              <div className="sidebar-button">
                <a className="nav-btn navSidebar-button" href="#" aria-label="Open sidebar">
                  <i className="fas fa-bars"></i>
                </a> 
              </div>
              <div className="solutek-btn">
                <a className="btn-2" href="contact.html">Get A Quote NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;