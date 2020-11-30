import React from 'react'
import Facebook from "./assets/images/facebook.svg"
import Pinterest from "./assets/images/pinterest.svg"
import Twitter from "./assets/images/twitter.svg"
import Instagram from "./assets/images/instagram.svg"
import styled from "styled-components"

const StyledFooter = styled.section`
  margin-top: 5em;
`;

const FooterLayout = styled.div`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
`;

const FooterContainer = styled.div `

`

const FooterHeader = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;


const FooterNav = styled.nav `
`

const FooterUl = styled.ul`
  list-style: none;
`;

const FooterLi = styled.li`
  display: block;
  padding: 5px 0;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #1c1c1b;
  transition: all 0.3s ease 0s;
  font-size: 14px;
  font-weight: 400;

  .span {
    vertical-align: middle;
  }
`;

const CopyRightContainer = styled.div`
  border-top: 1px solid #878786;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  text-align: center;
  color: #878786;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  width: 30%;
`;
const Footer = () => {
    return (
      <StyledFooter>
        <FooterLayout>
          <FooterContainer>
            <FooterHeader>How We Help</FooterHeader>

            <div>
              <FooterNav>
                <FooterUl>
                  <FooterLi>
                    <FooterLink href="http://www.google.com">
                      Retailers
                    </FooterLink>
                  </FooterLi>
                  <FooterLi>
                    <FooterLink href="http://www.google.com">
                      Interiors Designers
                    </FooterLink>
                  </FooterLi>
                  <FooterLi>
                    <FooterLink href="http://www.google.com">
                      Product Designers
                    </FooterLink>
                  </FooterLi>
                  <FooterLi>
                    <FooterLink href="http://www.google.com">
                      Wholesalers / Importers
                    </FooterLink>
                  </FooterLi>
                  <FooterLi>
                    <FooterLink href="http://www.google.com">
                      Artisans
                    </FooterLink>
                  </FooterLi>
                </FooterUl>
              </FooterNav>
            </div>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Get To Know Us</FooterHeader>
            <FooterNav>
              <FooterUl>
                <FooterLi>
                  <FooterLink href="http://www.google.com">About</FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">Policies</FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">Careers</FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">Press</FooterLink>
                </FooterLi>
              </FooterUl>
            </FooterNav>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Join the Community</FooterHeader>
            <FooterNav>
              <FooterUl>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    Upcoming Events
                  </FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    Become a Buyer
                  </FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    Become a Seller
                  </FooterLink>
                </FooterLi>
              </FooterUl>
            </FooterNav>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Follow Us</FooterHeader>
            <FooterNav>
              <FooterUl>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Facebook} alt="" />
                    </span>{" "}
                    About
                  </FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Pinterest} alt="" />
                    </span>{" "}
                    Policies
                  </FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Twitter} alt="" />
                    </span>{" "}
                    Careers
                  </FooterLink>
                </FooterLi>
                <FooterLi>
                  <FooterLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Instagram} alt="" />
                    </span>{" "}
                    Press
                  </FooterLink>
                </FooterLi>
              </FooterUl>
            </FooterNav>
          </FooterContainer>
        </FooterLayout>

        <CopyRightContainer className="container">
          <CopyRight className="container">
            <p>© 2016 Uimint.com</p> <p>Terms & Conditions</p> <p>Privacy</p>
          </CopyRight>
        </CopyRightContainer>
      </StyledFooter>
    );
}

export default Footer
