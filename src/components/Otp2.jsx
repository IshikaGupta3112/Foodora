import react from "react";
import "./Otp.css";
import Otps from "./Otps.jsx";
import signuppage from '../assets/signuppage.jpg';
import Navs from "./navs.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Otp2() {
  return (
    <>
      <Navs />
      <img src={signuppage} alt="" id="loginpage" />
      <div id='backgrey'></div>
      <Otps />
    
    </>
  );
}
export default Otp2;
