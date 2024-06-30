import React from "react";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Footer from "../components/Footer";
import '../App.css';


function LoginPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className="background">
      <div className="login-container">
        <h1>Sign In</h1>
        <img className="login-logo" src="/PeerPressureLogo.png" alt="App logo" />
        <Textbox email={email} onEmailChange={setEmail} password={password} onPasswordChange={setPassword} />
        {/* Temporary link to password recovery page, does not exist yet */}
        <a href="about:blank">Forgot Password?</a>
        <button className="spaced">Login</button>
        <button className="spaced" onClick={handleSignUp}>Create Account</button>
        <p>&copy; 2024 Peer Pressure APP. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LoginPage;