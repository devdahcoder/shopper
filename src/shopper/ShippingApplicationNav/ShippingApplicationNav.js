import React from 'react'
import "./assets/style/index.css"


const ShippingApplicationNav = () => {
    return (
      <section>
        <div className="shipping-application-header">
          <nav className="shipping-nav">
            <ul className="shipping-ul">
              <li>
                <a href="">Shipping Address</a>
              </li>
              <li>
                <a href="">Billing Details</a>
              </li>
              <li>
                <a href="">Payment</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
}

export default ShippingApplicationNav
