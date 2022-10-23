import react from 'react';
import './Login.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Login(){
    return(
        <>
        <h1 id='log'>LOGIN</h1>
    <div id='auth'>
    <form id='form1'>
        <input type='email' placeholder="Enter your email"></input>
        <input type='password' placeholder='password'></input>
        <button type='submit'>Login</button>
        <Link to='/forgot' id='forgot'><p>Forgotten Password?</p></Link>
        <p>New To Foodora?</p>
        <Link to='/signup'><button id='newTo'>Create new account</button></Link>
    </form>
    </div>
    </>
    );
}
export default Login;