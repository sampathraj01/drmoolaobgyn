import React from 'react'
import TopHeader from '../components/_App/TopHeader'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/_App/Footer'
import OurExpertise from '../components/HomeTwo/OurExpertise'
import Services from '../components/HomeOne/Services'
import TestimonialSlider from '../components/Common/TestimonialSlider'
import LatestBlogPost from '../components/Common/LatestBlogPost'

const About = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/index-3"
        homePageText="Home"
        activePageText="About"
        bgImage="page-title-one"
      />

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about5.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>About Dr. Sudha Moola</h2>
                <p>
                  Dr. Sudha Moola completed her residency in Obstetrics and
                  Gynecology at the highly acclaimed Thomas Jefferson
                  University, Philadelphia, where she honed her skills in
                  surgery, deliver babies, participate in resident education and
                  she was member of the hospital’s Ethics Committee. Dr. Sudha
                  Moola is a board certified (American Board of Obstetrics &
                  Gynecology) physician and published articles in various
                  peer-reviewed journals. As an exceptionally trained
                  gynecologic surgeon and active member of the American
                  Association of Gynecologic Laparoscopists, she is committed to
                  providing her patients with minimally invasive surgical
                  options that allow for less post-operative pain and faster
                  recovery times. Dr. Sudha Moola moved to Riverside, CA in 2007
                  and practicing ever since. She strongly believes to provide
                  individualized, patient centered, comprehensive, compassionate
                  care and preventive counseling.{' '}
                </p>
                {/* <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Browse Our Website
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Choose Service
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Send Messege
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="counter-area counter-bg counter-area-four">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-patient-bed"></i>
                <h3 className="counter">850</h3>
                <p>Patients Beds</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-people"></i>
                <h3>
                  <span className="counter">25000</span>+
                </h3>
                <p>Happy Patients</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-doctor-alt"></i>
                <h3 className="counter">750</h3>
                <p>Doctors & Nurse</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-badge"></i>
                <h3 className="counter">18</h3>
                <p>Year Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <OurExpertise /> */}

      {/* <Services /> */}

      {/* <TestimonialSlider /> */}

      {/* <LatestBlogPost /> */}

      <Footer />
    </>
  )
}

export default About
