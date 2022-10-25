import react from 'react';
import './Otp.css';
import Otps from './Otps.jsx'
import SignupImg from './SignupImg.jpg';
import Navs from './navs.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Otp2(){
return(
    <>
    <Navs />
    <Otps />
    <img src={SignupImg} alt='' id='logs'/>
    </>
);
  }
export default Otp2;