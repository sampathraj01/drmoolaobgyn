import React from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const About = () => {

    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col-12">
                                <h1>About us</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>About Us</li>
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
                            <div className="col-12 col-lg-6">
                                <h2>Who We Are</h2>
                                <p>Dr. Sudha Moola completed her residency in Obstetrics and Gynecology at the highly acclaimed Thomas Jefferson University, Philadelphia, where she honed her skills in surgery, deliver babies, participate in resident education and she was member of the hospital’s Ethics Committee.</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                <img className="responsive" src="../assets/images/about.jpg" alt="" />
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                <img className="responsive" src="../assets/images/1.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-6">
                                <p>Dr. Sudha Moola is a board certified (American Board of Obstetrics & Gynecology) physician and published articles in various peer-reviewed journals. As an exceptionally trained gynecologic surgeon and active member of the American Association of Gynecologic Laparoscopists, she is committed to providing her patients with minimally invasive surgical options that allow for less post-operative pain and faster recovery times.</p>
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col-12 col-lg-6">
                                <p>Dr. Sudha Moola moved to Riverside, CA in 2007 and practicing ever since. She strongly believes to provide individualized, patient centered, comprehensive, compassionate care and preventive counseling.</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                                <img className="responsive" src="../assets/images/2.jpg" alt="" />
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

export default About;