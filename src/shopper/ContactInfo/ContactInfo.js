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
  InputDiv,
  ContactMailHeader,
  ContactNotification,
  ContactBtnLink,
} from "../../components/Form";
import { ButtonContainer, Button } from "../../components/Button";

const ContactInfo = () => {
    return (
      <div>
        <ApplicationContainer>
          <Form action="">
            <InputDiv>
              <FormDisplay contactName className="contact-name-form">
                <div>
                  {/* <Label htmlFor="">
                  Name
                </Label> */}

                  <Select className="contact-input" name="" id="">
                    <option value="mr">Mr</option>
                  </Select>
                </div>
                <div>
                  <Input
                    className="contact-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <Input
                    className="contact-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <Input
                    className="contact-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </div>
              </FormDisplay>
            </InputDiv>

            <InputDiv>
              <Label className="contact-label" htmlFor="">
                Title
              </Label>

              <Input
                className="contact-input"
                type="text"
                name=""
                id=""
                placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser"
              />
            </InputDiv>

            <InputDiv>
              <div>
                <ContactMailHeader>
                  <p>BUSINESS MAILING ADDRESS</p>
                </ContactMailHeader>

                <FormDisplay contactAddress>
                  <div>
                    <Label className="contact-label" htmlFor="">
                      Street Address
                    </Label>

                    <Input
                      className="contact-input"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <Label className="contact-label" htmlFor="">
                      Apt/Suite/Other
                    </Label>

                    <Input
                      className="contact-input"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <Label className="contact-label" htmlFor="">
                      City
                    </Label>

                    <Input
                      className="contact-input"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </FormDisplay>

                <FormDisplay contactAddress>
                  <div>
                    <Label className="contact-label" htmlFor="">
                      Zip/Postal Code
                    </Label>

                    <Input
                      className="contact-input"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <Label className="contact-label" htmlFor="">
                      Country
                    </Label>

                    <Select className="contact-input" name="" id="">
                      <option value="select country">Select Country</option>
                    </Select>
                  </div>
                  <div>
                    <Label className="contact-label" htmlFor="">
                      Phone Number
                    </Label>

                    <Input
                      className="contact-input"
                      type="text"
                      name=""
                      id=""
                    />

                    <ContactNotification>
                      <p>
                        To Validate your account please enter valid mobile
                        Number to receive confirmation code
                      </p>
                    </ContactNotification>
                  </div>
                </FormDisplay>
              </div>
            </InputDiv>

            <ButtonContainer>
              <Button formBtn goBack>
                <RouterLink goBack to="/web-&-social-media">
                  Go Back
                </RouterLink>
              </Button>

              <ContactBtnLink>
                  By Submitting this application, you agree to the{" "}
                  <span>
                    <RouterLink contactLink to="/">Buyer guidelines</RouterLink>
                  </span>
              </ContactBtnLink>

              <Button formBtn next>
                <RouterLink next to="/confirm-account">
                  Submit Application
                </RouterLink>
              </Button>
            </ButtonContainer>
          </Form>
        </ApplicationContainer>
      </div>
    );
}

export default ContactInfo
