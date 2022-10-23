import react from 'react';
import './Forgot.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Forgot(){
return(
<div id='auth3'>
<form id='form1'>
        <input type='email' placeholder="Enter your email for verification"></input>
        <Link to='/otp'><button type='submit'>Send OTP</button></Link>
    </form>
</div>
);
}
export default Forgot;