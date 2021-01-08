import React, {useState} from 'react'
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
import firebase from "../../firebase"


const initialValues = {
  username: "",
  fullname: "",
  email: "",
  password: "",
}


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



const SignUp = () => {

  // const [usersRef, setUsersRef] = useState(firebase.database().ref("users"));

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    console.log(values)
    firebase
      .auth()
      .createUserWithEmailAndPassword(formik.values.email, formik.values.password)
      .then(createdUser => {
        console.log(createdUser)
        createdUser.user.updateProfile({
          displayName: formik.values.username,
          photoURL: FacebookLogo,

        })
        .then(() => {
          // saveUser(createdUser).then(() => {
          //   console.log("User saved")
          // }) 
          console.log("done");
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // const saveUser = (createdUser) => {
  //   return setUsersRef.child(createdUser.user.uid).set({
  //     name: createdUser.user.displayName,
  //     avatar: createdUser.user.photoURL
  //   });
  // }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  
  return (
    <section style={{position: "absolute"}}>
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































