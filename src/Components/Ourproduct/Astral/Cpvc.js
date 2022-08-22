import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

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
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-1-cpvc_sch80---249419-elbow-90---2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-1-cpvc_sch40--249380-tee-2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-1-cpvc_sch40--249383-coupling.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_new_project_(8).jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-2---cpvc_sdr11--249259-female-adaptor-(cpvc-threads).jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-2---cpvc_sdr11--249268-tank-adaptor-(socket-type).jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-1-cpvc_sch80---249404-union.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="All Sizes are available"
                imageUrl="https://www.astralpipes.com/uploads/product_range_images/main_product_part-1-cpvc_sch80---249420-elbow-45.jpg"
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
