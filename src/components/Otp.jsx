import react from 'react';
import './Otp.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Otp(){
return(
    <>
    <h1 id='log'>OTP verification</h1>
    <div id='auth4'>
    <form id='form1'>
        <input type='text' placeholder="Enter OTP"></input>
        <Link to='/main'><button >Verify</button></Link>
        <p>Didn't get?</p>
        <Link to='/otp'><button type='submit'id='newToo'>Resend OTP</button>   </Link>
    </form>
    </div>
    </>
);
}
export default Otp;