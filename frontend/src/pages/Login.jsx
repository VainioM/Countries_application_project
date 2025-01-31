import { useEffect, useState } from "react";

import Axios from "axios";

function Login() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3000/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (!response.data.message) {
                    setLoginStatus(response.data.message);
                } else {
                    console.log(response.data);
                    setLoginStatus(response.data[0].username);
                }
        });
    };

    return (
        <div>
         <h1>This is the login page</h1>
        </div>
     )

}
export default Login;