import React from 'react'
import "./assets/style/index.css"
import {Link} from "react-router-dom"

const CheckOut = () => {
    return (
      <section className="checkout">
        <div className="congrats">
          <div className="cong">
            <h1>Congratulations!</h1>

            <p>Order Placed Successfully!</p>

            <Link to="/">
              <button>BACK TO SHOPPING</button>
            </Link>
          </div>
        </div>
      </section>
    );
}

export default CheckOut
