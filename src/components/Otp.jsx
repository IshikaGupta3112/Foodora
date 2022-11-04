
import "./Otp.css";
import Otps2 from "./Otps2.jsx";
import loginimg from '../assets/loginimg.svg';
import Navs from "./navs.jsx";
function Otp() {
  return (
    <>
     <h1 id='hungry'>HUNGRY??</h1>
        <p id='order'>Order Now From Your Favourite Restraunt..</p>
      <Navs />
      <Otps2 />
      <img src={loginimg} alt="" id="logs1" />
    </>
  );
}
export default Otp;
