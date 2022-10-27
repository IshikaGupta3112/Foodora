import react from "react";
import "./Otp.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
function Otps() {
  const [userOtp, setuserOtp] = react.useState({
    otp: "",
  });
  var email =localStorage.getItem("mail");
  var otp = userOtp.otp;
  const handleApi3=()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/user/verify/send",{email})
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const handleApi4=()=>{
    axios 
    .post('https://foodorabackend-production.up.railway.app/user/verify' ,{email , otp} )
    .then(result=>{
      console.log(result);
    })
    .catch(err3=>{
      console.log(err3);
    })
  }
  const [errors, setErrors] = react.useState({});
  const [isSubmit, setIsSubmit] = react.useState(false);
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setuserOtp({ ...userOtp, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(userOtp));
    setIsSubmit(true);
  }
  function validate(values) {
    const error = {};
    if (!values.otp) {
      error.otp = "OTP is required!";
    } else if (values.otp.match(/^\d+$/) == null) {
      error.otp = "Numbers only";
    }
    return error;
  }
  return (
    <>
      <h1 id="log3">OTP verification</h1>
      <div id="auth4">
        <p id='enters'>Enter OTP send at abc.......@gmail.com</p>
        <form id="form1" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            id="otp"
            name="otp"
            value={userOtp.otp}
            onChange={handleInput}
          ></input>
          <p id="errors6">{errors.otp}</p>
          {/* <Link to='/main'> */}
          <button type="submit" id='verify' onClick={handleApi4}>VERIFY</button>
          {/* </Link> */}
          {/* if otp enter correct then main page linking */}
          <p id='otpp'>Didn't get? <Link to="/otp" onClick={handleApi3}>
            Resend OTP
          </Link></p>
        </form>
      </div>
    </>
  );
}
export default Otps;
