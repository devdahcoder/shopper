import React, {useState} from 'react'
import "./assets/style/index.css"
import { v4 as uuid } from "uuid";
import TopSellerItem from "../TopSellerItem/TopSellerItem"
import {Link} from "react-router-dom"
import Button from "../../components/Button"
import HomeProductHeader from "../../components/ProductHeader";
import Chair from "./assets/images/chair.svg"
import Pix from "./assets/images/pix.svg"
import Glass from "./assets/images/glass.svg"

const initialValue = [
  {
    id: uuid(),
    image: Glass,
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    image: Pix,
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    image: Chair,
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
];


const TopSeller = () => {
    const [cloths, setCloths] = useState(initialValue)


    return (
      <section className="container top-seller-section">
        <div className="header">
          <HomeProductHeader>Top Seller</HomeProductHeader>
        </div>
        <div className="topseller">
          {cloths.map((cloth) => (
            <TopSellerItem key={uuid()} cloth={cloth} />
          ))}
        </div>

        <div className="btn">
          <Link to="/category">
            <Button>Explore More {">"}</Button>
          </Link>
        </div>
      </section>
    );
}

export default TopSeller
