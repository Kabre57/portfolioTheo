/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isSidebarVisible && (
        <>
          {/*==================================================*/}
          {/* Start Main Sidebar */}
          {/*==================================================*/}
          <div className="xs-sidebar-group info-group">
            <div className="xs-overlay xs-bg-black"></div>
            <div className="xs-sidebar-widget">
              <div className="sidebar-widget-container">
                {/* Widget button */}
                <div className="widget-heading">
                  <a
                    href="#"
                    className="close-side-widget"
                    onClick={toggleSidebar}
                  >
                    <i className="far fa-times-circle"></i>
                  </a>
                </div>
                <div className="sidebar-textwidget">
                  {/* Sidebar Info Content */}
                  <div className="sidebar-info-contents">
                    <div className="content-inner">
                      <div className="nav-logo">
                        <Link to="/">
                          <img src="assets/images/logo.png" alt="logo" />
                        </Link>
                      </div>
                      {/* Widget search */}
                      <div className="widget-search">
                        <div className="widget">
                          <form
                            action="https://formspree.io/f/myyleorq"
                            method="POST"
                          >
                            <input
                              id="search2"
                              type="text"
                              name="s"
                              placeholder="Search Product"
                              title="Search for:"
                              autoComplete="off"
                            />
                            <button type="submit" className="icon">
                              <i className="bi bi-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* Widget wrapper End */}
                      <div className="product-category">
                        {/* Widget title */}
                        <h3 className="widget-title">Product Categories</h3>
                        <ul className="list-style-one">
                          <li>
                            <Link to="shop-2.html">
                              IT Solutions<span>(5)</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-2.html">
                              Businesses<span>(6)</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-2.html">
                              IT Service<span>(4)</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-2.html">
                              UI/UX Design<span>(8)</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Recent Gallery */}
                      <div className="recent-gallery">
                        {/* Widget title */}
                        <h3 className="widget-title">Recent Post</h3>
                        <ul>
                          <li>
                            <div className="widget-gallery-thumb">
                              <Link to="#">
                                <img
                                  src="assets/images/inner/recent-post.png"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="widget-gallery-thumb">
                              <Link to="#">
                                <img
                                  src="assets/images/inner/recent-post2.png"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="widget-gallery-thumb">
                              <Link to="#">
                                <img
                                  src="assets/images/inner/recent-post3.png"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="widget-gallery-thumb">
                              <Link to="#">
                                <img
                                  src="assets/images/inner/recent-post4.png"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="widget-gallery-thumb">
                              <Link to="#">
                                <img
                                  src="assets/images/inner/recent-post3.png"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="widget-gallery-thumb">
                              <Link to="#">
                                <img
                                  src="assets/images/inner/recent-post2.png"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Widget title */}
                      <h3 className="widget-title">Tags</h3>
                      <div className="sidebar-tag-item">
                        <ul>
                          <li>
                            <Link to="#">Developer</Link>
                          </li>
                          <li>
                            <Link to="#">UI Designer</Link>
                          </li>
                          <li>
                            <Link to="#">Marketing</Link>
                          </li>
                          <li>
                            <Link to="#">Business</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Social icon */}
                      <div className="category-icon">
                        {/* Widget title */}
                        <h3 className="widget-title">Social List</h3>
                        <div className="follow-company-icon style-two">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-pinterest"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-google"></i>
                          </Link>
                        </div>
                      </div>
                      {/* Icon End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*==================================================*/}
          {/* End Main Sidebar */}
          {/*==================================================*/}
        </>
      )}
      {/*==================================================*/}
      {/* Start solutek hero Area style-three*/}
      {/*==================================================*/}
      <div className="hero-active owl-carousel">
        <div className="hero-area style-three d-flex align-items-center">
          <div className="container">
            <div className="row hero align-items-center">
              <div className="col-lg-5 col-md-7">
                <div className="hero-contant">
                  <h6>BEST IT SOLUTION PROVIDER</h6>
                  <h1>Elevate Your</h1>
                  <span>Business</span>
                  <h1> with IT Excellence</h1>
                  <p>
                    We have been operating for over a decade providing
                    exceptional services.
                  </p>
                  <div className="solutek-btn">
                    <Link to="about-us.html" className="btn-2">
                      Get Started
                    </Link>
                  </div>
                  <div className="hero-btn-3">
                    <div className="hero-btn-profile">
                      <img src="assets/images/home-3/hero-pro.png" alt="img" />
                      <Link to="about-us.html">
                        <span>MEET</span> Our Experts
                      </Link>
                    </div>
                  </div>
                  <div className="hero-left-shape">
                    <img src="assets/images/home-3/hero-geo.png" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-5">
                <div className="hero-thumb-3">
                  <div className="hero-img">
                    <img src="assets/images/home-3/hero-thum.png" alt="thumb" />
                  </div>
                  <div className="hero-thumb-shape">
                    <img src="assets/images/home-3/hero-rs.png" alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Répéter le bloc précédent si nécessaire */}
      </div>
      {/*==================================================*/}
      {/* End solutek hero Area style-three */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start solutek our service section */}
      {/*==================================================*/}
      <div className="our-service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="section-sub-title">our services</h6>
                <h1 className="section-main-title2">exclusive IT Services</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="single-service-box">
                  <div className="service-icon">
                    <img src="assets/images/home-3/ser-icon.png" alt="icon" />
                  </div>
                  <div className="service-box-content">
                    <h4 className="service-title">
                      <Link to="service-details.html">Web Development</Link>
                    </h4>
                    <p className="service-desc">
                      Success professional development our solutions maximize
                      creative services.
                    </p>
                  </div>
                </div>
                <div className="service-thumb">
                  <img src="assets/images/home-3/ser-thumb.png" alt="thumb" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="single-service-box">
                  <div className="service-icon">
                    <img src="assets/images/home-3/ser-icon2.png" alt="icon" />
                  </div>
                  <div className="service-box-content">
                    <h4 className="service-title">
                      <Link to="service-details.html">Digital Marketing</Link>
                    </h4>
                    <p className="service-desc">
                      Success professional development our solutions maximize
                      creative services.
                    </p>
                  </div>
                </div>
                <div className="service-thumb">
                  <img src="assets/images/home-3/ser-thumb2.png" alt="thumb" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="single-service-box">
                  <div className="service-icon">
                    <img src="assets/images/home-3/ser-icon3.png" alt="icon" />
                  </div>
                  <div className="service-box-content">
                    <h4 className="service-title">
                      <Link to="service-details.html">App Development</Link>
                    </h4>
                    <p className="service-desc">
                      Success professional development our solutions maximize
                      creative services.
                    </p>
                  </div>
                </div>
                <div className="service-thumb">
                  <img src="assets/images/home-3/ser-thumb3.png" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek our service section */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start solutek about section */}
      {/*==================================================*/}
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-thumb">
                <img src="assets/images/home-3/about-thu3.png" alt="thumb" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-contact">
                <div className="section-title text-left">
                  <h6 className="section-sub-title">about company</h6>
                  <h1 className="section-main-title">
                    Customized Solutions to
                  </h1>
                  <h1 className="section-main-title">
                    Meet Client <span>Needs.</span>
                  </h1>
                  <p className="section-title-descr">
                    Solution is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="about-box-item">
                  <div className="about-box d-flex align-items-center">
                    <div className="about-icon">
                      <img src="assets/images/about4.png" alt="about4" />
                    </div>
                    <div className="about-title">
                      <h3>Cloud Based Solution</h3>
                    </div>
                  </div>
                  <div className="about-box d-flex align-items-center">
                    <div className="about-icon">
                      <img src="assets/images/about4.png" alt="about4" />
                    </div>
                    <div className="about-title">
                      <h3>Best Services</h3>
                    </div>
                  </div>
                </div>
                <div className="about-item-list">
                  <ul>
                    <li>Sed non odio non elit porttitor tincidunt.</li>
                    <li>Sed non odio non elit porttitor tincidunt donec.</li>
                  </ul>
                </div>
                <div className="solutek-btn">
                  <Link to="about-us.html">
                    EXPLORE MORE
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
      {/* End solutek about section */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start solutek counter area */}
      {/*==================================================*/}
      <div className="counter-area">
        <div className="container">
          <div className="row counter-item">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-single-box">
                <div className="counter-content">
                  <h4 className="counter">120</h4>
                  <span>k</span>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-single-box">
                <div className="counter-content">
                  <h4 className="counter">700</h4>
                  <span>k</span>
                  <p>Project Completed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-single-box">
                <div className="counter-content">
                  <h4 className="counter">100</h4>
                  <span>%</span>
                  <p>Result Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-single-box">
                <div className="counter-content">
                  <h4 className="counter">280</h4>
                  <span>+</span>
                  <p>EXPERT MEMBERS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-thumb">
            <img src="assets/images/home-3/counter-thu.png" alt="thumb" />
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek counter area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start solutek case studies area */}
      {/*==================================================*/}
      <div className="case-studies-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="section-sub-title">case studies</h6>
                <h1 className="section-main-title2">Our latest Case Studies</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="case-studies-box">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-case-studies-box">
                    <div className="case-studies-content">
                      <h4>
                        <Link to="project-details.html">
                          Travel & Tour Mobile Apps Design
                        </Link>
                      </h4>
                      <h5>Mobile App Design</h5>
                    </div>
                    <div className="case-studies-btn">
                      <Link to="project-details.html">view more details</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="case-studies-thumb">
                    <img
                      src="assets/images/home-3/case-studies.png"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="case-studies-single-box">
                <div className="case-studies-thumb">
                  <img
                    src="assets/images/home-3/case-studies2.png"
                    alt="thumb"
                  />
                  <div className="case-studie-content">
                    <h3>
                      <Link to="project-details.html">
                        Professional Website Design
                      </Link>
                    </h3>
                    <h6>Web Design</h6>
                  </div>
                  <div className="case-studies-icon">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="case-studies-single-box">
                <div className="case-studies-thumb">
                  <img
                    src="assets/images/home-3/case-studies3.png"
                    alt="thumb"
                  />
                  <div className="case-studie-content">
                    <h3>
                      <Link to="project-details.html">
                        E-commerce Platform Development
                      </Link>
                    </h3>
                    <h6>E-commerce</h6>
                  </div>
                  <div className="case-studies-icon">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek case studies area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start solutek testimonial Area style-four*/}
      {/*==================================================*/}
      <div className="testimonial-area style-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title text-left">
                <h6 className="section-sub-title">client review</h6>
                <h1 className="section-main-title">Customized Solutions to</h1>
                <h1 className="section-main-title">
                  Meet Client <span>Needs.</span>
                </h1>
                <p>
                  Solution is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.
                </p>
              </div>
              <div className="testi-thumb">
                <img src="assets/images/home-3/test-thumb.png" alt="thumb" />
                <div className="testi-autor">
                  <h4 className="testi-user-name">
                    Brandon A. Vela <span>UI Designer</span>
                  </h4>
                </div>
                <div className="slide-shape">
                  <div className="slide-shape-inner">
                    <img
                      src="assets/images/home-3/slide-shape.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <section className="splide">
                  <div className="splide__track">
                    <div className="splide__list">
                      {/* Slide 1 */}
                      <div className="splide__slide">
                        <div className="col-lg-12">
                          <div className="testi-box">
                            <div className="testimonial-single-box">
                              <div className="testi-user-rating">
                                <ul className="testi-rating">
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                </ul>
                              </div>
                              <div className="testi-text">
                                <p className="testi-desc">
                                  Proactively whiteboard one-to-one total
                                  linkage for multimedia based ideas
                                  synergistically evolve.
                                </p>
                              </div>
                              <div className="testi-review-user">
                                <div className="testi-quote-icon">
                                  <img
                                    src="assets/images/home-3/testi-quote.png"
                                    alt="quote"
                                  />
                                </div>
                                <h3>
                                  From <span>200+</span> reviews
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 2 */}
                      <div className="splide__slide">
                        <div className="col-lg-12">
                          <div className="testi-box">
                            <div className="testimonial-single-box">
                              <div className="testi-user-rating">
                                <ul className="testi-rating">
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                </ul>
                              </div>
                              <div className="testi-text">
                                <p className="testi-desc">
                                  Proactively whiteboard one-to-one total
                                  linkage for multimedia based ideas
                                  synergistically evolve.
                                </p>
                              </div>
                              <div className="testi-review-user">
                                <div className="testi-quote-icon">
                                  <img
                                    src="assets/images/home-3/testi-quote.png"
                                    alt="quote"
                                  />
                                </div>
                                <h3>
                                  From <span>200+</span> reviews
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 3 */}
                      <div className="splide__slide">
                        <div className="col-lg-12">
                          <div className="testi-box">
                            <div className="testimonial-single-box">
                              <div className="testi-user-rating">
                                <ul className="testi-rating">
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill"></i>
                                  </li>
                                </ul>
                              </div>
                              <div className="testi-text">
                                <p className="testi-desc">
                                  Proactively whiteboard one-to-one total
                                  linkage for multimedia based ideas
                                  synergistically evolve.
                                </p>
                              </div>
                              <div className="testi-review-user">
                                <div className="testi-quote-icon">
                                  <img
                                    src="assets/images/home-3/testi-quote.png"
                                    alt="quote"
                                  />
                                </div>
                                <h3>
                                  From <span>200+</span> reviews
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek testimonial Area style-four*/}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start solutek working process area */}
      {/*==================================================*/}
      <div className="working-proces-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="section-sub-title">work process</h6>
                <h1 className="section-main-title2">WORKS IN 3 EASY STEPS</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="working-process-box before-transprent after-transprent">
                <div className="process-thumb">
                  <img src="assets/images/home-3/process-1.png" alt="img" />
                  <div className="process-number">
                    <span>01</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>PLAN AND RESEARCH</h4>
                  <p>
                    Solution is a long established process that helps in
                    planning and researching effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="working-process-box after-transprent">
                <div className="process-thumb">
                  <img src="assets/images/home-3/process-2.png" alt="img" />
                  <div className="process-number">
                    <span>02</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>DESIGN & PROTOTYPING</h4>
                  <p>
                    This step involves creating designs and prototypes that meet
                    client needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="working-process-box before-transprent">
                <div className="process-thumb">
                  <img src="assets/images/home-3/process-3.png" alt="img" />
                  <div className="process-number">
                    <span>03</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>FINAL SOLUTION</h4>
                  <p>
                    We deliver the final solution that meets all requirements
                    and expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="working-process-bottom">
                <p>
                  We're Delivering The Best Customer Experience{" "}
                  <span>since 2016</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek working process area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start solutek FAQ Area style-two */}
      {/*==================================================*/}
      <div className="faq-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title text-left">
                <h6 className="section-sub-title">client review</h6>
                <h1 className="section-main-title">
                  Most Common <span>Questions?</span>
                </h1>
              </div>
              <div className="tab_container">
                <div id="tab1" className="tab_content">
                  <ul className="accordion">
                    <li>
                      <a>
                        <span>What Medical Services Do You Provide?</span>
                      </a>
                      <p style={{ display: "none" }}>
                        We provide a wide range of medical services tailored to
                        client needs.
                      </p>
                    </li>
                    <li>
                      <a>
                        <span>What is your customer geography?</span>
                      </a>
                      <p>
                        Our services cater to various geographical locations
                        with a focus on accessibility.
                      </p>
                    </li>
                    <li>
                      <a>
                        <span>What are the main industries we serve?</span>
                      </a>
                      <p>
                        We serve multiple industries, ensuring innovative
                        solutions for every sector.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-thumb">
                <img src="assets/images/home-3/faq-thumb.png" alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek FAQ Area style-two */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start solutek blog Area style-two */}
      {/*==================================================*/}
      <div className="blog-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="section-sub-title">latest blog</h6>
                <h1 className="section-main-title2">Explore Blogs & News</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/home-two/blog-thu.png" alt="thumb" />
                  <div className="blog-meta-top">
                    <Link to="blog-details.html">UI/UX DESIGNER</Link>
                  </div>
                </div>
                <div className="blog-box-content">
                  <div className="meta-blog">
                    <Link to="blog-details.html">
                      <span>
                        <i className="far fa-user"></i>HOSSAIN ASIF
                      </span>
                    </Link>
                    <p>
                      <span>
                        <img
                          src="assets/images/home-two/mesage-icon.png"
                          alt="icon"
                        />
                      </span>
                      COMMENTS
                    </p>
                  </div>
                  <h3>
                    <Link to="blog-details.html">
                      Regional Manager Limited Time Management
                    </Link>
                  </h3>
                  <div className="blog-button">
                    <Link className="btn-2" to="blog.html">
                      read post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/home-two/blog-thu2.png" alt="thumb" />
                  <div className="blog-meta-top">
                    <Link to="blog-details.html">WEB DEVELOPER</Link>
                  </div>
                </div>
                <div className="blog-box-content">
                  <div className="meta-blog">
                    <Link to="blog-details.html">
                      <span>
                        <i className="far fa-user"></i>HOSSAIN ASIF
                      </span>
                    </Link>
                    <p>
                      <span>
                        <img
                          src="assets/images/home-two/mesage-icon.png"
                          alt="icon"
                        />
                      </span>
                      COMMENTS
                    </p>
                  </div>
                  <h3>
                    <Link to="blog-details.html">
                      The Complete Guide to Tekone App Development
                    </Link>
                  </h3>
                  <div className="blog-button">
                    <Link className="btn-2" to="blog.html">
                      read post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/home-two/blog-thu3.png" alt="thumb" />
                  <div className="blog-meta-top">
                    <Link to="blog-details.html">WEB DESIGNER</Link>
                  </div>
                </div>
                <div className="blog-box-content">
                  <div className="meta-blog">
                    <Link to="blog-details.html">
                      <span>
                        <i className="far fa-user"></i>HOSSAIN ASIF
                      </span>
                    </Link>
                    <p>
                      <span>
                        <img
                          src="assets/images/home-two/mesage-icon.png"
                          alt="icon"
                        />
                      </span>
                      COMMENTS
                    </p>
                  </div>
                  <h3>
                    <Link to="blog-details.html">
                      Easy and Most Powerful Server and Platform
                    </Link>
                  </h3>
                  <div className="blog-button">
                    <Link className="btn-2" to="blog.html">
                      read post
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End solutek blog Area style-two */}
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
                  <Link to="contact.html">
                    +44 920 090 505
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

export default Home;
