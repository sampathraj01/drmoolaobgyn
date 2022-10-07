import React from 'react'

const GoogleMap = () => {
  return (
    <div className="map-area">
      <iframe
        //   https://www.google.com/maps/place/3975+Jackson+St+%23208,+Riverside,+CA+92503,+USA/@33.927642,-117.4411255,180m/data=!3m1!1e3!4m5!3m4!1s0x80dcb0db0180b6ad:0x11d2725383f7ff30!8m2!3d33.9276397!4d-117.4407935
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8288827683186!2d-123.36207488437536!3d48.44062387924871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f73811b3b8513%3A0x968aa5572a89f353!2s210-2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1607418551666!5m2!1sen!2sbd"
        height="550"
      ></iframe>
    </div>
  )
}

export default GoogleMap
