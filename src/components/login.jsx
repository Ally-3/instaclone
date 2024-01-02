import { writecookie } from "../utils/utilities";
import instatext from '../images/instatext.png';
import React, { useState, useEffect } from 'react';

import homephone from '../images/home-phones-2x.png';
import homephone2 from '../images/screenshot2-2x.png';
import homephone3 from '../images/screenshot3-2x.png';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const images2 = [homephone2, homephone3];

    useEffect(() => {
        const interval = setInterval(() => {
        // Increment current slide index, and reset to 0 if it exceeds the number of images
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images2.length);
        }, 5000); 
      
    return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images2.length]);

    async function sendLoginToBackEnd() {
        try {
            console.log(email)
            console.log(password)
            const response = await fetch(
                "https://instaclone-ss61.onrender.com/loginUser",
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
            console.log(data);
            writecookie("jwt_token",data.token,7);
            props.setLoggedIn(true);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendLoginToBackEnd();
    }
    console.log(props.email)

    return (
        <div className="all-container">
            <div className="pic-container">
                <img src={homephone} alt="Logo" className="pic1"/>
               
                <img
                    src={images2[currentSlide]}
                    alt={`${currentSlide + 1}`}
                    className={`images2 ${currentSlide === 0 ? 'fade-out' : ''}`}
                />
             
            </div>
        <div className="box-container">

            <div className="box">
                <form onSubmit={handleSubmit}>
                    <img src={instatext} alt="Logo" width="180px" />
                    <br></br>
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
                    <input className="input-bt" type="submit" value="Log In"/>
                </form>
            </div>
            <br></br>
            <div className="box2">
            <h4>Don't have an account? <a 
                style={{
                    textDecoration: 'none', 
                    color: 'rgb(0, 174, 255)',
                    fontWeight: 'bold',
                }} 
                href="./signup">Sign Up</a>
            </h4>
            </div>
        </div>
        </div>
    )
};

export default Login;