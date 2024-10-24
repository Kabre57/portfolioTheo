import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioTeamTestimonialsBlog() {
    const portfolioItems = [
        { imgSrc: "assets/images/home-1/portfolio-1.jpg", title: "Digital Marketing Agency", category: "Marketing", link: "project-details.html" },
        { imgSrc: "assets/images/home-1/portfolio-2.jpg", title: "Digital Marketing Agency", category: "Marketing", link: "project-details.html" },
        { imgSrc: "assets/images/home-1/portfolio-3.jpg", title: "Digital Marketing Agency", category: "Marketing", link: "project-details.html" },
        { imgSrc: "assets/images/home-1/portfolio-4.jpg", title: "Digital Marketing Agency", category: "Marketing", link: "project-details.html" },
    ];

    const teamMembers = [
        { name: "Arianna Bibi", role: "Web Developer", imgSrc: "assets/images/home-1/team1.jpg" },
        { name: "Nazmul Hossen", role: "UI/UX Designer", imgSrc: "assets/images/home-1/team2.jpg" },
        { name: "Roman Soltana", role: "Manager", imgSrc: "assets/images/home-1/team3.jpg" },
        { name: "Ghaura Mogibor", role: "UI/UX Developer", imgSrc: "assets/images/home-1/team4.jpg" },
    ];

    const testimonials = [
        { text: "Completely extend leveraged customer service rather than performance based imperatives.", author: "Venkatesh Iyer", role: "UI Designer" },
        { text: "Completely extend leveraged customer service rather than performance based imperatives.", author: "John D. Alexon", role: "UI Designer" },
        { text: "Completely extend leveraged customer service rather than performance based imperatives.", author: "Alex Brock", role: "UI Designer" },
        { text: "Completely extend leveraged customer service rather than performance based imperatives.", author: "Abhishek Sharma", role: "UI Designer" },
    ];

    const blogPosts = [
        { imgSrc: "assets/images/home-1/blog1.png", date: "April 22 2024", title: "Most Popular Chrome Extension for Business Promote", link: "blog-details.html" },
        { imgSrc: "assets/images/home-1/blog2.png", date: "April 22 2024", title: "Marketing Your Area Business Downturn Now A", link: "blog-details.html" },
        { imgSrc: "assets/images/home-1/blog3.png", date: "April 22 2024", title: "Better Context Menus With Safe Triangles", link: "blog-details.html" },
    ];

    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Portfolio Area Style One */}
            {/*==================================================*/}
            <div className="portfolio-area style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title left style-one">
                                <h4>Portfolio</h4>
                                <h1>Our Completed <span>Projects</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="portfolio-list-1 owl-carousel">
                            {portfolioItems.map((item, index) => (
                                <div className="col-lg-12" key={index}>
                                    <div className="single-portfolio-box">
                                        <div className="portfolio-thumb">
                                            <img src={item.imgSrc} alt="" />
                                        </div>
                                        <div className="portfolio-content">
                                            <div className="portfolio-button">
                                                <Link to="project.html"><i className="fa-solid fa-plus"></i></Link>
                                            </div>
                                            <div className="portfolio-title">
                                                <Link to={item.link}>{item.title}</Link>
                                                <p>{item.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Portfolio Area Style One */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Team Area Style One */}
            {/*==================================================*/}
            <div className="team-area style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title center style-one">
                                <h4>Team Member</h4>
                                <h1>Meet With Our <span>Engineers</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="single-team-box">
                                    <div className="team-thumb">
                                        <img src={member.imgSrc} alt="" />
                                    </div>
                                    <div className="team-content">
                                        <div className="team-bio">
                                            <h4>{member.name}</h4>
                                            <p>{member.role}</p>
                                        </div>
                                        <div className="team-social-icon">
                                            <ul>
                                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                                <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Team Area Style One */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Testimonial Area Style One */}
            {/*==================================================*/}
            <div className="testimonial-area style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title center style-one">
                                <h4>Testimonial</h4>
                                <h1>Customer’s Awesome Feedback</h1>
                                <h1>About Our Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testi-list-1 owl-carousel">
                            {testimonials.map((testimonial, index) => (
                                <div className="col-lg-12 text-center" key={index}>
                                    <div className="single-testimonial-box">
                                        <div className="testi-desc">
                                            <p>{testimonial.text}</p>
                                        </div>
                                        <div className="testi-rating">
                                            <ul>
                                                {[...Array(5)].map((_, i) => <li key={i}><i className="bi bi-star-fill"></i></li>)}
                                            </ul>
                                        </div>
                                        <div className="testi-author">
                                            <h4>{testimonial.author}</h4>
                                            <p>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Testimonial Area Style One */}
            {/*==================================================*/}

            {/*==================================================*/}
            {/* Start Toptech Blog Area Style One */}
            {/*==================================================*/}
            <div className="blog-area style-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title center style-one">
                                <h4>Our Blog Update</h4>
                                <h1>Featured News And <span>Insights</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogPosts.map((post, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-blog-box">
                                    <div className="blog-thumb">
                                        <img src={post.imgSrc} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="bi bi-calendar-check-fill"></i> {post.date}</span>
                                        </div>
                                        <Link to={post.link}>{post.title}</Link>
                                    </div>
                                    <div className="blog-bottom">
                                        <div className="blog-author">
                                            <span><i className="bi bi-person-circle"></i> By Admin</span>
                                        </div>
                                        <div className="blog-button">
                                            <Link to="blog-grid.html">Read More<i className="bi bi-arrow-right-short"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*==================================================*/}
            {/* End Toptech Blog Area Style One */}
            {/*==================================================*/}
        </>
    );
}

export default PortfolioTeamTestimonialsBlog;