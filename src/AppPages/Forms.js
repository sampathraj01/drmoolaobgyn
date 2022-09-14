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
    const [showResults4, setShowResults4] = useState('none');
    const [showResults5, setShowResults5] = useState('none');
    const [showResults6, setShowResults6] = useState('none');
    const [showResults7, setShowResults7] = useState('none');

    useEffect(() => {

        setShowResults('block');
        setShowResults2('none');
        setShowResults3('none');
        setShowResults4('none');
        setShowResults5('none');
        setShowResults6('none');
        setShowResults7('none');

    }, [])

    const tabOneChange = () => {

        setShowResults('block');
        setShowResults2('none');
        setShowResults3('none');
        setShowResults4('none');
        setShowResults5('none');
        setShowResults6('none');
        setShowResults7('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div.classList.add("active");

    }
    const tabTwoChange = () => {

        setShowResults('none');
        setShowResults2('block');
        setShowResults3('none');
        setShowResults4('none');
        setShowResults5('none');
        setShowResults6('none');
        setShowResults7('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div2.classList.add("active");

    }
    const tabThreeChange = () => {

        setShowResults('none');
        setShowResults2('none');
        setShowResults3('block');
        setShowResults4('none');
        setShowResults5('none');
        setShowResults6('none');
        setShowResults7('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div3.classList.add("active");

    }

    const tabFourChange = () => {

        setShowResults('none');
        setShowResults2('none');
        setShowResults3('none');
        setShowResults4('block');
        setShowResults5('none');
        setShowResults6('none');
        setShowResults7('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div4.classList.add("active");

    }

    const tabFiveChange = () => {

        setShowResults('none');
        setShowResults2('none');
        setShowResults3('none');
        setShowResults4('none');
        setShowResults5('block');
        setShowResults6('none');
        setShowResults7('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div5.classList.add("active");

    }

    const tabSixChange = () => {

        setShowResults('none');
        setShowResults2('none');
        setShowResults3('none');
        setShowResults4('none');
        setShowResults5('none');
        setShowResults6('block');
        setShowResults7('none');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div6.classList.add("active");

    }

    const tabSevenChange = () => {

        setShowResults('none');
        setShowResults2('none');
        setShowResults3('none');
        setShowResults4('none');
        setShowResults5('none');
        setShowResults6('none');
        setShowResults7('block');

        var div = document.querySelector("#tabOneChange");
        var div2 = document.querySelector("#tabTwoChange");
        var div3 = document.querySelector("#tabThreeChange");
        var div4 = document.querySelector("#tabFourChange");
        var div5 = document.querySelector("#tabFiveChange");
        var div6 = document.querySelector("#tabSixChange");
        var div7 = document.querySelector("#tabSevenChange");

        div.classList.remove("active");
        div2.classList.remove("active");
        div3.classList.remove("active");
        div4.classList.remove("active");
        div5.classList.remove("active");
        div6.classList.remove("active");
        div7.classList.remove("active");

        div7.classList.add("active");

    }

    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col-12">
                                <h1>Services</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/service-bg.png" alt=""></img>
                </header>

                <div className="container" style={{ background: "#f0f4f8", marginTop: "50px" }}>

                    <div className="container">
                        <div className="row">
                            <p>To expedite your check in process, please download the forms to print at home, fill out completely, and bring with you to your appointment.</p>
                            <p>Click on the form to download these forms can be filled on the computer and you can print them once done.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="services-tabs" style={{ margin: "0" }}>
                                <div className="tabs">
                                    <ul className="tabs-nav d-flex flex-wrap">
                                        <li className="tab-nav d-flex justify-content-center align-items-center active" id="tabOneChange" onClick={tabOneChange}>New patients</li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabTwoChange" onClick={tabTwoChange}> Privacy Practices </li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabThreeChange" onClick={tabThreeChange}>Release of Information</li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabFourChange" onClick={tabFourChange}>OB Services</li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabFiveChange" onClick={tabFiveChange}>GYN Services</li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabSixChange" onClick={tabSixChange}>Office procedures</li>
                                        <li className="tab-nav d-flex justify-content-center align-items-center" id="tabSevenChange" onClick={tabSevenChange}>Gynecological surgery</li>
                                    </ul>
                                    <div className="tabs-container">


                                        <div id="tab_1" className="tab-content" style={{ display: showResults }}>
                                            <ul>
                                                <img src="../assets/images/service-tab-img.png" className="img-thumbnail" alt="" style={{ width: "460px", height: "260px" }} />
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
                                                <img src="../assets/images/3.png" className="img-thumbnail" style={{ width: "460px", height: "260px" }} alt="" />
                                                <h4> Privacy Practices </h4>
                                            </ul>
                                        </div>

                                        <div id="tab_3" className="tab-content" style={{ display: showResults3 }}>
                                            <ul>
                                                <img src="../assets/images/4.png" className="img-thumbnail" alt="" style={{ width: "460px", height: "260px" }} />
                                                <h4>Release of Information</h4>
                                            </ul>
                                        </div>

                                        <div id="tab_4" className="tab-content" style={{ display: showResults4 }}>
                                            <ul>
                                                <img src="../assets/images/1.jpg" className="img-thumbnail" alt="" style={{ width: "460px", height: "260px" }} />
                                                <h4>OB Services</h4>
                                                <li>Prenatal care – normal and high-risk pregnancies</li>
                                                <li>Deliveries -vaginal, cesarean</li>
                                                <li>In office state-of-the-art ultrasound</li>
                                                <li>Preconception counseling</li>
                                            </ul>
                                        </div>

                                        <div id="tab_5" className="tab-content" style={{ display: showResults5 }}>
                                            <ul>
                                                <img src="../assets/images/2.jpg" className="img-thumbnail" alt="" style={{ width: "460px", height: "260px",marginBottom:"200px" }} />
                                                <h4>GYN Services</h4>
                                                <li>Annual exams</li>
                                                <li>Pap smears</li>
                                                <li>Contraception/birth control</li>
                                                <li>STD testing and treatment</li>
                                                <li>HPV testing</li>
                                                <li>Abnormal pap smears</li>
                                                <li>Infertility evaluation and treatment</li>
                                                <li>Treatment of fibroids</li>
                                                <li>Treatment of abnormal bleeding</li>
                                                <li>PMS counseling and treatment</li>
                                                <li>Evaluation and treatment of pelvic pain</li>
                                                <li>Treatment of Endometriosis</li>
                                                <li>Ovarian cyst evaluation and treatment</li>
                                                <li>Management of menopause and perimenopause</li>
                                                <li>Hormone replacement therapy</li>
                                            </ul>
                                        </div>

                                        <div id="tab_6" className="tab-content" style={{ display: showResults6 }}>
                                            <ul>
                                                <img src="../assets/images/5.png" className="img-thumbnail" alt="" style={{ width: "460px", height: "260px" }} />
                                                <h4>Office procedures</h4>
                                                <li>Colposcopy</li>
                                                <li>Cryotherapy</li>
                                                <li>Leep</li>
                                                <li>IUD insertion (paragard and mirena)</li>
                                                <li>Diaphragm fitting</li>
                                                <li>Treatment of genital warts</li>
                                                <li>Removal of skin tags</li>
                                                <li>Endometrial biopsy</li>
                                                <li>Treatment of bartholin’s cyst</li>
                                            </ul>
                                        </div>

                                        <div id="tab_7" className="tab-content" style={{ display: showResults7 }}>
                                            <ul>
                                                <img src="../assets/images/6.jpg" className="img-thumbnail" alt="" style={{ width: "460px", height: "260px" }} />
                                                <h4>Gynecological surgery</h4>
                                                <li>Surgical treatment of fibroids</li>
                                                <li>Surgical treatment of ovarian cysts</li>
                                                <li>Laparoscopy</li>
                                                <li>Hysteroscopy</li>
                                                <li>Tubal ligation</li>
                                                <li>Hysterectomy</li>
                                                <li>Polyp removal</li>
                                                <li>Dilation and curettage (D&C)</li>
                                                <li>Endometrial ablation</li>
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