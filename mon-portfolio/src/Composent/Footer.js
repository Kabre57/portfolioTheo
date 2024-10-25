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
        <>
            {/*==================================================*/}
            {/* Start Toptech Footer Area Style One */}
            {/*==================================================*/}
            <div className="footer-area style-foure">
                <div className="container">
                    <div className="row footer-top">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-logo">
                                <Link to="index.html"><img src="assets/images/logo5.png" alt="logo-5" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer-top-social-icon">
                                <ul>
                                    <li><a href="https://www.facebook.com/theo.sasuke"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/theogeoffroy5"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/theo-kabre-8bb5a5169"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="www.pinterest.com/geoffroytheo2"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-title">
                                <h4>Company</h4>
                            </div>
                            <div className="footer-widget-menu">
                                <ul>
                                    <li><Link to="#">Help Center</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="/Contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-content">
                                <div className="footer-widget-title">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="footer-widget-menu">
                                    <ul>
                                        <li><i className="fa-solid fa-phone-flip"></i> +225 07 57 39 01 57</li>
                                        <li><i className="fa-regular fa-envelope"></i> theogeoffroy5@gmail.com</li>
                                        <li className="footer-descrip">yopognon zone industrielle <br /> abidjan, côte d'ivoire</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-content">
                                <div className="footer-widget-title">
                                    <h4>Working Time</h4>
                                </div>
                                <div className="footer-widget-menu">
                                    <ul>
                                        <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
                                        <li>Saturday: 10:00 AM - 6:00 PM</li>
                                        <li>Sunday & Friday Closed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-content">
                                <div className="footer-widget-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <p className="f-desc-2">I’m okay with getting emails and having that tracked to improve my experience</p>
                                <form onSubmit={handleSubscribe}>
                                    <div className="footer-newslatter-box">
                                        <input 
                                            type="email" 
                                            name="Email" 
                                            placeholder="Your E-Mail" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required 
                                        />
                                        <button type="submit">SIGN UP</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Footer Area */}
            {/*==================================================*/}
        </>
    );
}

export default Footer;