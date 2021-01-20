import React from 'react'
import "./assets/style/index.css"
import SliderDisplay from "../SliderDisplay/SliderDisplay"
import TopSeller from "../TopSeller/TopSeller"
import BecomeABuyer from "../BecomeABuyer/BecomeABuyer"
import BecomeASeller from "../BecomeASeller/BecomeASeller"
import HomeProduct from "../HomeProduct/HomeProduct"
import Banner from "../Banner/Banner"
import {useSelector} from "react-redux"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"






const Home = () => {


    const login = useSelector((state) => state.login.showLogin);
    const signup = useSelector((state) => state.login.showSignup);


    return (
      <section className="shopper-home">
        <Banner />
        <SliderDisplay />
        <TopSeller />
        <BecomeABuyer />
        <BecomeASeller />
        <HomeProduct />
        {login ? <Login /> : null}
        {signup ? <SignUp /> : null}
      </section>
    );
}

export default Home;
