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
                                <h1>Insurances</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Insurances</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/elements-bg.png" alt=""></img>
                </header>

                <br />
                <div className="contact-form">
                    <div className="container">
                    <p>All major insurance plans are accepted.</p>
                            <p>Please feel free to contact the office if you have any questions regarding your health insurance.</p>
                            <h3><b>Appointment cancellations</b></h3>
                            <p>Please call our office 24-hours prior to your scheduled appointment cancellation.</p>
                            <h3><b>After hours care</b></h3>
                            <p>Please make every effort to handle non-emergent calls during regular business hours. If you have a life-threatening emergency, please call 911. In the event of a medical emergency please go to the nearest ER.</p>
                            <p>We share call coverage with other physician’s groups. After hours on-call physician will attend your needs. If you have questions about call coverage please contact our office.</p>
                            <br />
                        <div className="row">
                            <div className="col-12">
                                <h2>Book Appointment</h2>
                            </div>
                            <div className="col-12  col-md-4">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="email" placeholder="E-mail" />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="number" placeholder="Phone" style={{
                                    width: "100%",
                                    padding: "15px 20px",
                                    marginTop: "30px",
                                    border: "0",
                                    background: "#f0f4f8",
                                    outline: "none",
                                    fontSize: "12px",
                                    lineHeight: "1",
                                    fontStyle: "italic",
                                    color: "#828282"
                                }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <h3 style={{ marginTop: "15px" }}><b>Date:</b></h3>
                                <input type="date" placeholder="Date" style={{
                                    width: "100%",
                                    padding: "15px 20px",
                                    border: "0",
                                    background: "#f0f4f8",
                                    outline: "none",
                                    fontSize: "12px",
                                    lineHeight: "1",
                                    fontStyle: "italic",
                                    color: "#828282"
                                }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <h3 style={{ marginTop: "15px" }}><b>Timing:</b></h3>
                                <input type="radio" name="time" />&nbsp;&nbsp;Morning<br />
                                <input type="radio" name="time" />&nbsp;&nbsp;Afternoon
                            </div>
                            <div className="col-12">
                                <textarea name="name" rows="12" cols="80" placeholder="Notes"></textarea>
                            </div>
                            <div className="col-12">
                                <input type="submit" name="" value="Book Appointment" className="button gradient-bg" />
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