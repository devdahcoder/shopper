import React from 'react'
import "./assets/style/index.css"
const EventList = ({event}) => {
    return (
        <div className="event-list">
            <div className="event-list-date">
                <p>{event.month}</p>
                <p>{event.day}</p>
            </div>
            <div className="event-list-details">
                <p>{event.name}</p>
                <p>{event.location}</p>
            </div>
        </div>
    )
}

export default EventList
