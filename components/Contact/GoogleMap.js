import React from 'react'

const GoogleMap = () => {
  return (
    <div className="map-area">
      <iframe
        //   https://www.google.com/maps/place/3975+Jackson+St+%23208,+Riverside,+CA+92503,+USA/@33.927642,-117.4411255,180m/data=!3m1!1e3!4m5!3m4!1s0x80dcb0db0180b6ad:0x11d2725383f7ff30!8m2!3d33.9276397!4d-117.4407935
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.524169745789!2d-117.44298218574222!3d33.927644131735185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb0db020a1493%3A0x425da6a37222dad4!2sDr.%20Moola%20and%20Dr.%20Trivedi%20(OB%26GYN)!5e0!3m2!1sen!2sin!4v1661775407036!5m2!1sen!2sin"
        height="550"
      ></iframe>
    </div>
  )
}

export default GoogleMap
