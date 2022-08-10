import React, { useEffect, useState } from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Forms = () => {

    const [showResults, setShowResults] = useState('block');
    const [showResults2, setShowResults2] = useState('none');
    const [showResults3, setShowResults3] = useState('none');

    useEffect(() => {

        setShowResults('block');
        setShowResults2('none');
        setShowResults3('none');

    }, [])

    const tabOneChange = () => {

        setShowResults('block');
        setShowResults2('none');
        setShowResults3('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");

        div.classList.add("active");

    }
    const tabTwoChange = () => {

        setShowResults('none');
        setShowResults2('block');
        setShowResults3('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");

        div2.classList.add("active");

    }
    const tabThreeChange = () => {

        setShowResults('none');
        setShowResults2('none');
        setShowResults3('block');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");

        div3.classList.add("active");

    }

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
                <div className="quality-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Only Top Quality Services</h2>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <p>To expedite your check in process, please download the forms to print at home, fill out completely, and bring with you to your appointment.</p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p>Click on the form to download these forms can be filled on the computer and you can print them once done.</p>
                                    </div>
                                </div>
                                <div className="w-100 text-center mt-5">
                                    <a className="button gradient-bg" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ background: "#f0f4f8" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="services-tabs" style={{ margin: "0" }}>
                                <div className="tabs">
                                    <ul className="tabs-nav d-flex flex-wrap">
                                        <li className="tab-nav d-flex justify-content-center align-items-center active" id="tabOneChange" onClick={tabOneChange}>New patients</li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabTwoChange" onClick={tabTwoChange}> Privacy Practices </li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabThreeChange" onClick={tabThreeChange}>Release of Information</li>
                                    </ul>
                                    <div className="tabs-container">


                                        <div id="tab_1" className="tab-content" style={{ display: showResults }}>
                                            <ul>
                                                <img src="../assets/images/service-tab-img.png" className="img-thumbnail" alt="" style={{width: "460px",height: "260px"}} />
                                                <h4>New patients</h4>
                                                <li>Myobgyn pt demographic form</li>
                                                <li>Initial intake</li>
                                                <li>HIPAA policy download to print</li>
                                                <li>Acknowledgement of HIPAA</li>
                                                <li>Arbitration agreement</li>
                                            </ul>
                                        </div>

                                        <div id="tab_2" className="tab-content" style={{ display: showResults2 }}>
                                            <ul>
                                                <img src="../assets/images/3.png" className="img-thumbnail" style={{width: "460px",height: "260px"}} alt="" />
                                                <h4> Privacy Practices </h4>
                                            </ul>
                                        </div>

                                        <div id="tab_3" className="tab-content" style={{ display: showResults3 }}>
                                            <ul>
                                                <img src="../assets/images/4.png" className="img-thumbnail" alt="" style={{width: "460px",height: "260px"}} />
                                                <h4>Release of Information</h4>
                                            </ul>
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

export default Forms;