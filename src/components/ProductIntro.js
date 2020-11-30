import React from 'react'
import styled from "styled-components"


const UserApplicationInfo = styled.p`
  padding: 10px 0;
  color: #757575;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

const ProductIntro = ({children}) => {
    return <UserApplicationInfo>{children}</UserApplicationInfo>;
}

export default ProductIntro
