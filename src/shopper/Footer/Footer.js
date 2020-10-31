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
                    <a href="http://www.google.com">Retailers</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">Interiors Designers</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">Product Designers</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">Wholesalers / Importers</a>
                  </li>
                  <li>
                    <a href="http://www.google.com">Artisans</a>
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
                  <a href="http://www.google.com">About</a>
                </li>
                <li>
                  <a href="http://www.google.com">Policies</a>
                </li>
                <li>
                  <a href="http://www.google.com">Careers</a>
                </li>
                <li>
                  <a href="http://www.google.com">Press</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h1>Join the Community</h1>
            <nav>
              <ul>
                <li>
                  <a href="http://www.google.com">Upcoming Events</a>
                </li>
                <li>
                  <a href="http://www.google.com">Become a Buyer</a>
                </li>
                <li>
                  <a href="http://www.google.com">Become a Seller</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h1>Follow Us</h1>
            <nav>
              <ul>
                <li>
                  <a href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Facebook} alt="" />
                    </span>{" "}
                    About
                  </a>
                </li>
                <li>
                  <a href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Pinterest} alt="" />
                    </span>
                    {" "}
                    Policies
                  </a>
                </li>
                <li>
                  <a href="http://www.google.com">
                    {" "}
                    <span>
                      <img src={Twitter} alt="" />
                    </span>
                    {" "}
                    Careers
                  </a>
                </li>
                <li>
                  <a href="http://www.google.com">
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
