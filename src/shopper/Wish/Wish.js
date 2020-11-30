import React from 'react'
import { v4 as uuid } from "uuid";
import WishList from "../WishList/WishList";
import "./assets/style/index.css"
import {useSelector} from "react-redux"

// const initialValue = [
//   {
//     id: uuid(),
//     suppliers: "Supplier’s Name Here",
//     product: "Product Name Here",
//     price: "$29,354.75",
//   },
//   {
//     id: uuid(),
//     suppliers: "Supplier’s Name Here",
//     product: "Product Name Here",
//     price: "$29,354.75",
//   },
//   {
//     id: uuid(),
//     suppliers: "Supplier’s Name Here",
//     product: "Product Name Here",
//     price: "$29,354.75",
//   },
//   {
//     id: uuid(),
//     suppliers: "Supplier’s Name Here",
//     product: "Product Name Here",
//     price: "$29,354.75",
//   },
//   {
//     id: uuid(),
//     suppliers: "Supplier’s Name Here",
//     product: "Product Name Here",
//     price: "$29,354.75",
//   },
//   {
//     id: uuid(),
//     suppliers: "Supplier’s Name Here",
//     product: "Product Name Here",
//     price: "$29,354.75",
//   },
// ];




const Wish = () => {

    // const [wishlist, setWishList] = useState(initialValue);

    const wishLists = useSelector(state => state.wishLists.wishLists)

    return (
      <section>
        <div className="wishlist-header container">
          <div className="wish">
            <div className="available header">
              <p>Available</p>
            </div>

            <div className="stock header">
              <p>Out of Stock</p>
            </div>
          </div>
        </div>
        <div className="wish container">
          {wishLists.map((wishList, id) => (
            <WishList key={wishList.id} id={id} wishList={wishList} />
          ))}
        </div>
      </section>
    );
}

export default Wish
