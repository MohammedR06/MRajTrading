import React from "react";

function Map() {
  return (
    <>
      {/* <h3 className="size mt-5 text-center"></h3> */}
      <div className="container3 mt-5">
        <iframe
          className="map"
          title="M Raj Trading Co"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5771015444398!2d72.83182351472759!3d18.95010398716026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf693a860ebb%3A0xef45ce80f5acd9a9!2sM%20Raj%20Trading%20Company!5e0!3m2!1sen!2sin!4v1658125431305!5m2!1sen!2sin"
          width="100%"
          height="300"
          // allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
