import React from 'react'
import "./assets/style/index.css"
import {Link} from "react-router-dom"

const ContactInfo = () => {
    return (
      <div>
        <div className="contact-info">
          <form action="">
            <div className="contact-name-form">
              <div>
                {/* <label className="contact-label" htmlFor="">
                  Name
                </label> */}

                <select className="contact-input" name="" id="">
                  <option value="mr">Mr</option>
                </select>
              </div>
              <div>
                <input
                  className="contact-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  className="contact-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Middle Name"
                />
              </div>
              <div>
                <input
                  className="contact-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="contact-title-form">
              <label className="contact-label" htmlFor="">
                Title
              </label>

              <input
                className="contact-input"
                type="text"
                name=""
                id=""
                placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser"
              />
            </div>

            <div>
              <div className="contact-mail-header">
                <p>BUSINESS MAILING ADDRESS</p>
              </div>

              <div className="contact-address">
                <div>
                  <label className="contact-label" htmlFor="">
                    Street Address
                  </label>

                  <input className="contact-input" type="text" name="" id="" />
                </div>
                <div>
                  <label className="contact-label" htmlFor="">
                    Apt/Suite/Other
                  </label>

                  <input className="contact-input" type="text" name="" id="" />
                </div>
                <div>
                  <label className="contact-label" htmlFor="">
                    City
                  </label>

                  <input className="contact-input" type="text" name="" id="" />
                </div>
              </div>

              <div className="contact-address">
                <div>
                  <label className="contact-label" htmlFor="">
                    Zip/Postal Code
                  </label>

                  <input className="contact-input" type="text" name="" id="" />
                </div>
                <div>
                  <label className="contact-label" htmlFor="">
                    Country
                  </label>

                  <select className="contact-input" name="" id="">
                    <option value="select country">Select Country</option>
                  </select>
                </div>
                <div>
                  <label className="contact-label" htmlFor="">
                    Phone Number
                  </label>

                  <input className="contact-input" type="text" name="" id="" />

                  <div className="contact-notification">
                    <p>
                      To Validate your account please enter valid mobile Number
                      to receive confirmation code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="contact-btn-container">
            <Link to="/web-&-social-media">
              <button className="btn back-btn">Go Back</button>
            </Link>

            <div className="btn-link">
              <p>
                By Submitting this application, you agree to the{" "}
                <span>
                  <a href="http://www.google.com">Buyer guidelines</a>
                </span>
              </p>
            </div>
            <Link to="/confirm-account">
              <button className="btn next-btn">Submit Application</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ContactInfo
