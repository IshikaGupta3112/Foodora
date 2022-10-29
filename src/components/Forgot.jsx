import react, { useState } from "react";
import Navs from "./navs";
import loginimg from '../assets/loginimg.svg';
import "./Forgot.css";
import { Link } from "react-router-dom";
import axios from 'axios';
// const mail = document.getElementById('email');
function Forgot() {
  const [userForgot, setuserForgot] = useState({
    email: "",
  });
  const [mssg,setMssg]=useState('');
  var email=userForgot.email;

  
  // const [errors, setErrors] = react.useState({});
  const [isSubmit, setIsSubmit] = react.useState(false);

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setuserForgot({ ...userForgot, [name]: value });
   localStorage.setItem("mail" , value);
  }

  function handleSubmit(event) {
    axios
    .post("https://foodorabackend-production.up.railway.app/user/verify/send",{email})
    .then(res=>{
      setMssg(res.data.msg);
      console.log(res.data.msg);
    })
    .catch(err=>{
      console.log(err);
    })
    event.preventDefault();
    // setErrors(validate(userForgot));
    setIsSubmit(true);
   
  }
  // function validate(values) {
  //   const error = {};
  //   if (!values.email) {
  //     error.email = "Email is required!";
  //   } else if (
  //     values.email.match(
  //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //     ) == null
  //   ) {
  //     error.email = "Invalid mail";
  //   }
  //   return error;
  // }
  return (
    <>
      <Navs />
      <p id='backend'>{mssg}</p>
      <h1 id='hungry'>HUNGRY??</h1>
        <p id='order'>Order Now From Your Favourite Restraunt..</p>
      <h1 id="log2">Email Verification</h1>
      <div id="auth3">
        <form id="form1" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email for verification"
            className="email"
            name="email"
            value={userForgot.email}
            onChange={handleInput}
            required
          ></input>
          {/* <p id="errors5">{errors.email}</p> */}
          <Link to="/otp">
            <button type="submit" id='otpsend'
            //  onClick={handleApi3}
             >SEND OTP</button>
          </Link>
          {/* on sub,it if coreect link to otp */}
        </form>
      </div>
      <img src={loginimg} alt="" id="logs" />
    </>
  );
}
export default Forgot;
