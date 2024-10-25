import React from "react";
import { Link } from "react-router-dom";

function PrivacyTerms() {
  return (
    <>
      {/*==================================================*/}
      {/* Start Toptech Breadcrumb Area */}
      {/*==================================================*/}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h4>Privacy & Terms</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Privacy & Terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Breadcrumb Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Images Inner Style One */}
      {/*==================================================*/}
      <div className="images-inner-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <h2>Privacy Policy</h2>
                <p>
                  This privacy policy outlines how we handle your personal
                  information. Your privacy is important to us, and we are
                  committed to protecting your information.
                </p>
                <h3>Information We Collect</h3>
                <p>
                  We may collect personal information such as your name, email
                  address, and phone number when you use our services.
                </p>
                <h3>How We Use Your Information</h3>
                <p>
                  Your information helps us provide better services and improve
                  user experience. We may use your information for marketing
                  purposes with your consent.
                </p>
                <h3>Data Security</h3>
                <p>
                  We implement various security measures to protect your personal
                  information from unauthorized access.
                </p>
                <h3>Changes to This Policy</h3>
                <p>
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Images Inner Style One */}
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
    </>
  );
}

export default PrivacyTerms;