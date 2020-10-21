import React from 'react'
import "./assets/style/index.css"
import Pix from "./assets/images/download.png"
const ProfileImage = ({pixSize}) => {
  return (
    <span
      style={{ width: `${pixSize}`, height: `${pixSize}` }}
      className="profile-header-image"
    >
      <img className="profile-header" src={Pix} alt="" />
    </span>
  );
};

export default ProfileImage
