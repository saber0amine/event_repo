import React, { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateEvent = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/events/create", { name, location, dateTime, description });
            setName("");
            setLocation("");
            setDateTime("");
            setDescription("");
        } catch (error) {
            console.error("Event creation failed", error);
        }
    };

    return (
        <div>
            <h2>Create Event</h2>
            <form onSubmit={handleCreateEvent}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Event Name"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                />
                <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
