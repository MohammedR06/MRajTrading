import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Cpvcplus() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mt-5">
            CPVC PRO
          </h3>
          <h5 className="text-left mx-4 mt-3 text-primary text-decoration-underline">
            Available Sizes:
          </h5>
          <ul>
            <li className="mx-5">
              SDR 11 and SDR 13.5: 1.5 cm (½”) to 5.0 cm (2”) CTS confirming to
              IS 15778:2007, as per ASTM D2846
            </li>
            <li className="mx-5">
              SCH 40: 6.5 cm (2½”) to 10.0 cm (4”) IPS, as per ASTM F441 and
              ASTM F438
            </li>
            <li className="mx-5">
              SCH 80: 6.5 cm (2½”) to 30.0 cm (12”) IPS, as per ASTM F441 and
              ASTM F439
            </li>
          </ul>
          <div className="row ">
            <div className="col-md-3">
              <Card
                title="Elbow 90"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/3157New%20Project%20-%202021-02-15T131721.123.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/4276New%20Project%20-%202021-02-15T132615.877.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/2718New%20Project%20-%202021-02-15T125322.527.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/6887New%20Project%20-%202021-02-15T155048.051.jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/5587New%20Project%20-%202021-02-15T155059.114.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/tank-connector-plain.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/1567cpvc-union.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/6175New%20Project%20-%202021-02-15T132216.406.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cpvcplus;
