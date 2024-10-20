import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <>
            {/*==================================================*/}
            {/* Start solutek breadcrumb Area */}
            {/*==================================================*/}
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcumb-content">
                                <h4>Services</h4>
                                <ul className="breadcumb-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="list-arrow">&lt;</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek breadcrumb Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start solutek service details area */}
            {/*==================================================*/}
            <div className="services-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="services-details-thumb">
                                        <img src="assets/images/inner/service-details.png" alt="thumb" />
                                    </div>
                                    <div className="services-details-content">
                                        <h4 className="services-details-title">Best Solutions for App Development</h4>
                                        <p className="services-details-desc">
                                            Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment. Dramatically architect go forward opportunities before user-centric partnerships.
                                        </p>
                                        <p className="services-details-desc">
                                            Continually fashion orthogonal leadership skills whereas wireless metrics. Uniquely syndicate exceptional opportunities with interdependent users.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-detalis-text-box">
                                                <div className="service-details-content">
                                                    <h4>Why Choose Us</h4>
                                                    <p>Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment forward.</p>
                                                </div>
                                                <div className="service-details-list">
                                                    <ul>
                                                        <li><i className="bi bi-arrow-right"></i>Success Stories</li>
                                                        <li><i className="bi bi-arrow-right"></i>Success Service</li>
                                                        <li><i className="bi bi-arrow-right"></i>Success Store</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-details-icon-box">
                                                <div className="service-det-icon">
                                                    <img src="assets/images/inner/det-icon.png" alt="icon" />
                                                </div>
                                                <div className="service-det-content">
                                                    <h3>Empowering Your Success</h3>
                                                    <p>Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment forward.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="tab_container">
                                            <div className="feq-content">
                                                <h3 className="faq-title">Frequently Asked Questions</h3>
                                                <p className="faq-description">Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment.</p>
                                            </div>
                                            <div id="tab" className="tab_content">
                                                <ul className="accordion">
                                                    <li>
                                                        <a>01<span>How Can I Get Started With Your Services?</span></a>
                                                        <p style={{ display: 'none' }}>Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment.</p>
                                                    </li>
                                                    <li>
                                                        <a>02<span>How Do You Approach New Projects?</span></a>
                                                        <p style={{ display: 'none' }}>Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment.</p>
                                                    </li>
                                                    <li>
                                                        <a>03<span>What Makes Your Company Different?</span></a>
                                                        <p style={{ display: 'none' }}>Alternative in network environmental whiteboard pursue compelling results for premier our team methods empowerment.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Main Services</h4>
                                        </div>
                                        <div className="widget-category">
                                            <ul>
                                                <li><Link to="#"><img src="assets/images/inner/category-icon.png" alt="" />Database Security<i className="bi bi-arrow-right"></i></Link></li>
                                                <li><Link to="#"><img src="assets/images/inner/category-icon.png" alt="" />IT Solution<i className="bi bi-arrow-right"></i></Link></li>
                                                <li><Link to="#"><img src="assets/images/inner/category-icon.png" alt="" />Technology Consult<i className="bi bi-arrow-right"></i></Link></li>
                                                <li><Link to="#"><img src="assets/images/inner/category-icon.png" alt="" />App Development<i className="bi bi-arrow-right"></i></Link></li>
                                                <li><Link to="#"><img src="assets/images/inner/category-icon.png" alt="" />UI/UX Design<i className="bi bi-arrow-right"></i></Link></li>
                                                <li><Link to="#"><img src="assets/images/inner/category-icon.png" alt="" />Cyber Security<i className="bi bi-arrow-right"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Downloads</h4>
                                        </div>
                                        <div className="widget-sidber-download-button">
                                            <Link to="#"><i className="bi bi-file-earmark-pdf"></i>Service Report<span><i className="bi bi-download"></i></span></Link>
                                            <Link className="active" to="#"><i className="bi bi-file-earmark-pdf"></i>Download Lists<span><i className="bi bi-download"></i></span></Link>
                                        </div>
                                    </div>
                                    <div className="widget-sidber-contact-box">
                                        <div className="widget-sidber-contact">
                                            <img src="assets/images/inner-images/sidber-cont-icon.png" alt="" />
                                        </div>
                                        <p className="widget-sidber-contact-text">Call Us Anytime</p>
                                        <h3 className="widget-sidber-contact-number">+123 (4567) 890</h3>
                                        <span className="widget-sidber-contact-gmail"><i className="bi bi-envelope-fill"></i>example@gmail.com</span>
                                        <div className="widget-sidber-contact-btn">
                                            <Link to="/contact">Contact Us <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek service details area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start solutek address Area */}
            {/*==================================================*/}
            <div className="address-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box">
                                <div className="address-icon">
                                    <img src="assets/images/address1.png" alt="address1" />
                                </div>
                                <div className="address-title">
                                    <h3>Elevating Customer Experience.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="address-box2">
                                <div className="address-icon">
                                    <img src="assets/images/address2.png" alt="address2" />
                                </div>
                                <div className="solutek-btn">
                                    <Link to="/contact">+44 920 090 505
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek address Area */}
            {/*==================================================*/}
        </>
    );
}

export default Services;