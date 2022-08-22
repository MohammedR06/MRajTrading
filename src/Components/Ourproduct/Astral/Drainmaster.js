import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Drainmaster() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mb-5 mt-5">
            Drain Master Pipes
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
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_astral_drainmaster__bend_87.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_drain_master_250465_single_tee.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_drain_master_250529_repair_coupler.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Nahani trap w/o jali"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_without-jali.jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="Door Bend (Elbow)"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_pipe-87.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Door Tee"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_drain_master_250469_single_tee_with_door.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Shoe Bend (Elbow 45)"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_drain_master_250451_bend_45.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Multi trap w/o jali"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_drain-master-traps_d-m-traps--250604-multi-floor-trap-partition-with-plug.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Drainmaster;
