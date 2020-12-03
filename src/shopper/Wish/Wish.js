import React from 'react'
import WishList from "../WishList/WishList";
import {useSelector} from "react-redux"
import { ProductDisplay } from "../../components/ProductsDisplay";
import { Container } from "../../components/Main";
import styled from "styled-components"

const WisListHeader = styled.div `
padding: 1.5em 0;
position: relative;
`

const WishHeaderDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;


const WishBtn = styled.button`
  padding: 10px 15px;
  border-radius: 50px;
  outline: none;
  border: none;
  background-color: #ffffff;
  margin: 0 4px;
  cursor: pointer;
  &:active {
    background-color: #8bc34a;
  }
`;

const Wish = () => {

    const wishLists = useSelector(state => state.wishLists.wishLists)

    return (
      <section>
        <WisListHeader>
          <Container>
            <WishHeaderDisplay>
              <WishBtn>
                Available
              </WishBtn>

              <WishBtn>
                Out of Stock
              </WishBtn>
            </WishHeaderDisplay>
          </Container>
        </WisListHeader>

        <Container>
          <ProductDisplay>
            {wishLists.map((wishList, id) => (
              <WishList key={wishList.id} id={id} wishList={wishList} />
            ))}
          </ProductDisplay>
        </Container>
      </section>
    );
}

export default Wish
