import React from 'react'
import "./assets/style/index.css"


const BillingDetail = () => {
    return (
      <div className="billing-address-form">
        <form action="" className="billing-form">
          <div className="billing-form-name">
            <div>
              <label htmlFor="">First Name</label>
              <input
                className="billing-input"
                type="text"
                name=""
                id=""
                placeholder="Jhone"
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                className="billing-input"
                type="text"
                name=""
                id=""
                placeholder="Smith"
              />
            </div>
            <div>
              <label htmlFor="">Company Name</label>
              <input
                className="billing-input"
                type="text"
                name=""
                id=""
                placeholder="Rosuson Industries"
              />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <select className="billing-input" name="" id="">
                <option value="united kingdom">United Kingdom(UK)</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Town / City</label>
              <input
                className="billing-input"
                type="text"
                name=""
                id=""
                placeholder="eg.New york"
              />
            </div>
            <div>
              <label htmlFor="">Postcode</label>
              <input
                className="billing-input"
                type="text"
                name=""
                id=""
                placeholder="eg.358745"
              />
            </div>
          </div>

          <div className="billing-email-form">
            <div>
              <label htmlFor="">Address</label>
              <input
                className="billing-input"
                type="text"
                name=""
                id=""
                placeholder="eg.2nd steer, Costrica, Uk354548"
              />
            </div>
            <div className="billing-number-form">
              <div>
                <label htmlFor="">Email Address</label>
                <input
                  className="billing-input"
                  type="email"
                  name=""
                  id=""
                  placeholder="abc@xyz.com"
                />
              </div>
              <div>
                <label htmlFor="">Email Address</label>
                <input
                  className="billing-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="eg.94 788 1221"
                />
              </div>
              <div className="billing-checkbox-display">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Create an Account?</label>
              </div>
            </div>
          </div>
        </form>

        <div className="billing-btn-container">
          <button className="btn back-btn">Go Back</button>
          <button className="btn next-btn">Next</button>
        </div>
      </div>
    );
}

export default BillingDetail
