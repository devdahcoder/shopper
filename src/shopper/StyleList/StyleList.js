import React from 'react'
import "./assets/style/index.css"


const StyleList = ({style}) => {
    return (
      <div className="style-list-list">
        <input type="checkbox" name="" id="" /><label htmlFor="">{style.filter}</label>
      </div>
    );
}

export default StyleList
