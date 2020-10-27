import React, {useState} from 'react'
import Header from "../Header/Header"
import "./assets/style/index.css"
import Slider from "../Slider/Slider"
import TopSeller from "../TopSeller/TopSeller"
import BecomeABuyer from "../BecomeABuyer/BecomeABuyer"
import BecomeASeller from "../BecomeASeller/BecomeASeller"
import HomeProduct from "../HomeProduct/HomeProduct"
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"
import SellerApplication from "../SellerApplication/SellerApplication"
import ProfilePage from "../ProfilePage/ProfilePage"
import ShippingApplication from "../ShippingApplication/ShippingApplication"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"

const Home = () => {

    const [login, setLogin] = useState("")

    const cancelLogin = () => {
      setLogin(false)
    }

    const showLogin = () => {
      setLogin(true)
    }


    return (
      <section className="shopper-home">
        <Header showLogin={showLogin} />
        <Banner />
        <Slider />
        <TopSeller />
        <BecomeABuyer />
        <BecomeASeller />
        <HomeProduct />
        {/* <SellerApplication /> */}
        {/* <ShippingApplication /> */}
        {/* <ProfilePage /> */}
        {/* {login ? <Login cancelLogin={cancelLogin} /> : null} */}
        {login ? <SignUp cancelLogin={cancelLogin} /> : null}
        <Footer />
      </section>
    );
}

export default Home
