import React, {useState} from 'react'
import "./assets/style/index.css"
import { v4 as uuid } from "uuid";
import CategoryItem from "../CategoryItem/CategoryItem"
import { Container } from "../../components/Main";
import { CategoryDisplay } from "../../components/ProductsDisplay";


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
    suppliers: "Dele",
    product: "Yeezy",
    price: "$123",
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



const Category = () => {

    const [clothing, setClothing] = useState(initialValue);

    return (
      <section className="category-section">
        <Container>
          <CategoryDisplay>
            {clothing.map((cloth) => (
              <CategoryItem key={cloth.id} cloth={cloth} />
            ))}
          </CategoryDisplay>
        </Container>

        {/* view button is displayed when the clothing length is === 20 and hide if you want to view more */}
        <div className="view-more">
          {clothing.length === 20 ? (
            <button className="view-btn">See More</button>
          ) : null}
        </div>
      </section>
    );
}

export default Category


