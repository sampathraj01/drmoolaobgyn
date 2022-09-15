import React, { useState, useEffect } from 'react';

const Header = () => {


    useEffect(() => {

        var windowSize = window.innerWidth;
        if(windowSize<345) {
            document.getElementById("headerPhone").style.fontSize = "9px";
            document.getElementById("headerFax").style.fontSize = "9px";
        }
        else if(windowSize<426) {
            document.getElementById("headerPhone").style.fontSize = "11px";
            document.getElementById("headerFax").style.fontSize = "11px";
        }   
        else {
            document.getElementById("headerPhone").style.fontSize = "15px";
            document.getElementById("headerFax").style.fontSize = "15px";
        }
        
    }, [])

    let colorChange = 'black';
    let colorChange2 = 'black';
    let colorChange3 = 'black';
    let colorChange4 = 'black';
    let colorChange5 = 'black';
    let colorChange6 = 'black';
    let colorChange7 = 'black';
    let colorChange8 = 'black';

    if (window.location.pathname == "/" || window.location.pathname == "/home") {
        colorChange = '#18a3eb';
    }
    if (window.location.pathname == "/about") {
        colorChange2 = '#18a3eb';
    }
    if (window.location.pathname == "/contact") {
        colorChange3 = '#18a3eb';
    }
    if (window.location.pathname == "/services") {
        colorChange4 = '#18a3eb';
    }
    if (window.location.pathname == "/insurances") {
        colorChange5 = '#18a3eb';
    }
    if (window.location.pathname == "/forms") {
        colorChange6 = '#18a3eb';
    }
    if (window.location.pathname == "/admin") {
        colorChange7 = '#18a3eb';
    }
    if (window.location.pathname == "/hospitals") {
        colorChange8 = '#18a3eb';
    }

    const responsiveMob = () => {
        const div = document.querySelector("#responsiveMob");
        const div2 = document.querySelector("#responsiveMob2");
        if (div.classList.contains('open')) {
            div.classList.remove("open");
            div2.classList.remove("show");
        }
        else {
            div.classList.add("open");
            div2.classList.add("show");
        }
    };


    return (
        <>
            <div className="nav-bar">
                <div className="headerTop" style={{
                    paddingTop: "15px",
                    borderBottom: "1px solid rgb(88 125 228)",
                    backgroundColor: "#ffffff",
                    zIndex: "1",
                    marginTop: "-20px"
                }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-9 col-lg-9">
                                <div className="header-top-item">
                                    <div className="header-top-left">
                                        <ul>
                                            <li style={{
                                                display: "inline-block",
                                                listStyleType: "none",
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                color: "#4a6f8a",
                                                marginRight: "25px"
                                            }}>
                                                <a href="#" style={{textDecoration: "none"}} id="headerPhone">
                                                    <i class="fa fa-solid fa-phone" style={{color:"rgba(50,200,250,1)"}}></i>&nbsp;&nbsp;Call : (951) 732-7834
                                                </a>
                                            </li>
                                            <li style={{
                                                display: "inline-block",
                                                listStyleType: "none",
                                                fontWeight: "500",
                                                fontSize: "14px",
                                                color: "#4a6f8a",
                                                marginRight: "25px"
                                            }}>
                                                <a href="#" style={{textDecoration: "none"}} id="headerFax">
                                                    <i class="fa fa-solid fa-fax" style={{color:"rgba(50,200,250,1)"}}></i>&nbsp;&nbsp;Fax: (951) 352-3577
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-lg-3">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div className="site-branding d-flex align-items-center">
                                <a className="d-block" href="/"><img className="d-block" src="../assets/images/Company_Business_Logo.png" style={{ width: "200px" }} alt="logo" /></a>
                            </div>
                            <nav className="site-navigation d-flex justify-content-end align-items-center" id="responsiveMob2">
                                <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                    <li><a href="/about" style={{ color: colorChange2,fontSize: "13px" }}>About us</a></li>
                                    <li><a href="/services" style={{ color: colorChange4,fontSize: "13px" }}>Services</a></li>
                                    <li><a href="/insurances" style={{ color: colorChange5,fontSize: "13px" }}>Insurances</a></li>
                                    <li><a href="/forms" style={{ color: colorChange6,fontSize: "13px" }}>Forms</a></li>
                                    <li><a href="/hospitals" style={{ color: colorChange8,fontSize: "13px" }}>Hospitals</a></li>
                                    <li><a href="/contact" style={{ color: colorChange3,fontSize: "13px" }}>Contact</a></li>
                                    <li><a href="/admin" style={{ color: colorChange7,fontSize: "13px" }}>Admin</a></li>
                                    <li className="call-btn button gradient-bg mt-3 mt-md-0" style={{minWidth: "0px"}}>
                                        <a className="d-flex justify-content-center align-items-center" href="#"><img src="../assets/images/emergency-call.png" /> (951) 732-7834</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="hamburger-menu d-lg-none" id="responsiveMob" onClick={responsiveMob}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

};
export default Header;
