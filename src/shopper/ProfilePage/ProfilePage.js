import React from 'react'
import "./assets/style/index.css"
import ProfileImage from "../ProfileImage/ProfileImage"
import ProfileEvent from '../ProfileEvent/ProfileEvent'
import ProfileCategory from "../ProfileCategory/ProfileCategory"
const ProfilePage = () => {

    const pixSize = "100px"
    return (
      <div className="container">
        <div className="profile-page">
          <div className="profile-category">
            <div className="profile-details">
              <ProfileImage className="profile-details-child" pixSize={pixSize} />
                <div className="profile-name">
                  <p>Jane & Jone</p>
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
                    Cilek is wonderful serenity has taken possession of my
                    entire as soul, is like these sweet mornings of spring which
                    I enjoy with my whole heart. I am alone standards.
                  </p>
                </div>
            </div>
            <ProfileEvent />
            <ProfileCategory />
          </div>
          <div className="profile-list">hello world</div>
        </div>
      </div>
    );
}

export default ProfilePage
