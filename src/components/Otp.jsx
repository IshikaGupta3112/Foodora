import react from 'react';
import './Otp.css';
import Otps from './Otps.jsx'
import LoginImg from './LoginImg.jpg';
import Navs from './navs.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Otp(){
return(
    <>
    <Navs />
    <Otps />
    <img src={LoginImg} alt='' id='logs'/>
    </>
);
  }
export default Otp;