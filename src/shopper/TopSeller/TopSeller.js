import React, {useState} from 'react'
import "./assets/style/index.css"
import { v4 as uuid } from "uuid";
import TopSellerItem from "../TopSellerItem/TopSellerItem"


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
      <section className="top-seller-section">

      <div className="header">
          <h1>Top Seller</h1>
      </div>
        <div className="topseller">
          {cloths.map((cloth) => (
            <TopSellerItem cloth={cloth} />
          ))}
        </div>

        <div className="btn">
            <button>Explore More {'>'}</button>
        </div>
      </section>
    );
}

export default TopSeller
