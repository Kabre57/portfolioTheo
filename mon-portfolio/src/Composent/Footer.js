import React from 'react';

function Footer() {
  return (
    <div className="footer-area style-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <a href="/">
                <img src="assets/images/logo-2.png" alt="Logo" />
              </a>
            </div>
            <div className="footer-widget-desc">
              <p>
                Monotonectally synergize granular top visualize strategic infomediaries afters
                task state of the art infrastructures digital agency in north
              </p>
            </div>
            <div className="toptech-button inner-style">
              <a href="/About">Discover More<i className="bi bi-arrow-right-short"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget-content">
              <div className="footer-widget-title">
                <h4>Company</h4>
              </div>
              <div className="footer-widget-menu">
                <ul>
                  <li><a href="/About"><i className="bi bi-arrow-right-circle"></i>About</a></li>
                  <li><a href="/Team"><i className="bi bi-arrow-right-circle"></i>Our Team</a></li>
                  <li><a href="/Pricing"><i className="bi bi-arrow-right-circle"></i>Pricing Plan</a></li>
                  <li><a href="/Blog"><i className="bi bi-arrow-right-circle"></i>Latest Blog</a></li>
                  <li><a href="/Careers"><i className="bi bi-arrow-right-circle"></i>Careers</a></li>
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
                  <li><a href="/Pricing"><i className="bi bi-arrow-right-circle"></i>IT Solutions</a></li>
                  <li><a href="/Pricing"><i className="bi bi-arrow-right-circle"></i>Cyber Security</a></li>
                  <li><a href="/Pricing"><i className="bi bi-arrow-right-circle"></i>Digital Marketing</a></li>
                  <li><a href="/Pricing"><i className="bi bi-arrow-right-circle"></i>Brand Identity</a></li>
                  <li><a href="/Pricing"><i className="bi bi-arrow-right-circle"></i>SEO Marketing</a></li>
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