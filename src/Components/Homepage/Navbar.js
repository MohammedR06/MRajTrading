import React from "react";
import { Link } from "react-router-dom";
import og from "./../../assets/atm.svg";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg  ">
      <Link className="navbar" to="/">
        <img src={og} alt="/" width="200" height="35" />
      </Link>
      <div className=" container-fluid ">
        <Link className="navbar-brand " to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/ourproduct">
                Product
              </Link>
              <Link className="navbar-brand" to="/contactus">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
