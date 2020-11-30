import React from 'react'
import Cancel from "./assets/images/cancel.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css"
import {useDispatch} from "react-redux"
import {removeFromCart} from "../../actions/cartAction"

const CartItem = ({cart, id}) => {

  const dispatch = useDispatch()
    return (
      <div>
        <div className="main-display" key={cart.id}>
          <div className="content">
            <figure>
              <img
                onClick={() => dispatch(removeFromCart(id))}
                src={Cancel}
                alt=""
              />
            </figure>

            <figure className="main-img">
              <img src={Pix} alt="" />
            </figure>

            <div className="prof">
              <p className="p">{cart.product}</p>

              <p>{cart.suppliers}</p>
            </div>
          </div>

          <div>
            <div>
              <p>${cart.price}</p>
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
              <p>{cart.qty}</p>
            </div>
          </div>

          <div>
            <div>
              <p>{cart.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartItem
