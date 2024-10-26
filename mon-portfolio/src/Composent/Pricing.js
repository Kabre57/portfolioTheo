import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
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
                                <h4>Our Pricing</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>&gt;</li>
                                    <li>Our Pricing</li>
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
      {/* Start Toptech Pricing Area Inner Style*/}
      {/*==================================================*/}
      <div className="pricing-area inner-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title left inner-style">
                <h1>Choose Your Best Plan</h1>
                <p>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your services.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="tab-button">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="true">Billed Monthly</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly" aria-selected="false">Billed Yearly</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab" tabIndex={0}>
              <div className="row">
                {/* Pricing Boxes */}
                {[...Array(3)].map((_, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="single-pricing-box">
                      <div className="pricing-head">
                        <div className="pricing-head-content">
                          <h1>{['Standard', 'Professional', 'Ultimate'][index]}</h1>
                          <p>{['Simple Plan', 'Small Team', 'Large Plan'][index]}</p>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <div className="pricing-rate">
                          <h1>${[29, 50, 32][index]} <del> $ 35 /Monthly</del></h1>
                        </div>
                        <div className="pricing-list">
                          <ul>
                            <li>Email & Communication Services</li>
                            <li>Implementing measures encryption.</li>
                            <li>Standard Security Measures</li>
                            <li>Network and security management</li>
                            <li>Helps understand past performance.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pricing-button">
                        <Link to="#"> Get Started</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Yearly Pricing Tab */}
            <div className="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab" tabIndex={0}>
              <div className="row">
                {/* Yearly Pricing Boxes */}
                {[...Array(3)].map((_, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="single-pricing-box">
                      <div className="pricing-head">
                        <div className="pricing-head-content">
                          <h1>{['Standard', 'Professional', 'Ultimate'][index]}</h1>
                          <p>{['Simple Plan', 'Small Team', 'Large Plan'][index]}</p>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <div className="pricing-rate">
                          <h1>${[10, 60, 100][index]} <del> $ 35 /Yearly</del></h1>
                        </div>
                        <div className="pricing-list">
                          <ul>
                            <li>Email & Communication Services</li>
                            <li>Implementing measures encryption.</li>
                            <li>Standard Security Measures</li>
                            <li>Network and security management</li>
                            <li>Helps understand past performance.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pricing-button">
                        <Link to="#"> Get Started</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pricing-textar-text">
                <p>SAVE 20%! Save on an annual plan with promo code: TOPTECH 20 *</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Pricing Area Inner Style */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Video Area Style Two*/}
      {/*==================================================*/}
      <div className="video-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title center style-two">
                <h4>Watch Now</h4>
                <h1>Our Best Working Process System</h1>
                <h1>with Team Expert Leaders</h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="video-button">
                <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://www.youtube.com/watch?v=e6R6VsgD8yQ&amp;t=179s">
                  <i className="bi bi-play-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Video Area Style Two*/}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Contact Info Area Style Two*/}
      {/*==================================================*/}
      <div className="contact-info-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Call us Any time</h4>
                  <p>+123 (4567) 890</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="contact-info-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Send E-Mail</h4>
                  <p>info@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="contact-info-icon">
                  <i className="bi bi-alarm"></i>
                </div>
                <div className="contact-info-content">
                  <h4>Opening Hours</h4>
                  <p>Mon - Fri (8.00 - 5.00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Contact Info Area Style Two*/}
      {/*==================================================*/}
    </>
  );
}

export default Pricing;