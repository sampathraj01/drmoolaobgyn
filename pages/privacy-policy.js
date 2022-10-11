import React from 'react'
import TopHeader from '../components/_App/TopHeader'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/_App/Footer'
import ContactForm2 from '../components/Contact/ContactForm2'

const PrivacyPolicy = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Insurance"
        homePageUrl="/index-3"
        homePageText="Home"
        activePageText="Insurance"
        bgImage="page-title-one"
      />

      <div className="privacy-area ptb-100">
        <div className="container">
          <p>All major insurance plans are accepted.</p>
          <p>
            Please feel free to contact the office if you have any questions
            regarding your health insurance.
          </p>
          <h2>Appointment cancellations</h2>

          <div className="row" style={{ margin: -7 }}></div>

          <p>
            Please call our office 24-hours prior to your scheduled appointment
            cancellation.
          </p>
          <h2>After hours care</h2>
          <div className="row" style={{ margin: -7 }}></div>
          <p>
            Please make every effort to handle non-emergent calls during regular
            business hours. If you have a life-threatening emergency, please
            call 911. In the event of a medical emergency please go to the
            nearest ER.
          </p>
          <p>
            We share call coverage with other physician’s groups. After hours
            on-call physician will attend your needs. If you have questions
            about call coverage please contact our office.
          </p>
        </div>
      </div>

      <ContactForm2 />
      <Footer />
    </>
  )
}

export default PrivacyPolicy
