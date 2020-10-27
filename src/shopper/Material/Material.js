import React from 'react'
import "./assets/style/index.css"
import DropDown from "./assets/images/dropdown.svg";
import MaterialDisplay from "../MaterialDisplay/MaterialDisplay"


const Material = () => {
    return (
      <div className="material-container">
        <div className="material-header">
          <div className="material-header-text">
            <p>browse by category</p>
          </div>
          <div>
            <img src={DropDown} alt="" />
          </div>
        </div>
        <MaterialDisplay />
      </div>
    );
}

export default Material
