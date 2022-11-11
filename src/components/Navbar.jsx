import react , {useState} from "react";
import "../index.css";
import background from '../assets/background.svg';
import Navs from "./navs.jsx";
import backgroundimg2 from '../assets/backgroundimg2.jpg'
import axios from "axios";
function Navbar() {
return (<div>
  <div id='frontpage'><img src={backgroundimg2}></img></div>
    <Navs />
    <h1 id="areuu2">Welcome To Buyer Site!</h1>
</div>) ;

     
}
export default Navbar;
