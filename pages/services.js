import React from 'react'
import TopHeader from '../components/_App/TopHeader'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'

import Footer from '../components/_App/Footer'
import Link from 'next/link'

const Services = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Forms"
        homePageUrl="/index-3"
        homePageText="Home"
        activePageText="Forms"
        bgImage="page-title-one"
      />

      {/* <div className="services-area pt-100 pb-70"> */}
      {/* <div className="container"> */}
      {/* <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-doctor"></i>
                  <h3>Expert Doctor</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-doctor"></i>
                  <h3>Expert Doctor</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-prescription"></i>
                  <h3>Diagnosis</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-prescription"></i>
                  <h3>Diagnosis</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-patient-file"></i>
                  <h3>Pathology</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-patient-file"></i>
                  <h3>Pathology</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-tooth"></i>
                  <h3>Dental Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-tooth"></i>
                  <h3>Dental Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-heart-beat-alt"></i>
                  <h3>Cardiology</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-heart-beat-alt"></i>
                  <h3>Cardiology</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-drug"></i>
                  <h3>Medicine</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-drug"></i>
                  <h3>Medicine</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-dna-alt-1"></i>
                  <h3>Neurology</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-dna-alt-1"></i>
                  <h3>Neurology</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <h3>Ambulance</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i className="icofont-ambulance-cross"></i>
                  <h3>Ambulance</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/service-details">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* <div className="row" style={{ margin: 10 }}></div>

      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expertise</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <a href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-doctor-alt"></i>
                        <h3>Certified Doctors</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <a href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-stretcher"></i>
                        <h3>Emergency</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <a href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-network"></i>
                        <h3>Teachnology</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <a href="/blog-details">
                      <div className="expertise-inner">
                        <i className="icofont-ambulance-cross"></i>
                        <h3>Ambulance</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src="/images/about4.jpg" alt="Expertise" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="privacy-area ptb-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-12 col-md-12">
              <p>
                To expedite your check in process, please download the forms to
                print at home, fill out completely, and bring with you to your
                appointment.
              </p>
              <div className="row" style={{ margin: -5 }}></div>
              <p>
                Click on the form to download these forms can be filled on the
                computer and you can print them once done.
              </p>

              <div className="row" style={{ margin: 10 }}></div>

              <div className="row">
                <div className="col-12 col-md-4">
                  <div
                    className="the-news-wrap"
                    style={{
                      border: '1px solid',
                      padding: '10px',
                      boxShadow: '1px 1px 1px 1px #888888',
                      borderRadius: '25px',
                      height: '100%',
                    }}
                  >
                    <figure className="post-thumbnail">
                      <center>
                        <a href="#">
                          <img
                            src="/images/form1.jpg"
                            style={{ width: '300px' }}
                            alt=""
                          />
                        </a>
                      </center>
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
                    <center>
                      <div className="banner-item">
                        <div className="common-btn-two">
                          <Link href="/services">
                            <a>Download Forms</a>
                          </Link>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div
                    className="the-news-wrap"
                    style={{
                      border: '1px solid',
                      padding: '10px',
                      boxShadow: '1px 1px 1px 1px #888888',
                      borderRadius: '25px',
                      height: '100%',
                    }}
                  >
                    <figure className="post-thumbnail">
                      <center>
                        <a href="#">
                          <img
                            src="/images/form2.jpg"
                            style={{ width: '300px' }}
                            alt=""
                          />
                        </a>
                      </center>
                    </figure>
                    <header className="entry-header">
                      <h3>Privacy Practices</h3>
                    </header>
                    <div className="entry-content">
                      <p>
                        FOR REVIEW ONLY: Please click the button below to review
                        our Notice of Privacy Practices.
                      </p>
                    </div>
                    <center>
                      <div className="banner-item">
                        <div className="common-btn-two">
                          <Link href="/services">
                            <a>Privacy Practices</a>
                          </Link>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div
                    className="the-news-wrap"
                    style={{
                      border: '1px solid',
                      padding: '10px',
                      boxShadow: '1px 1px 1px 1px #888888',
                      borderRadius: '25px',
                      height: '100%',
                    }}
                  >
                    <figure className="post-thumbnail">
                      <center>
                        <a href="#">
                          <img
                            src="/images/form3.jpg"
                            style={{ width: '300px' }}
                            alt=""
                          />
                        </a>
                      </center>
                    </figure>
                    <header className="entry-header">
                      <h3>Release of Information</h3>
                    </header>
                    <div className="entry-content">
                      <p></p>
                    </div>
                    <center>
                      <div className="banner-item">
                        <div className="common-btn-two">
                          <Link href="/services">
                            <a>Medical Release</a>
                          </Link>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services
