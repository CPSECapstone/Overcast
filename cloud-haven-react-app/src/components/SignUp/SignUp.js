import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signupWrapper center" >
        <h1 className="center">Create an account</h1>
        <form>
            <div className="inputBox center centerText">
                <label>Email Address</label>
                <br></br>
                <input type="email" name="email" required />
            </div>
            <div className="inputBox center centerText">
                <label>Password</label>
                <br></br>
                <input type="password" name="password1"/>
            </div>
            <div className="center  centerText">
            <button className="buttonSignUp" type="submit">Sign Up</button>
            </div>
        </form>
        </div>
    )
}

export default SignUp;
