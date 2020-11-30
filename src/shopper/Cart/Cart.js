import React from 'react'
import CartItem from "../CartItem/CartItem"
import "./assets/style/index.css"
import ADS from "./assets/images/ads.svg"
import {useSelector} from "react-redux"


const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.cartItems);

    return (
      <div>
        <div className="container cart-display">
          <div className="main-cart">
            <div>
              {cartItems.map((cart, id) => (
                <CartItem id={id} key={cart.id} cart={cart} />
              ))}
            </div>

            <div className="total">
              <form action="">
                <input
                  className="text"
                  type="text"
                  name=""
                  id=""
                  placeholder="Coupon code"
                />
                <input className="submit" type="submit" value="APPLY" />
              </form>

              <div>
                <div className="sub-total">
                  <div className="calculate-sub-total">
                    <p>Subtotal</p>

                    <p>${cartItems.price}</p>
                  </div>
                  <div className="calculate-sub-total">
                    <p>Shipping</p>

                    <p>$50.00</p>
                  </div>
                </div>
                <div className="amount">
                  <div className="amount-text">
                    <p>Total Amount</p>
                    <p className="amount-price">
                      $
                      {/* {cartItems.reduce((acc, curr) => {
                        return acc += parseFloat(curr.price).toFixed(2)
                      }, 0)} */}
                    </p>
                  </div>

                  <button>PROCESS TO CHECK OUT</button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-ads">
            <img src={ADS} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Cart
