import React, {useState} from 'react'
import { v4 as uuid } from "uuid";
import WishList from "../WishList/WishList";
import "./assets/style/index.css"

const initialValue = [
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
];




const Wish = () => {

    const [wishlist, setWishList] = useState(initialValue);

    return (
      <section>
        <div className="wishlist-header">
          <div className="wish">
            <div className="available header">
              <p>Available</p>
            </div>

            <div className="stock header">
              <p>Out of Stock</p>
            </div>
          </div>
        </div>
        <div className="wish">
          {wishlist.map((wish) => (
            <WishList key={wish.id} wish={wish} />
          ))}
        </div>
      </section>
    );
}

export default Wish
