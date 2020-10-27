import React from 'react'
import "./assets/style/index.css"


const MaterialList = ({material}) => {
    return (
        <div className="material-list">
            <input type="checkbox" name="" id=""/><label htmlFor="">{material.filter}</label>
        </div>
    )
}

export default MaterialList
