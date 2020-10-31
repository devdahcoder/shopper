import React from 'react'
import "./assets/style/index.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SellerApplicationNav from "../SellerApplicationNav/SellerApplicationNav"
import ApplicationCriteria from "../ApplicationCritaria/ApplicationCriteria"
import CompanyProfile from "../CompanyProfile/CompanyProfile"
import WebSocialMedia from "../WebSocialMedia/WebSocialMedia"
import ContactInfo from "../ContactInfo/ContactInfo"
import ConfirmAccount from "../ConfirmAccount/ConfirmAccount"

const SellerApplication = () => {
    return (
      <Router>
        <section>
          <div className="seller-application-display">
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <h1>Seller Application</h1>
            </div>

            <SellerApplicationNav />

            <Switch>
              <Route
                path="/application-criteria"
                exact
                component={ApplicationCriteria}
              />
              <Route 
                path="/company-profile" 
                exact 
                component={CompanyProfile} 
                
              />
              <Route
                path="/web-&-social-media"
                exact
                component={WebSocialMedia}
              />
              <Route 
                path="/contact-info" 
                exact 
                component={ContactInfo} 

              />
              <Route 
                path="/confirm-account" 
                exact 
                component={ConfirmAccount} 

              />
            </Switch>
          </div>
        </section>
      </Router>
    );
}

export default SellerApplication
