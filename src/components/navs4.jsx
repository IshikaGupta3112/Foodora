import react from "react";
import "../index.css";
import logo from '../assets/logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Navs4() {
  return (
    <>
      <nav id='navbar'>
      <img src ={logo}  alt ='hii' id="homelogo"/>
            <p id='signlink'>
              <Link to="/home">Home</Link>
            </p>
      </nav>
    </>
  );
}
export default Navs4;
