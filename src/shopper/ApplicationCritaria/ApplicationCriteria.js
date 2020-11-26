import React from 'react'
import "./assets/style/index.css"
import ProfileImage from "../ProfileImage/ProfileImage"
import {Link} from "react-router-dom"



const ApplicationCriteria = () => {

    const pixSize = "80px"
    return (
      <div>
        <div className="application-criteria-container">
          <div className="criteria-copyright">
            <p>
              Copyright will provide is wonderful serenity has taken possession
              of my entire as soul, like these sweet mornings of spring which I
              enjoy with my whole heart. I am alone standards.
            </p>

            <a
              className="criteria-copyright guideline"
              href="http://www.google.com"
            >
              Read our Buyer guideline
            </a>
          </div>

          <form action="">
            <div className="application-form-display">
              <div className="seller-form">
                <div className="label">Your Account</div>

                <div className="seller-form-image">
                  <ProfileImage pixSize={pixSize} />
                  <input className="file" type="file" name="" id="" />
                </div>

                <div className="email-container">
                  <label className="email-label" htmlFor="">
                    Email
                  </label>
                  <input
                    className="email"
                    type="email"
                    name=""
                    id=""
                    placeholder="xyz.abc@deb.com"
                  />
                  <a className="seller-log-out" href="http://www.google.com">
                    Sign out and apply with another account
                  </a>
                </div>
              </div>
              <div className="seller-form">
                <div className="label">How did you hear about Shopper</div>

                <select className="select" name="" id="">
                  <option value="newspaper">Newspaper</option>
                  <option value="advertisment">Advertisment</option>
                  <option value="magazine">Magazine</option>
                </select>
              </div>
            </div>
          </form>

          <div className="criteria-btn-container">
            <Link to="/application-criteria">
              <button className="btn btn-back">Go Back</button>
            </Link>

            <Link to="/company-profile">
              <button className="btn btn-next">Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ApplicationCriteria