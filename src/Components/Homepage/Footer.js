import React from "react";

function Footer(props) {
  return (
    <>
      <footer className="text-black text-center text-lg-start  bg">
        <div className="container p-4 mt-3">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About us</h5>
              <p>
                Established in 2001 , M Raj Trading Company has made a name for
                itself in the list of top suppliers of in India. The supplier
                company is located in Mumbai, Maharashtra and is one of the
                leading sellers of listed products.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-center mb-4">Contact us</h5>
              <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="ms-2">
                    194/198 Nagdevi Street, Mumbai, Maharashtra 400003
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="ms-2">nasir2152@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="ms-2">+91 9892558564 , 7977531092</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="ms-2">022 49625221</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 text-center">Opening hours</h5>

              <table className="table text-center text-black">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>10:30am - 8pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>10:30am - 8pm</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
