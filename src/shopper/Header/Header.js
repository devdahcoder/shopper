import React from 'react'
import "./assets/style/index.css";
import {Link} from "react-router-dom"
import Logo from "./assets/images/logo.svg"
import Love from "./assets/images/love.svg"
import Cart from "./assets/images/cart.svg"
import HeaderTag from "../HeaderTag/HeaderTag"
import {useDispatch} from "react-redux"
import {displayLoginSection} from "../../actions/loginAction"
import {displaySignupSection} from "../../actions/signupAction"


const Header = () => {

  const dispatch = useDispatch()

    return (
      <section>
        <header className="container">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>

          <form action="" className="form">
            <input
              type="text"
              name=""
              id=""
              className="text"
              placeholder="Search for Products"
            />
            <input type="submit" value="Search" className="submit" />
          </form>

          <nav>
            <ul>
              <li>
                <button onClick={() => dispatch(displayLoginSection())}>
                  Log in
                </button>
              </li>
              <li>
                <button onClick={() => dispatch(displaySignupSection())}>
                  Sign up
                </button>
              </li>
              <li>
                <Link to="/wishlist">
                  <img src={Love} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <img src={Cart} alt="" />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <HeaderTag />
      </section>
    );
}

export default Header
