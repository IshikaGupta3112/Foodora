import react from 'react';
import './Otp.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Otp(){
    const [userOtp,setuserOtp] = react.useState({
       otp:"" })
        const [errors,setErrors]=react.useState({});
        const[isSubmit , setIsSubmit]=react.useState(false);
        function handleInput(event){
          const name=event.target.name;
          const value=event.target.value;
          setuserOtp({...userOtp,[name]:value});  
          }
          function handleSubmit(event){
              event.preventDefault();
             setErrors(validate(userOtp));
             setIsSubmit(true);
          }
          function validate(values){
            const error={};
            if(!values.otp){
              error.otp ='Otp is required!';   
             }
             return error;
            }
return(
    <>
    <h1 id='log'>OTP verification</h1>
    <div id='auth4'>
    <form id='form1' onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter OTP"
          id='email' name='email'
          value={userOtp.otp}
          onChange={handleInput}></input>
             <p id='error'>{errors.otp}</p>
        {/* <Link to='/main'> */}
            <button type='submit'>Verify</button>
            {/* </Link> */}
            {/* if otp enter correct then main page linking */}
        <p>Didn't get?</p>
        <Link to='/otp'><button id='newToo'>Resend OTP</button></Link>
    </form>
    </div>
    </>
);
}
export default Otp;