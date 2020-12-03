import React, {useState} from 'react'
import { v4 as uuid } from "uuid";
import HomeProductItems from "../HomeProductItems/HomeProductItems"
import {ProductDisplay} from "../../components/ProductsDisplay"
import {Container} from "../../components/Main"

const initialValue = [
  {
    image:
      "https://images.unsplash.com/photo-1606851686066-c7f17f1ece96?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=755&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603814220002-cf26e167e6aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    suppliers: "Dele",
    product: "Yeezy",
    price: "$123",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579446650032-86effeeb3389?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568688574210-419316c9db5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515355758951-b4b20ba84c1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606746448655-6d7d999ebf31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556967351-476f6851a142?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525825691042-e14d9042fc70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571903538068-86f4964b6086?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
];


const HomeProduct = () => {

    const [cloths, setCloths] = useState(initialValue)

    return (
      <Container>
        <ProductDisplay>
          {cloths.map((cloth, index) => (
            <HomeProductItems key={uuid()} first={index === 0} eight={index === 8} cloth={cloth} />
          ))}
        </ProductDisplay>
      </Container>
    );
}

export default HomeProduct
