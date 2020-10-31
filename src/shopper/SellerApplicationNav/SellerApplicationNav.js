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
                  Application Criteria
                </li>
              </Link>
              <Link to="/company-profile">
                <li>
                  Company Profile
                </li>
              </Link>
              <Link to="/web-&-social-media">
                <li>
                  Web & Social Media
                </li>
              </Link>
              <Link to="/contact-info">
                <li>
                  Contact Info
                </li>
              </Link>
              <Link to="/confirm-account">
                <li>
                  Confirm Account
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    );
}

export default SellerApplicationNav
