import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";

function Upvctruflow() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center mb-5 mt-5">
            Aquarious Pipes and Fittings
          </h3>
          <h5 className="text-left mx-4 mt-3 text-primary text-decoration-underline">
            Quality (Schedule)
          </h5>
          <table className="table table-bordered shadow" my-3>
            <tbody>
              <tr>
                <th>
                  <b>VARIANTS</b>
                </th>
                <th>
                  <b>SIZES AVAILABLE</b>
                </th>
                <th>
                  <b>PIPE</b>
                </th>
                <th>
                  <b>FITTINGS</b>
                </th>
              </tr>

              <tr>
                <td>Schedule 40</td>
                <td>
                  <sup>1</sup>⁄<sub>2</sub>” – 4” (15 mm to 150 mm)
                </td>
                <td>ASTM D 1785</td>
                <td>ASTM D 2466</td>
              </tr>
              <tr>
                <td>Schedule 80</td>
                <td>
                  <sup>1</sup>⁄<sub>2</sub>” – 4” (15 mm to 150 mm)
                </td>
                <td>ASTM D 1785</td>
                <td>ASTM D 2467</td>
              </tr>
            </tbody>
          </table>
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
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Elbow-90º-Plain.png"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tee"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Tee-90º-plain.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Socket"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Coupler-Plain-2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="MTA"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Male-Adapter-Plastic-Threaded-MAPT.png"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="FTA"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/FAPT-2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Tank Nipel"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/12/Tank-Nipple.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Union"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Union-2.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Elbow 45"
                description="All Sizes are available"
                imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/06/Bend-45º-Plain.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Upvctruflow;
