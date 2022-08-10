import React from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Contact = () => {
    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{marginTop:"50px"}}>
                        <div className="row">
                            <div className="col-12">
                                <h1>Contact</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/contact-bg.png" alt=""></img>
                </header>
                <div className="contact-page-short-boxes">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="contact-info h-100">
                                    <h2 className="d-flex align-items-center">Contact Info</h2>
                                    <ul className="p-0 m-0">
                                        <li><span>Riverside Office:</span>3975 Jackson St #208,Riverside, CA 92503</li>
                                        <li><span>Corona Office:</span>818 Magnolia Ave STE 102,Corona, CA 92879</li>
                                        <li><span>Call:</span>(951) 732-7834</li>
                                        <li><span>Fax:</span>(951) 352-3577</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-5 mt-lg-0">
                                <div className="opening-hours h-100">
                                    <h2 className="d-flex align-items-center">Opening Hours</h2>
                                    <ul className="p-0 m-0">
                                        <li>Monday - Thursday <span>9 AM to 5 PM.</span></li>
                                        <li>Friday <span>9 AM to 5 PM.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Get in Touch</h2>
                            </div>
                            <div className="col-12  col-md-4">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="email" placeholder="E-mail" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="col-12">
                                <textarea name="name" rows="12" cols="80" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <input type="submit" name="" value="Send Message" className="button gradient-bg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-page-map">
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Contact;