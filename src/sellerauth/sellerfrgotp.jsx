import './sellerfrgotp.css'
import react ,{useEffect , useState} from 'react';
import sellerfrgotp from '../assets/sellerfrgotp.svg';
import axios from 'axios';
import SellerNav from './sellernav';
import {Link,useNavigate} from 'react-router-dom';
import SellerNav2 from './sellernav2';
import Loader from '../Loader';
function SellerFrgOtp(){
    const [mssg5,setmssg5]=useState('');
    const [otp , setOtp] = useState("");
    const [loading , setLoading] = useState(false);
    function handleOtp(e){
      setOtp(e.target.value);
    }
    const navigate = useNavigate();
  var email = localStorage.getItem("sellerfrgmail");
   // console.log(email);
   function handleSubmit(e) {
    console.log(otp);
    console.log(email);
    e.preventDefault();
    setLoading(true);
    axios
  .post("https://foodorabackend-production.up.railway.app/seller/forgot/verify", {
    email:email,
    otp:otp
  })
  .then((res) => {
    setmssg5(res.data.msg);
    console.log(res);
    setLoading(false);
    navigate("/sellerresetpwd");
  })
  .catch((err) => {
    console.log(err);
    setLoading(false);
  setmssg5(err.response.data.msg);
  });

  }
  function handleApi5(){
    setLoading(true);
    axios
    .post("https://foodorabackend-production.up.railway.app/seller/forgot/send", {
      email:email
    })
    .then((res) => {
      setmssg5(res.data.msg);
      setLoading(false);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    setmssg5(err.response.data.msg);
    });
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
        <SellerNav2 />
        {loading?<Loader/>:(
        <div id="fulllog">
            <img src={sellerfrgotp} id='loginpageimg'>    
            </img>
            <div id='loginpageform'>
                <h1 id='sellerfrghead'>
                   OTP verification
                </h1>
                <p id='validation3'>Invalid </p>
                <p id='sellerback10'>{mssg5}</p>
                <form id='sellerloginform' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter Otp'  name="otp"
            value={otp}
            onChange={handleOtp}
            required
            maxLength={6}></input>
                    <button type='submit' id='sellerloginbtn'>Verify</button>
                </form>
                <p id='signupotp'>Didn't get? <button disabled={(counter!==0) ? true : false} 
          onClick={handleApi5} 
          id='resend2'>
            Resend OTP
          </button> : {counter}</p>
            </div>
        </div>)}
        </>
    );
}
export default SellerFrgOtp;