import React, { useState } from "react";
import { notifySuccess, notifyWarning, notifyError } from '../components/Alert';

const Signup = () => {

    return (
        <div className="background">
            <div className="login-container">
                <h1>Sign Up Page</h1>
                <img className="login-logo" src={`${process.env.PUBLIC_URL}/PeerPressureLogo.png`} alt="App logo" />
                <form action="/api/signup" method="post">
                    

                    <input
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        id="username"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"

                    />

                  
                    <label class="float-left" for="isInstructor">Sign up as an instructor</label>
                    <input class="float-left"
                        type="checkbox"
                        name="isInstructor"
                    />
                    
                            
       
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
