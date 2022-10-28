
import react ,{useEffect , useState} from "react";
import loginimg from '../assets/loginimg.svg';
import Navs from "./navs.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import axios from 'axios';
import "./Login.css";
import { Link } from "react-router-dom";

function Password() {
    const [userReg, setuserReg] = react.useState({
        password: "",
        repassword: "",
      });
    // const [mssg , setMssg] =useState('');
    var password = userReg.password;
    var repassword = userReg.repassword;
    var data ={password , repassword}
    // const handleApi =()=>{
    //     axios
    //     .post('https://foodorabackend-production.up.railway.app/user/signin',data)
    //     .then((response)=>{
    //         setMssg(response.data.msg);
    //         console.log(response);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // }

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
  
    function showHide1() {
      setShow1(!show1);
    }
  
    function showHide2() {
      setShow2(!show2);
    }
  
  
  const [record, setRecord] = react.useState([]);

  const [errors, setErrors] = react.useState({});

  const [isSubmit, setIsSubmit] = react.useState(false);
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setuserReg({ ...userReg, [name]: value });
  }
  function handleSubmit(event) {
   
    event.preventDefault();
    const newRecord = { userReg };
    setRecord([...record, newRecord]);
    console.log(record);
    setErrors(validate(userReg));
    setIsSubmit(true);
  }
  function validate(values) {
    const error = {};
    if (!values.password) {
      error.password = "Password is required!";
    } 
    if (!values.repassword) {
      error.repassword = "Password is required!";
    }
    return error;
  }
  return (
    <>
      <Navs />
      <div>
        {/* <p id='backend'>{mssg}</p> */}
        <h1 id='hungry'>HUNGRY??</h1>
        <p id='order'>Order Now From Your Favourite Restraunt..</p>
        <img src={loginimg} alt="hello" id="logs" />
      </div>
      <div class='headerss'>
      <h1 id="log">LOGIN</h1>
      <div id="auth">
        <form id="form1" onSubmit={handleSubmit}>
        <input
              type={show1 ? "text" : "password"}
              placeholder="Password"
              name="password"
              id="password"
              className="inp"
              value={userReg.password}
              onChange={handleInput}
            ></input>
            {show1 ? (
              <FontAwesomeIcon icon={faEye} id="eye1" onClick={showHide1} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="eye1"
                onClick={showHide1}
              />
            )}
            <p id="errors3">{errors.password}</p>
            <input
              type={show2 ? "text" : "password"}
              placeholder="Re-enter password"
              name="repassword"
              id="repassword"
              className="inp"
              value={userReg.repassword}
              onChange={handleInput}
            ></input>
            {show2 ? (
              <FontAwesomeIcon icon={faEye} id="eye2" onClick={showHide2} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="eye2"
                onClick={showHide2}
              />
            )}
            <p id="errors4">{errors.repassword}</p>
          <button type="submit" 
        //   onClick={handleApi} 
          id='buttonlog'>LOGIN</button>
          <Link to="/forgot" id="forgot">
            <p id='frg'>Forgotten Password?</p>
          </Link>
          <p id='mssg'>New To Foodora? <Link to="/signup">
           SIGN UP
          </Link></p>
         
        </form>
      </div>
      </div>
    </>
  );
}
export default Password;
