import React, {useState} from 'react'
// import UserHeader from "../UserHeader/UserHeader"
import { v4 as uuid } from "uuid";
import CartItem from "../CartItem/CartItem"
import Footer from "../Footer/Footer"
import "./assets/style/index.css"
import ADS from "./assets/images/ads.svg"

const initialValue = [
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "29,354.75",
  },

];

const Cart = () => {

    const [items, setItems] = useState(initialValue);

    const handleDelete = (id) => {
        const newItem = items.filter((item) => id !== item.id);
        setItems(newItem)
    }

    return (
      <div>
        {/* <UserHeader /> */}

        <div className="container cart-display">
          <div className="main-cart">
            <div>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                />
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
                  <div>
                    <p>Subtotal</p>

                    <p>${items.price}</p>
                  </div>
                  <div>
                    <p>Shipping</p>

                    <p>$50</p>
                  </div>
                </div>
                <div className="amount">
                  <div className="amount-text">
                    <p>Total Amount</p>
                    <h1>
                      $
                      {items.reduce((acc, curr) => {
                        return (acc += parseFloat(curr.price));
                      }, 0)}
                    </h1>
                  </div>

                  <button>PROCESS TO CHECK OUT</button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-ads">
            <img src={ADS} alt=""/>
          </div>
        </div>
      </div>
    );
}

export default Cart
