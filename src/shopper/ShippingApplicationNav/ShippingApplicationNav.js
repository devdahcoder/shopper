import React from 'react'
import {Nav, Ul, Li} from "../../components/Nav"
import {RouterLink} from "../../components/Button"
import {SellerApplicationHeader} from "../../components/Header"

const ShippingApplicationNav = () => {
    return (
      <section>
        <SellerApplicationHeader>
          <Nav>
            <Ul>
              <Li shippingLi>
                <RouterLink shippingLink to="/shipping-address">
                  Shipping Address
                </RouterLink>
              </Li>
              <Li shippingLi>
                <RouterLink shippingLink to="/billing-details">
                  Billing Details
                </RouterLink>
              </Li>
              <Li shippingLi>
                <RouterLink shippingLink to="/payment">
                  Payment
                </RouterLink>
              </Li>
            </Ul>
          </Nav>
        </SellerApplicationHeader>
      </section>
    );
}

export default ShippingApplicationNav
