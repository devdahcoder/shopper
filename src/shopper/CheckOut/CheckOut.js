import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./assets/style/index.css"

const CheckOut = () => {
    return (
      <section className="checkout">
        <Header />

        <div className="congrats">
          <div className="cong">
            <h1>Congratulations!</h1>

            <p>Order Placed Successfully!</p>

            <button>BACK TO SHOPPING</button>
          </div>
        </div>
        <Footer />
      </section>
    );
}

export default CheckOut
