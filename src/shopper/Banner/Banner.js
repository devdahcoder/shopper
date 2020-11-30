import React from 'react'
import "./assets/style/index.css"
import Button from "../../components/Button"
import styled from "styled-components"
import Background from "./assets/images/background.svg"


const BannerSection = styled.section`
  background-image: url(${Background});
  height: 100vh;
  background-repeat: none;
  background-size: cover;
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerHeader = styled.p`
  color: #ffffff;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  text-align: center;

  &:hover {
    color: #8bc34a;
  }
`;

const Banner = () => {
    return (
      <BannerSection>
        <div>
          <BannerHeader>
            We have dream to connect wholesalers to <br /> independent Customers
          </BannerHeader>

          <Button xlButton>Explore</Button>
        </div>
      </BannerSection>
    );
}

export default Banner
