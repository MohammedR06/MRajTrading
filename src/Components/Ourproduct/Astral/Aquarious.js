import React from "react";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import p1 from "../Astral/Astral upvc/elbow.jpg";
import p2 from "../Astral/Astral upvc//tee.jpg";
import p3 from "../Astral/Astral upvc/socket.jpg";
import p4 from "../Astral/Astral upvc/mta.jpg";
import p5 from "../Astral/Astral upvc/fta.jpg";
import p6 from "../Astral/Astral upvc/tankNipel.jpg";
import p7 from "../Astral/Astral upvc/union.jpg";
import p8 from "../Astral/Astral upvc/showElbow.jpg";

function Aquarious() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className=" text-center mb-5 mt-5 text-decoration-underline">
            Aquarious Pipes and Fittings
          </h3>
          <h5 className="text-left mx-4 mt-3 text-primary text-decoration-underline">
            Quality (Schedule)
          </h5>
          <ul>
            <li className="mx-5">SCH 40: As per ASTM D1785, D2466</li>
            <li className="mx-5">SCH 80: As per ASTM D1785, D2467</li>
          </ul>
          <h5 className="text-left mx-4 mt-3 text-primary text-decoration-underline">
            Available Sizes:
          </h5>
          <ul>
            <li className="mx-5">
              SCH 40: 1.5 cm (1/2”) to 30.0 cm (12”) (IPS) As per ASTM D1785,
              D2466
            </li>
            <li className="mx-5">
              SCH 80: 1.5 cm (1/2”) to 30.0 cm (12”) (IPS) As per ASTM D1785,
              D2467
            </li>
          </ul>
          <div className="row ">
            <div className=" col-md-3">
              <Card
                title="Elbow"
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
export default Aquarious;
