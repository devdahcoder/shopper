import React from 'react'
import { RouterLink } from "../../components/Button";
import {
  ApplicationContainer,
  Form,
  FormDisplay,
  Label,
  Input,
  FormDisplayRows,
  CheckBoxDisplay,
  CheckBox,
} from "../../components/Form";
import { ButtonContainer, Button } from "../../components/Button";
import styled, {css} from "styled-components";

const PaymentDisplay = styled.div `
display: flex;
        flex-wrap: nowrap;

`

const PaymentItems = styled.div`
  flex-grow: 1;
  border-right: 1px solid green;

  ${({btn}) => btn && css ` 
  border: none;
  `}
`;


const Card = styled.div`
  width: 450px;
  padding-left: 2em;
`;

const CheckBoxContainer = styled.div `
display: flex;
align-items: center;
`
const Payment = () => {
    return (
      <ApplicationContainer>
        <PaymentDisplay>
          <PaymentItems>hello world</PaymentItems>

          <Card>
            <div>
              <p>payment</p>
            </div>

            <Form action="">
              <FormDisplayRows paymentCard>
                <div>
                  <Label htmlFor="">Name on Card</Label>

                  <Input className="payment-input" type="text" name="" id="" />
                </div>
                <div>
                  <Label htmlFor="">Name on Card</Label>

                  <Input className="payment-input" type="text" name="" id="" />
                </div>
                <FormDisplay paymentCode>
                  <div>
                    <Label htmlFor="">Valid Trough</Label>

                    <Input
                      className="payment-input"
                      type="text"
                      name=""
                      id=""
                      placeholder="MM/DD"
                    />
                  </div>
                  <div>
                    <Label htmlFor="">CCV</Label>

                    <Input
                      className="payment-input"
                      type="text"
                      name=""
                      id=""
                      placeholder="eg.201"
                    />
                  </div>
                </FormDisplay>
              </FormDisplayRows>
              <div>
                <CheckBoxDisplay>
                  <CheckBox
                    className="rounded-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />{" "}
                  <span>Paypal</span>
                </CheckBoxDisplay>

                <div>
                  <Label htmlFor="">Email Address</Label>

                  <Input
                    className="payment-input"
                    type="email"
                    name=""
                    id=""
                    placeholder="abc@xyz.com"
                  />
                </div>
              </div>
            </Form>
          </Card>
        </PaymentDisplay>

        <ButtonContainer payment>
          <PaymentItems btn>
            <Button formBtn goBack>
              <RouterLink goBack to="/billing-details">
                Go Back
              </RouterLink>
            </Button>
          </PaymentItems>

          <Card>
            <Button pay formBtn>
              <RouterLink next to="/checkout">
                Pay $128.89
              </RouterLink>
            </Button>
          </Card>
        </ButtonContainer>
      </ApplicationContainer>
    );
}

export default Payment


