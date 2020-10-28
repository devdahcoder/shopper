import React from 'react'
import "./assets/style/index.css";
import {Link} from "react-router-dom"
import Logo from "./assets/images/logo.svg"
import Love from "./assets/images/love.svg"
import Cart from "./assets/images/cart.svg"
import HeaderTag from "../HeaderTag/HeaderTag"


const Header = ({showLogin}) => {
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
                <a href="#">
                  <button onClick={showLogin}>Log in</button>
                </a>
              </li>
              <li>
                <a href="#">
                  <button onClick={showLogin}>Sign up</button>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Love} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Cart} alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <HeaderTag />
      </section>
    );
}

export default Header
