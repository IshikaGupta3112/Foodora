import  { useState , useEffect } from "react";
import Navs from "./navs";
import loginimg from '../assets/loginimg.svg';
import "./Forgot.css";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
function Forgot() {
  const [forgotMail, setForgotMail] = useState("");
  const [mssg,setMssg]=useState('');
  
  function handleForgotMial(e) {
   setForgotMail(e.target.value);
  }

  const [correctMail , setCorrectMail] = useState(false);
  const rightmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const navigate = useNavigate();

  useEffect(() => {
    if (rightmail.test(forgotMail)) {
      document.getElementById("err1").style.display = "none";
      console.log("true");
      setCorrectMail(true);
    } else if (forgotMail) {
      document.getElementById("err1").style.display = "block";
      setCorrectMail(false);
    }
  }, [forgotMail]);
  function handleSubmit(e) {
    e.preventDefault();   
    localStorage.setItem("forgotMail" , forgotMail);
    console.log(forgotMail);
    if (correctMail) {
      axios
        .post("https://foodorabackend-production.up.railway.app/user/forgot/send", {
          email:forgotMail
        })
        .then((res) => {
          setMssg(res.data.msg);
          console.log(res);    
          navigate("/otp");
        })
        .catch((err) => {
          console.log(err);
        setMssg(err.response.data.msg);
        });
    }
  }
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
            placeholder="Enter your email"
            className="email"
            id="emailname"
            name="email"
            value={forgotMail}
            onChange={handleForgotMial}
            required
          ></input>
          <p id="err1">Invalid mail</p>
            <button type="submit" id='otpsend'>SEND OTP</button>

        </form>
      </div>
      <img src={loginimg} alt="" id="logs1" />
    </>
  );
}
export default Forgot;
