import React from "react";
import Card from "./Card";
import hdpe from "./../../assets/hdpe.png";
import { Link } from "react-router-dom";

function itemSection() {
  return (
    <div className="container my-5">
      <div className="container6">
        <h3 className="product text-center mt-5 mb-5">OUR PRODUCTS</h3>
        <h5 className=" text text-left my-3">1. ASTRAL PIPES</h5>
        <div className="row ">
          <div className="col-md-4">
            <Card
              title="CPVC PIPE"
              description="All Sizes are available"
              imageUrl="https://www.astralpipes.com/uploads/product_images/product_image/main_1557568991.jpg"
            />
            <Link to="/ourproduct/cpvc" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="AQUARIES Pipe"
              description="All Sizes are available"
              imageUrl="https://www.astralpipes.com/uploads/product_images/product_image/main_1557568533.jpg"
            />
            <Link to="/ourproduct/aquarious" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="DRAIN Master Pipe"
              description="All Sizes are available"
              imageUrl="https://www.astralpipes.com/uploads/product_images/product_image/main_1557569347.jpg"
            />
            <Link to="/ourproduct/drainmaster" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <h5 className="text text-left my-3">2. PRINCE PIPES</h5>
          <div className="col-md-4">
            <Card
              title="AGRI PIPES and FITTINGS (PVC)"
              description="All sizes are available"
              imageUrl="https://www.princepipes.com/uploads/3340intro-rhs-pic.png"
            />
            <Link to="/ourproduct/pvc" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="EASYFIT-UPVC PIPES and FITTINGS"
              description="All sizes are available"
              imageUrl="https://www.princepipes.com/uploads/4065New%20Project%20-%202021-02-16T130854.419.jpg"
            />
            <Link to="/ourproduct/upvc" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="FLOWGUARD PLUS CPVC PIPES and FITTNGS"
              description="All sizes are available"
              imageUrl="https://www.princepipes.com/uploads/3089flowguard-overview-image.jpg"
            />
            <Link to="/ourproduct/cpvcPlus" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <h5 className="text text-left my-3">3. TRUFLO PIPES</h5>
          <div className="col-md-4">
            <Card
              title="SWR PIPING SYSTEM"
              description="All sizes are available"
              imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/09/SWR-Clusters.png"
            />
            <Link to="/ourproduct/swr" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="UPVC PIPING SYSTEM"
              description="All sizes are available"
              imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/09/UPVC-Cluster.png"
            />
            <Link to="/ourproduct/upvctruflow" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="CPVC PIPING SYSTEM"
              description="All sizes are available"
              imageUrl="https://www.truflopipes.com/wp-content/uploads/2019/09/CPVC-Cluster.png"
            />
            <Link to="/ourproduct/cpvcpipe" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <Card
              title="GRAVITY BATHWARE"
              description="ALL FAUCETS and BATHWARE FITTINGS"
              imageUrl="https://gravitybath.com/admin/style/images/logo_logo.png"
            />
            <Link to="/ourproduct/gravity" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="GARDEN and FLEXIBLE PIPES"
              description="All sizes are available"
              imageUrl="https://img2.exportersindia.com/product_images/bc-full/2021/10/9328596/pvc-garden-hose-1633858560-6000095.jpeg"
            />
            <Link to="/ourproduct/gardenpipe" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-4">
            <Card
              title="HDPE PIPES"
              description="All sizes are available"
              imageUrl={hdpe}
            />
            <Link to="/ourproduct/hdpe" className="btn btn-primary mt-2">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default itemSection;
