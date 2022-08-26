import React from "react";

import "font-awesome/css/font-awesome.min.css";

function Floatingbutton() {
  return (
    <>
      <div className="containerfloat">
        <a href="https://wa.me/919892558564" target="_blank" rel="noreferrer">
          <img
            src="https://programmingwithvishal.com/demo/whatsapp/whatsapp.png"
            alt="/"
            width="50px"
            className="whatsapp_float_btn float"
          />
        </a>
      </div>
    </>
  );
}

export default Floatingbutton;
