import React, {useState} from 'react'
import "./assets/style/index.css";
import { useFormik } from "formik";
import * as Yup from "yup"
import cancelLogo from "./assets/images/cancel.svg";
import Logo from "./assets/images/logo.svg";
import FacebookLogo from "./assets/images/facebook.svg";
import GoogleLogo from "./assets/images/google.svg";
import PinterestLogo from "./assets/images/pinterest.svg";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {displayLoginSection} from "../../actions/loginAction";
import {closeSignupSection} from "../../actions/loginAction";
import firebase from "../../firebase";
import md5 from "md5";
import { withRouter } from "react-router-dom";
import { setUser } from "../../actions/setUser";



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


const SignUp = ({history}) => {

  const [usersRef, setUsersRef] = useState(firebase.database().ref("users"));

  const dispatch = useDispatch()

  const login = useSelector((state) => state.login.showLogin);
  const signup = useSelector((state) => state.login.showSignup);

  const onSubmit = (values, {resetForm}) => {
    console.log(values)
    firebase
      .auth()
      .createUserWithEmailAndPassword(formik.values.email, formik.values.password)
      .then(createdUser => {
        console.log(createdUser)
        history.push('/')
        resetForm({values: ""})
        createdUser.user.updateProfile({
          displayName: formik.values.username,
          photoURL: `https://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`,

        })
        .then(() => {
          saveUser(createdUser).then(() => {
            console.log("User saved")
          }) 
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const saveUser = (createdUser) => {
    return usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  const facebookAuth = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
    
        if (result.user) {
          history.push('/cart')
          dispatch(setUser(result.user));
        }
        // The signed-in user info.
        var user = result.user;
        console.log(user)
    
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        console.log(accessToken)
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
        console.log(credential)
    
        // ...
      });
  }

  const googleAuth = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;


        if (result.user) {
          history.push('/cart')
        }

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(token);
        console.log(user);
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
        console.log(credential)
    
        // ...
      });


  }

  const twitterAuth = () => {
    var provider = new firebase.auth.TwitterAuthProvider();


    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = credential.accessToken;
      var secret = credential.secret;

      // The signed-in user info.
      var user = result.user;

      console.log(token);
      console.log(user)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      // ...
    });
  }


  
  return (
    <section style={{position: "absolute"}}>
      <div className="login">
        <div className="cancel-btn">
          <button>
            <img onClick={() => dispatch(closeSignupSection())} src={cancelLogo} alt="" />
          </button>
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
              <div
                // href="http://www.facebook.com/hassan.adigun.73/"
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={facebookAuth}
              >
                <img src={FacebookLogo} alt="" />
              </div>
              <div
                // href="http://www.facebook.com/hassan.adigun.73/"
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={googleAuth}
              >
                <img src={GoogleLogo} alt="" />
              </div>

              <div
                // href="http://www.pinterest.com/adigun0061/_saved/"
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={twitterAuth}
              >
                <img src={PinterestLogo} alt="" />
              </div>
            </div>
          </div>

          <hr />

          <div className="sign-up-footer">
            <p>Already have an Account?</p>

            <button onClick={() => dispatch(displayLoginSection())}>Login in</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(SignUp);































