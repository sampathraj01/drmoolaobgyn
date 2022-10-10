import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@disin.com">myob.hr@gmail.com</a>
                      <a></a>
                      {/* <a href="mailto:hello@disin.com">hello@disin.com</a> */}
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+07554332322">Call: 951 732 7834</a>
                      <a></a>
                      {/* <a href="tel:+236256256365">Call: +236 256 256 365</a> */}
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      <a>
                        818 Magnolia Ave Ste 102<br></br>
                        <a>corona, CA 92879</a>
                      </a>
                      <a>
                        3975 Jackson St STE 208<br></br>
                        <a>Riverside, CA 92503</a>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-1"></div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Insurance</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Forms</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-condition">
                        <a>Hospitals</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-condition">
                        <a>Our Office</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sign-in">
                        <a>Admin</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-1"></div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link href="/service-details">
                        <a>OB Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>GYN Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Office Procedures</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Genecological Surgery</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-feedback">
                  <h3>Feedback</h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_message"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <button type="submit" className="btn feedback-btn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Sudha Moola Ob/Gyn <br></br>Powered
              by
              <a href="http://cloudbsoft.com/" target="_blank">
                cloudbsoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
