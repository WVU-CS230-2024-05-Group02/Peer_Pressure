import React, { useState } from "react";
import { notifySuccess, notifyWarning, notifyError } from '../components/Alert';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isInstructor, setIsInstructor] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            notifyError("Passwords do not match");
        } else {
            setErrorMessage("");
            console.log("Signup email:", email, "password:", password, "isInstructor:", isInstructor);
        }
    };

    return (
        <div className="background">
            <div className="login-container">
                <h1>Sign Up Page</h1>
                <img className="login-logo" src={`${process.env.PUBLIC_URL}/PeerPressureLogo.png`} alt="App logo" />
                <form onSubmit={handleSignup}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={isInstructor}
                                onChange={(e) => setIsInstructor(e.target.checked)}
                            />
                            Sign up as an instructor
                        </label>
                    </div>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
