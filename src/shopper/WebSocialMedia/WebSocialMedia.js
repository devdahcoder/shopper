import React from 'react'
import "./assets/style/index.css"
import Facebook from "./assets/images/facebook.svg"
import Pinterest from "./assets/images/pinterest.svg"
import Twitter from "./assets/images/twitter.svg"
import Instagram from "./assets/images/instagram.svg"


const WebSocialMedia = () => {
    return (
      <div className="social-account-form">
        <form action="">
          <div>
            <label className="web-label" htmlFor="">
              <span>
                <img src={Facebook} alt="" />
              </span>{" "}
              Facebook
            </label>

            <input
              className="web-"
              type="text"
              name=""
              id=""
              placeholder="paste url here"
            />
          </div>
          <div>
            <label className="web-label" htmlFor="">
              <span>
                <img src={Pinterest} alt="" />
              </span>{" "}
              Pinterest
            </label>

            <input type="text" name="" id="" placeholder="paste url here" />
          </div>
          <div>
            <label className="web-label" htmlFor="">
              <span>
                <img src={Twitter} alt="" />
              </span>{" "}
              Twitter
            </label>

            <input type="text" name="" id="" placeholder="paste url here" />
          </div>
          <div>
            <label className="web-label" htmlFor="">
              <span>
                <img src={Instagram} alt="" />
              </span>{" "}
              Instagram
            </label>

            <input type="text" name="" id="" placeholder="paste url here" />
          </div>
        </form>

        <div className="web-notification">
          <p>Note: Provide at least one social account</p>
        </div>

        <div className="web-btn-container">
          <button className="btn back-btn">Go Back</button>
          <button className="btn next-btn">Next</button>
        </div>
      </div>
    );
}

export default WebSocialMedia
