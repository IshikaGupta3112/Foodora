import React ,{useState , useEffect}from 'react' ;
import loginpage from '../assets/loginpage.jpg';
import Navs from "./navs.jsx";
import "./Login.css";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import Navs3 from './navs2';
import Loader from '../Loader';
import * as ReactBootstrap from 'react-bootstrap';
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
  const [loading, setLoading] = useState(false);
  
  const rightmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    useEffect(() => {
      if (password.length>0) {
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
    const Navigate = useNavigate();
    function handleApi() {
      setLoading(true);
      if (iscorrectEmail && iscorrectpass) {
        axios
          .post("https://foodorabackend-production.up.railway.app/user/signin", {
            email:userEmail,
            password:password
          })
          .then((res) => {
            console.log(res.data);
            setMessge(res.data.msg);
          console.log(res.data.id);
      setLoading(false);
          console.log(res.data.accesstoken);
          localStorage.setItem("accesstoken" , res.data.accesstoken);
          localStorage.setItem("userid" , res.data.id);
          Navigate("/location");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setMessge(err.response.data.msg);
          });
      }
    }
    console.log(loading);
    return (
      <>
      <Navs3 />
      {loading? <Loader/>:
     ( <div id="fulllog">
        <img src={loginpage} id="loginpageimg"></img>
        <div id="loginpageform">
          <h1 id="sellerloginhead">LOGIN</h1>
          <p id="validation1">Invalid Mail</p>
          <p id="validation2">Invalid</p>
          <p id="sellerback1">{mssge}</p>
         
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
            <Link to="/forgot">Forgot Password?</Link>
          </p>
          <p id="sellersignuplink">
            New To Foodora? <Link to="/signup">SIGN UP</Link>
          </p>
        </div>
      </div>)
    }
      {/* // {< ReactBootstrap.Spinner animation="border" role="status" />} */}
    </>
  //     <div>
  //       <Navs />
  //       <img src={loginpage} id='loginpage' alt='' />
  //       <div id='backgrey'></div>
  //       <p id='backend'>{mssge}</p> 
  //   <h1 id="log">LOGIN</h1>
  //  <div id="auth">
  //   <form id="form1" onSubmit={handlesubmit}>
  //       <input
  //         type="text"
  //         id="email"
  //         className='email'
  //         placeholder="Enter your Email"
  //         onChange={handleuserEmail}
  //         value={userEmail}
  //         required
  //       />
  //       <p id="error1">Incorrect usermail. Please try again.</p>
  //       <input
  //         type={show ? "text" : "password"}
  //         id="password"
  //         className="password"
  //         placeholder="Enter your password"
  //         onChange={handlepass}
  //         value={password}
  //         required
  //       />
  //       {show ? (
  //         <FontAwesomeIcon icon={faEye} id="eye" onClick={showHide} />
  //       ) : (
  //         <FontAwesomeIcon icon={faEyeSlash} id="eye" onClick={showHide} />
  //       )}
  //       <p id="error2">Required</p>
  //       <button className="loginbtn" type="submit" onClick={handleApi}>
  //         LOGIN
  //       </button>
  //       <Link to="/forgot" id="forgot">
  //         <p id='frg'>Forgotten Password?</p>
  //      </Link>
  //      <p id='mssg'>New To Foodora? <Link to="/signup">
  //       SIGN UP
  //    </Link></p>
  //       </form>
  //     </div>
  //     </div>

    );
}

export default Login;