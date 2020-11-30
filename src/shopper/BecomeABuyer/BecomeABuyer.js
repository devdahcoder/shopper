import React from 'react'
import "./assets/style/index.css"
import {Link} from "react-router-dom"
import Buyer from "./assets/images/buyer.svg"
import Button from "../../components/Button"
import HomeProductHeader from "../../components/ProductHeader"
import UserApplicationInfo from "../../components/ProductIntro"

const BecomeABuyer = () => {
    return (
      <section className="container">
        <div className="become-buyer">
          <div className="buyer-text">
            <HomeProductHeader>Why Become a Buyer?</HomeProductHeader>

            <UserApplicationInfo>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam feliultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </UserApplicationInfo>

            <Link to="/shipping-address">
              <Button>Apply To Buy</Button>
            </Link>
          </div>
          <div>
            <img src={Buyer} alt="" />
          </div>
        </div>
      </section>
    );
}

export default BecomeABuyer
