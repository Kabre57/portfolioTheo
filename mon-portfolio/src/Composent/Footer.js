import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const handleLinkClick = () => {
    // Fait défiler la page vers le haut
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-area style-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <Link to="/">
                <img src="assets/images/logo-2.png" alt="Logo" />
              </Link>
            </div>
            <div className="footer-widget-desc">
              <p>
                Monotonectally synergize granular top visualize strategic infomediaries afters
                task state of the art infrastructures digital agency in north
              </p>
            </div>
            <div className="toptech-button inner-style">
              <Link to="/About" onClick={handleLinkClick}>Discover More<i className="bi bi-arrow-right-short"></i></Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Company</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li><Link to="/About" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>About</Link></li>
                  <li><Link to="/Team" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Our Team</Link></li>
                  <li><Link to="/Pricing" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Pricing Plan</Link></li>
                  <li><Link to="/Blog" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Latest Blog</Link></li>
                  <li><Link to="/Careers" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Careers</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Our Services</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li><Link to="/Pricing" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>IT Solutions</Link></li>
                  <li><Link to="/Pricing" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Cyber Security</Link></li>
                  <li><Link to="/Pricing" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Digital Marketing</Link></li>
                  <li><Link to="/Pricing" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>Brand Identity</Link></li>
                  <li><Link to="/Pricing" onClick={handleLinkClick}><i className="bi bi-arrow-right-circle"></i>SEO Marketing</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Newsletter</h4>
              </div>
              <p className="f-desc-2">Subscribe to our Latest Newsletter</p>
              <form action="#">
                <div className="footer-newslatter-box">
                  <input type="text" name="Email" placeholder="Enter Your E-Mail" required />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="footer-bottom-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="footer-bottom-content">
                  <p>© 2024 Toptech. Designed by Dream IT Solution</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer-botton-social-icon">
                  <ul>
                    <li className="time-line"><i className="bi bi-alarm"></i>9.10 am - 5.30 pm</li>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest-p"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;