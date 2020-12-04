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
  
  ${({ formBtn }) =>
    formBtn &&
    css`
      outline: none;
      border-radius: 3px;
    `}
  
  ${({ goBack }) =>
    goBack &&
    css`
      border: solid 1px #757575;
      background-color: rgba(0, 0, 0, 0);
      
    `}
  ${({ next }) =>
    next &&
    css`
      background-color: #8bc34a;
      border: 1px solid #8bc34a;
    `}
`;


export const RouterLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  ${({ sellerApplicationLink }) =>
    sellerApplicationLink &&
    css`
      transition: all 0.3s ease 0s;
      text-decoration: none;
      color: #878786;
    `}

  ${({ copyRight }) =>
    copyRight &&
    css`
      color: #8bc34a;
      text-decoration: none;
      line-height: 50.113443px;
    `}
  ${({ signOut }) =>
    signOut &&
    css`
      color: red;
      padding: 1em 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 4em;
    `}
  
  ${({ goBack }) =>
    goBack &&
    css`
      color: #757575;
    `}
  
  ${({ next }) =>
    next &&
    css`
      color: #ffffff;
    `}

  ${({ contactLink }) =>
    contactLink &&
    css`
      color: #8bc34a;
      text-decoration: underline;
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5em;

  ${({ companyProfile }) =>
    companyProfile &&
    css`
      margin-top: 16em;
    `}
`;

