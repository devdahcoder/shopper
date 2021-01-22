import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./shopper/Header/Header"
import Home from "./shopper/Home/Home";
import SellerApplication from "./shopper/SellerApplication/SellerApplication"
import ShippingApplication from "./shopper/ShippingApplication/ShippingApplication"
import Cart from "./shopper/Cart/Cart"
import Footer from "./shopper/Footer/Footer"
import Wish from "./shopper/Wish/Wish"
import ProfilePage from "./shopper/ProfilePage/ProfilePage"
import Category from "./shopper/Category/Category"
import {useSelector, useDispatch} from "react-redux"
import Login from "./shopper/Login/Login"
import SignUp from "./shopper/SignUp/SignUp"
import styled from "styled-components"
import firebase from "firebase"
import {withRouter} from "react-router-dom"
import {setUserSuccess, logOut, logUser, getUser, logUserSuccess, clearUserSuccess} from "./actions/setUser"


const MainWrapper = styled.section `
  
`;

const Main = styled.div `
  position: relative;
`




function App({history}) {

  const login = useSelector((state) => state.login.showLogin);
  const signup = useSelector((state) => state.login.showSignup);
  const dispatch = useDispatch()
  // const isMountedRef = useRef(null);

  useEffect(() => {

    // isMountedRef.current = true;
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          history.push("/");
          dispatch(setUserSuccess(user))
        }
        else {
          history.push("/")
          dispatch(logOut());
        }
      })
    // return () => {
    //   console.log("user unmount")
    //   isMountedRef.current = false;
    // }
  }, [])




  return (
    <MainWrapper>
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
            <Route
              exact
              path="/profile-page"
              component={ProfilePage}
            />
          </Switch>
          <Footer />
        </Main>
    </MainWrapper>
  );
};


export default withRouter(App);
