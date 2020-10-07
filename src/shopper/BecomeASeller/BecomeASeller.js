import React from 'react'
import "./asset/style/index.css"
import Seller from "./asset/images/seller.svg"
const BecomeASeller = () => {
    return (
      <section>
        <div className="become-seller">
          <div>
            <img src={Seller} alt="" />
          </div>
          <div className="seller-text">
            <h1>Why Become a Buyer?</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam feliultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </p>

            <button>Apply To Buy</button>
          </div>
        </div>
      </section>
    );
}

export default BecomeASeller
