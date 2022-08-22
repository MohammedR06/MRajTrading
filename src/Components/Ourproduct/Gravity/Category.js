import React from "react";
import Card from "../Card";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";

function Category() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="container6">
          <h3 className="product text-center text-decoration-underline mt-5 mb-5">
            Gravity TYDO
          </h3>
          <div className="row ">
            <div className="col-md-3">
              <Card
                title="Wall Mixture"
                description="Model : TYTM15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201041113_WALL-MIXER-TELEPHONIC.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Bib Cock"
                description="Model : TYBC15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201031551_BIB-COCK-TYDO.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Angle Cock"
                description="Model : TYAC15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201031713_ANGLE-VALVE-TYDO.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Pillar Cock"
                description="Model : TYPCXXC12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201031800_PILLAR-COCK.jpg"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Card
                title="Long Nose"
                description="Model : TYLN15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201031636_LONG-NOSE.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="2 in 1 Bib Cock"
                description="Model : TY2B15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201031925_2in1-BIB-COCK-TYDO.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Sink Cock "
                description="Model : TYSC15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201035327_SINK-COCK.jpg"
              />
            </div>
            <div className="col-md-3">
              <Card
                title="Concealed Stop Cock 15MM"
                description="Model :TYCS15C12"
                imageUrl="https://gravitybath.com/admin/style/images/products/20211201032037_CONCEALED-STOP-COCK-15mm.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Category;
