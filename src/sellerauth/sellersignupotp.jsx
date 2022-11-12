import './sellersignupotp.css'
import react , { useState, useEffect } from 'react';
import axios from 'axios';
import sellerfrgotp from '../assets/sellerfrgotp.svg';
import SellerNav from './sellernav';
import {Link , useNavigate} from 'react-router-dom';
function SellerSignupOtp(){
  const Navigate = useNavigate();
    const [mssg4,setmssg4]=useState('');
  const [userOtp, setuserOtp] = useState({
    otp: "",
  });
  var email =localStorage.getItem("sellersignupmail");
    // console.log(email);
  var otp = userOtp.otp;
  const handleApi5=()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/seller/verify/send",{email})
    .then(res=>{
      console.log(res.data.msg);
      setmssg4(res.data.msg);
    })
    .catch(err=>{
      console.log(err);
      console.log(err.response.data.msg);
      setmssg4(err.response.data.msg)
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
    axios 
    .post('https://foodorabackend-production.up.railway.app/seller/verify' ,{email , otp} )
    .then(result=>{
      console.log(result.data);
      setmssg4(result.data.msg);
      localStorage.setItem("id1" , result.data.id);
      console.log(result.data.id);
      Navigate("/restrauntadd");
    })
    .catch(err3=>{
      console.log(err3);
      console.log(err3.response.data.msg);
      setmssg4(err3.response.data.msg);
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
    return(
        <>
        <SellerNav />
        <div id="fulllog">
            <img src={sellerfrgotp} id='loginpageimg'>    
            </img>
            <div id='loginpageform'>
                <h1 id='sellerfrghead'>
                   OTP verification
                </h1>
                <p id='validation3'>Invalid </p>
                <p id='sellerback10'>{mssg4}</p>
                <form id='sellerloginform'onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter Otp' name="otp"
            value={userOtp.otp}
            onChange={handleInput}
            required
            maxLength={6}></input>
                    <button type='submit' id='sellerloginbtn'>Verify</button>
                </form>
                <p id='signupotp'>Didn't get? <button disabled={(counter!==0) ? true : false} onClick={handleApi5} id='resend2'>
            Resend OTP
          </button>: {counter}</p>
            </div>
        </div>
        </>
    );
}
export default SellerSignupOtp;