import React, { useEffect, useState } from 'react';
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Forms = () => {

    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col-12">
                                <h1>Dashboard</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/service-bg.png" alt=""></img>
                </header>

                <div className="container" style={{ padding: "100px 0" }}>
                    <center><h2 style={{
                        marginBottom: "48px",
                        fontSize: "48px",
                        fontWeight: "600",
                        color: "#404040"
                    }}>Welcome Admin</h2></center>
                </div>
                <Footer />

            </div>
        </>
    );

};

export default Forms;