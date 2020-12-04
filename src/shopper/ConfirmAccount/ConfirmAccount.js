import React from 'react'
import "./assets/style/index.css"
import {
  ApplicationContainer,
  Form,
  FormDisplay,
  Label,
  Input,
  Select,
} from "../../components/Form";
import {Button} from "../../components/Button"
import styled from "styled-components"


const ConfirmCode = styled.div `
width: 40%;
`

export const ConfirmInputDiv = styled.div `
margin: 1.5em 0em;
text-align: center;

`;

const GetCode = styled.div`
  display: flex;
  align-items: center;
`;

const ConfirmedButton = styled.button`
  background-color: #c8c8c8;
  color: #ffffff;
  font-size: 14.004px;
  font-weight: 400;
  padding: 10px 15px;
  outline: none;
  border: 1px solid #c8c8c8;
  border-radius: 3px;
  margin-top: 15px;
`;

const ConfirmAccount = () => {
    return (
      <ApplicationContainer confirmAccount>
        <ConfirmCode>
          <Form action="" method="post">
            <ConfirmInputDiv>
              <Label htmlFor="">
                Enter confirm code sent to your hone number
              </Label>
              <GetCode>
                <Input type="number" name="" id="" />
                <ConfirmedButton confirm>Confirm</ConfirmedButton>
              </GetCode>
            </ConfirmInputDiv>

            <ConfirmInputDiv className="set-code">
              <Label htmlFor="">
                Don't have a code ? <br /> Generate new code enter your hone
                number
              </Label>
              <Input type="number" name="" id="" />

              <Button>Generate Code</Button>
            </ConfirmInputDiv>
          </Form>
        </ConfirmCode>
      </ApplicationContainer>
    );
}

export default ConfirmAccount
