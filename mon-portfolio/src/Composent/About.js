import React from 'react';
import { Link } from 'react-router-dom';


function About() {
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
                                <h4>About Us</h4>
                                <ul className="breadcumb-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="list-arrow">&lt;</li>
                                    <li>About Us</li>
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
            {/* Start solutek about us Area */}
            {/*==================================================*/}
            <div className="about-us-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">SOLUTEK COMPANY</h5>
                                <h1 className="section-main-title">We Can Clients With The</h1>
                                <h1 className="section-main-title">About <span>Solution.</span></h1>
                                <p className="section-title-descr">
                                    Monotonectally repurpose maintainable infrastruct whereas solutek in
                                    fermentum quis tempo sapien maximus design.
                                </p>
                            </div>
                            <div className="about-us-content">
                                <div className="about-us-list">
                                    <ul>
                                        <li><span>Best IT Solutions & Service</span></li>
                                        <li><span>24 Hour's Customer Service</span></li>
                                    </ul>
                                </div>
                                <div className="solutek-btn">
                                    <Link to="/about-us">EXPLORE MORE
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="single-counter-box">
                                        <div className="counter-icon">
                                            <img src="assets/images/inner/counter-icon.png" alt="icon" />
                                        </div>
                                        <div className="counter-content">
                                            <h4 className="counter">826</h4>
                                            <span>+</span>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-us-thumb">
                                <div className="about-us-img">
                                    <img src="assets/images/inner/about-us-thu.png" alt="thumb" />
                                </div>
                                <div className="about-us-video-icon">
                                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://www.youtube.com/watch?v=Wx48y_fOfiY">
                                        <i className="bi bi-play"></i><span>WATCH VIDEO</span>
                                    </a>
                                </div>
                                <div className="about-us-shape">
                                    <img src="assets/images/inner/us-shape.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about2-us-shape">
                        <img src="assets/images/inner/about-us-sh.png" alt="shape" />
                    </div>
                    <div className="about-us-shape2">
                        <img src="assets/images/inner/about-us-she.png" alt="shape" />
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek about us Area */}
            {/*==================================================*/}


{/*==================================================*/}
            {/* Start solutek project Area style-two */}
            {/*==================================================*/}
            <div className="project-area style-two">
                <div className="container-fluid">
                    <div className="row project align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">SOLUTEK PROJECT</h5>
                                <h1 className="section-main-title">Explore Our Recent <span>Projects.</span></h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-right">
                                <div className="solutek-btn">
                                    <Link to="/project-details">VIEW PROJECT DETAIL
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row carousel">
                        <div className="project_list owl-carousel">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <div className="col-lg-12 col-md-12" key={index}>
                                    <div className="project-single-box">
                                        <div className="project-thumb">
                                            <img src={`assets/images/project${index + 1}.png`} alt={`project${index + 1}`} />
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">
                                                <Link to="/project-details">{`Project ${index % 2 === 0 ? 'for Marketing' : 'Digital Product Design'}`}</Link>
                                            </h3>
                                            <p className="project-text">Software</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek project Area style-two */}
            {/*==================================================*/}

 {/*==================================================*/}
            {/* Start solutek-brand Area */}
            {/*==================================================*/}
            <div className="brand-area">
                <div className="container">
                    <div className="row">
                        <div className="brand_list owl-carousel">
                            {[...Array(5)].map((_, index) => (
                                <div className="col-lg-12" key={index}>
                                    <div className="brand-box">
                                        <div className="brand-thumb">
                                            <img src={`assets/images/brand-img${index}.png`} alt="brand img" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek-brand Area */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start solutek blog Area */}
            {/*==================================================*/}
            <div className="blog-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title text-left">
                                <h5 className="section-sub-title">OUR LATEST BLOG</h5>
                                <h1 className="section-main-title">Exploring Its Potential in</h1>
                                <h1 className="section-main-title">Various <span>Industries.</span></h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-right">
                                <div className="solutek-btn">
                                    <Link to="/blog-grid">VIEW all post
                                        <div className="solutek-hover-btn hover-bx"></div>
                                        <div className="solutek-hover-btn hover-bx2"></div>
                                        <div className="solutek-hover-btn hover-bx3"></div>
                                        <div className="solutek-hover-btn hover-bx4"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="blog-singele-box">
                                <div className="blog-thumb">
                                    <img src="assets/images/blog1.png" alt="blog1" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-date">
                                        <h4><i className="bi bi-calendar2-check"></i>20 June 2024 <span><i className="bi bi-chat-left-text"></i>Comment-05</span></h4>
                                    </div>
                                    <h3 className="blog-title"><Link to="/blog-details">Leveraging Descriptive Solutions for Business Growth.</Link></h3>
                                    <p className="blog-tex">Appropriatel promote enterprise-wide vortals through information without equity best revolutionizing</p>
                                    <div className="blog-btn">
                                        <Link to="/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            {[2, 3].map((num) => (
                                <div className="blog-singele-box-tow" key={num}>
                                    <div className="blog-thumb-tow">
                                        <img src={`assets/images/blog${num}.png`} alt={`blog${num}`} />
                                    </div>
                                    <div className="blog-content-tow">
                                        <div className="blog-date-tow">
                                            <h4><i className="bi bi-calendar2-check"></i>20 June 2024 <span><i className="bi bi-chat-left-text"></i>Comment-05</span></h4>
                                        </div>
                                        <h3 className="blog-title-two"><Link to="/blog-details">How to Create Modern Website For Your Business..</Link></h3>
                                        <p className="blog-tex-tow">Appropriatel promote enterprise-wide through information without best revolutionizing</p>
                                        <div className="blog-btn-tow">
                                            <Link to="/blog-details">READ MORE<i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End solutek blog Area */}
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

export default About;