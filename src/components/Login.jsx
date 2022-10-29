import React ,{useState}from 'react' ;
import loginimg from '../assets/loginimg.svg';
import Navs from "./navs.jsx";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormik} from 'formik';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
var x;
function App () {
  const initialValues ={
    email: '',
    password: ''
    }
  const onSubmit=values => {
    console.log ('Form data', values)
    }
  const validate=values=>{
    let errors={}
    if(!values.email){
      errors.email = 'required!';
    }
    if(!values.password){
      errors.password='required';
    }
    x=Object.keys(errors).length;
    console.log(x);
    console.log(errors);
    (x!==0)?isCheck(false):isCheck(true);
    console.log(check);
    return errors;
    }
    const [show, setShow] =useState(false);
      function showHide() {
        setShow(!show);
      }
  const[check , isCheck]=useState(false);
  const [mssg , setMssg] =useState(null);
  
    const handleApi =()=>{
      console.log(check);
      if(check){
       axios
        .post('https://foodorabackend-production.up.railway.app/user/signin',{
          email:formik.values.email,
          password:formik.values.password
        })
        .then((response)=>{
            setMssg(response.data.msg);
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.response.data.msg);
            setMssg(err.response.data.msg);
        });
      }
    }

  const formik =useFormik({
    initialValues,
onSubmit ,
validate 
})
console.log('Form Errors' , formik.errors);
return(
  <div>
     <Navs />
     <p id='backend'>{mssg}</p>
     <h1 id='hungry'>HUNGRY??</h1>
     <p id='order'>Order Now From Your Favourite Restraunt..</p>
     <img src={loginimg} alt="hello" id="logs" />
     <h1 id="log">LOGIN</h1>
     <div id="auth">
    <form id='form1' onSubmit ={formik.handleSubmit}>
   <input 
   type='text' 
   name='email' id='email'
   placeholder="Enter your email"
   onChange={formik.handleChange}
   value={formik.values.email}/>
{formik.errors.email ? <div id='error1'>{formik.errors.email}</div>:null}
{show ? (
           <FontAwesomeIcon icon={faEye} id="eye" onClick={showHide} />
      ) : (
        <FontAwesomeIcon icon={faEyeSlash} id="eye" onClick={showHide} />
       )}
<input 
   type={show ? "text" : "password"}
   name='password' id='password'
   placeholder="Enter your password"
   onChange={formik.handleChange}
   value={formik.values.password}/>
   {formik.errors.password ? <div id='error2'>{formik.errors.password}</div>:null}
   <button type='submit' id='buttonlog' onClick={handleApi}>LOGIN</button>
   <Link to="/forgot" id="forgot">
          <p id='frg'>Forgotten Password?</p>
         </Link>
        <p id='mssg'>New To Foodora? <Link to="/signup">
          SIGN UP
       </Link></p>
    </form>
   </div>
  </div>
)
}
export default App;
