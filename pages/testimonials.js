import React from 'react'
import TopHeader from '../components/_App/TopHeader'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import OurExpertise from '../components/HomeOne/OurExpertise'
import TestimonialSlider from '../components/Common/TestimonialSlider'
import OurDoctors from '../components/Common/OurDoctors'
import Footer from '../components/_App/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Testimonials = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Our Office"
        homePageUrl="/index-3"
        homePageText="Home"
        activePageText="Our Office"
        bgImage="page-title-one"
      />

      {/* <div className="pt-100">
                <OurExpertise />
            </div>

            <TestimonialSlider />

            <OurDoctors /> */}

      <div className="privacy-area ptb-100 ">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-12 col-md-12">
              <h3>Our Office</h3>
              <div className="carousel-main-slide">
                <Carousel>
                  <div>
                    <img src="/images/office1.jpg" />
                  </div>
                  <div>
                    <img src="/images/office2.jpg" />
                  </div>
                  <div>
                    <img src="/images/office3.jpg" />
                  </div>
                  <div>
                    <img src="/images/office4.jpg" />
                  </div>
                  <div>
                    <img src="/images/office5.jpg" />
                  </div>
                  <div>
                    <img src="/images/office6.jpg" />
                  </div>
                  <div>
                    <img src="/images/office7.jpg" />
                  </div>
                  <div>
                    <img src="/images/office8.jpg" />
                  </div>
                  <div>
                    <img src="/images/office9.jpg" />
                  </div>
                  <div>
                    <img src="/images/office10.jpg" />
                  </div>
                  <div>
                    <img src="/images/office11.jpg" />
                  </div>
                  <div>
                    <img src="/images/office12.jpg" />
                  </div>
                  <div>
                    <img src="/images/office13.jpg" />
                  </div>
                  <div className="last-menu">
                    <img src="/images/office14.jpg" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: -40 }}></div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Testimonials
