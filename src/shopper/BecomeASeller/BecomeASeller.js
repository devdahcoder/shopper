import React from 'react'
import "./asset/style/index.css"
import Seller from "./asset/images/seller.svg"
import {Link} from "react-router-dom"
import Button from "../../components/Button"
import HomeProductHeader from "../../components/ProductHeader";
import UserApplicationInfo from "../../components/ProductIntro";


const BecomeASeller = () => {
    return (
      <section className="container">
        <div className="become-seller">
          <div>
            <img src={Seller} alt="" />
          </div>
          <div className="seller-text">
            <HomeProductHeader>Why Become a Buyer?</HomeProductHeader>

            <UserApplicationInfo>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam feliultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </UserApplicationInfo>

            <Link to="/application-criteria">
              <Button>Apply To Sell</Button>
            </Link>
          </div>
        </div>
      </section>
    );
}

export default BecomeASeller
