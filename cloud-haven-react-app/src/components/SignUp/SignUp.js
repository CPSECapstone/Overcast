import React, { useState } from "react";
import * as api from '../../api.js';
import { Container, Form, Button } from "react-bootstrap";
import close from './closeButton.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import './SignUp.css';

const eye = <FontAwesomeIcon icon={faEye} />
const eyeClosed = <FontAwesomeIcon icon={faEyeSlash} />

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        var signUpData = {
            "email": email,
            "password": password
        };
        api.signup(signUpData);
    }

    const togglePassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <Container className="signupWrapper center">
            <Button className="closeButton">
                <img src={close} />
            </Button>
            <Container className="SignUpForm">
                <h1 className="header">Create an account</h1>
                <Form>
                    <Form.Group className="inputBox">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type={passwordShown ? "text" : "password"} 
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {passwordShown ?
                            <i onClick={togglePassword} className="eyeIcon">{eye}</i>
                            :
                            <i onClick={togglePassword} className="eyeIcon">{eyeClosed}</i>
                        }
                    </Form.Group>
                    <Form.Group className="centerText">
                        <Button 
                            className="buttonSignUp" 
                            type="submit" 
                            onClick={handleSubmit}
                        >
                            <b>Sign Up</b>
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
    )
}

export default SignUp;
