import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';


function LoginPage() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="background">
      <div className="login-container">
        <h1>Sign In</h1>
        <img className="login-logo" src="/PeerPressureLogo.png" alt="App logo" />

        {/* Temporary link to password recovery page, does not exist yet */}
        <a href="about:blank">Forgot Password?</a>

      <form action="/api/login" method="post">

        <label className="email" htmlFor="userEmail" />
            <input
              type="email"
              id="userEmail"
              name="email"
              placeholder="Email"
              required
          />

        <label className="email" htmlFor="userPassword" />
        <input
            type="password"
            id="userPassword"
            name="password"
            placeholder="Password"
            required
        />

        <button className="spaced" type="submit">Login</button>
      </form>

      <button className="spaced" onClick={handleSignUp}>Create Account</button>


        <p>&copy; 2024 Peer Pressure APP. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LoginPage;