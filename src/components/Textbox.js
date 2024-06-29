import React from "react";
import "../App.css";

function Textbox({ email, onEmailChange, password, onPasswordChange }) {
    return (
        <form className="textbox-container">
            <label className="email" htmlFor="userEmail" />
            <input
                type="email"
                id="userEmail"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                required
            />

            <label className="email" htmlFor="userPassword" />
            <input
                type="password"
                id="userPassword"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                required
            />
        </form>
    );
}

export default Textbox;
