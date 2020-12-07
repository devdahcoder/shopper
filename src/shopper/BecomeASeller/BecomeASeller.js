import React from 'react'
import Seller from "./asset/images/seller.svg"
import {Button, RouterLink} from "../../components/Button"
import HomeProductHeader from "../../components/ProductHeader";
import {
  UserApplicationInfo,
  ApplyDisplay,
  ApplyTextContainer,
} from "../../components/ProductIntro";
import {Container} from "../../components/Main"

const BecomeASeller = () => {
    return (
      <Container apply>
        <ApplyDisplay seller>
          <div>
            <img src={Seller} alt="" />
          </div>
          <ApplyTextContainer seller>
            <HomeProductHeader>Why Become a Seller?</HomeProductHeader>

            <UserApplicationInfo>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam feliultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim.
            </UserApplicationInfo>

            <Button>
              <RouterLink apply to="/application-criteria">
                Apply To Sell
              </RouterLink>
            </Button>
          </ApplyTextContainer>
        </ApplyDisplay>
      </Container>
    );
}

export default BecomeASeller
