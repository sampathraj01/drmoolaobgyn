import React from 'react'

const TopHeader = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-8 col-lg-9">
            <div className="header-top-item">
              <div className="header-top-left">
                <ul>
                  <li>
                    <a href="Call : 951 732 7834">
                      <i className="icofont-ui-call"></i>
                      Call : 951 732 7834
                    </a>
                  </li>
                  <li>
                    <a href="myob.hr@gmail.com">
                      <i className="icofont-ui-message"></i>
                      myob.hr@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="icofont-location-pin"></i>
                    3975 Jackson St 208,Riverside, CA 92503
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-lg-3">
            <div className="header-top-item">
              <div className="header-top-right">
                {/* <ul className="lang-list">
                  <li>
                    <a href="/">EN</a>
                  </li>
                  <li>
                    <a href="/ar">AR</a>
                  </li>
                </ul> */}

                <ul>
                  <li>
                    <a href="" target="_blank">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="" target="_blank">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
