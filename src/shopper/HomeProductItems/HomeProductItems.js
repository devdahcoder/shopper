import React from 'react'
import "./assets/style/index.css"
import Pix from "./assets/images/pix.svg"
import Arrow from "./assets/images/arrow.svg"
const HomeProductItems = ({cloth}) => {
    return (
      <section className="home-product-item">
        <div>
          <div className="product">
            <figure>
              <img style={{display: "block"}} src={Pix} alt="" />
            </figure>

            <div className="details">
              <div>
                <p style={{ color: "#878786" }}>{cloth.suppliers}</p>

                <p style={{ color: "#1c1c1b", margin: "5px 0" }}>
                  {cloth.product}
                </p>

                <p style={{ color: "#8bc34a" }}>{cloth.price}</p>
              </div>

              <div>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomeProductItems
