import React from 'react';

const Footer = () => {

    return (
        <>
            <footer className="site-footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="foot-about">
                                    <h2><a href="#"><img className="d-block" src="../assets/images/Company_Business_Logo.png" style={{ width: "250px" }} alt="logo" /></a></h2>
                                    <p>Our practice is based on the belief that our patient’s needs are of the utmost importance. We provide patient centered comprehensive care. As a result, a high percentage of our business is from repeat customers and referrals. We would welcome the opportunity to earn your trust and deliver you the best service possible.</p>
                                    <p className="copyright">
                                        Copyright &copy;2022 All rights reserved
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                                <div className="foot-contact">
                                    <h2>Contact</h2>
                                    <ul className="p-0 m-0">
                                        <li><span>Office:</span>3975 Jackson St #208,Riverside, CA 92503</li>
                                        <li><span>Call:</span>(951) 732-7834</li>
                                        <li><span>Fax:</span>(951) 352-3577</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                                <div className="foot-links">
                                    <h2>Usefull Links</h2>
                                    <ul className="p-0 m-0">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About us</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

};

export default Footer;