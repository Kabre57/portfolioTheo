import React from "react";
import { Link } from "react-router-dom";

function Faqs() {
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
                <h4>Faqs</h4>
                <ul>
                  <li><Link to="index.html">Home</Link></li>
                  <li>&gt;</li>
                  <li>Faqs </li>
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
      {/* Start Toptech Faqs Area Inner Style */}
      {/*==================================================*/}
      <div className="faqs-area inner-style">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title left inner-style">
                <h4>Our Help & Faq Us</h4>
                <h1>Navigating FAQs with Speed</h1>
                <h1>and Precision</h1>
                <p>Business tailored IT design, management & support services needs to be business agency elit, sed do eiusmod tempor proved.</p>
              </div>
              <div className="faqs-thumb">
                <img src="assets/images/inner-images/faqs-1.jpg" alt="Beau paysage" />
              </div>
              <div className="faqs-thumb">
                <img src="assets/images/inner-images/faqs-2.jpg" alt="Vue d'ensemble" />
              </div>
              <div className="faqs-icon-box">
                <div className="faqs-icon-thumb">
                  <img src="assets/images/inner-images/faqs-icon-s.png" alt="Icône FAQ" />
                </div>
                <div className="faqs-icon-content">
                  <p>Business tailored IT design, management & support services business agency elit sed do eiusmod tempor proved business task state of the art infrastructures for you.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faqs-container">
                {/* FAQ Items */}
                {["Project Horizon Redevelopment", "What is your professional passion?", "Service Horizon Business low", "Business Solution Redevelopment", "Do you have any custom services?"].map((question, index) => (
                  <div className="faq-singular" key={index}>
                    <h2 className="faq-question">
                      <img src="assets/images/inner-images/faqs-icon1.png" alt="Icône FAQ" />
                      {question}
                    </h2>
                    <div className="faq-answer">
                      <div className="desc">
                        Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Faqs Area Inner Style */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Subscribe Area Style Three */}
      {/*==================================================*/}
      <div className="subscribe-area style-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title left inner-style">
                <h1>Get Latest Update from Toptech</h1>
                <h1>Stay Connected with Us</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="#">
                <div className="single-subscribe-box">
                  <input type="text" name="Email" placeholder="Enter your Email" required />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Subscribe Area Style Three */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Process Area Style Three */}
      {/*==================================================*/}
      <div className="process-area style-three inner">
        <div className="container">
          <div className="row add-bg">
            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="process-icon">
                  <img src="assets/images/home-3/process-1.png" alt="Processus 1" />
                </div>
                <div className="process-content">
                  <h4>Account Register</h4>
                  <p>Opportunities before extensible market Dramatically pursue us.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="process-icon">
                  <img src="assets/images/home-3/process-2.png" alt="Processus 2" />
                </div>
                <div className="process-content">
                  <h4>Add New Card</h4>
                  <p>Opportunities before extensible market Dramatically pursue us.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process-box">
                <div className="process-icon">
                  <img src="assets/images/home-3/process-3.png" alt="Processus 3" />
                </div>
                <div className="process-content">
                  <h4>Verified Account</h4>
                  <p>Opportunities before extensible market Dramatically pursue us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Process Area Style Three */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Brand Area Style Two */}
      {/*==================================================*/}
      <div className="brand-area style-two">
        <div className="container">
          <div className="row">
            <div className="brand-list-1 owl-carousel">
              {Array.from({ length: 5 }).map((_, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="single-brand-box">
                    <div className="brand-thumb">
                      <img src={`assets/images/home-2/brand-${index + 1}.png`} alt={`Marque ${index + 1}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Brand Area Style Two */}
      {/*==================================================*/}
    </>
  );
}

export default Faqs;