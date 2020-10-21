import React from 'react'
import "./assets/style/index.css"
import ProfileImage from "../ProfileImage/ProfileImage"



const ApplicationCritaria = () => {

    const pixSize = "80px"
    return (
      <div>
        <div className="application-critaria-container">
          <div className="critaria-copyright">
            <p>
              Copywright will prowide is wonderful serenity has taken possession
              of my entire as soul, like these sweet mornings of spring which I
              enjoy with my whole heart. I am alone standards.
            </p>

            <a
              className="critaria-copyright guideline"
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
                  <label className="email-label" htmlFor="">Email</label>
                  <input
                    className="email"
                    type="email"
                    name=""
                    id=""
                    placeholder="xyz.abc@deb.com"
                  />
                  <a className="seller-log-out" href="">Sign out and apply with another account</a>
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

          <div className="seller-btn-container">
            <button className="btn btn-back">Go Back</button>
            <button className="btn btn-next">Next</button>
          </div>
        </div>
      </div>
    );
}

export default ApplicationCritaria
