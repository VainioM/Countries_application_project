import { useEffect, useState } from "react";
import "../css/Login.css"

import Axios from "axios";

function Login() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = false;

    const login = () => {
        Axios.post("http://localhost:3000/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (!response.data.message) {
                    setLoginStatus(false);
                } else {
                    console.log(response.data);
                    setLoginStatus(true);
                }
        });
    };

    return (
        <div className="login">
            <div className="header-text">
         <h2>If you already have an account please log in:</h2>
         </div>
         <div className="form">
         <input
            type="text"
            placeholder=" Username..."
            className="input-box"
            onChange={(e) => {
                setUsername(e.target.value);
            }}
         />
         <input
          type="password"
          placeholder=" Password..."
          className="input-box"  
          onChange={(e) => {
            setPassword(e.target.value);
          }}
         />
         </div>
         <button className="search-button" onClick={login}> Login </button>
        </div>
     )

}
export default Login;