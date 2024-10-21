import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
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
                                <h4>Contact</h4>
                                <ul className="breadcumb-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="list-arrow">&lt;</li>
                                    <li>Contact</li>
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
            {/* Start solutek contact Area */}
            {/*==================================================*/}
            <div className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">CONTACT US</h5>
                                <h1 className="section-main-title">Make an Online Appointment Booking</h1>
                                <h1 className="section-main-title">For Business Planning.</h1>
                            </div>
                            <div className="contact_form_box">
                                <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="text" name="name" placeholder="Your Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="email" name="email" placeholder="Your E-Mail *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="text" name="subject" placeholder="Subject *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_box">
                                                <input type="text" name="phone" placeholder="Phone *" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_box">
                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
                                            </div>
                                            <div className="quote_button">
                                                <button className="btn" type="submit">SEND NOW <i className="bi bi-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div id="status" className="error"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-box">
                                <div className="contact-video-icon">    
                                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://www.youtube.com/watch?v=Wx48y_fOfiY">Play</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* end solutek contact Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start solutek google map area*/}
            {/*==================================================*/}
            <div className="google-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.55841644036047!2d-4.083996682340314!3d5.367565892912941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c01198e5fe29%3A0x9f2cc8f5053c3c2d!2sSAPLED!5e1!3m2!1sfr!2sci!4v1729512468494!5m2!1sfr!2sci" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/*End solutek google map area*/}
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
                                    <a href="tel:+44920090505">+44 920 090 505
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* end solutek address Area */}
            {/*==================================================*/}
        </>
    );
}

export default Contact;