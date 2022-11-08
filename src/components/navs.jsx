import react from "react";
import "../index.css";
import logo from '../assets/logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// var a;
// function show() {
//   if (a == 1) {
//     document.getElementById("ul").style.left = 0;
//     return (a = 0);
//   } else {
//     document.getElementById("ul").style.left = "-100vh";
//     return (a = 1);
//   }
// }
function Navs() {
  return (
    <>
      <nav id='navbar'>
      <img src ={logo}  alt ='hii' id="homelogo"/>
            <p id='loginlink'>
              <Link to="/login">Login</Link>
            </p>
            <p id='signlink'>
              <Link to="/signup">Signup</Link>
            </p>
      </nav>
    </>
  );
}
export default Navs;
