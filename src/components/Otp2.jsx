import react from "react";
import "./Otp.css";
import Otps from "./Otps.jsx";
import signinimg from '../assets/signinimg.svg';
import Navs from "./navs.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Otp2() {
  return (
    <>
      <Navs />
      <Otps />
      <img src={signinimg} alt="" id="logs" />
    </>
  );
}
export default Otp2;
