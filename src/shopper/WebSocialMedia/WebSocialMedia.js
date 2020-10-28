import React from 'react'
import "./assets/style/index.css"
import {useFormik} from "formik"
import * as Yup from "yup"
import {Link} from "react-router-dom"
import Facebook from "./assets/images/facebook.svg"
import Pinterest from "./assets/images/pinterest.svg"
import Twitter from "./assets/images/twitter.svg"
import Instagram from "./assets/images/instagram.svg"

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
      <div className="social-account-form">
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <label className="web-label" htmlFor="facebook">
              <span>
                <img src={Facebook} alt="" />
              </span>{" "}
              Facebook
            </label>

            <input
              className="web-"
              type="url"
              name="facebook"
              id="facebook"
              placeholder="paste url here"
              {...formik.getFieldProps("facebook")}
            />
          </div>
          <div>
            <label className="web-label" htmlFor="pinterest">
              <span>
                <img src={Pinterest} alt="" />
              </span>{" "}
              Pinterest
            </label>

            <input
              type="url"
              name="pinterest"
              id="pinterest"
              placeholder="paste url here"
              {...formik.getFieldProps("pinterest")}
            />
          </div>
          <div>
            <label className="web-label" htmlFor="twitter">
              <span>
                <img src={Twitter} alt="" />
              </span>{" "}
              Twitter
            </label>

            <input
              type="url"
              name="twitter"
              id="twitter"
              placeholder="paste url here"
              {...formik.getFieldProps("twitter")}
            />
          </div>
          <div>
            <label className="web-label" htmlFor="instagram">
              <span>
                <img src={Instagram} alt="" />
              </span>{" "}
              Instagram
            </label>

            <input
              type="url"
              name="instagram"
              id="instagram"
              placeholder="paste url here"
              {...formik.getFieldProps("instagram")}
            />
          </div>

          <div className="web-btn-container">
            <Link to="/company-profile">
              <button className="btn back-btn">Go Back</button>
            </Link>

            <Link to="/contact-info">
              <button type="submit" className="btn next-btn">
                Next
              </button>
            </Link>
          </div>
        </form>

        <div className="web-notification">
          <p>Note: Provide at least one social account</p>
        </div>

        {/* <div className="web-btn-container">
          <button className="btn back-btn">Go Back</button>
          <button type="submit" className="btn next-btn">
            Next
          </button>
        </div> */}
      </div>
    );
}

export default WebSocialMedia
