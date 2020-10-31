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
                  Shipping Address
                </li>
              </Link>
              <Link to="/billing-details">
                <li>
                  Billing Details
                </li>
              </Link>
              <Link to="/payment">
                <li>
                  Payment
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    );
}

export default ShippingApplicationNav
