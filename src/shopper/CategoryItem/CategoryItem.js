import React from 'react';
import Arrow from "./assets/images/arrow.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css";

const CategoryItem = ({cloth}) => {
    return (
      <section className="category-item">
        <div>
          <div className="product">
            <figure>
              <img src={Pix} alt="" />
            </figure>

            <div className="details">
              <div>
                <p style={{ color: "#878786" }}>{cloth.suppliers}</p>

                <p style={{ color: "#1c1c1b", margin: "5px 0" }}>{cloth.product}</p>

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

export default CategoryItem
