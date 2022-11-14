import logo from '../assets/logo.svg';
import './sellernav.css';
import {Link}from "react-router-dom";
function SellerNav2() {
  return (
    <>
   <nav id='sellernav'>
  <img src = {logo} id='homelogo' />
  {/* <p id='loginlink'>
              <Link to="/sellerlogin">Login</Link>
            </p>
            <p id='signlink'>
              <Link to="/sellersignup">Signup</Link>
            </p> */}
    </nav>
    </>
  );
}
export default SellerNav2;
