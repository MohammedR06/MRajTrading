import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Cpvcpipe() {
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
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Elbow-90°-Plain.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Tee-90°-Plain.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Coupler-Plain.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Reducer-MTA.png"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/FAPT.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Tank-Nipple.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Union.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="https://www.truflopipes.com/wp-content/uploads/2019/06/Bend-45%C2%B0-Plain.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cpvcpipe;
