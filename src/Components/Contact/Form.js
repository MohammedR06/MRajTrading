import React from "react";
import emailjs from "emailjs-com";

function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2esgz1a",
        "template_hn8j1zd",
        e.target,
        "wD3a1IFQTWX6Wqt5R"
      )
      .then((res) => {
        alert("Done");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <div className="container ps-3 pe-9 mt-5 bg-body rounded">
          <div className=" Form">
            <h2 className="contact mt-5 my-4 text-decoration-underline">
              Contact Us
            </h2>
          </div>
          <div className="col-md-6 form-floating mb-3">
            <input
              type="name"
              className="form-control"
              id="Name"
              placeholder="Enter Name"
              name="name"
            />
            <label htmlFor="floatingInput">Enter Name</label>
          </div>
          <div className="col-md-6 form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="col-md-6 form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="floatingPhonenumber"
              placeholder="Phone Number"
              name="phone"
            />
            <label htmlFor="floatingPassword">Phone Number</label>
          </div>

          <div className="col-md-6  form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="message"
            ></textarea>
            <label htmlFor="floatingTextarea">Enter Message</label>
          </div>
          <button className="btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
