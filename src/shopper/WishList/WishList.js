import React from 'react';
import Arrow from "./assets/images/arrow.svg";
import Love from "./assets/images/love.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css"
import {useDispatch} from "react-redux"
import {removeFromWishList} from "../../actions/wishListAction"
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



const WishList = ({ wishList, id }) => {

  const dispatch = useDispatch()
  return (
    <Product>
      <ProductFigure>
        <ProductImage wishList src={Pix} alt="" />
        <div
          onClick={() => dispatch(removeFromWishList(id))}
          className="love-div"
        >
          <img className="love" src={Love} alt="" />
        </div>
      </ProductFigure>

      <ProductDetails>
        <ProductContentDiv>
          <div>
            <SupplierDetailContent>{wishList.suppliers}</SupplierDetailContent>
          </div>

          <div className="product-name">
            <ProductNameContent>{wishList.product}</ProductNameContent>
          </div>

          <div>
            <ProductPrice>{wishList.price}</ProductPrice>
          </div>
        </ProductContentDiv>

        <div style={{ marginLeft: "10px" }}>
          <img src={Arrow} alt="" />
        </div>
      </ProductDetails>
    </Product>
  );
};

export default WishList


