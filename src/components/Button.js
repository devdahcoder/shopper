import { Link } from "react-router-dom";
import styled, {css} from "styled-components"



export const Button = styled.button`
  padding: 12px 25px;
  background-color: #8bc34a;
  color: #ffffff;
  border: 1px solid #8bc34a;
  border-radius: 5px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-family: "Fira Code", monospace;
  position: relative;

  ${({ xlButton }) =>
    xlButton &&
    css`
      padding: 12px 40px;
    `}
  ${({ headerBtn }) =>
    headerBtn &&
    css`
      border: solid 1px #757575;
      padding: initial;
      width: 100px;
      height: 40px;
      color: #757575;
      border-radius: 3px;
      background-color: #ffffff;
      margin-top: initial;
    `}
`;


export const RouterLink = styled(Link)`
  cursor: pointer;

  ${({ sellerApplicationLink }) =>
    sellerApplicationLink &&
    css`
      transition: all 0.3s ease 0s;
      text-decoration: none;
      color: #878786;
    `}
`;