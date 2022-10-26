import react from "react";
import "./Otp.css";
import Otps from "./Otps.jsx";
import loginimg from '../assets/loginimg.svg';
import Navs from "./navs.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Otp() {
  return (
    <>
     <h1 id='hungry'>HUNGRY??</h1>
        <p id='order'>Order Now From Your Favourite Restraunt..</p>
      <Navs />
      <Otps />
      <img src={loginimg} alt="" id="logs" />
    </>
  );
}
export default Otp;
