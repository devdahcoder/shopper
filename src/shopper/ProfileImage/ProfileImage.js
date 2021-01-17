import React from 'react'
import "./assets/style/index.css"
import {useSelector} from "react-redux";


const ProfileImage = ({pixSize}) => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <span
      style={{ width: `${pixSize}`, height: `${pixSize}` }}
      className="profile-header-image"
    >
      <img className="profile-header" src={user.photoURL} alt="" />
    </span>
  );
};


export default ProfileImage;
