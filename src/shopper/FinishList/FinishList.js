import React from 'react'
import "./assets/style/index.css"


const FinishList = ({finish}) => {
    return (
      <div className="finish-list">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">{finish.filter}</label>
      </div>
    );
}

export default FinishList
