import React from 'react'

const ContactInfo = () => {
  return (
    <div className="location-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center location-wrap">
          <div className="col-sm-6 col-lg-4">
            <div className="location-item">
              <i className="icofont-ui-message"></i>
              <h3>Email</h3>
              <p>myob.hr@gmail.com</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="location-item">
              <i className="icofont-ui-call"></i>
              <h3>Phone</h3>
              <p> 951 732 7834</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="location-item">
              <i className="icofont-location-pin"></i>
              <h3>Location</h3>
              <p>
                818 Magnolia Ave Ste 102<br></br>
                <p>corona, CA 92879</p>
              </p>
              <p>
                3975 Jackson St STE 208<br></br>
                <p>Riverside, CA 92503</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
