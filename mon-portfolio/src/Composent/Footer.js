import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Logic for subscribing, e.g., sending the email to an API
        console.log('Subscribed with email:', email);
        setEmail('');
    };

    return (
        <div className="footer-area">
            <div className="container">
                <div className="row footer">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src="assets/images/footer-logo.png" alt="footer-logo" />
                                </Link>
                            </div>
                            <p className="footer-widget-text">
                                Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
                            </p>
                            <div className="footer-social">
                                <div className="footer-widget-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer-widget left">
                            <div className="widget-title">
                                <h2>Useful Links</h2>
                            </div>
                            <ul>
                                <li><Link to="/about-us">About Company</Link></li>
                                <li><Link to="/team">Meet Our Team</Link></li>
                                <li><Link to="/blog-grid">Latest Blog</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/testimonial">Testimonials</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget left">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <ul>
                                <li><Link to="/about-us">About Company</Link></li>
                                <li><Link to="/team">Meet Our Team</Link></li>
                                <li><Link to="/blog-grid">Latest Blog</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget-newsletter">
                            <div className="widget-title">
                                <h2>Newsletter</h2>
                            </div>
                            <p className="newsletter-text">
                                Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
                            </p>
                            <div className="Subscribe-form2">
                                <form onSubmit={handleSubscribe}>
                                    <div className="form-field2">
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            placeholder="Enter Your E-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button className="subscribe-button" type="submit">
                                            <i className="bi bi-send"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="copyright-text">
                            <p>© Copyright 2024 By Solutek</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="copyright-list">
                            <ul>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/supports">Supports</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;