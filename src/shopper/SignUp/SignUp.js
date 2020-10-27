import React from 'react'
import "./assets/style/index.css";
import { useFormik } from "formik"
import cancelLogo from "./assets/images/cancel.svg";
import Logo from "./assets/images/logo.svg";
import FacebookLogo from "./assets/images/facebook.svg";
import GoogleLogo from "./assets/images/google.svg";
import PinterestLogo from "./assets/images/pinterest.svg";

const SignUp = ({ cancelLogin }) => {


  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <section>
      <div className="login">
        <div className="cancel-btn">
          <img onClick={cancelLogin} src={cancelLogo} alt="" />
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
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </label>
            <label htmlFor="fullname">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </label>

            <input className="form-btn" type="submit" value="Create Account" />
          </form>

          <div>
            <p className="or">or</p>
          </div>

          <div className="sign-up">
            <p>Sign-Up With</p>

            <div className="social-logo">
              <img src={FacebookLogo} alt="" />
              <img src={GoogleLogo} alt="" />
              <img src={PinterestLogo} alt="" />
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
