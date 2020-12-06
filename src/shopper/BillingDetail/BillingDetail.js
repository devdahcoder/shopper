import React from 'react'
import { RouterLink } from "../../components/Button";
import {
  ApplicationContainer,
  Form,
  FormDisplay,
  Label,
  Input,
  Select,
  FormDisplayRows,
} from "../../components/Form";
import { ButtonContainer, Button } from "../../components/Button";
import styled, {css} from "styled-components";



const ShippingDisplay = styled.div`
  display: flex;
  align-items: center;

  .checkbox {
    margin-right: 10px;
  }
  ${({ shippingEmail }) =>
    shippingEmail &&
    css`
      justify-content: space-between;
      width: 90%;
    `}
`;



const BillingDetail = () => {
    return (
      <ApplicationContainer>
        <Form action="">
          <FormDisplay shippingAddress>
            <div>
              <Label htmlFor="">First Name</Label>
              <Input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="Jhone"
              />
            </div>
            <div>
              <Label htmlFor="">Last Name</Label>
              <Input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="Smith"
              />
            </div>
            <div>
              <Label htmlFor="">Company Name</Label>
              <Input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="Rosuson Industries"
              />
            </div>
            <div>
              <Label htmlFor="">Country</Label>
              <Select className="shipping-input" name="" id="">
                <option value="united kingdom">United Kingdom(UK)</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="">Town / City</Label>
              <Input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="eg.New york"
              />
            </div>
            <div>
              <Label htmlFor="">Postcode</Label>
              <Input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="eg.358745"
              />
            </div>
          </FormDisplay>

          <FormDisplayRows shippingEmail>
            <div>
              <Label htmlFor="">Address</Label>
              <Input
                className="shipping-input"
                type="text"
                name=""
                id=""
                placeholder="eg.2nd steer, Costrica, Uk354548"
              />
            </div>
            <ShippingDisplay shippingEmail>
              <div>
                <Label htmlFor="">Email Address</Label>
                <Input
                  className="shipping-input"
                  type="email"
                  name=""
                  id=""
                  placeholder="abc@xyz.com"
                />
              </div>
              <div>
                <Label htmlFor="">Email Address</Label>
                <Input
                  className="shipping-input"
                  type="text"
                  name=""
                  id=""
                  placeholder="eg.94 788 1221"
                />
              </div>
              <ShippingDisplay>
                <input className="checkbox" type="checkbox" name="" id="" />
                <label htmlFor="">Create an Account?</label>
              </ShippingDisplay>
            </ShippingDisplay>
          </FormDisplayRows>
          <ButtonContainer>
            <Button formBtn goBack>
              <RouterLink goBack to="/shipping-address">
                Go Back
              </RouterLink>
            </Button>
            <Button formBtn next>
              <RouterLink next to="/payment">
                Next
              </RouterLink>
            </Button>
          </ButtonContainer>
        </Form>
      </ApplicationContainer>
    );
}

export default BillingDetail
