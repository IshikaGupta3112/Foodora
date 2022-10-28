import react,{useState} from "react";
import "./Otp.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
function Otps() {
  const [mssg,setmssg]=useState('');
  const [userOtp, setuserOtp] = react.useState({
    otp: "",
  });
  var email =localStorage.getItem("myMail");
  console.log(email);
  var otp = userOtp.otp;
  const handleApi5=()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/user/verify/send",{email})
    .then(res=>{
      console.log(res.data.msg);
      setmssg(res.data.msg);
    })
    .catch(err=>{
      console.log(err);
      console.log(err.response.data.msg);
      setmssg(err.response.data.msg)
    })
  }
  const handleApi4=()=>{
    axios 
    .post('https://foodorabackend-production.up.railway.app/user/verify' ,{email , otp} )
    .then(result=>{
      console.log(result.data.msg);
      setmssg(result.data.msg)})
    .catch(err3=>{
      console.log(err3);
      console.log(err3.response.data.msg);
      setmssg(err3.response.data.msg);
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
    } 
    return error;
  }
  return (
    <>
    <p id='backendmssg'>{mssg}</p>
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
          <p id='otpp'>Didn't get? <Link to="/otp2" onClick={handleApi5}>
            Resend OTP
          </Link></p>
        </form>
      </div>
    </>
  );
}
export default Otps;
