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
  ProductLink,
  ProductLinkBtn,
} from "../../components/Products";


const HomeProductItems = ({ cloth, first, eight }) => {
  const dispatch = useDispatch();
  return (
    <Product first={first} eight={eight}>
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

        <ProductLink>
          <ProductLinkBtn>
            <img
              onClick={() => dispatch(addToCart(cloth))}
              src={Arrow}
              alt=""
            />
          </ProductLinkBtn>
        </ProductLink>
      </ProductDetails>
    </Product>
  );
};

export default HomeProductItems


