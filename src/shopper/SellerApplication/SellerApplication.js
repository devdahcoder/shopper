import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SellerApplicationNav from "../SellerApplicationNav/SellerApplicationNav"
import ApplicationCriteria from "../ApplicationCritaria/ApplicationCriteria"
import CompanyProfile from "../CompanyProfile/CompanyProfile"
import WebSocialMedia from "../WebSocialMedia/WebSocialMedia"
import ContactInfo from "../ContactInfo/ContactInfo"
import ConfirmAccount from "../ConfirmAccount/ConfirmAccount"
import {SellerApplicationContainer} from "../../components/Main"
import { SellerHeader, SellerHeaderContent } from "../../components/Header";

const SellerApplication = () => {
    return (
      <Router>
        <section>
          <SellerApplicationContainer>
            <SellerHeader>
              <SellerHeaderContent>Seller Application</SellerHeaderContent>
            </SellerHeader>

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
          </SellerApplicationContainer>
        </section>
      </Router>
    );
}

export default SellerApplication
