import React from 'react';
import "./assets/style/index.css";
import {useFormik} from "formik";
import * as Yup from "yup";
import cancelLogo from "./assets/images/cancel.svg";
import Logo from "./assets/images/logo.svg";
import FacebookLogo from "./assets/images/facebook.svg";
import GoogleLogo from "./assets/images/google.svg";
import PinterestLogo from "./assets/images/pinterest.svg";
import {useDispatch} from "react-redux"
import {closeLoginSection} from "../../actions/loginAction"
import firebase from "../../firebase"


const initialValues = {
  email: "",
  password: "",
}


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email formate").required("Required"),
  password: Yup.string().trim().required("Required"),
});


const Login = () => {

  const dispatch = useDispatch()


  const onSubmit = (values, {setSubmitting, resetForm}) => {
    console.log(values)
    firebase
      .auth()
      .signInWithEmailAndPassword(formik.values.email, formik.values.password)
      .then(signedUserIn => {
        console.log(signedUserIn)
        console.log("user logged in")
        resetForm({values: ""})
      })
      .catch(error => {
        console.log(error)
      })
  }



  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })



  return (
    <section style={{ position: "absolute" }}>
      <div className="signup">
        <div className="cancel-btn">
          <img
            onClick={() => dispatch(closeLoginSection())}
            src={cancelLogo}
            alt=""
          />
        </div>

        <div className="form-section">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <form action="" onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <div className="forget-password">
              <div>
                <div className="logged">
                  <input type="checkbox" name="keep" id="keep" />
                  <label htmlFor="keep">Keep me Logged in</label>
                </div>
              </div>

              <div>
                <p>Forgot Password?</p>
              </div>
            </div>

            <div className="btns">
              <input className="log-in btn" type="submit" value="Log in" />
              <input
                className="log-in-guest btn"
                type="button"
                value="Log in as a Guest"
              />
            </div>
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

            <button>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login
