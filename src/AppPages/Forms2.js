import React, { useEffect, useState } from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Forms2 = () => {



    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col-12">
                                <h1>Forms</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Forms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/service-bg.png" alt=""></img>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="the-news">
                            <p>To expedite your check in process, please download the forms to print at home, fill out completely, and bring with you to your appointment.</p>
                            <p>Click on the form to download these forms can be filled on the computer and you can print them once done.</p>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="the-news-wrap" style={{ border: "1px solid", padding: "10px", boxShadow: "1px 1px 1px 1px #888888", borderRadius: "25px",height:"100%" }}>
                                            <figure className="post-thumbnail">
                                                <center><a href="#"><img src="assets/images/news-5.png" style={{ width: "300px" }} alt="" /></a></center>
                                            </figure>
                                            <header className="entry-header">
                                                <h3>New patients</h3>
                                            </header>
                                            <div className="entry-content">
                                                <ul>
                                                    <li>Myobgyn pt demographic form</li>
                                                    <li>Initial intake</li>
                                                    <li>HIPAA policy download to print</li>
                                                    <li>Acknowledgement of HIPAA</li>
                                                    <li>Arbitration agreement</li>
                                                </ul>
                                            </div>
                                            <footer className="entry-footer mt-5">
                                                <center><a className="button gradient-bg" href="https://www.tutorialspoint.com/php/php_tutorial.pdf" download>Download Forms</a></center>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="the-news-wrap" style={{ border: "1px solid", padding: "10px", boxShadow: "1px 1px 1px 1px #888888", borderRadius: "25px",height:"100%" }}>
                                            <figure className="post-thumbnail">
                                                <center><a href="#"><img src="assets/images/news-1.png" style={{ width: "300px" }} alt="" /></a></center>
                                            </figure>
                                            <header className="entry-header">
                                                <h3>Privacy Practices</h3>
                                            </header>
                                            <div className="entry-content">
                                                <p>FOR REVIEW ONLY: Please click the button below to review our Notice of Privacy Practices.</p>
                                            </div>
                                            <footer className="entry-footer mt-5">
                                                <center><a className="button gradient-bg" href="https://www.tutorialspoint.com/php/php_tutorial.pdf" download>Privacy Practices</a></center>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="the-news-wrap" style={{ border: "1px solid", padding: "10px", boxShadow: "1px 1px 1px 1px #888888", borderRadius: "25px",height:"100%" }}>
                                            <figure className="post-thumbnail">
                                                <center><a href="#"><img src="assets/images/news-2.png" style={{ width: "300px" }} alt="" /></a></center>
                                            </figure>
                                            <header className="entry-header">
                                                <h3>Release of Information</h3>
                                            </header>
                                            <div className="entry-content">
                                                <p></p>
                                            </div>
                                            <footer className="entry-footer mt-5">
                                                <center><a className="button gradient-bg" href="https://www.tutorialspoint.com/php/php_tutorial.pdf" download>Medical Release</a></center>
                                            </footer>
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

export default Forms2;