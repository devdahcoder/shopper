import React from 'react'
import "./assets/style/index.css"
import ProfileEvent from '../ProfileEvent/ProfileEvent'
import ProfileCategory from "../ProfileCategory/ProfileCategory"
import ProfileFilter from "../ProfileFilter/ProfileFilter"
import ProfileDetail from "../ProfileDetail/ProfileDetail"


const ProfilePage = () => {

    
    return (
      <div className="container">
        <div className="profile-page">
          <div className="profile-category">
            <ProfileDetail />
            <ProfileEvent />
            <ProfileCategory />
            <ProfileFilter />
          </div>
          <div className="profile-list">hello world</div>
        </div>
      </div>
    );
}

export default ProfilePage
