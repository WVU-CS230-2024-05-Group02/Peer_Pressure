import React, { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else {
            setErrorMessage("");
            console.log("Signup email:", email, "password:", password);
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
                        placeholder="Enter confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
