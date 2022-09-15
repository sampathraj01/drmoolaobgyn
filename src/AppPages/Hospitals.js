import React from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Hospitals = () => {

    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col-12">
                                <h1>Hospitals</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Hospitals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/about-bg.png" alt=""></img>
                </header>

                <div className="med-history">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-12 col-lg-12">
                                <h4 style={{fontSiZe: "16px"}}><b style={{    fontWeight: "700"}}>Dr. Sudha Moola is affiliated with these hospitals.</b></h4>
                                <h4 style={{fontSiZe: "16px"}}><b>Parkview community hospital <br /><a style={{color:"rgb(24, 163, 235)"}} href="http://www.pchmc.org/">http://www.pchmc.org/</a></b></h4>
                                <h4 style={{fontSiZe: "16px"}}><b>Riverside community hospital <br /><a style={{color:"rgb(24, 163, 235)"}} href="http://www.riversidecommunityhospital.com/">http://www.riversidecommunityhospital.com/</a></b></h4>
                                <h4 style={{fontSiZe: "16px"}}><b>Corona Regional Medical Center <br /><a style={{color:"rgb(24, 163, 235)"}} href="http://www.coronaregional.com/">http://www.coronaregional.com/</a></b></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-stuff">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Faq & Stuff</h2>
                            </div>
                            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                                <div className="accordion-wrap type-accordion">
                                    <h3 className="entry-title d-flex justify-content-between align-items-center active">Elit mir congue ligula et efficitur pellentesqu<span className="arrow-r"></span></h3>
                                    <div className="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                    </div>
                                    <h3 className="entry-title d-flex justify-content-between align-items-center">Pulvinar elit mi. Integer congue ligula et efficitur <span className="arrow-r"></span></h3>
                                    <div className="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                    </div>
                                    <h3 className="entry-title d-flex justify-content-between align-items-center">Pellentesque pulvinar elit mi. Integer congue<span className="arrow-r"></span></h3>
                                    <div className="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="professional-box">
                                            <h2 className="d-flex align-items-center">Professional</h2>
                                            <img src="../assets/images/cardiogram-2.png" alt="" />
                                            <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="quality-box">
                                            <h2 className="d-flex align-items-center">Quality</h2>
                                            <img src="../assets/images/hospital.png" alt="" />
                                            <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );

};

export default Hospitals;