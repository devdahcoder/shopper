import React from 'react'
import styled, {css} from "styled-components"



const StyledButton = styled.button`
  padding: 12px 25px;
  background-color: #8bc34a;
  color: #ffffff;
  border: 1px solid #8bc34a;
  border-radius: 5px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;

  ${({xlButton}) => xlButton && css `
    padding: 12px 40px;
  `}
`;

const Button = ({children, xlButton}) => {
    return (
        <StyledButton xlButton={xlButton}>
            {children}
        </StyledButton>
    )
}

export default Button
