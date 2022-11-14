import react, { useState , useEffect } from "react";
import Navs from "./navs";
import loginpage from '../assets/loginpage.jpg';
import "./Forgot.css";
import { Link , NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';
import Navs3 from "./navs2";
import Loader from '../Loader';
function Forgot() {
  const [forgotMail, setForgotMail] = useState("");
  const [mssg,setMssg]=useState('');
  const [route1 , setRoute1] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleForgotMial(e) {
   setForgotMail(e.target.value);
  }

  const [correctMail , setCorrectMail] = useState(false);
  const rightmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const navigate = useNavigate();

  useEffect(() => {
    if (rightmail.test(forgotMail)) {
      document.getElementById("validation3").style.display = "none";
      console.log("true");
      setCorrectMail(true);
    } else if (forgotMail) {
      document.getElementById("validation3").style.display = "block";
      setCorrectMail(false);
    }
  }, [forgotMail]);
  function handleSubmit(e) {
    e.preventDefault();   
    localStorage.setItem("forgotMail" , forgotMail);
    console.log(forgotMail);
    setLoading(true);
    if (correctMail) {
      axios
        .post("https://foodorabackend-production.up.railway.app/user/forgot/send", {
          email:forgotMail
        })
        .then((res) => {
          setMssg(res.data.msg);
          console.log(res);  
          setRoute1(true);
          setLoading(false);
          console.log(route1);  
          navigate("/otp");
          // localStorage.setItem("routecheck1" ,setRoute1);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        setMssg(err.response.data.msg);
        });
    }
  }
  return (
    <>
    <Navs3 />
    {loading?<Loader/>:
    (<div id="fulllog">
        <img src={loginpage} id='loginpageimg'>    
        </img>
        <div id='loginpageform'>
            <h1 id='sellerfrghead'>
               Forgot Password
            </h1>
            <p id='validation3'>Invalid Mail</p>
            <p id='sellerback2'>{mssg}</p>
            <form id='sellerloginform' 
            onSubmit={handleSubmit}
            >
                <input type='email' placeholder='Enter Your Email' name="email"
        value={forgotMail}
        onChange={handleForgotMial}
        required></input>
                <button type='submit' id='sellerloginbtn'>Send Otp</button>
            </form>
        </div>
    </div>)}
    </>
    // <>
    //   <Navs />
    //   <img src={loginpage} id='loginpage' alt='' />
    //   <div id="backgrey"></div>
    //   <p id='backend2'>{mssg}</p>
    //   <h1 id="log2">Email Verification</h1>
    //   <div id="auth3">
    //     <form id="form1" onSubmit={handleSubmit}>
    //       <input
    //         type="email"
    //         placeholder="Enter your email"
    //         className="email"
    //         id="emailname"
    //         name="email"
    //         value={forgotMail}
    //         onChange={handleForgotMial}
    //         required
    //       ></input>
    //       <p id="err1">Invalid mail</p>
    //         <button type="submit" id='otpsend'>SEND OTP</button>
    //     </form>
    //   </div>
    // </>
  );
}
export default Forgot;
