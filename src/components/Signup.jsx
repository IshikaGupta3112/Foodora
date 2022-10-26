import react, { useState,useEffect } from "react";
import axios from 'axios';
import "./Signup.css";
import Navs from "./navs.jsx";
import signinimg from '../assets/signinimg.svg';
import Otp from "./Otp.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

function Signup() {

    const [userSign, setUserSign] = useState({
        fullname: "",
        emails: "",
        passwords: "",
        repasswords: "",
      });
      var username=userSign.fullname;
      var email=userSign.emails;
      var password = userSign.passwords;
      var data1={username , email , password}
      const handleApi2=()=>{
        axios
       .post('https://foodorabackend-production.up.railway.app/user/register',data1)
       .then(res=>
       console.log(res)
       )
       .catch(err2=>{
        console.log(err2);
       });
     }; 
    
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  function showHide1() {
    setShow1(!show1);
  }

  function showHide2() {
    setShow2(!show2);
  }

  

  const [records, setRecords] = react.useState([]);

  const [error2, setError2] = react.useState({});

  const [isSubmitted, setIsSubmitted] = react.useState(false);

  function handleInputs(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserSign({ ...userSign, [name]: value });
  }

  function handleSubmits(event) {
    event.preventDefault();
    const newRecords = { userSign };
    setRecords([...records, newRecords]);
    console.log(records);
    setError2(validates(userSign));
    setIsSubmitted(true);
  }

  function validates(values) {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Username is required!";
    }
    if (!values.emails) {
      errors.emails = "Email is required!";
    } else if (
      values.emails.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) == null
    ) {
      errors.emails = "Invalid mail";
    }
    if (!values.passwords) {
      errors.passwords = "Password is required!";
    } else if (values.passwords.length < 8) {
      errors.passwords = "At least 8 chars needed!";
    } else if (values.passwords.match(/[A-Z]/) == null) {
      errors.passwords = "Password must have one uppercase";
    } else if (values.passwords.match(/[0-9]/) == null) {
      errors.passwords = "Password must have one number";
    } else if (values.passwords.match(/[!@#$%^&*]/) == null) {
      errors.passwords = "Password must have 1 special symbol";
    }
    if (!values.repasswords) {
      errors.repasswords = "Re-enter password!";
    }
    if (values.repasswords != values.passwords) {
      errors.repasswords = "Passwords did not match";
    }
    return errors;
  }
  return (
    <>
      <Navs />
      <h1 id='hungry'>HUNGRY??</h1>
        <p id='order'>Order Now From Your Favourite Restraunt..</p>
      <h1 id="log1">SIGNUP</h1>
      <div id="auths">
        <div className="form">
          <form id="form2" onSubmit={handleSubmits}>
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              id="fullname"
              className="inp"
              value={userSign.fullname}
              onChange={handleInputs}
            ></input>
            <p id="errors1">{error2.fullname}</p>
            <input
              type="text"
              placeholder="Enter your email"
              name="emails"
              id="emails"
              className="inp"
              value={userSign.emails}
              onChange={handleInputs}
            ></input>
            <p id="errors2">{error2.emails}</p>
            <input
              type={show1 ? "text" : "password"}
              placeholder="Password"
              name="passwords"
              id="passwords"
              className="inp"
              value={userSign.passwords}
              onChange={handleInputs}
            ></input>
            {show1 ? (
              <FontAwesomeIcon icon={faEye} id="eye1" onClick={showHide1} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="eye1"
                onClick={showHide1}
              />
            )}
            <p id="errors3">{error2.passwords}</p>
            <input
              type={show2 ? "text" : "password"}
              placeholder="Re-enter password"
              name="repasswords"
              id="repasswords"
              className="inp"
              value={userSign.repasswords}
              onChange={handleInputs}
            ></input>
            {show2 ? (
              <FontAwesomeIcon icon={faEye} id="eye2" onClick={showHide2} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="eye2"
                onClick={showHide2}
              />
            )}
            <p id="errors4">{error2.repasswords}</p>
            <Link to='/otp2'>
            <button type="submit" onClick={handleApi2}>SIGNUP</button>
            </Link>
            {/* if signup successfull link to otp */}
            <p id='customer'>Already a customer?  <Link to="/login">
             Login
            </Link></p>
          
          </form>
        </div>
      </div>
      <img src={signinimg} alt="" id="logs" />
    </>
  );
}
export default Signup;
