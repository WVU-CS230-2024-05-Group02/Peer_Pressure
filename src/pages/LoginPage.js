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
        <img className="login-logo" src={`${process.env.PUBLIC_URL}/PeerPressureLogo.png`} alt="App logo" />
        <Textbox email={email} onEmailChange={setEmail} password={password} onPasswordChange={setPassword} />
        <button className="spaced">Login</button>
        <button className="spaced" onClick={handleSignUp}>Create Account</button>
      </div>
    </div>
  );
}

export default LoginPage;