import React from 'react';
import PortfolioTeamTestimonialsBlog from './PortfolioTeamTestimonialsBlog';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Hero Area Style One */}
            {/*==================================================*/}
            <div className="hero-area style-one d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-content">
                                <h4>Welcome To Toptech</h4>
                                <h1>Top IT Solutions Agency</h1>
                                <h1>In The World</h1>
                                <p>And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business.</p>
                            </div>
                            <div className="hero-button style-one">
                                <Link to="/Mission">How It Works</Link>
                                <Link className="button-two" to="/services">IT Services <i className="flaticon flaticon-computer"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Hero Area Style One */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Feature Area Style One */}
            {/*==================================================*/}
            <div className="feature-area style-one">
                <div className="container">
                    <div className="row margin-top">
                        {/** Repeat this section for each feature **/}
                        {['Managed IT Services', 'Cloud Services', 'Machine Learning', 'Data Security'].map((feature, index) => (
                            <div className="col-lg-4 col-md-6 col-xl-3" key={index}>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <div className="flip-box-thumb">
                                                <img src={`assets/images/home-1/feature-icon-${index + 1}.png`} alt="" />
                                            </div>
                                            <div className="flip-box-content">
                                                <h4>{feature}</h4>
                                                <p>Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.</p>
                                            </div>
                                            <div className="flip-box-button">
                                                <Link to="/service">Read More<i className="fa-solid fa-angles-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="flip-box-back">
                                            <div className="flip-box-thumb">
                                                <img src={`assets/images/home-1/feature-icon-${index + 1}.png`} alt="" />
                                            </div>
                                            <div className="flip-box-content">
                                                <h4>{feature}</h4>
                                                <p>Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.</p>
                                            </div>
                                            <div className="flip-box-button">
                                                <Link to="/service">Read More<i className="fa-solid fa-angles-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/** End of features section **/}
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Feature Area Style One */}
            {/*==================================================*/}
   
                    {/*==================================================*/}
                    {/* Start Toptech About Area Style One */}
                    {/*==================================================*/}
                    <div className="about-area style-one">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-thumb">
                                        <img src="assets/images/home-1/about-thumb.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-right">
                                        <div className="section-title left style-one">
                                            <h4>Who We Are</h4>
                                            <h1>Get Exclusive IT Solutions &</h1>
                                            <h1>Services With <span>TopTech</span></h1>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which is best for IT solution service and consulting for your business.</p>
                                        </div>
                                        <div className="about-icon-box">
                                            <div className="about-icon-thumb">
                                                <img src="assets/images/home-1/about-icon1.png" alt="" />
                                            </div>
                                            <div className="about-icon-box-content">
                                                <h4>Certified Company</h4>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin lorem awesome.</p>
                                            </div>
                                        </div>
                                        <div className="about-icon-box">
                                            <div className="about-icon-thumb">
                                                <img src="assets/images/home-1/about-icon2.png" alt="" />
                                            </div>
                                            <div className="about-icon-box-content">
                                                <h4>Internal Networking</h4>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin lorem awesome.</p>
                                            </div>
                                        </div>
                                        <div className="about-flex-box">
                                            <div className="toptech-button style-one">
                                                <Link to="about-1.html">About More<i className="bi bi-arrow-right-circle-fill"></i></Link>
                                            </div>
                                            <div className="about-author">
                                                <div className="about-author-thumb">
                                                    <img src="assets/images/home-1/about-author.jpg" alt="" />
                                                </div>
                                                <div className="about-author-content">
                                                    <h4>Kevin Martin</h4>
                                                    <p>CEO & Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-shape">
                                <img src="assets/images/home-1/about-shape.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/*==================================================*/}
                    {/* End Toptech About Area Style One */}
                    {/*==================================================*/}
        
                    {/*==================================================*/}
                    {/* Start Toptech Service Area Style One */}
                    {/*==================================================*/}
                    <div className="service-area style-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="section-title center style-one">
                                        <h4>Service We Provide</h4>
                                        <h1>All Professional We’re Offering Best &amp;</h1>
                                        <h1>IT Solutions & <span>Services</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {[
                                    { title: "Web Design", imgSrc: "assets/images/home-1/service-icon1.png" },
                                    { title: "Motion Design", imgSrc: "assets/images/home-1/service-icon2.png" },
                                    { title: "Digital Marketing", imgSrc: "assets/images/home-1/service-icon3.png" },
                                    { title: "Web Development", imgSrc: "assets/images/home-1/service-icon4.png" },
                                    { title: "App Development", imgSrc: "assets/images/home-1/service-icon5.png" },
                                    { title: "Creative Solution", imgSrc: "assets/images/home-1/service-icon6.png" }
                                ].map((service, index) => (
                                    <div className="col-lg-6 col-md-6 col-xl-4" key={index}>
                                        <div className="flip-box">
                                            <div className="flip-box-inner">
                                                <div className="flip-box-front">
                                                    <div className="flip-box-thumb">
                                                        <img src={service.imgSrc} alt="" />
                                                    </div>
                                                    <div className="flip-box-content">
                                                        <h4>{service.title}</h4>
                                                        <p>Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.</p>
                                                        <div className="flip-box-button">
                                                            <Link to="service.html">Read More<i className="fa-solid fa-angles-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flip-box-back">
                                                    <div className="flip-box-thumb">
                                                        <img src={service.imgSrc} alt="" />
                                                    </div>
                                                    <div className="flip-box-content">
                                                        <h4>{service.title}</h4>
                                                        <p>Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.</p>
                                                        <div className="flip-box-button">
                                                            <Link to="service.html">Read More<i className="fa-solid fa-angles-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*==================================================*/}
                    {/* End Toptech Service Area Style One */}
                    {/*==================================================*/}
                     {/*==================================================*/}
            {/* Start Toptech Work Process Area Style One */}
            {/*==================================================*/}
            <div className="work-process-area style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title center style-one">
                                <h4>Work Process</h4>
                                <h1>Working Process For <span>Technology</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { number: 1, title: "Select A Project", imgSrc: "assets/images/home-1/process-icon-1.png" },
                            { number: 2, title: "Project Analysis", imgSrc: "assets/images/home-1/process-icon-2.png" },
                            { number: 3, title: "Start Process", imgSrc: "assets/images/home-1/process-icon-3.png" },
                            { number: 4, title: "Deliver Result", imgSrc: "assets/images/home-1/process-icon-4.png" }
                        ].map((process) => (
                            <div className="col-lg-3 col-md-6" key={process.number}>
                                <div className="single-process-box before-transprant after-transprant">
                                    <div className="process-box-thumb">
                                        <img src={process.imgSrc} alt="" />
                                        <div className="process-number">
                                            <span>{process.number}</span>
                                        </div>
                                    </div>
                                    <div className="process-content">
                                        <h4>{process.title}</h4>
                                        <p>We have the technology and IT expertise to develop.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Work Process Area Style One */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Faqs Area Style One */}
            {/*==================================================*/}
            <div className="faqs-area style-one">
                <div className="container">
                    <div className="row add-faqs-bg align-items-center">
                        <div className="col-lg-6">
                            <div className="single-contact-box">
                                <div className="contact-content">
                                    <h4>Get Free Estimate</h4>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="single-input-box">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input-box">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input-box">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input-box">
                                                <textarea name="message" placeholder="Write Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input-box">
                                                <button type="submit">Free Consultancy</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 faqs-right">
                            <div className="section-title left style-one">
                                <h4>Work Process</h4>
                                <h1>Frequently Asked Any Kind</h1>
                                <h1>Of Questions</h1>
                            </div>
                            <div className="faqs-container">
                                {[
                                    { question: "What is Technology service?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom." },
                                    { question: "How To Buy A Product?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom." },
                                    { question: "How Work The Support Policy?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom." },
                                    { question: "How Can Send A Refund Request?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing awesom." }
                                ].map((faq, index) => (
                                    <div className="faq-singular" key={index}>
                                        <h2 className="faq-question">
                                            <img src="assets/images/home-1/question.png" alt="" />{`#${index + 1} ${faq.question}`}
                                        </h2>
                                        <div className="faq-answer">
                                            <div className="desc">{faq.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Faqs Area Style One */}
            {/*==================================================*/}
                      {/* Intégration du composant PortfolioTeamTestimonialsBlog */}
                      <PortfolioTeamTestimonialsBlog />
                </>
    );
}

export default Home;