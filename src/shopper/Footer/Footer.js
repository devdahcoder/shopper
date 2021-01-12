import React from 'react'
import Facebook from "./assets/images/facebook.svg"
import Pinterest from "./assets/images/pinterest.svg"
import Twitter from "./assets/images/twitter.svg"
import Instagram from "./assets/images/instagram.svg"
import styled from "styled-components"
import { Nav, Ul, Li, LinkTag } from "../../components/Nav";

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
  width: 50%;
`;
const Footer = () => {
    return (
      <StyledFooter>
        <FooterLayout>
          <FooterContainer>
            <FooterHeader>How We Help</FooterHeader>

            <div>
              <Nav>
                <Ul>
                  <Li footerLi>
                    <LinkTag footerLink href="http://www.google.com">
                      Retailers
                    </LinkTag>
                  </Li>
                  <Li footerLi>
                    <LinkTag footerLink href="http://www.google.com">
                      Interiors Designers
                    </LinkTag>
                  </Li>
                  <Li footerLi>
                    <LinkTag footerLink href="http://www.google.com">
                      Product Designers
                    </LinkTag>
                  </Li>
                  <Li footerLi>
                    <LinkTag footerLink href="http://www.google.com">
                      Wholesalers / Importers
                    </LinkTag>
                  </Li>
                  <Li footerLi>
                    <LinkTag footerLink href="http://www.google.com">
                      Artisans
                    </LinkTag>
                  </Li>
                </Ul>
              </Nav>
            </div>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Get To Know Us</FooterHeader>
            <Nav>
              <Ul>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    About
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    Policies
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    Careers
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    Press
                  </LinkTag>
                </Li>
              </Ul>
            </Nav>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Join the Community</FooterHeader>
            <Nav>
              <Ul>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    Upcoming Events
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    Become a Buyer
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    Become a Seller
                  </LinkTag>
                </Li>
              </Ul>
            </Nav>
          </FooterContainer>
          <FooterContainer>
            <FooterHeader>Follow Us</FooterHeader>
            <Nav>
              <Ul>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Facebook} alt="" />
                    </span>{" "}
                    About
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Pinterest} alt="" />
                    </span>{" "}
                    Policies
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Twitter} alt="" />
                    </span>{" "}
                    Careers
                  </LinkTag>
                </Li>
                <Li footerLi>
                  <LinkTag footerLink href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Instagram} alt="" />
                    </span>{" "}
                    Press
                  </LinkTag>
                </Li>
              </Ul>
            </Nav>
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
