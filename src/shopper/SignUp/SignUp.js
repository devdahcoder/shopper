import React from 'react'
import cancelLogo from "./assets/images/cancel.svg";
import Logo from "./assets/images/logo.svg";
import "./assets/style/index.css";
import FacebookLogo from "./assets/images/facebook.svg";
import GoogleLogo from "./assets/images/google.svg";
import PinterestLogo from "./assets/images/pinterest.svg";

const SignUp = ({setFalse}) => {
    return (
      <section>
        <div className="login">
          <div className="cancel-btn">
            <img onClick={setFalse} src={cancelLogo} alt="" />
          </div>

          <div className="form-section">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>

            <form action="" className="form">
              <label htmlFor="">
                <input type="text" placeholder="Username" />
              </label>
              <label htmlFor="">
                <input type="text" placeholder="Full Name" />
              </label>
              <label htmlFor="">
                <input type="email" placeholder="Email Address" />
              </label>
              <label htmlFor="">
                <input type="password" placeholder="Password" />
              </label>

              <input
                className="form-btn"
                type="submit"
                value="Create Account"
              />
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
}

export default SignUp;
