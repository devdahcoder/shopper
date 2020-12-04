import React from 'react'
import "./assets/style/index.css"
import { RouterLink } from "../../components/Button";
import {
  ApplicationContainer,
  Form,
  FormDisplay,
  Label,
  Input,
  Select,
} from "../../components/Form";
import styled from "styled-components"
import { ButtonContainer, Button } from "../../components/Button";


const BusinessName = styled.div`
  
`;

const CompanyProfile = () => {
    return (
      <div>
        <ApplicationContainer>
          <Form action="">
            <BusinessName>
              <Label className="company-label" htmlFor="">
                Business Name
              </Label>
              <Input type="email" name="" id="" placeholder="xyz.abc@deb.com" />
            </BusinessName>

            <FormDisplay selectInput>
              <div>
                <Select name="" id="">
                  <option value="business type">Business Type</option>
                </Select>
              </div>
              <div>
                <Select name="" id="">
                  <option value="main sale channel">Main Sale Channel</option>
                </Select>
              </div>
              <div>
                <Select name="" id="">
                  <option value="year established">Year Established</option>
                </Select>
              </div>
            </FormDisplay>

            <FormDisplay businessLicense>
              <div>
                <Label htmlFor="">Business Identity Type</Label>
                <Select className="company-input" name="" id="">
                  <option value="retail business licence">
                    Retail Business Licence
                  </option>
                </Select>
              </div>
              <div>
                <Label htmlFor="">Business ID Number</Label>
                <Input
                  type="number"
                  name=""
                  id=""
                  placeholder="eg.32756158421584"
                />
              </div>
            </FormDisplay>

            <ButtonContainer companyProfile>

              <Button formBtn goBack>
                <RouterLink goBack to="/application-criteria">
                  Go Back
                </RouterLink>
              </Button>

              <Button formBtn next>
                <RouterLink next to="/web-&-social-media">
                  Next
                </RouterLink>
              </Button>
            </ButtonContainer>
          </Form>
        </ApplicationContainer>
      </div>
    );
}

export default CompanyProfile
