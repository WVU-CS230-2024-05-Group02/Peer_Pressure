import React from "react";
import Textbox from "../components/Textbox.js";
import Footer from "../components/Footer.js";
import '../App.js';

function LoginPage(){
    return(
        <div className="background">
            <img className="login-logo" src={`${process.env.PUBLIC_URL}/PeerPressureLogo.png`} alt="App logo" />

            <Textbox email="Email: " password="Password: "/>
            <button>Login</button>
            <p>If you don't already have an acount with us, please make one.</p>
            <button>New User</button>
            {/*<Footer />*/}
        </div>
    );
}
export default LoginPage;