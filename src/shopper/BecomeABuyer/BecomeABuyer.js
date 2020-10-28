import React from 'react'
import "./assets/style/index.css"
import {Link} from "react-router-dom"
import Buyer from "./assets/images/buyer.svg"

const BecomeABuyer = () => {
    return (
      <section>
        <div className="container become-buyer">
          <div className="buyer-text">
            <h1>Why Become a Buyer?</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam feliultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </p>

            <Link to="/shipping-address">
              <button>Apply To Buy</button>
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
