import React from "react";

function Textbox(text){
    return(
        <form id="login-box">
                <label for="name">{text.email}</label>
                <input type="text" name="name" id="name" required />

                <label for="name">{text.password}</label>
                <input type="text" name="name" id="name" required />
        </form>
    );
}
export default Textbox;