import React, {useState} from 'react'
import "./assets/style/index.css"
import Slider from "../Slider/Slider"
import TopSeller from "../TopSeller/TopSeller"
import BecomeABuyer from "../BecomeABuyer/BecomeABuyer"
import BecomeASeller from "../BecomeASeller/BecomeASeller"
import HomeProduct from "../HomeProduct/HomeProduct"
import Banner from "../Banner/Banner"
import {useSelector} from "react-redux"
// import SellerApplication from "../SellerApplication/SellerApplication"
// import ProfilePage from "../ProfilePage/ProfilePage"
// import ShippingApplication from "../ShippingApplication/ShippingApplication"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"






const Home = () => {




    const login = useSelector((state) => state.login.showLogin);
    const signup = useSelector((state) => state.signup.showSignup);


    return (
      <section className="shopper-home">
        <Banner />
        <Slider />
        <TopSeller />
        <BecomeABuyer />
        <BecomeASeller />
        <HomeProduct />
        {/* <SellerApplication /> */}
        {/* <ShippingApplication /> */}
        {/* <ProfilePage /> */}
        {login ? <Login /> : null}
        {signup ? <SignUp /> : null}
      </section>
    );
}

export default Home
