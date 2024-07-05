import React from "react";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Footer from "../components/Footer";
import '../App.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    // Simulate a call to the DB to check the credentials provided
    // and get the user info such as name and type (student/instructor)
    // for now let's say this is the response
    const fakeDBResponse = {
      // we will use this to validate that the user has logged in in other pages
      // to achieve this everytime we make the call for the backend
      // they will return a jwt token as well as the data which other pages can use
      // they will use this by calling the backend with the user info in the example below and ask for the token and '
      // match it with the one present, they DB can handle time to live as well not allow sessions to stay too long
      token: "fake-jwt-token",
      user: {
        name: "John Doe",
        type: "instructor", // or "student"
      },
    };

    // Here we will later call the back end with the credentials provided and get a response
    const response = fakeDBResponse
    if (response) {
      // Store token and user info in session storage
      sessionStorage.setItem('token', response.token);
      sessionStorage.setItem('user', JSON.stringify(response.user));
      // Navigate to the home page
      navigate('/home');
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="background">
      <div className="login-container">
        <h1>Sign In</h1>
        <img className="login-logo" src="/PeerPressureLogo.png" alt="App logo" />
        <Textbox email={email} onEmailChange={setEmail} password={password} onPasswordChange={setPassword} />
        {/* Temporary link to password recovery page, does not exist yet */}
        <a href="about:blank">Forgot Password?</a>
        <button className="spaced" onClick={handleLogin}>Login</button>
        <button className="spaced" onClick={handleSignUp}>Create Account</button>
        <p>&copy; 2024 Peer Pressure APP. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LoginPage;
