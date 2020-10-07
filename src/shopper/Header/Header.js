import React from 'react'
import Logo from "./assets/images/logo.svg"
import Love from "./assets/images/love.svg"
import Cart from "./assets/images/cart.svg"
import "./assets/style/index.css"
import HeaderTag from "../HeaderTag/HeaderTag"


const Header = () => {
    return (
      <section>
        <header>
          <img className="logo" src={Logo} alt="" />

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
                  <button>Log in</button>
                </a>
              </li>
              <li>
                <a href="#">
                  <button>Sign up</button>
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
