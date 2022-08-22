import React from "react";
import Form from "../Contact/Form";
import Map from "../Contact/Map";
import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import Floatingbutton from "../Homepage/Floatingbutton";

function ContactUs() {
  return (
    <>
      <Navbar />
      <Form />
      <Map />
      <Footer />
      <Floatingbutton />
    </>
  );
}

export default ContactUs;
