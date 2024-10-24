import React from 'react';
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
                                <Link to="#">How It Works</Link>
                                <Link className="button-two" to="#">IT Services <i className="flaticon flaticon-computer"></i></Link>
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
                                                <Link to="service.html">Read More<i className="fa-solid fa-angles-right"></i></Link>
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
                                                <Link to="service.html">Read More<i className="fa-solid fa-angles-right"></i></Link>
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
        </>
    );
}

export default Home;