import React from "react";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";

function Aquarious() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className=" text-center mb-5 mt-5">
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
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_aquarius_aq-sch-80-249567-elbow-90-(soc)--2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_aq-sch-40-249520-tee-(soc).jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_aq-sch-40-249537-fapt-(upvc-thread)---2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_aq-sch-40-249538-mapt-(upvc-thread).jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_new_project_(40).jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_aquarius_aq-sch-80-249597-tank-adapter---4.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_new_project_(39).jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_aquarius_aq-sch-80-249568-elbow-45-(soc).jpg"
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
