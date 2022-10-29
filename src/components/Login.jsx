import React ,{useState , useEffect}from 'react' ;
import loginimg from '../assets/loginimg.svg';
import Navs from "./navs.jsx";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";

const Login = () => {
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mssge, setMessge] = useState("");
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
  function handlesubmit(e){
  e.preventDefault();
  }
  const [iscorrectpass, setIsCorrectPass] = useState(false);
  const [iscorrectEmail, setIsCorrectEmail] = useState(false);
  
  const rightmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    useEffect(() => {
      if (password.length>0) {
        document.getElementById("error2").style.display = "none";
        console.log("true");
        setIsCorrectPass(true);
      } else if (password) {
        document.getElementById("error2").style.display = "block";
        setIsCorrectPass(false);
      }
    }, [password]);
    useEffect(() => {
      if (rightmail.test(userEmail)) {
        document.getElementById("error1").style.display = "none";
        console.log("true");
        setIsCorrectEmail(true);
      } else if (userEmail) {
        document.getElementById("error1").style.display = "block";
        setIsCorrectEmail(false);
      }
    }, [userEmail]);
    function handleApi() {
      if (iscorrectEmail && iscorrectpass) {
        axios
          .post("https://foodorabackend-production.up.railway.app/user/signin", {
            email:userEmail,
            password:password
          })
          .then((res) => {
            console.log(res.data);
            setMessge(res.data.msg);
          
          })
          .catch((err) => {
            console.log(err);
            setMessge(err.response.data.msg);
          });
      }
    }
    return (
      <div>
        <Navs />
        <p id='backend'>{mssge}</p>
     <h1 id='hungry'>HUNGRY??</h1>
    <p id='order'>Order Now From Your Favourite Restraunt..</p>
    <img src={loginimg} alt="hello" id="logs" />
    <h1 id="log">LOGIN</h1>
   <div id="auth">
    <form id="form1" onSubmit={handlesubmit}>
        <input
          type="text"
          id="email"
          className='email'
          placeholder="Enter your Email"
          onChange={handleuserEmail}
          value={userEmail}
          required
        />
        <p id="error1">Incorrect usermail. Please try again.</p>
        <input
          type={show ? "text" : "password"}
          id="password"
          className="password"
          placeholder="Enter your password"
          onChange={handlepass}
          value={password}
          required
        />
        {show ? (
          <FontAwesomeIcon icon={faEye} id="eye" onClick={showHide} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} id="eye" onClick={showHide} />
        )}
        <p id="error2">Required</p>
        <button className="loginbtn" type="submit" onClick={handleApi}>
          LOGIN
        </button>
        <Link to="/forgot" id="forgot">
          <p id='frg'>Forgotten Password?</p>
       </Link>
       <p id='mssg'>New To Foodora? <Link to="/signup">
        SIGN UP
     </Link></p>
        </form>
      </div>
      </div>
    );
}

export default Login;