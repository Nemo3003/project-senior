import { useState } from "react";
import axios from 'axios';
// Routes
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Login() {
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");*/
  const {loginWithRedirect} = useAuth0();
  const {logout} = useAuth0();

  return (
  <div>
    <button onClick={loginWithRedirect}>Login</button> 
    <button onClick={()=>logout({redirectTo: window.location.origin})}>
      Logout</button></div>)
  

 
}

export default Login;
