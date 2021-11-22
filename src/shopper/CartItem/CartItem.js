import React from 'react'
import Cancel from "./assets/images/cancel.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css"
import {useDispatch} from "react-redux"
import {deleteCart} from "../../actions/productAction"
import styled, {css} from "styled-components"



const OutterImageDiv = styled.div `
  width: 100%;
  display: inline-block;
  margin-right: 10px;
`
const InnerImageDisplay = styled.div `
  display: flex;
  

  ${({inner}) => inner && css `
    align-items: center;
  `}
`

const Image = styled.img `
  /* vertical-align: middle; */
  display: block;
  height: 70px;
  width: 70px;
  border: 1px solid #c6c6c5;
  border-radius: 5px;
  
`



const CartItem = ({cart, id}) => {
  const dispatch = useDispatch()
    return (
      <div>
        <div className="main-display" key={cart.id}>
          <div className="content">
            <figure className="cancel-btn">
              <img
                onClick={() => dispatch(deleteCart(cart.id))}
                src={Cancel}
                alt=""
              />
            </figure>

            {/* <figure className="main-img">
              <img src={cart.product.image} alt="" />
            </figure> */}
            <InnerImageDisplay>
              <OutterImageDiv >
                <InnerImageDisplay inner>
                  <Image className="profile" src={cart.image} alt="" />
                </InnerImageDisplay>
              </OutterImageDiv>
              </InnerImageDisplay>

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
              <p>{cart.count}</p>
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
