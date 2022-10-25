import react from 'react';
import LoginImg from './LoginImg.jpg';
import Navs from './navs.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faEyeSlash } from '@fortawesome/fontawesome-free-solid'
import './Login.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Login(){
    const [show, setShow] = react.useState(false);
    function showHide(){
    setShow(!show);
    }
    const [userReg,setuserReg] = react.useState({
        email:"" , 
        password:""
    })
    const [record , setRecord]= react.useState([]);

    const [errors,setErrors]=react.useState({});

    const[isSubmit , setIsSubmit]=react.useState(false);
    function handleInput(event){
    const name=event.target.name;
    const value=event.target.value;
    setuserReg({...userReg,[name]:value});  
    }
    function handleSubmit(event){
        event.preventDefault();
        const newRecord ={userReg};
       setRecord([...record , newRecord]);
       console.log(record);
       setErrors(validate(userReg));
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
        if(!values.password){
            error.password ='Password is required!';   
           }
           else if(values.password.length<8){
            error.password ='At least 8 chars needed!';   
           }
           else if(values.password.match(/[A-Z]/)==null){
            error.password ='Password must have one uppercase';   
           }
           else if(values.password.match(/[0-9]/)==null){
            error.password ='Password must have one number';   
           }
           else if(values.password.match(/[!@#$%^&*]/)==null){
            error.password ='Password must have 1 special symbol';   
           }
           return error;
        }
    return(
        <>
       <Navs />
        <div>
            <img src={LoginImg} alt='hello' id='logs'/>
        </div>
        <h1 id='log'>LOGIN</h1>
    <div id='auth'>
    <form id='form1' onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter your email" name='email' id='email'
         value={userReg.email}
         onChange={handleInput}></input>
         {
            show?( <FontAwesomeIcon icon={faEye} id='eye'onClick={showHide}/>):( <FontAwesomeIcon icon={faEyeSlash} id='eye'onClick={showHide}/>)
         }
          
             <p id='error1'>{errors.email}</p>
        <input type={show?"text":"password"} placeholder='Password' name='password' id='password' 
        value={userReg.password}
        onChange={handleInput}></input>
         <p id='error2'>{errors.password}</p>
        <button type='submit'>Login</button>
        <Link to='/forgot' id='forgot'><p>Forgotten Password?</p></Link>
        <p>New To Foodora?</p>
        <Link to='/signup'><button id='newTo'>Create new account</button></Link>
    </form>
    </div>
    </>
    );
}
export default Login;