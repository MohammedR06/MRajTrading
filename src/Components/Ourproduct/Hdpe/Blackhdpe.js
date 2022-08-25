import React from "react";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Hdpe from "../../assets/hdpe.png";

function Blackhdpe() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mt-5 mb-5">
            HDPE PIPES
          </h3>
          <div className="row ">
            <div className="col-md-3">
              <Card
                title="HDPE PIPE"
                description="ALL Sizes are available"
                imageUrl={Hdpe}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blackhdpe;
