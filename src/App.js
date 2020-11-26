import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./shopper/Header/Header"
import Home from "./shopper/Home/Home";
import SellerApplication from "./shopper/SellerApplication/SellerApplication"
import ShippingApplication from "./shopper/ShippingApplication/ShippingApplication"
import Cart from "./shopper/Cart/Cart"
import Footer from "./shopper/Footer/Footer"
import Wish from "./shopper/Wish/Wish"




function App() {

  

  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/wishlist" component={Wish} />
          <Route exact path="/application-criteria" component={SellerApplication} />
          <Route exact path="/shipping-address" component={ShippingApplication} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};


export default App;