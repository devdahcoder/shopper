import React from 'react'
import "./assets/style/index.css"
import Facebook from "./assets/images/facebook.svg"
import Pinterest from "./assets/images/pinterest.svg"
import Twitter from "./assets/images/twitter.svg"
import Instagram from "./assets/images/instagram.svg"
const Footer = () => {
    return (
      <section className="footer">
        <div className="footer-display">
          <div>
            <h1>How We Help</h1>

            <div>
              <nav>
                <ul>
                  <li>
                    <a href="">Retailers</a>
                  </li>
                  <li>
                    <a href="">Interiors Designers</a>
                  </li>
                  <li>
                    <a href="">Product Designers</a>
                  </li>
                  <li>
                    <a href="">Wholesalers / Importers</a>
                  </li>
                  <li>
                    <a href="">Artisans</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <h1>Get To Know Us</h1>
            <nav>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Policies</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h1>Join the Community</h1>
            <nav>
              <ul>
                <li>
                  <a href="">Upcoming Events</a>
                </li>
                <li>
                  <a href="">Become a Buyer</a>
                </li>
                <li>
                  <a href="">Become a Seller</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h1>Follow Us</h1>
            <nav>
              <ul>
                <li>
                  <a href="">
                    {" "}
                    <span>
                      <img src={Facebook} alt="" />
                    </span>{" "}
                    About
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <span>
                      <img src={Pinterest} alt="" />
                    </span>
                    {" "}
                    Policies
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <span>
                      <img src={Twitter} alt="" />
                    </span>
                    {" "}
                    Careers
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <span>
                      <img src={Instagram} alt="" />
                    </span>
                    {" "}
                    Press
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container">
          <hr />

          <div className="copyright">
            <p>© 2016 Uimint.com Terms & Conditions Privacy</p>
          </div>
        </div>
      </section>
    );
}

export default Footer
