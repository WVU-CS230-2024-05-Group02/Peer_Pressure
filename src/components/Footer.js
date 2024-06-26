import React from "react";

function Textbox(text){
    return(
        <form id="login-box">
                <label for="email">{text.email}</label>
                <input type="text" id="userEmail" name="email" required />

                <label for="password">{text.password}</label>
                <input type="text" id="userPassword" name="password" required />
        </form>
    );
}
export default Textbox;