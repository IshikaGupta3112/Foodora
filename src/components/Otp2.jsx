
import "./Otp.css";
import Otps from "./Otps.jsx";
import signinimg from '../assets/signinimg.svg';
import Navs from "./navs.jsx";
function Otp2() {
  return (
    <>
      <Navs />
      <Otps />
      <img src={signinimg} alt="" id="logs3" />
    </>
  );
}
export default Otp2;
