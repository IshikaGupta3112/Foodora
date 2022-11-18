import react ,{useState , useEffect} from "react";
import axios from 'axios';
import "./Otp.css";
import Otps from "./Otps.jsx";
import signuppage from '../assets/signuppage.jpg';
import Navs from "./navs.jsx";
import { BrowserRouter as Router, Routes, Route, Link , useNavigate } from "react-router-dom";
import Navs3 from "./navs2";
import Loader from "../Loader";
function Otp2() {
  const [mssg,setmssg]=useState('');
  const [loading,setLoading]=useState(false);
  const [userOtp, setuserOtp] = react.useState({
    otp: "",
  });
  var email =localStorage.getItem("myMail");
  // console.log(email);
  const Navigate = useNavigate();
  var otp = userOtp.otp;
  const handleApi5=()=>{
    setLoading(true);
    axios
    .post("https://foodorabackend-production.up.railway.app/user/verify/send",{email})
    .then(res=>{
      setmssg(res.data.msg);
      setLoading(false);
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
      setLoading(false);
      console.log(err.response.data.msg);
      setmssg(err.response.data.msg)
    })
    setCounter(29);
  }
  const [isSubmit, setIsSubmit] = react.useState(false);
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setuserOtp({ ...userOtp, [name]: value });
  }
  function handleSubmit(event) {
    setLoading(true);
    axios 
    .post('https://foodorabackend-production.up.railway.app/user/verify' ,{email , otp} )
    .then(result=>{
      console.log(result.data);
      setLoading(false);
      localStorage.setItem("userid" , result.data.id);
      var id= localStorage.getItem("userid");
      console.log(id);
      localStorage.setItem("accesstoken" , result.data.accesstoken);
      var token= localStorage.getItem("accesstoken");
      console.log(token);
      setmssg(result.data.msg);
      Navigate("/location");
    })
    .catch(err3=>{
      console.log(err3);
      setLoading(false);
      console.log(err3.response.data.msg);
      setmssg(err3.response.data.msg);
    })
    event.preventDefault();
    setIsSubmit(true);
  }

  const[counter,setCounter]=useState(29)
  useEffect(()=>{
      const timer =
      counter > 0 &&
       setInterval(() => setCounter(counter-1),1000);
      return()=>clearInterval(timer);
  },[counter]);
  return (
    <>
    <Navs3 />
    {loading?<Loader/>:(
    
    <div id="fulllog">
        <img src={signuppage} id='loginpageimg'>    
        </img>
        <div id='loginpageform'>
            <h1 id='sellerfrghead'>
               OTP verification
            </h1>
            <p id='validation3'>Invalid </p>
            <p id='sellerback10'>{mssg}</p>
            <form id='sellerloginform'onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Otp' name="otp"
        value={userOtp.otp}
        onChange={handleInput}
        required
        maxLength={6}></input>
                <button type='submit' id='userloginbtn'>Verify</button>
            </form>
            <p id='signupotp'>Didn't get? <button disabled={(counter!==0) ? true : false} onClick={handleApi5} id='resend2'>
        Resend OTP
      </button>: {counter}</p>
        </div>
    </div>
    )}
    </>
    // <>
    //   <Navs />
    //   {/* <img src={signuppage} alt="" id="loginpage" /> */}
    //   {/* <div id='backgrey'></div> */}
    //   <Otps />
    
    // </>
  );
}
export default Otp2;
