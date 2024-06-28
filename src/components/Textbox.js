import React from 'react';
import '../App.css';

function Textbox({ email, onEmailChange, password, onPasswordChange }) {
    return (
        <form className="textbox-container">
            <label className="email" htmlFor="userEmail">Email:</label>
            <input
                type="email"
                id="userEmail"
                name="email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                required
            />

            <label className="email" htmlFor="userPassword">Password:</label>
            <input
                type="password"
                id="userPassword"
                name="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                required
            />
        </form>
    );
}

export default Textbox;
