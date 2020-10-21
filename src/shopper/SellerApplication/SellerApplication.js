import React from 'react'
import "./assets/style/index.css"
import SellerApplicationNav from "../SellerApplicationNav/SellerApplicationNav"
import ApplicationCritaria from "../ApplicationCritaria/ApplicationCritaria"
import CompanyProfile from "../CompanyProfile/CompanyProfile"
import WebSocialMedia from "../WebSocialMedia/WebSocialMedia"



const SellerApplication = () => {
    return (
      <section>
        <div className="seller-application-display">
          <div style={{textAlign: "center", padding: "10px 0"}}>
            <h1>Seller Application</h1>
          </div>

          <SellerApplicationNav />

          {/* <ApplicationCritaria /> */}
          {/* <CompanyProfile /> */}
          <WebSocialMedia />


        </div>
      </section>
    );
}

export default SellerApplication
