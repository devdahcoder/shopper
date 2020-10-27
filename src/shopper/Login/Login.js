import React from 'react';
import "./assets/style/index.css";
import cancelLogo from "./assets/images/cancel.svg";
import Logo from "./assets/images/logo.svg";
import FacebookLogo from "./assets/images/facebook.svg";
import GoogleLogo from "./assets/images/google.svg";
import PinterestLogo from "./assets/images/pinterest.svg";


const Login = ({ cancelLogin }) => {
  return (
    <section>
      <div className="signup">
        <div className="cancel-btn">
          <img onClick={cancelLogin} src={cancelLogo} alt="" />
        </div>

        <div className="form-section">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <form action="" className="form">
            <label htmlFor="Username/Email Address">
              <input
                type="text"
                name="Username/Email Address"
                id="Username/Email Address"
                placeholder="Username/Email Address"
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </label>

            <div className="forget-password">
              <div>
                <div className="logged">
                  <input type="checkbox" name="" id="" />
                  <p>Keep me Logged in</p>
                </div>
              </div>

              <div>
                <p>Forgot Password?</p>
              </div>
            </div>

            <div className="btns">
              <input className="log-in btn" type="button" value="Log in" />
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

export default Login
