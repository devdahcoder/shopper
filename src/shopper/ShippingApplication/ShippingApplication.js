import React from 'react'
import "./assets/style/index.css";
import ShippingApplicationNav from "../ShippingApplicationNav/ShippingApplicationNav"
// import ShippingAddress from "../ShippingAddress/ShippingAddress"
// import BillingDetail from "../BillingDetail/BillingDetail"
import Payment from "../Payment/Payment"


const ShippingApplication = () => {
    return (
        <section>
            <div className="shipping-application-display">
                <ShippingApplicationNav />
                {/* <ShippingAddress /> */}
                {/* <BillingDetail /> */}
                <Payment />
            </div>
        </section>
    )
}

export default ShippingApplication
