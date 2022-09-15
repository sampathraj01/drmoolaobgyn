import React from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Home = () => {

    return (
        <>

            <header className="site-header">

                <Header />

                <div className="swiper-container hero-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide hero-content-wrap" style={{ backgroundImage: "url('../assets/images/hero.jpg')" }}>
                            <div className="hero-content-overlay position-absolute w-100 h-100">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start" style={{marginTop:"300px"}}>
                                            <header className="entry-header">
                                                <h1>The Best <br />Medical Services</h1>
                                            </header>
                                            <div className="entry-content mt-4">
                                                <p style={{ color: "black" }}>Our practice is based on the belief that our patient’s needs are of the utmost importance. We provide patient centered comprehensive care. As a result, a high percentage of our business is from repeat customers and referrals. We would welcome the opportunity to earn your trust and deliver you the best service possible.</p>
                                            </div>
                                            <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                                <a href="#" className="button gradient-bg">Read More</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide hero-content-wrap" style={{ backgroundImage: "url('../assets/images/hero.jpg')" }}>
                            <div className="hero-content-overlay position-absolute w-100 h-100">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                            <header className="entry-header">
                                                <h1>The Best <br />Medical Services</h1>
                                            </header>
                                            <div className="entry-content mt-4">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                            </div>
                                            <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                                <a href="#" className="button gradient-bg">Read More</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide hero-content-wrap" style={{ backgroundImage: "url('../assets/images/hero.jpg')" }}>
                            <div className="hero-content-overlay position-absolute w-100 h-100">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                            <header className="entry-header">
                                                <h1>The Best <br />Medical Services</h1>
                                            </header>
                                            <div className="entry-content mt-4">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                            </div>
                                            <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                                <a href="#" className="button gradient-bg">Read More</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-wrap position-absolute w-100">
                        <div className="swiper-pagination d-flex flex-row flex-md-column"></div>
                    </div>
                </div>
            </header>

            <div className="homepage-boxes">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="opening-hours">
                                <h2 className="d-flex align-items-center">Opening Hours</h2>
                                <ul className="p-0 m-0">
                                    <li>Monday - Thursday <span>9 AM to 5 PM.</span></li>
                                    <li>Friday <span>9 AM to 5 PM.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
                            <div className="emergency-box">
                                <h2 className="d-flex align-items-center">Emergency</h2>
                                <div className="call-btn button gradient-bg">
                                    <a className="d-flex justify-content-center align-items-center" href="#"><img src="../assets/images/emergency-call.png" /> (951) 732-7834</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-departments">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="our-departments-wrap">
                                <h2 style={{marginBottom: "0px"}}>Save Soil</h2>
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="our-departments-cont">
                                            <div className="entry-content">
                                                <p>Conscious Planet is an effort to raise human consciousness and bring a sense of inclusiveness such that multifarious activities of our societies move into a conscious mode. An effort to align human activity to be supportive of nature and all life on our planet. Our work is towards creating a planet where a large number of Human Beings act consciously, governments are elected consciously, where ecological issues become election issues in the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );

};

export default Home;