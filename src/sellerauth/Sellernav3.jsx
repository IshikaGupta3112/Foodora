import logo from '../assets/logo.svg';
import './sellernav.css';
import {Link}from "react-router-dom";
function SellerNav3() {
  return (
    <>
   <nav id='sellernav'>
  <img src = {logo} id='homelogo' />
  <p id='signlink'>
              <Link to="/sellerorders">Orders</Link>
            </p>
           
    </nav>
    </>
  );
}
export default SellerNav3;
