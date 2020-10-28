import React from 'react'
import "./assets/style/index.css"
import {Link} from "react-router-dom"


const SellerApplicationNav = () => {
    return (
      <section>
        <div className="seller-application-header">
          <nav className="seller-nav">
            <ul className="seller-ul">
              <Link to="/application-criteria">
                <li>
                  <a href="">Application Criteria</a>
                </li>
              </Link>
              <Link to="/company-profile">
                <li>
                  <a href="">Company Profile</a>
                </li>
              </Link>
              <Link to="/web-&-social-media">
                <li>
                  <a href="">Web & Social Media</a>
                </li>
              </Link>
              <Link to="/contact-info">
                <li>
                  <a href="">Contact Info</a>
                </li>
              </Link>
              <Link to="/confirm-account">
                <li>
                  <a href="">Confirm Account</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    );
}

export default SellerApplicationNav
