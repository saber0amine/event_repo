import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/login", { username, password });
            history.push("/events");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login Te</button>
            </form>
        </div>
    );
};

export default LoginPage;
