import React, { useState } from "react";
import axios from "axios";

const RegisterPage = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("PARTICIPANT");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/users/register", { username, password, role });
            history.push("/login");
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="PARTICIPANT">Participant</option>
                    <option value="ORGANIZER">Organizer</option>
                </select>
                <button type="submit">Register Test</button>
            </form>
        </div>
    );
};

export default RegisterPage;
