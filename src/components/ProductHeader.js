import React from 'react'
import styled from "styled-components"

const HomeProductHeader = styled.p`
  color: #8bc34a;
  font-size: 30px;
  font-weight: 400;
  
`;

const ProductHeader = ({children}) => {
    return <HomeProductHeader>{children}</HomeProductHeader>;
}

export default ProductHeader
