import React from 'react'
import "./assets/style/index.css"
import DropDown from "./assets/images/dropdown.svg"
import ProfileCategoryDisplay from "../ProfileCategoryDisplay/ProfileCategoryDisplay"
const ProfileCategory = () => {
    return (
      <div className="profile-category-container">
        <div className="profile-category-header">
          <div className="category-header-text">
            <p>browse by category</p>
          </div>
          <div>
            <img src={DropDown} alt="" />
          </div>
        </div>
        <ProfileCategoryDisplay />
      </div>
    );
}

export default ProfileCategory
