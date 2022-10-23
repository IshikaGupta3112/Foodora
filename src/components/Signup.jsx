import react from 'react';
import './Signup.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Signup(){
    return(
        <>
        <h1 id='log'>SIGNUP</h1>
        <div id='auths'>
        <div className='form'>
    <form id='form1'>
        <input type ='text' placeholder='Full Name'></input>
        <input type='email' placeholder="Enter your email"></input>
        <input type='password' placeholder='Password'></input>
        <input type='password' placeholder='Re-enter password'></input>
        <Link to='/otp'><button type='submit'>Signup</button></Link>
        <p>Already a customer?</p>
        <Link to='/login'><button id='newToo'>Login</button></Link>
    </form>
    </div>
    </div>
    </>
    );
}
export default Signup;