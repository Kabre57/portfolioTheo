import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Breadcumb Area */}
            {/*==================================================*/}
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcumb-content">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>&gt;</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Breadcumb Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Contact Style Three*/}
            {/*==================================================*/}
            <div className="contact-area style-three inner">
                <div className="container">
                    <div className="row add-white-bg align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="single-contact-box">
                                <div className="contact-contetn">
                                    <h4>Write to Us Anytime</h4>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input-box">
                                                <input type="text" name="name" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input-box">
                                                <input type="email" name="Email" placeholder="Enter E-Mail" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input-box">
                                                <input type="text" name="Phone" placeholder="Phone Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input-box">
                                                <select name="place" id="place">
                                                    <option value="">Subject</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Design">Design</option>
                                                    <option value="Marketing">Marketing</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input-box">
                                                <textarea name="massage" id="massage" placeholder="Write Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="massage-sent-button">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-contact-info-box">
                                <div className="info-content">
                                    <h4>Don’t Forget to Contact Us</h4>
                                </div>
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <p>Call Us</p>
                                        <h4>+980 123 (4567) 890</h4>
                                    </div>
                                </div>
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-envelope-open-fill"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <p>Send E-Mail</p>
                                        <h4>example@gmail.com</h4>
                                    </div>
                                </div>
                                <div className="contact-info-box">
                                    <div className="contact-info-icon">
                                        <i className="bi bi-alarm"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <p>Office Hours</p>
                                        <h4>8.00 AM to 5.00 PM</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Contact Area Style Three*/}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Google map Area Style Two*/}
            {/*==================================================*/}
            <div className="google-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.325396876019!2d90.36098897592879!3d23.80702538659894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c105f81691d5%3A0x4aa9bd97de918f7b!2sSher-E-Bangla%20National%20Cricket%20Stadium!5e0!3m2!1sen!2sbd!4v1715077171980!5m2!1sen!2sbd" 
                                title="Google Map" 
                                style={{ border: 0, width: '100%', height: '450px' }} 
                                allowFullScreen 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Google map Area Style Two*/}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Brand Area Style Two*/}
            {/*==================================================*/}
            <div className="brand-area style-two">
                <div className="container">
                    <div className="row">
                        <div className="brand-list-1 owl-carousel">
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-1.png" alt="Brand 1" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-2.png" alt="Brand 2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-3.png" alt="Brand 3" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-4.png" alt="Brand 4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="single-brand-box">
                                    <div className="brand-thumb">
                                        <img src="assets/images/home-2/brand-5.png" alt="Brand 5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Brand Area Style Two*/}
            {/*==================================================*/}
        </>
    );
}

export default Contact;