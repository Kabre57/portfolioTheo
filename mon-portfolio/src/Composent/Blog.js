import React from "react";
import { Link } from "react-router-dom";

function Blog() {
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
                <h4>Blog </h4>
                <ul>
                  <li><Link to="index.html">Home</Link></li>
                  <li>-</li>
                  <li>Blog</li>
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
      {/* Start Toptech Blog  */}
      {/*==================================================*/}
      <div className="blog-grid-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {/** Blog posts can be rendered dynamically if needed **/}
                {['Solution This Business For is Marketing Blog', 'Easy and Most Powerful Server and Platform.', 'In eu fringilla, accumsan purusvel sollicitudin.', 'Vivamus vehicula nl purus at eros interdum.'].map((title, index) => (
                  <div className="col-lg-12 col-md-6" key={index}>
                    <div className="single-blog-box">
                      <div className="blog-thumb">
                        <img src={`assets/images/inner-images/blog-${index + 1}.png`} alt="" />
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span>Admin: Mera</span>
                          <span>Comments (04)</span>
                        </div>
                        <div className="blog-title">
                          <Link to="blog-details.html">{title}</Link>
                          <p>Monotonectaly granular to front markets task data semper maecenas ferform</p>
                        </div>
                      </div>
                      <div className="blog-category">
                        <Link to="#">Category {index + 1}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="widget-sidber">
                    <div className="widget_search">
                      <form action="#" method="get">
                        <input type="text" name="s" placeholder="Search Here" title="Search for:" />
                        <button type="submit" className="icons">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="widget-sidber">
                    <div className="widget-sidber-content">
                      <h4>Categories</h4>
                    </div>
                    <div className="widget-category">
                      <ul>
                        <li><Link to="#"><img src="assets/images/service-inner/category-icon.png" alt="" />App Development<i className="bi bi-arrow-right"></i></Link></li>
                        <li><Link to="#"><img src="assets/images/service-inner/category-icon.png" alt="" />IT Solution<i className="bi bi-arrow-right"></i></Link></li>
                        <li><Link to="#"><img src="assets/images/service-inner/category-icon.png" alt="" />Digital Marketing<i className="bi bi-arrow-right"></i></Link></li>
                        <li><Link to="#"><img src="assets/images/service-inner/category-icon.png" alt="" />Web Design<i className="bi bi-arrow-right"></i></Link></li>
                        <li><Link to="#"><img src="assets/images/service-inner/category-icon.png" alt="" />Web Development<i className="bi bi-arrow-right"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-sidber">
                    <div className="widget-sidber-content">
                      <h4>Popular Post</h4>
                    </div>
                    <div className="sidber-widget-recent-post">
                      <div className="recent-widget-thumb">
                        <img src="assets/images/inner-images/recent-post-1.png" alt="" />
                      </div>
                      <div className="recent-widget-content">
                        <Link to="#">Digital Marketing Strategy Action P…</Link>
                        <p> Jan, 26 2024</p>
                      </div>
                    </div>
                    <div className="sidber-widget-recent-post">
                      <div className="recent-widget-thumb">
                        <img src="assets/images/inner-images/recent-post-2.png" alt="" />
                      </div>
                      <div className="recent-widget-content">
                        <Link to="#">6 Things You Must Know Before Hirin…</Link>
                        <p> Jan, 26 2024</p>
                      </div>
                    </div>
                    <div className="sidber-widget-recent-post">
                      <div className="recent-widget-thumb">
                        <img src="assets/images/inner-images/recent-post-3.png" alt="" />
                      </div>
                      <div className="recent-widget-content">
                        <Link to="#">In eu fringilla, accumsan purus vel sollicitudin.</Link>
                        <p> Jan, 26 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="widget-sidber">
                    <div className="widget-sidber-content">
                      <h4>Tags</h4>
                    </div>
                    <div className="widget-catefories-tags">
                      <Link to="#">Cyber Security</Link>
                      <Link to="#">Learning</Link>
                      <Link to="#">Software</Link>
                      <Link to="#">Development</Link>
                      <Link to="#">Marketing</Link>
                      <Link to="#">Technology</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Toptech Blog Grid */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Toptech Brand Area Style Two */}
      {/*==================================================*/}
      <div className="brand-area style-two">
        <div className="container">
          <div className="row">
            <div className="brand-list-1 owl-carousel">
              {/** Brand images should also be mapped if they are similar **/}
              {['brand-1', 'brand-2', 'brand-3', 'brand-4', 'brand-5'].map((brand, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="single-brand-box">
                    <div className="brand-thumb">
                      <img src={`assets/images/home-2/${brand}.png`} alt="" />
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

export default Blog;