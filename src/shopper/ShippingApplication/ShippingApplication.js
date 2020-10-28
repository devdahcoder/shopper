import React from 'react'
import "./assets/style/index.css";
import ShippingApplicationNav from "../ShippingApplicationNav/ShippingApplicationNav"
import ShippingAddress from "../ShippingAddress/ShippingAddress"
import BillingDetail from "../BillingDetail/BillingDetail"
import Payment from "../Payment/Payment"
import CheckOut from "../CheckOut/CheckOut"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const ShippingApplication = () => {
    return (
        <Router>
            <section>
                <div className="shipping-application-display">
                    <ShippingApplicationNav />

                    <Switch>
                        <Route exact path="/shipping-address" component={ShippingAddress} />
                        <Route exact path="/billing-details" component={BillingDetail} />
                        <Route exact path="/payment" component={Payment} />
                        <Route exact path="/checkout" component={CheckOut} />
                    </Switch>
                </div>
            </section>
        </Router>
    )
}

export default ShippingApplication
