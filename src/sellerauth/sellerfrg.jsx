import './sellerfrg.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import sellerfrg from '../assets/sellerfrg.svg';
import SellerNav from './sellernav';
import {Link  , useNavigate} from 'react-router-dom';
function SellerFrg(){
    const [forgotMail, setForgotMail] = useState("");
  const [mssg2,setMssg2]=useState('');
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
    localStorage.setItem("sellerfrgmail" , forgotMail);
    console.log(forgotMail);
    if (correctMail) {
      axios
        .post("https://foodorabackend-production.up.railway.app/seller/forgot/send", {
          email:forgotMail
        })
        .then((res) => {
          setMssg2(res.data.msg);
          console.log(res);   
          navigate("/sellerfrgotp");
          // localStorage.setItem("routecheck1" ,setRoute1);
        })
        .catch((err) => {
          console.log(err);
        setMssg2(err.response.data.msg);
        });
    }
  }
    return(
        <>
        <SellerNav />
        <div id="fulllog">
            <img src={sellerfrg} id='loginpageimg'>    
            </img>
            <div id='loginpageform'>
                <h1 id='sellerfrghead'>
                   Forgot Password
                </h1>
                <p id='validation3'>Invalid Mail</p>
                <p id='sellerback2'>{mssg2}</p>
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
        </div>
        </>
    );
}
export default SellerFrg