import react,{useState , useEffect} from "react";
import "./Otp.css";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
function Otps2() {
  const [mssg,setmssg]=useState('');
  const [otp , setOtp] = useState("");
  function handleOtp(e){
    setOtp(e.target.value);
  }
  const navigate = useNavigate();
  var email = localStorage.getItem("forgotMail");
  console.log(email);
  function handleSubmit(e) {
    console.log(otp);
    console.log(email);
    e.preventDefault();
    axios
  .post("https://foodorabackend-production.up.railway.app/user/forgot/verify", {
    email:email,
    otp:otp
  })
  .then((res) => {
    setmssg(res.data.msg);
    console.log(res);
    navigate("/password");
  })
  .catch((err) => {
    console.log(err);
  setmssg(err.response.data.msg);
  });

  }

 function handleApi5(){
  axios
  .post("https://foodorabackend-production.up.railway.app/user/forgot/send", {
    email:email
  })
  .then((res) => {
    setmssg(res.data.msg);
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  setmssg(err.response.data.msg);
  });
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
    <p id='backendmssg'>{mssg}</p>
      <h1 id="log3">OTP verification</h1>
      <div id="auth4">
        <p id='enters'>Enter OTP send at abc.......@gmail.com</p>
        <form id="form1" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleOtp}
            required
            maxLength={6}
          ></input>
          <button type="submit" id='verify' >VERIFY</button>
          <p id='otpp'>Didn't get? <button disabled={(counter!==0) ? true : false} 
          onClick={handleApi5} 
          id='resend'>
            Resend OTP
          </button>: {counter}</p>
        </form>
      </div>
    </>
  );
}
export default Otps2;
