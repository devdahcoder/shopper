import React from 'react'
import Cancel from "./assets/images/cancel.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css"
import {useDispatch} from "react-redux"
import {deleteCart} from "../../actions/productAction"

const CartItem = ({cart, id}) => {
  const dispatch = useDispatch()
    return (
      <div>
        <div className="main-display" key={cart.product.id}>
          <div className="content">
            <figure>
              <img
                onClick={() => dispatch(deleteCart(cart.id))}
                src={Cancel}
                alt=""
              />
            </figure>

            <figure className="main-img">
              <img src={cart.product.image} alt="" />
            </figure>

            <div className="prof">
              <p className="p">{cart.product.product}</p>

              <p>{cart.product.suppliers}</p>
            </div>
          </div>

          <div>
            <div>
              <p>${cart.product.price}</p>
            </div>
          </div>

          <div>
            <div
              style={{
                border: "1px solid #c6c6c5",
                padding: "10px",
                borderRadius: "3px",
                textAlign: "center",
              }}
            >
              <p>{cart.product.qty}</p>
            </div>
          </div>

          <div>
            <div>
              <p>{cart.product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartItem
