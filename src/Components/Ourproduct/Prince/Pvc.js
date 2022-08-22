import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Pvc() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mb-5 mt-5">
            SWR PIPES AND FITTINGS
          </h3>
          <h5 className="text-left mx-4 mt-3 text-primary text-decoration-underline">
            Available Sizes:
          </h5>
          <ul>
            <li className="mx-5">7.5 cm, 9.0 cm, 11.0 cm and 16.0 cm</li>
          </ul>
          <div className="row ">
            <div className="col-md-3">
              <Card
                title="Bend (Elbow)"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/9934New%20Project%20-%202021-02-19T190121.952.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/3819New%20Project%20-%202021-02-19T190151.870.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/7932New%20Project%20-%202021-02-19T190101.352.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Nahani trap w/o jali"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/7131New%20Project%20-%202021-02-19T232815.531.jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="Door Bend (Elbow)"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/7206New%20Project%20-%202021-02-19T180221.675.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Door Tee"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/9038New%20Project%20-%202021-02-19T180518.547.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Shoe Bend (Elbow 45)"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/2457New%20Project%20-%202021-02-19T180828.547.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Multi trap w/o jali"
                description="All Sizes are available"
                imageUrl="https://www.princepipes.com/uploads/7810New%20Project%20-%202021-02-19T232917.571.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pvc;
