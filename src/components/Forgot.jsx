import react from 'react';
import Navs from './navs';
import LoginImg from './LoginImg.jpg';
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
          else if(values.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)==null){
            error.email ='Invalid mail';   
           }
         return error;
        }
return(
  <>
  <Navs />
  <h1 id='log2'>LOGIN</h1>
  <div id='auth3'>
<form id='form1' onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter your email for verification"
        id='email' name='email'
        value={userForgot.email}
        onChange={handleInput}>
        </input>
        <p id='errors5'>{errors.email}</p>
    <Link to='/otp'>
      <button type='submit'>Send OTP</button>
      </Link>
    {/* on sub,it if coreect link to otp */}
    </form>
</div>
<img src={LoginImg} alt='' id='logs'/>
</>
);
}
export default Forgot;