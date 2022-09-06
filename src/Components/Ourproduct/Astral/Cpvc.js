import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";
import p1 from "../Astral/Astral cpvc/elbow.jpg";
import p2 from "../Astral/Astral cpvc/tee.jpg";
import p3 from "../Astral/Astral cpvc/socket.jpg";
import p4 from "../Astral/Astral cpvc/mta.jpg";
import p5 from "../Astral/Astral cpvc/fta.jpg";
import p6 from "../Astral/Astral cpvc/tankNiple.jpg";
import p7 from "../Astral/Astral cpvc/union.jpg";
import p8 from "../Astral/Astral cpvc/showElbow.jpg";

function Cpvc() {
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
                imageUrl={p1}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl={p2}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl={p3}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl={p4}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl={p5}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl={p6}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl={p7}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="All Sizes are available"
                imageUrl={p8}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cpvc;
