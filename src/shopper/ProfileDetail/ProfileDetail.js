import React from 'react'
import "./assets/style/index.css"
import ProfileImage from "../ProfileImage/ProfileImage";
import {useSelector} from "react-redux";

const ProfileDetail = () => {

    const pixSize = "100px";
    const user = useSelector((state) => state.user.currentUser)
    
    return (
      <div className="profile-details">
        <ProfileImage className="profile-details-child" pixSize={pixSize} />
        <div className="profile-name">
          <p>{user && user.displayName}</p>
        </div>
        <div className="profile-address">
          <p>NEWYORK, NY . USA</p>
        </div>
        <div className="profile-detail-btn">
          <button className="contact-btn btn">Contact</button>
          <button className="follow-btn btn">Follow</button>
        </div>

        <div className="profile-details-child">
          <p>
            Cilek is wonderful serenity has taken possession of my entire as
            soul, is like these sweet mornings of spring which I enjoy with my
            whole heart. I am alone standards.
          </p>
        </div>
      </div>
    );
}

export default ProfileDetail
