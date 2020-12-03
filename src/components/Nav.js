import styled, {css} from "styled-components"



export const Nav = styled.nav``;



export const Ul = styled.ul`
  list-style: none;

  ${({headerUl}) => headerUl && css `
    display: flex;
    align-items: center;
    `}
`;



export const Li = styled.li`
  display: inline-block;
  padding: 0px 30px 0 0;
  align-items: center;

  ${({ headerLi }) =>
    headerLi &&
    css`
      display: inline-block;
      padding: 0 12px;
    `}

  ${({ sellerApplicationLi }) =>
    sellerApplicationLi &&
    css`
      padding: 0 20px;
      cursor: pointer;
    `}

  ${({ footerLi }) =>
    footerLi &&
    css`
      display: block;
      padding: 5px 0;
    `}
`;



export const LinkTag = styled.a`
  transition: all 0.3s ease 0s;
  color: #1e234b;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  ${({ footerLink }) =>
    footerLink &&
    css`
      color: #1c1c1b;
    `}

  .span {
    vertical-align: middle;
  }
`;