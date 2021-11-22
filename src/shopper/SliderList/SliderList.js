import React from "react";
import "./assets/style/index.css";

const SliderList = ({ image }) => {

  return (

    <div className="slider-main-container">

      <figure id={image.index}>

        <img src={image.pix} alt="" />

        <div className="slider-text-container">

          <a className="slider-text-link" href="http://www.google.com">{image.name}</a>

        </div>

      </figure>

    </div>
    //   <div className="top-seller-display">
    //     <div className="top-seller-slider">
    //       {/* <a href="google.com">
    //         <img onClick={prev} src={LeftArrow} alt="" />
    //       </a> */}

    //       <div className="figure">

    //         {/* <figure>
    //                 <img src={Chair} alt="" />
    //                 <p><a href="http://www.google.com">Furniture</a></p>
    //             </figure>
    //             <figure>
    //                 <img src={Brush} alt="" />
    //                 <p><a href="http://www.google.com">Makeup</a></p>
    //             </figure>
    //             <figure>
    //                 <img src={Bicycle} alt="" />
    //                 <p><a href="http://www.google.com">Sports Equipment</a></p>
    //             </figure> */}
    //       </div>

    //       {/* <a href="http://www.google.com">
    //         <img onClick={next} src={RightArrow} alt="" />
    //       </a> */}
    //     </div>
    //   </div>
  );
};

export default SliderList
