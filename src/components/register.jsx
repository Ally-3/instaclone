import { writecookie } from "../utils/utilities";
import instatext from '../images/instatext.png';
import React, { useState } from 'react';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function sendRegisterToBackEnd() {
        try {
            const response = await fetch(
                "https://instaclone-ss61.onrender.com/registerUser",
                {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            )
            const data = await response.json();
            console.log(data.token);
            writecookie("jwt_token",data.token,7);
            props.setLoggedIn(true);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendRegisterToBackEnd()
    }
     console.log(props.email)
    return (
        <div className=" all-container box-container">
        <div className="box">
            <form onSubmit={handleSubmit}>
                <img src={instatext} alt="Logo" width="180px" />
                <br></br>
                <h3>Sign up to see photos and videos from your friends.</h3>
                <label htmlFor="email"></label>
                <input 
                    className="emailbox" 
                    type="text" 
                    id="email" 
                    placeholder="Phone number, username, or email"
                    required 
                    onChange = {(event) => setEmail(event.target.value)}>
                </input>
                <br></br>
                <label htmlFor="password"></label>
                <input 
                    className="passwordbox" 
                    type="text" 
                    id="password" 
                    placeholder="Password"
                    required 
                    onChange = {(event) => setPassword(event.target.value)}>
                </input>
                <br></br>
                
                <input className="input-bt" type="submit" value="Sign Up"/>
            </form>
           
        </div>
        <br></br>
        <div className="box2">
            {/* <div>
                <h5>People who use our srevice may have uploaded your contact information to Instagram. <a href="#">Learn more</a></h5>
                <h5>By signing up, you agree to our <a href="#">Terms</a>. Learn how we collect, use and share your data in our <a href="#">Policy</a> and how we use cookies and similar technology in our <a>Cookies Policy</a>.</h5>
            </div> */}
            <h4>If you already have an account, please log in: <a 
                style={{
                    textDecoration: 'none', 
                    color: 'rgb(0, 174, 255)',
                    fontWeight: 'bold',
                }} 
                href="./">Log in</a>
            </h4>
            </div>
        </div>
    )
};

export default Register;


