import React from "react";
import Card from "../Card";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";
import Pipe1 from "../../assets/pipe1.jpg";
import Pipe2 from "../../assets/pipe.jpg";
import Pipe3 from "../../assets/pipe2.jpg";
import Pipe4 from "../../assets/pipe4.jpg";
import Pipe5 from "../../assets/pipe5.jpg";
import Pipe6 from "../../assets/pipe6.jpg";
import Pipe7 from "../../assets/pipe7.jpeg";

function Gardenpipe() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mt-5 mb-5">
            Garden Pipe and Flexible Pipe
          </h3>
          <div className="row ">
            <div className="col-md-3">
              <Card
                title="Halwa Pipe"
                description="ALL Sizes are available"
                imageUrl={Pipe1}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Green Braided Pipe"
                description="ALL Sizes are available"
                imageUrl={Pipe2}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="White Breaded Pipe"
                description="ALL Sizes are available"
                imageUrl={Pipe3}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="SUction Pipe"
                description="ALL Sizes are available"
                imageUrl={Pipe4}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="Level Pipe"
                description="ALL Sizes are available"
                imageUrl={Pipe5}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Cotton Pipe"
                description="ALL Sizes are available"
                imageUrl={Pipe6}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Zebra (Plastic) Pipe "
                description="ALL Sizes are available"
                imageUrl={Pipe7}
              />
            </div>
            {/* <div className="col-md-3">
              <Card
                title="Pillar Cock"
                description="Model : TYPCXXC12"
                imageUrl={Pipe4}
              />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gardenpipe;
