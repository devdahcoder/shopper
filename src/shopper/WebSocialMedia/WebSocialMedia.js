import React from 'react'
import "./assets/style/index.css"
import {useFormik} from "formik"
import * as Yup from "yup"
import {Link} from "react-router-dom"
import Facebook from "./assets/images/facebook.svg"
import Pinterest from "./assets/images/pinterest.svg"
import Twitter from "./assets/images/twitter.svg"
import Instagram from "./assets/images/instagram.svg"
import {
  ApplicationContainer,
  Form,
  Label,
  Input,
  InputDiv,
} from "../../components/Form";
import { ButtonContainer, Button } from "../../components/Button";
import { RouterLink } from "../../components/Button";


const initialValues = {
  facebook: "",
  pinterest: "",
  twitter: "",
  instagram: ""
}

const validationSchema = Yup.object({
  facebook: Yup.string().required("Required"),
  pinterest: Yup.string().required("Required"),
  twitter: Yup.string().required("Required"),
  instagram: Yup.string().required("Required")
});


const onSubmit = ((values, {subSubmitting}) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
  }, 400)
})

const WebSocialMedia = () => {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit

  })


    return (
      <ApplicationContainer>
        <Form action="" onSubmit={formik.handleSubmit}>
          <InputDiv>
            <Label webLabel className="web-label" htmlFor="facebook">
              <span>
                <img src={Facebook} alt="" />
              </span>{" "}
              Facebook
            </Label>

            <Input
              className="web-"
              type="url"
              name="facebook"
              id="facebook"
              placeholder="paste url here"
              {...formik.getFieldProps("facebook")}
            />
          </InputDiv>
          <InputDiv>
            <Label webLabel className="web-label" htmlFor="pinterest">
              <span>
                <img src={Pinterest} alt="" />
              </span>{" "}
              Pinterest
            </Label>

            <Input
              type="url"
              name="pinterest"
              id="pinterest"
              placeholder="paste url here"
              {...formik.getFieldProps("pinterest")}
            />
          </InputDiv>
          <InputDiv>
            <Label webLabel className="web-label" htmlFor="twitter">
              <span>
                <img src={Twitter} alt="" />
              </span>{" "}
              Twitter
            </Label>

            <Input
              type="url"
              name="twitter"
              id="twitter"
              placeholder="paste url here"
              {...formik.getFieldProps("twitter")}
            />
          </InputDiv>
          <InputDiv>
            <Label webLabel className="web-label" htmlFor="instagram">
              <span>
                <img src={Instagram} alt="" />
              </span>{" "}
              Instagram
            </Label>

            <Input
              type="url"
              name="instagram"
              id="instagram"
              placeholder="paste url here"
              {...formik.getFieldProps("instagram")}
            />
          </InputDiv>

          <InputDiv>
            <Label webLabel>Note: Provide at least one social account</Label>
          </InputDiv>

          <ButtonContainer>
            <Button formBtn goBack>
              <RouterLink goBack to="/company-profile">
                Go Back
              </RouterLink>
            </Button>

            <Button formBtn next>
              <RouterLink next to="/contact-info">
                Next
              </RouterLink>
            </Button>
          </ButtonContainer>
        </Form>
      </ApplicationContainer>
    );
}

export default WebSocialMedia
