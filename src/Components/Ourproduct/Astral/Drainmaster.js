import React from "react";
import Navbar from "../../Homepage/Navbar";
import Card from "../Card";
import Footer from "../../Homepage/Footer";
import p1 from "../Astral/Astral pvc/bend.jpg";
import p2 from "../Astral/Astral pvc/tee.jpg";
import p3 from "../Astral/Astral pvc/socket.jpg";
import p4 from "../Astral/Astral pvc/nahanitrap.jpg";
import p5 from "../Astral/Astral pvc/plugbend.jpg";
import p6 from "../Astral/Astral pvc/plugtee.jpg";
import p7 from "../Astral/Astral pvc/plugtee.jpg";
import p8 from "../Astral/Astral pvc/fourway.jpg";

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
                title="Nahani trap w/o jali"
                description="All Sizes are available"
                imageUrl={p4}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="Door Bend (Elbow)"
                description="All Sizes are available"
                imageUrl={p5}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Door Tee"
                description="All Sizes are available"
                imageUrl={p6}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Shoe Bend (Elbow 45)"
                description="All Sizes are available"
                imageUrl={p7}
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Multi trap w/o jali"
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

export default Drainmaster;
