import React from 'react'
import Header from "../Header/Header"
import "./assets/style/index.css"
// import Slider from "../Slider/Slider"
// import TopSeller from "../TopSeller/TopSeller"
// import BecomeABuyer from "../BecomeABuyer/BecomeABuyer"
// import BecomeASeller from "../BecomeASeller/BecomeASeller"
// import HomeProduct from "../HomeProduct/HomeProduct"
// import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"
// import SellerApplication from "../SellerApplication/SellerApplication"
import ProfilePage from "../ProfilePage/ProfilePage"

const Home = () => {
    return (
      <div>
        <Header />
        {/* <Banner />
        <Slider />
        <TopSeller />
        <BecomeABuyer />
        <BecomeASeller />
        <HomeProduct /> */}
        {/* <SellerApplication /> */}
        <ProfilePage />
        <Footer />
      </div>
    );
}

export default Home
