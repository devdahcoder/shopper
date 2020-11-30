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
import Category from "./shopper/Category/Category"
import {useSelector} from "react-redux"
import Login from "./shopper/Login/Login"
import SignUp from "./shopper/SignUp/SignUp"
import styled from "styled-components"



const MainWrapper = styled.section `
  
`;

const Main = styled.div `
  position: relative;
`


function App() {

  const login = useSelector((state) => state.login.showLogin);
  const signup = useSelector((state) => state.signup.showSignup);

  return (
    <MainWrapper>
      <Router>
        <Main>
          {login ? <Login /> : null}
          {signup ? <SignUp /> : null}
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/wishlist" component={Wish} />
            <Route exact path="/category" component={Category} />
            <Route
              exact
              path="/application-criteria"
              component={SellerApplication}
            />
            <Route
              exact
              path="/shipping-address"
              component={ShippingApplication}
            />
          </Switch>
          <Footer />
        </Main>
      </Router>
    </MainWrapper>
  );
};


export default App;