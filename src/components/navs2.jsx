import react from "react";
import "../index.css";
import logo from '../assets/logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Navs3() {
  return (
    <>
      <nav id='navbar'>
      <img src ={logo}  alt ='hii' id="homelogo"/>
            {/* <p id='loginlink'>
              <Link to="/login">Login</Link>
            </p>
            <p id='signlink'>
              <Link to="/signup">Signup</Link>
            </p> */}
      </nav>
    </>
  );
}
export default Navs3;
