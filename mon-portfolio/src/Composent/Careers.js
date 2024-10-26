import React from "react";
import { Link } from "react-router-dom";

function Careers() {
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
                                <h4>Careers</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>&gt;</li>
                                    <li>Careers</li>
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
      {/* Start Toptech Careers Area Inner Style */}
      {/*==================================================*/}
      <div className="careers-area inner-style">
        <div className="container">
          <div className="row align-items-center title">
            <div className="col-lg-6">
              <div className="careers-content">
                <h4>Inspire and Get Inspired by <Link to="#">Professional</Link> Experts</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="careers-desc">
                <p>Our platform is tailor-made for developers, providing a powerful and <Link to="#">easy-to-use</Link> solution. With our tools, you can streamline your process.</p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {[
            { title: "UI & Web Developer", location: "New York" },
            { title: "App Developer", location: "Bangladesh" },
            { title: "Platform Support Specialist", location: "New York" },
          ].map((job, index) => (
            <div className="row align-items-center add-border" key={index}>
              <div className="col-lg-4">
                <div className="job-item">
                  <div className="job-item-content">
                    <span>Full Time</span>
                    <span className="location">{job.location}</span>
                    <h4>{job.title}</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="job-desc">
                  <p>The process of creating and maintaining websites. HTML, CSS, JavaScript, management systems, creating layouts and designs, simply drag, drop and customize.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="job-apply-button">
                  <Link to="#">Apply Now</Link>
                </div>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="col-lg-12">
              <div className="job-requirements">
                <div className="job-requirements-content">
                  <h4>Job Requirements</h4>
                  <p>A job responsibility could be a description of your duties in a very explicit position. You will be able to use it to point your qualifications when applying for a new job. Job responsibility summaries include data concerning roles, activities, and tasks that relate to fulfilling job requirements, like writing, selling, decision-making, and planning.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="assets/images/inner-images/careers-icon-1.png" alt="PHP Programming" />
                </div>
                <div className="feature-content">
                  <h4>PHP Programming</h4>
                  <p>Monotonically synergize grants to business visualize strategic infomediaries.</p>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="assets/images/inner-images/careers-icon-2.png" alt="WordPress Development" />
                </div>
                <div className="feature-content">
                  <h4>WordPress Development</h4>
                  <p>Monotonically synergize grants to business visualize strategic infomediaries.</p>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="assets/images/inner-images/careers-icon-3.png" alt="UI/UX Development" />
                </div>
                <div className="feature-content">
                  <h4>UI/UX Development</h4>
                  <p>Monotonically synergize grants to business visualize strategic infomediaries.</p>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Careers Area Inner Style */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Brand Area Style Two */}
      {/*==================================================*/}
      <div className="brand-area style-two">
        <div className="container">
          <div className="row">
            <div className="brand-list-1 owl-carousel">
              {[1, 2, 3, 4, 5].map((num) => (
                <div className="col-lg-12" key={num}>
                  <div className="single-brand-box">
                    <div className="brand-thumb">
                      <img src={`assets/images/home-2/brand-${num}.png`} alt={`Brand ${num}`} />
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

export default Careers;