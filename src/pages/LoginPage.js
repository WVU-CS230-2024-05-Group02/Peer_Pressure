import React from "react";
import Textbox from "../components/Textbox.js";

function LoginPage(){
    return(
        <div>
            <img class="login-logo" src={`${process.env.PUBLIC_URL}/PeerPressureLogo.png`} alt="App logo" />
            <Textbox email="Email:  " password="Password: " />
        </div>
    );
}
export default LoginPage;