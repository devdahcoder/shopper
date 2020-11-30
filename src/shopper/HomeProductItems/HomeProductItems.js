import React from 'react'
import Pix from "./assets/images/pix.svg"
import Arrow from "./assets/images/arrow.svg"
import { addToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
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


const HomeProductItems = ({cloth}) => {
    const dispatch = useDispatch();
    return (
      <Product>
        <ProductFigure>
          <ProductImage src={Pix} alt="" />
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
            <img
              onClick={() => dispatch(addToCart(cloth))}
              src={Arrow}
              alt=""
            />
          </div>
        </ProductDetails>
      </Product>
    );
}

export default HomeProductItems


