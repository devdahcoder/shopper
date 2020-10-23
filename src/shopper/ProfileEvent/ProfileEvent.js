import React from 'react'
import "./assets/style/index.css"
import DropDown from "./assets/images/dropdown.svg"
import EventDisplay from "../EventDisplay/EventDisplay"


const ProfileEvent = () => {
    return (
        <div className="profile-event">
            <div className="profile-event-header">
                <div className="event-header-text">
                    <p>EVENTS</p>
                </div>

                <div>
                    <img src={DropDown} alt=""/>
                </div>
            </div>

            <EventDisplay />
        </div>
    )
}

export default ProfileEvent
