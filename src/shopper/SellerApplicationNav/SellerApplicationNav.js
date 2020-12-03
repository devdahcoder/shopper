import React from 'react'
import {Nav, Ul, Li} from "../../components/Nav"
import {RouterLink} from "../../components/Button"
import {SellerApplicationHeader} from "../../components/Header"




const SellerApplicationNav = () => {
    return (
      <section>
        <SellerApplicationHeader>
          <Nav>
            <Ul>
              <Li sellerApplicationLi>
                <RouterLink sellerApplicationLink to="/application-criteria">
                  Application Criteria
                </RouterLink>
              </Li>
              <Li sellerApplicationLi>
                <RouterLink sellerApplicationLink to="/company-profile">
                  Company Profile
                </RouterLink>
              </Li>
              <Li sellerApplicationLi>
                <RouterLink sellerApplicationLink to="/web-&-social-media">
                  Web & Social Media
                </RouterLink>
              </Li>
              <Li sellerApplicationLi>
                <RouterLink sellerApplicationLink to="/contact-info">
                  Contact Info
                </RouterLink>
              </Li>
              <Li sellerApplicationLi>
                <RouterLink sellerApplicationLink to="/confirm-account">
                  Confirm Account
                </RouterLink>
              </Li>
            </Ul>
          </Nav>
        </SellerApplicationHeader>
      </section>
    );
}

export default SellerApplicationNav
