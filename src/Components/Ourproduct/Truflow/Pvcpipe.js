import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Pvcpipe() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mb-5 mt-5">
            SWR Pipes
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
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Bend-87.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Single-Tee.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Coupler.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Nahani trap w/o jali"
                description="All Sizes are available"
                imageUrl="	https://www.truflopipes.com/wp-content/uploads/2019/06/nAHANI-TRAP-WITHOUT-jAIL.jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="Door Bend (Elbow)"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Bend-87-with-door.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Door Tee"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Single-Tee-with-Door.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Shoe Bend (Elbow 45)"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/12/Bend-45-Degree.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Multi trap w/o jali"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/12/12.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pvcpipe;
