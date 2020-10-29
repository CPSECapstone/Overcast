import React, { useState } from "react";
import './SignUp.css';
import * as api from '../../api.js';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        var signUpData = {
            "email": email,
            "password": password
        };
        api.signup(signUpData);
        alert(JSON.stringify(signUpData))
    }

    return (
        <div className="signupWrapper center" >
        <h1 className="center">Create an account</h1>
        <form>
            <div className="inputBox center centerText">
                <label>Email Address</label>
                <br></br>
                <input 
                    type="email" 
                    name="email" required
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="inputBox center centerText">
                <label>Password</label>
                <br></br>
                <input 
                    type="password" 
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="center  centerText">
                <button 
                    className="buttonSignUp" 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
            </div>
        </form>
        </div>
    )
}

export default SignUp;
