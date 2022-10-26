import react from "react";
import "/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/index.css";
import background from '../assets/background.svg';
import Navs from "./navs.jsx";
function Navbar() {
  return (
    <>
      <Navs />
      <img src={background} alt="" id="back" />
    </>
  );
}
export default Navbar;
