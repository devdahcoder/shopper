import React from 'react'
import "./assets/style/index.css";
import {Link} from "react-router-dom"


const ShippingAddress = () => {
    return (
      <div className="shipping-address-form">
        <form action="" className="shipping-form">
          <div className="shipping-form-name">
            <div>
              <label htmlFor="">First Name</label>
              <input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="Jhone"
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="Smith"
              />
            </div>
            <div>
              <label htmlFor="">Company Name</label>
              <input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="Rosuson Industries"
              />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <select className="shipping-input" name="" id="">
                <option value="united kingdom">United Kingdom(UK)</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Town / City</label>
              <input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="eg.New york"
              />
            </div>
            <div>
              <label htmlFor="">Postcode</label>
              <input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="eg.358745"
              />
            </div>
          </div>

          <div className="shipping-email-form">
            <div>
              <label htmlFor="">Address</label>
              <input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="eg.2nd steer, Costrica, Uk354548"
              />
            </div>
            <div className="shipping-number-form">
              <div>
                <label htmlFor="">Email Address</label>
                <input
                  className="shipping-input"
                  type="email"
                  name=""
                  id=""
                  placeholder="abc@xyz.com"
                />
              </div>
              <div>
                <label htmlFor="">Email Address</label>
                <input
                  className="shipping-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="eg.94 788 1221"
                />
              </div>
              <div className="shipping-checkbox-display">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Create an Account?</label>
              </div>
            </div>
          </div>
        </form>

        <div className="shipping-btn-container">
          <Link to="/shipping-address">
            <button className="btn back-btn">Go Back</button>
          </Link>
          <Link to="/billing-details">
            <button className="btn next-btn">Next</button>
          </Link>
        </div>
      </div>
    );
}

export default ShippingAddress
