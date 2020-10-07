import React from 'react';
import Arrow from "./assets/images/arrow.svg";
import Love from "./assets/images/love.svg";
import Pix from "./assets/images/pix.svg";
import "./assets/style/index.css"



const WishList = ({wish}) => {


    return (
      <section className="category-item">
        <div>
          <div className="product">
            <figure>
              <img className="img" src={Pix} alt="" />
            </figure>


            <img className="love" src={Love} alt="" />


            <div className="details">
              <div>
                <p style={{ color: "#878786" }}>{wish.suppliers}</p>

                <p style={{ color: "#1c1c1b", margin: "5px 0" }}>
                  {wish.product}
                </p>

                <p style={{ color: "#8bc34a" }}>{wish.price}</p>
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

export default WishList
