import react from 'react';
import './Signup.css';
import Otp from './Otp.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Signup(){
    const [userSign,setUserSign] =react.useState({
        fullname:"",
        emails:"",
        passwords:"",
        repasswords:""
    })
    const [records , setRecords] =react.useState([]);
     
    const [error2,setError2]= react.useState({});

    const[isSubmitted , setIsSubmitted]=react.useState(false);
    function handleInputs(event){
        const name=event.target.name;
        const value=event.target.value;
        setUserSign({...userSign,[name]:value});  
        }
        function handleSubmits(event){
            event.preventDefault();
            const newRecords={userSign};
           setRecords([...records , newRecords]);
           console.log(records);
           setError2(validates(userSign));
           setIsSubmitted(true);
        }
        function validates(values){
            const errors={};
            if(!values.fullname){
                errors.fullname ='Username is required!';   
               }
               if(!values.emails){
                   errors.emails ='Email is required!';   
                  }
               if(!values.passwords){
                   errors.passwords ='Password is required!';   
                  }
                  else if(values.passwords.length<4){
                   errors.passwords ='Password must be more than 4 characters!';   
                  }
                  else if(values.passwords.length>8){
                   errors.passwords='Password cannot exceed 8 characters!';   
                  }
               if(!values.repasswords){
                   errors.repasswords ='Re-enter password!';   
                  }
                  return errors;
               }
    return(
        <>
        <h1 id='log'>SIGNUP</h1>
        <div id='auths'>
        <div className='form'>
    <form id='form1' 
    onSubmit={handleSubmits}
    >
        <input type ='text' placeholder='Full Name' name='fullname' id='fullname'
         value={userSign.fullname}
         onChange={handleInputs}
        >
         </input>
         <p id='error'>{error2.fullname}</p>
        <input type='email' placeholder="Enter your email"
        name='emails' id='emails'
         value={userSign.emails}
         onChange={handleInputs}
         ></input>
         <p id='error'>{error2.emails}</p>
        <input type='password' placeholder='Password'
        name='passwords' id='passwords'
         value={userSign.passwords}
         onChange={handleInputs}
         ></input>
         <p id='error'>{error2.passwords}</p>
        <input type='password' placeholder='Re-enter password'
        name='repasswords' id='repasswords'
         value={userSign.repasswords}
         onChange={handleInputs}
         ></input>
         <p id='error'>{error2.repasswords}</p>
        <button type='submit'>Signup</button>
        {/* if signup successfull link to otp */}
        <p>Already a customer?</p>
        <Link to='/login'><button id='newToo'>Login</button></Link>
    </form>
    </div>
    </div>
    </>
    );
}
export default Signup;