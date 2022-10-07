import React from 'react'
import TopHeader from '../components/_App/TopHeader'
import Navbar from '../components/_App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/_App/Footer'

const ServiceDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/index-3"
        homePageText="Home"
        activePageText="Services"
        bgImage="page-title-one"
      />

      <div className="service-details-area ptb-100">
        <div className="container">
          {/* <div className="services-details-img">
            <img src="/images/service-details-bg.jpg" alt="Service Details" />

            <h2>Our Hospital Always Provide Good Services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <blockquote>
              <i className="icofont-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              optio rem magni, dolorum aut vel nostrum quae, fugit
              necessitatibus eius perferendis. Quia optio tenetur pariatur
              aliquam obcaecati enim quam eum?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint optio rem magni, dolorum aut
              vel nostrum quae, fugit necessitatibus eius perferendis. Quia
              optio tenetur pariatur aliquam obcaecati enim quam eum?
            </blockquote>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div> */}

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-pic1">
                <img src="/images/1.jpg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>OB Services</h2>
                <ul>
                  <li>Prenatal care – normal and high-risk pregnancies</li>
                  <li>Deliveries -vaginal, cesarean</li>
                  <li>In office state-of-the-art ultrasound</li>
                  <li>Preconception counseling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row" style={{ margin: 10 }}></div>

          <div className="row">
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>GYN Services</h2>
                <ul>
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
            </div>
            <div className="col-lg-5">
              <div className="service-details-pic2">
                <img src="/images/3.jpg" alt="Service" />
              </div>
            </div>
          </div>

          <div className="row" style={{ margin: 10 }}></div>

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-pic3">
                <img src="/images/office.jpg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>Office procedures</h2>
                <ul>
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
            </div>
          </div>

          <div className="row" style={{ margin: 10 }}></div>

          <div className="row">
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>Gynecological surgery</h2>
                <ul>
                  <li>Surgical treatment of fibroids</li>
                  <li>Surgical treatment of ovarian cysts</li>
                  <li>Laparoscopy</li>
                  <li>Hysteroscopy</li>
                  <li>Tubal ligation</li>
                  <li>Hysterectomy</li>
                  <li>Polyp removal</li>
                  <li>Dilation and curettage (D&C)</li>
                  <li>Endometrial ablations</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="service-details-pic4">
                <img src="/images/Gyn-surgery.jpg" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ServiceDetails
