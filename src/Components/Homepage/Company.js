import React from "react";
import logo from "./../../assets/logo.png";
import logo1 from "./../../assets/logo1.png";
import logo2 from "./../../assets/logo2.png";
import logo3 from "./../../assets/logo3.png";

function Company() {
  return (
    <>
      <div id="brand-logo" className="my-5">
        <div className="row d-flex align-items-center text-center">
          <div className="col-lg-3 py-3">
            <a href="/products/astral">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-lg-3 py-3">
            <a href="/products/prince">
              <img src={logo1} alt="logo" />
            </a>
          </div>
          <div className="col-lg-3 py-3">
            <a href="/products/truflow">
              <img src={logo2} alt="logo" />
            </a>
          </div>
          <div className="col-lg-3 py-3">
            <a href="/products/gravity">
              <img src={logo3} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
