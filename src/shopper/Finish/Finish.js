import React from 'react'
import "./assets/style/index.css";
import DropDown from "./assets/images/dropdown.svg";
import FinishDisplay from "../FinishDisplay/FinishDisplay"
const Finish = () => {
    return (
      <div className="finish-container">
        <div className="finish-header">
          <div className="finish-header-text">
            <p>finish</p>
          </div>
          <div>
            <img src={DropDown} alt="" />
          </div>
        </div>
        <FinishDisplay />
      </div>
    );
}

export default Finish
