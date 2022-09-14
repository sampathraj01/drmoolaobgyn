import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../assets/css/A.bootstrap.min.css.pagespeed.cf.96ce0raldg.css';
import '../assets/css/A.swiper.min.css.pagespeed.cf.yu3bDVN0Ta.css';
import '../assets/A.style.css.pagespeed.cf.E-6KGzkGT8.css';

import Header from './template/Header';
import Footer from './template/Footer';

const Admin = () => {

    const { register, handleSubmit, reset } = useForm();

    const [showLoginError, setShowLoginError] = useState(false);

    const onSubmit = data => {

        console.log(data)

        if(data.username == "admin" && data.password == "admin") {
            window.location.href = "/dashboard";
        }
        else {
            setShowLoginError(true);
        }

    };

    const removeValid = () => {
        setShowLoginError(false);
    }

    return (
        <>
            <div className="single-page">
                <header className="site-header">
                    <Header />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col-12">
                                <h1>Admin</h1>
                                <div className="breadcrumbs">
                                    <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                        <li><a href="#">Home</a></li>
                                        <li>Admin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="header-img" src="../assets/images/about-bg.png" alt=""></img>
                </header>
                <br />
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-3 col-lg-3 col-sm-3">
                        </div>
                        <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                            <div className="appointment-box">
                                <h2 className="d-flex align-items-center">Admin Login</h2>
                                <form className="d-flex flex-wrap justify-content-between" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" {...register("username")} required autoComplete="off" placeholder="Username" onClick={removeValid} style={{width:"100%"}} />
                                    <input type="password" {...register("password")} required autoComplete="off" placeholder="Password" onClick={removeValid} style={{
                                        display: "block",
                                        width: "100%",
                                        padding: "12px 16px",
                                        marginBottom: "10px",
                                        border: "0",
                                        fontSize: "12px",
                                        fontStyle: "italic",
                                        color: "#828282",
                                        background: "#f0f4f8",
                                        outline: "none"
                                    }} />
                                    { showLoginError ? <p style={{ color: "red",width:"100%" }}>InValid Username Or Password</p> : null }
                                    <input className="button gradient-bg" type="submit" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </>
    );

};

export default Admin;