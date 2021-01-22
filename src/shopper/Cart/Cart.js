import React, {useEffect} from 'react'
import CartItem from "../CartItem/CartItem"
import "./assets/style/index.css"
import ADS from "./assets/images/ads.svg"
import {getCart} from "../../actions/productAction"
import {connect} from "react-redux"
import Loader from "../Loader/Loader"


const Cart = ({carts, isLoading, error, getUserCart}) => {

    useEffect(() => {
      getUserCart()
      console.log(carts)
      // dispatch(getCart())
      // return () => {
      //   cleanup
      // }
    }, [])

    if (isLoading) return <Loader />

    if(error) return <h1>error</h1>

    return (
      <div>
        <div className="container cart-display">
          <div className="main-cart">
            <div>
              {carts.map((cart, id) => (
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

                    {/* <p>${cartItems.price}</p> */}
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

const mapStateToProps = state => {
  return {
    carts: state.cartList.cart,
    isLoading: state.cartList.loading,
    error: state.cartList.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
