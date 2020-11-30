import React, {useState} from 'react'
import "./assets/style/index.css"
import { v4 as uuid } from "uuid";
import TopSellerItem from "../TopSellerItem/TopSellerItem"
import {Link} from "react-router-dom"
import Button from "../../components/Button"
import HomeProductHeader from "../../components/ProductHeader";


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
