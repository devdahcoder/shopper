import React from 'react'
import Buyer from "./assets/images/buyer.svg"
import { Button, RouterLink } from "../../components/Button";
import HomeProductHeader from "../../components/ProductHeader"
import {
  UserApplicationInfo,
  ApplyDisplay,
  ApplyTextContainer,
} from "../../components/ProductIntro";
import { Container } from "../../components/Main";


const BecomeABuyer = () => {
    return (
      <Container apply>
        <ApplyDisplay buyer>
          <ApplyTextContainer buyer>
            <HomeProductHeader>Why Become a Buyer?</HomeProductHeader>

            <UserApplicationInfo>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam feliultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </UserApplicationInfo>

            <Button>
              <RouterLink apply to="/shipping-address">
                Apply To Sell
              </RouterLink>
            </Button>
          </ApplyTextContainer>
          <div>
            <img src={Buyer} alt="" />
          </div>
        </ApplyDisplay>
      </Container>
    );
}

export default BecomeABuyer
