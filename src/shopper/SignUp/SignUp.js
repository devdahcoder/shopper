import React from 'react'
import "./assets/style/index.css";
import { useFormik } from "formik";
import * as Yup from "yup"
import cancelLogo from "./assets/images/cancel.svg";
import Logo from "./assets/images/logo.svg";
import FacebookLogo from "./assets/images/facebook.svg";
import GoogleLogo from "./assets/images/google.svg";
import PinterestLogo from "./assets/images/pinterest.svg";
import {useDispatch} from "react-redux"
import {closeSignupSection} from "../../actions/signupAction"


const initialValues = {
  username: "",
  fullname: "",
  email: "",
  password: "",
}


const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
}

// const validate = (values) => {
//   const errors = {};
//   if (!values.username) {
//     errors.username = 'Required';
//   } else if (values.username.length > 15) {
//     errors.username = 'Must be 15 characters or less';
//   }

//   if (!values.fullname) {
//     errors.fullname = 'Required';
//   } else if (values.fullname.length > 20) {
//     errors.fullname = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length > 20) {
//     errors.password = 'Must be 20 characters or less';
//   }

//   return errors;
// }


const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required!"),
  fullname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email formate")
    .required("Required"),
  password: Yup.string().trim().required("Required"),
});


const SignUp = ({ cancelLogin }) => {


  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
  });

  console.log(formik.errors)


  return (
    <section>
      <div className="login">
        <div className="cancel-btn">
          <img onClick={() => dispatch(closeSignupSection())} src={cancelLogo} alt="" />
        </div>

        <div className="form-section">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <form action="" onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
                // onChange={formik.handleChange}
                // value={formik.values.username}
                // onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.username && formik.errors.username ? (
              <div className="errors">{formik.errors.username}</div>
            ) : null}
            <label htmlFor="fullname">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                {...formik.getFieldProps("fullname")}
                // onChange={formik.handleChange}
                // value={formik.values.fullname}
                // onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.fullname && formik.errors.fullname ? (
              <div className="errors">{formik.errors.fullname}</div>
            ) : null}
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                {...formik.getFieldProps("email")}
                // onChange={formik.handleChange}
                // value={formik.values.email}
                // onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="errors">{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                // onChange={formik.handleChange}
                // value={formik.values.password}
                // onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.password && formik.errors.password ? (
              <div className="errors">{formik.errors.password}</div>
            ) : null}

            <input className="form-btn" type="submit" value="Create Account" />
          </form>

          <div>
            <p className="or">or</p>
          </div>

          <div className="sign-up">
            <p>Sign-Up With</p>

            <div className="social-logo">
              <a
                href="http://www.facebook.com/hassan.adigun.73/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookLogo} alt="" />
              </a>
              <a
                href="http://www.facebook.com/hassan.adigun.73/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GoogleLogo} alt="" />
              </a>

              <a
                href="http://www.pinterest.com/adigun0061/_saved/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PinterestLogo} alt="" />
              </a>
            </div>
          </div>

          <hr />

          <div className="sign-up-footer">
            <p>Already have an Account?</p>

            <button>Login in</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
