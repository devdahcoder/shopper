import React from 'react'
import ProfileImage from "../ProfileImage/ProfileImage"
import {RouterLink} from "../../components/Button"
import {
  ApplicationContainer,
  Form,
  FormDisplay,
  Label,
  Input,
  Select,
} from "../../components/Form";
import {ButtonContainer, Button} from "../../components/Button"
import styled from "styled-components"


const ApplicationCopyRight = styled.div`
  color: #1c1c1b;
  font-size: 14.083433px;
  font-weight: 400;
  line-height: 20px;
  width: 80%;
  margin-bottom: 1em;
`;

const LabelDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #c6c6c5;
  padding: 1em 0;
  // opacity: 0.5;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 1.5em;
`;

const SellerForm = styled.div`
  display: block;
`;

const SellerFormImage = styled.div`
  display: flex;
  align-items: center;
`;

const EmailContainer = styled.div`
  margin: 2em 0;
`;



const ApplicationCriteria = () => {

    const pixSize = "80px"
    return (
      <div>
        <ApplicationContainer>
          <ApplicationCopyRight>
            <p>
              Copyright will provide is wonderful serenity has taken possession
              of my entire as soul, like these sweet mornings of spring which I
              enjoy with my whole heart. I am alone standards.
            </p>

            <RouterLink copyRight>Read our Buyer guideline</RouterLink>
          </ApplicationCopyRight>

          <Form action="">
            <FormDisplay>
              <SellerForm>
                <LabelDiv>Your Account</LabelDiv>

                <SellerFormImage>
                  <ProfileImage pixSize={pixSize} />
                  <Input file type="file" name="" id="" />
                </SellerFormImage>

                <EmailContainer>
                  <Label htmlFor="">Email</Label>
                  <Input
                    className="email"
                    type="email"
                    name=""
                    id=""
                    placeholder="xyz.abc@deb.com"
                  />
                  <RouterLink signOut to="/">
                    Sign out and apply with another account
                  </RouterLink>
                </EmailContainer>
              </SellerForm>
              <SellerForm>
                <LabelDiv>How did you hear about Shopper</LabelDiv>

                <Select name="" id="">
                  <option value="newspaper">Newspaper</option>
                  <option value="advertisment">Advertisment</option>
                  <option value="magazine">Magazine</option>
                </Select>
              </SellerForm>
            </FormDisplay>
            <ButtonContainer>
              <Button formBtn goBack>
                <RouterLink goBack to="/application-criteria">
                  Go Back
                </RouterLink>
              </Button>

              <Button formBtn next>
                <RouterLink next to="/company-profile">
                  Next
                </RouterLink>
              </Button>
            </ButtonContainer>
          </Form>
        </ApplicationContainer>
      </div>
    );
}

export default ApplicationCriteria
