import styled, {css} from "styled-components"

export const Product = styled.div`
  border: solid 1px #c6c6c5;
  border-radius: 5px;

  ${({first}) => first && css `
  grid-area: 1 / 1 / 3 / 3;
  `}

  ${({eight}) => eight && css `
  grid-area: 3 / 3 / 5 / 5;
  `}
`;

export const ProductFigure = styled.figure`
  background-color: #fafafa;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  ${({wishList}) => wishList && css `
    position: relative;
  `}
`;

export const ProductImage = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  // font: inherit; /* you might want to delete this later */
  vertical-align: baseline;
  height: auto;
  width: 100%;
  display: block; /* you might want to delete this later */
  object-fit: cover; /* you might want to delete this later */
  vertical-align: middle; /* you might want to delete this later */
`;


export const ProductDetails = styled.div`
  border-top: 1px solid #c6c6c5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ProductContentDiv = styled.div`
  max-width 80%;

  .product-name {
    padding: 3px 0;
  }
`;


export const ProductDetailsContent = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 19px;
`;


export const SupplierDetailContent = styled(ProductDetailsContent)`
  color: #757575;
  font-size: 12px;
  font-weight: 400;
`;

export const ProductNameContent = styled(ProductDetailsContent)`
  font-size: 14px;
  font-weight: 400;
`;

export const ProductPrice = styled(ProductDetailsContent)`
  color: #8bc34a;
  font-size: 15px;
  font-weight: 400;
`;


export const ProductLink = styled.div `
margin-left: 10px;
background-color: #ffffff;
`

export const ProductLinkBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  outline: none;
`;