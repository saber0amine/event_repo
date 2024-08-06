import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get("http://localhost:8080/api/events");
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>All Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <p>{new Date(event.dateTime).toLocaleString()}</p>
                        <p>{event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
