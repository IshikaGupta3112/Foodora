import react from 'react';
import LoginImg from './LoginImg.jpg';
import Navs from './navs.jsx';
import './Login.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Login(){
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
        if(!values.password){
            error.password ='Password is required!';   
           }
           else if(values.password.length<4){
            error.password ='Password must be more than 4 characters!';   
           }
           else if(values.password.length>8){
            error.password ='Password cannot exceed 8 characters!';   
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
        <input type='email' placeholder="Enter your email" name='email' id='email'
         value={userReg.email}
         onChange={handleInput}></input>
             <p id='error'>{errors.email}</p>
        <input type='password' placeholder='password' name='password' id='password' 
        value={userReg.password}
        onChange={handleInput}></input>
         <p id='error'>{errors.password}</p>
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