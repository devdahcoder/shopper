import React from 'react'
import "./assets/style/index.css";
import DropDown from "./assets/images/dropdown.svg";
import StyleDisplay from "../StyleDisplay/StyleDisplay"


const Style = () => {
    return (
      <div className="style-container">
        <div className="style-header">
          <div className="style-header-text">
            <p>style</p>
          </div>
          <div>
            <img src={DropDown} alt="" />
          </div>
        </div>
        <StyleDisplay />
      </div>
    );
}

export default Style
