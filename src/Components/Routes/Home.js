import React from "react";
import Carousel from "../Homepage/Carousel";
import Company from "../Homepage/Company";
import Footer from "../Homepage/Footer";
import Itemsection from "../Homepage/Itemsection";
import Navbar from "../Homepage/Navbar";
import Form from "../Contact/Form";
import Map from "../Contact/Map";
import Floatingbutton from "../Homepage/Floatingbutton";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Itemsection />
      <Company />
      <Form />
      <Map />
      <Footer />
      <Floatingbutton />
    </>
  );
}

export default Home;
