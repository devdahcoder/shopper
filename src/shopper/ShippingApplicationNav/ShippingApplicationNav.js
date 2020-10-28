import React from 'react'
import "./assets/style/index.css"
import {Link} from "react-router-dom"

const ShippingApplicationNav = () => {
    return (
      <section>
        <div className="shipping-application-header">
          <nav className="shipping-nav">
            <ul className="shipping-ul">
              <Link to="/shipping-address">
                <li>
                  <a href="">Shipping Address</a>
                </li>
              </Link>
              <Link to="/billing-details">
                <li>
                  <a href="">Billing Details</a>
                </li>
              </Link>
              <Link to="/payment">
                <li>
                  <a href="">Payment</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    );
}

export default ShippingApplicationNav
