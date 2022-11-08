import react from "react";
import "./Otp.css";
import Otps2 from "./Otps2.jsx";
import loginpage from '../assets/loginpage.jpg'
import Navs from "./navs.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Otp() {
  return (
    <>
      <Navs />
      <img src={loginpage} alt="" id="loginpage" />
      <div id='backgrey'></div>
      <Otps2 />
    
    </>
  );
}
export default Otp;
