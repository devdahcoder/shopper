import React from "react";
import "./assets/style/index.css";
// import Bicycle from "./assets/images/bicycle.svg";
// import Brush from "./assets/images/brush.svg";
// import Chair from "./assets/images/chair.svg";
// import Ring from "./assets/images/ring.svg";
// import LeftArrow from "./assets/images/leftarrow.svg";
// import RightArrow from "./assets/images/rightarrow.svg";


const SliderList = ({ image }) => {
  return (
    <div>
      <figure id={image.index}>
        <img src={image.pix} alt="" />
        <p>
          <a href="http://www.google.com">{image.name}</a>
        </p>
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
