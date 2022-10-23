import react from 'react';
import './Forgot.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Forgot(){
  const [userForgot,setuserForgot] = react.useState({
    email:"" })
    const [errors,setErrors]=react.useState({});
    const[isSubmit , setIsSubmit]=react.useState(false);
    function handleInput(event){
      const name=event.target.name;
      const value=event.target.value;
      setuserForgot({...userForgot,[name]:value});  
      }
      function handleSubmit(event){
          event.preventDefault();
         setErrors(validate(userForgot));
         setIsSubmit(true);
      }
      function validate(values){
        const error={};
        if(!values.email){
          error.email ='Email is required!';   
         }
         return error;
        }
return(
<div id='auth3'>
<form id='form1' onSubmit={handleSubmit}>
        <input type='email' placeholder="Enter your email for verification"
        id='email' name='email'
        value={userForgot.email}
        onChange={handleInput}>
        </input>
        <p id='error'>{errors.email}</p>
    {/* <Link to='/otp'> */}
      <button type='submit'>Send OTP</button>
      {/* </Link> */}
    {/* on sub,it if coreect link to otp */}
    </form>
</div>
);
}
export default Forgot;