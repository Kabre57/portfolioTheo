import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    const heroContent = (
    
        <div className="hero-area style-foure d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h4>Top business solutions in 2024</h4>
                            <h1>Decoding Trends through</h1>
                            <h1>Passion and People</h1>
                        </div>
                        <div className="hero-button style-foure">
                            <Link className="button-two" to="#">
                                DISCOVER MORE <i className="flaticon flaticon-computer"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/*==================================================*/}
            {/* Start Toptech Hero Area Style foure */}
            {/*==================================================*/}
            <div className="hero_list owl-carousel">
                {Array(5).fill(heroContent)}
            </div>
            {/*==================================================*/}
            {/* End Toptech Hero Area Style foure */}
            {/*==================================================*/}
        </>
    );
}

export default Blog;