import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Upvc() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center mb-5 mt-5 text-decoration-underline">
            EasyFit UPVC Pipes and Fittings
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
            <div className="col-md-3">
              <Card
                title="Elbow"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/4183New%20Project%20-%202021-02-16T155645.432.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/7938New%20Project%20-%202021-02-16T155804.360.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/5060New%20Project%20-%202021-02-16T155042.448.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/9550New%20Project%20-%202021-02-16T155920.806.jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/6862New%20Project%20-%202021-02-16T161853.671.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/1902tank-connector-plain.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/3383New%20Project%20-%202021-02-16T155827.008.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/9262New%20Project%20-%202021-02-16T155744.816.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upvc;
