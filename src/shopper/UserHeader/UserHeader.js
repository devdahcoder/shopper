import React from 'react';
import Logo from "./assets/images/logo.svg";
import Love from "./assets/images/love.svg";
import Cart from "./assets/images/cart.svg";
import Profile from "./assets/images/profile.svg";
import Arrow from "./assets/images/arrow.svg";
import "./assets/style/index.css"
import HeaderTag from "../HeaderTag/HeaderTag"

const UserHeader = () => {
    return (
      <div>
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
                <a href="http://www.google.com">
                  <button>Request Quote</button>
                </a>
              </li>
              <li>
                <a href="http://www.google.com">
                  <button>Dashboard</button>
                  <div className="tag">
                      9+
                  </div>
                </a>
              </li>
              <li>
                <a href="http://www.google.com">
                  <img src={Love} alt="" />
                </a>
              </li>
              <li>
                <a href="http://www.google.com">
                  <img src={Cart} alt="" />
                </a>
              </li>
              <li className="prof">
                <a href="http://www.google.com">
                  <img className="profile" src={Profile} alt="" />
                </a>
                <img class="arrow" src={Arrow} alt="" />
              </li>
            </ul>
          </nav>
        </header>
        <HeaderTag />
      </div>
    );
}

export default UserHeader
