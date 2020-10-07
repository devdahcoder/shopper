import React from 'react'
import Cancel from "./assets/images/cancel.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css"
const CartItem = ({item, handleDelete}) => {
    return (
        <div>
            <div className="main-display" key={item.id}>
                  <div className="content">
                    <figure onClick={() => handleDelete(item.id)}>
                      <img src={Cancel} alt="" />
                    </figure>

                    <figure className="main-img">
                      <img src={Pix} alt="" />
                    </figure>

                    <div className="prof">
                      <p className="p">{item.product}</p>

                      <p>{item.suppliers}</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p>${item.price}</p>
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
                      <p>1</p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default CartItem
