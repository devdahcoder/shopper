import React, {useState} from 'react'
import "./assets/style/index.css"
import EventList from "../EventList/EventList"


const initialState = [
    {
        id: 1,
        month: "JAN",
        day: "26",
        name: "Event name goes here",
        location: "New York, NY"
    },
    {
        id: 2,
        month: "JAN",
        day: "26",
        name: "Event name goes here",
        location: "New York, NY"
    },
    {
        id: 3,
        month: "JAN",
        day: "26",
        name: "Event name goes here",
        location: "New York, NY"
    }
]


const EventDisplay = () => {
    const [events, setEvent] = useState(initialState)
    return (
        <div>
            {events.map((event) => (<EventList key={event.id} event={event} />))}
        </div>
    )
}

export default EventDisplay
