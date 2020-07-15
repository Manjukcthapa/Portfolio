import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="information">
        <div className="contact">
          <h3 className="header3">MY Phone</h3>
          <div className="contacticon">
            <div>
              <i class="fa fa-phone-square fa-2x" aria-hidden="true"></i>
            </div>
            <div>
              <p className="phonenumber">8162660106</p>
            </div>
          </div>

          <div>
            <h3 className="header3">Email Address</h3>
            <div className="contacticon">
              <div>
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
              </div>
              <div>
                <a className="phonenumber">kcmanjuthapa@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="header3">Location</h3>
            <div className="contacticon">
              <div>
                <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              </div>
              <div>
                <p className="phonenumber">Atlanta, GA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
