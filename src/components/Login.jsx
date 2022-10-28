import react ,{useEffect , useState} from "react";
import loginimg from '../assets/loginimg.svg';
import Navs from "./navs.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import axios from 'axios';
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
   const[check , isCheck]=useState(false);
    const [userReg, setuserReg] = react.useState({
        email: "",
        password: "",
      });
    const [mssg , setMssg] =useState(null);
    var email = userReg.email;
    var password = userReg.password;
    var data ={email , password}
    const handleApi =()=>{
      if(check){
       axios
        .post('https://foodorabackend-production.up.railway.app/user/signin',data)
        .then((response)=>{
            setMssg(response.data.msg);
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.response.data.msg);
            setMssg(err.response.data.msg);
        });
      }
    }
    
  const [show, setShow] = react.useState(false);
  function showHide() {
    setShow(!show);
  }
  
  const [record, setRecord] = react.useState([]);

  const [errors, setErrors] = react.useState({});

  const [isSubmit, setIsSubmit] = react.useState(false);
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setErrors(validate(userReg));
    setuserReg({ ...userReg, [name]: value });
  }
  function handleSubmit(event) {
   
    event.preventDefault();
    const newRecord = { userReg };
    setRecord([...record, newRecord]);
    setErrors(validate(userReg));
    setIsSubmit(true);
  }
  function validate(values) {
    const error = {};
    if (!values.email) {
      error.email = "Email is required!";
    } else if (
      values.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) == null
    ) {
      error.email = "Invalid mail";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } 

    var x;
    x=Object.keys(errors).length;
    console.log(x);
    x?isCheck(false):isCheck(true);
    console.log(check);
    return error;
  }
  return (
    <>
      <Navs />
      <div>
        <p id='backend'>{mssg?mssg:'loading'}</p>
        <h1 id='hungry'>HUNGRY??</h1>
        <p id='order'>Order Now From Your Favourite Restraunt..</p>
        <img src={loginimg} alt="hello" id="logs" />
      </div>
      <div class='headerss'>
      <h1 id="log">LOGIN</h1>
      <div id="auth">
        <form id="form1" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={userReg.email}
            onChange={handleInput}
          ></input>
          {show ? (
            <FontAwesomeIcon icon={faEye} id="eye" onClick={showHide} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="eye" onClick={showHide} />
          )}

          <p id="error1">{errors.email}</p>
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            id="password"
            value={userReg.password}
            onChange={handleInput}
          ></input>
          <p id="error2">{errors.password}</p>
          <button type="submit" onClick={handleApi} id='buttonlog'>LOGIN</button>
          <Link to="/forgot" id="forgot">
            <p id='frg'>Forgotten Password?</p>
          </Link>
          <p id='mssg'>New To Foodora? <Link to="/signup">
           SIGN UP
          </Link></p>
        </form>
      </div>
      </div>
    </>
  );
}
export default Login;
