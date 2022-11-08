import "./login1.css";
import { useState ,useEffect} from "react";
import axios from 'axios';
import loginimg2 from "../assets/loginimg2.svg";
import SellerNav from "./sellernav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
function SellerLogin() {
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mssg1, setMssg1] = useState("");
  function handleuserEmail(e) {
    setuserEmail(e.target.value);
  }
  function handlepass(e) {
    setPassword(e.target.value);
  }
  const [show, setShow] = useState(false);
  function showHide() {
    setShow(!show);
  }
  function handlesubmit(e) {
    e.preventDefault();
  }
  const [iscorrectpass, setIsCorrectPass] = useState(false);
  const [iscorrectEmail, setIsCorrectEmail] = useState(false);

  const rightmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  useEffect(() => {
    if (password.length > 0) {
      document.getElementById("validation2").style.display = "none";
      console.log("true");
      setIsCorrectPass(true);
    } else if (password) {
      document.getElementById("validation2").style.display = "block";
      setIsCorrectPass(false);
    }
  }, [password]);
  useEffect(() => {
    if (rightmail.test(userEmail)) {
      document.getElementById("validation1").style.display = "none";
      console.log("true");
      setIsCorrectEmail(true);
    } else if (userEmail) {
      document.getElementById("validation1").style.display = "block";
      setIsCorrectEmail(false);
    }
  }, [userEmail]);
  function handleApi() {
    if (iscorrectEmail && iscorrectpass) {
      axios
        .post("https://foodorabackend-production.up.railway.app/seller/signin", {
          email: userEmail,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          setMssg1(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
          setMssg1(err.response.data.msg);
        });
    }
  }
  return (
    <>
      <SellerNav />
      <div id="fulllog">
        <img src={loginimg2} id="loginpageimg"></img>
        <div id="loginpageform">
          <h1 id="sellerloginhead">LOGIN</h1>
          <p id="validation1">Invalid Mail</p>
          <p id="validation2">Invalid</p>
          <p id="sellerback1">{mssg1}</p>
          <form id="sellerloginform" onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={handleuserEmail}
              value={userEmail}
              required
            ></input>
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              onChange={handlepass}
              value={password}
              required
            ></input>
            {show ? (
              <FontAwesomeIcon icon={faEye} id="seye1" onClick={showHide} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="seye1"
                onClick={showHide}
              />
            )}
            <button type="submit" id="sellerloginbtn" onClick={handleApi}>
              Login
            </button>
          </form>
          <p id="sellerfrg">
            <Link to="/sellerfrg">Forgot Password?</Link>
          </p>
          <p id="sellersignuplink">
            New To Foodora? <Link to="/sellersignup">SIGN UP</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default SellerLogin;