import React from 'react'
import Arrow from "./assets/images/arrow.svg"
import {
  Product,
  ProductFigure,
  ProductImage,
  ProductDetails,
  ProductContentDiv,
  SupplierDetailContent,
  ProductNameContent,
  ProductPrice,
} from "../../components/Products";


const TopSellerItem = ({cloth}) => {
    return (
      <Product>
        <ProductFigure>
          <ProductImage src={cloth.image} alt="" />
        </ProductFigure>

        <ProductDetails>
          <ProductContentDiv>
            <div>
              <SupplierDetailContent>{cloth.suppliers}</SupplierDetailContent>
            </div>

            <div className="product-name">
              <ProductNameContent>{cloth.product}</ProductNameContent>
            </div>

            <div>
              <ProductPrice>{cloth.price}</ProductPrice>
            </div>
          </ProductContentDiv>

          <div style={{ marginLeft: "10px" }}>
            <img src={Arrow} alt="" />
          </div>
        </ProductDetails>
      </Product>
    );
}


export default TopSellerItem
