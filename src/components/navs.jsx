import react from "react";
import "/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
var a;
function show() {
  if (a == 1) {
    document.getElementById("ul").style.left = 0;
    return (a = 0);
  } else {
    document.getElementById("ul").style.left = "-100vh";
    return (a = 1);
  }
}
function Navs() {
  return (
    <>
    <p id='logos'>FOODORA</p>
      <nav>
        <ul id="ul">
          <div>
            <li id='homes'>
              <Link to="/">HOME</Link>
            </li>
          </div>
          <div>
            <li id='logins'>
              <Link to="/login">LOGIN</Link>
            </li>
          </div>
          <div>
            <li id='signups'>
              <Link to="/signup">SIGNUP</Link>
            </li>
          </div>
        </ul>
      </nav>
      {/* <FontAwesomeIcon icon="fa-solid fa-house" id='homeicon'/> */}
    </>
  );
}
export default Navs;
