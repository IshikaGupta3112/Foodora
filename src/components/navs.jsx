
import "../index.css";
import { BrowserRouter as  Link } from "react-router-dom";
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
