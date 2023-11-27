import { writecookie } from "../utils/utilities";
import instatext from '../images/instatext.png';

function Login(props) {
    async function sendLoginToBackEnd(email, password, setLoggedIn) {
        try {
            console.log(email)
            console.log(password)
            const response = await fetch(
                "http://localhost:5001/loginUser",
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
            setLoggedIn(true);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendLoginToBackEnd(props.email, props.password, props.setLoggedIn)
    }
     console.log(props.email)
    return (
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
    )
};

export default Login;