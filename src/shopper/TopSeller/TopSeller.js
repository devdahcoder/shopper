import React, {useState} from 'react'
import { v4 as uuid } from "uuid";
import TopSellerItem from "../TopSellerItem/TopSellerItem"
import {Link} from "react-router-dom"
import {Button} from "../../components/Button"
import HomeProductHeader from "../../components/ProductHeader";
import Chair from "./assets/images/chair.svg"
import Pix from "./assets/images/pix.svg"
import Glass from "./assets/images/glass.svg"
import styled from "styled-components"

const TopSellerSection = styled.section`
  margin-top: 15em;

  .header {
    padding: 20px 0;
  }
`;

const TopSellerDisplay = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 2em;

`

const TopSellerBtn = styled.div`
  text-align: center;
  padding: 3em 0;
`;
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
      <TopSellerSection className="container">
        <div className="header">
          <HomeProductHeader>Top Seller</HomeProductHeader>
        </div>
        <TopSellerDisplay>
          {cloths.map((cloth) => (
            <TopSellerItem key={uuid()} cloth={cloth} />
          ))}
        </TopSellerDisplay>

        <TopSellerBtn>
          <Link to="/category">
            <Button>Explore More {">"}</Button>
          </Link>
        </TopSellerBtn>
      </TopSellerSection>
    );
}

export default TopSeller
