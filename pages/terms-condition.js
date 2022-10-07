import React from 'react'
import TopHeader from '../components/_App/TopHeader'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/_App/Footer'

const TermsCondition = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Hospital"
        homePageUrl="/index-3"
        homePageText="Home"
        activePageText="Hospital"
        bgImage="page-title-one"
      />

      <div className="privacy-area ptb-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-12">
              <h6 style={{ fontSiZe: '16px' }}>
                <p style={{ fontWeight: '700' }}>
                  Dr. Sudha Moola is affiliated with these hospitals.
                </p>
              </h6>
              <h6 style={{ fontSiZe: '16px' }}>
                <p>
                  Parkview community hospital <br />
                  <a
                    style={{ color: 'rgb(24, 163, 235)' }}
                    href="http://www.pchmc.org/"
                  >
                    http://www.pchmc.org/
                  </a>
                </p>
              </h6>
              <h6 style={{ fontSiZe: '16px' }}>
                <p>
                  Riverside community hospital <br />
                  <a
                    style={{ color: 'rgb(24, 163, 235)' }}
                    href="http://www.riversidecommunityhospital.com/"
                  >
                    http://www.riversidecommunityhospital.com/
                  </a>
                </p>
              </h6>
              <h6 style={{ fontSiZe: '16px' }}>
                <p>
                  Corona Regional Medical Center <br />
                  <a
                    style={{ color: 'rgb(24, 163, 235)' }}
                    href="http://www.coronaregional.com/"
                  >
                    http://www.coronaregional.com/
                  </a>
                </p>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TermsCondition
