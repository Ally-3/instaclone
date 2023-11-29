import { writecookie } from "../utils/utilities";
import instatext from '../images/instatext.png';

function Register(props) {
    async function sendRegisterToBackEnd(email, password, setLoggedIn) {
        try {
            const response = await fetch(
                "https://end-user-api-2.onrender.com/registerUser",
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
            setLoggedIn(true);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendRegisterToBackEnd(props.email, props.password, props.setLoggedIn)
    }
     console.log(props.email)
    return (
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
                    onChange = {(event) => props.setEmail(event.target.value)}>
                </input>
                <br></br>
                <label htmlFor="password"></label>
                <input 
                    className="passwordbox" 
                    type="text" 
                    id="password" 
                    placeholder="Password"
                    required 
                    onChange = {(event) => props.setPassword(event.target.value)}>
                </input>
                <br></br>
                <input className="input-bt" type="submit" value="Sign Up"/>
            </form>
        </div>
    )
};

export default Register;