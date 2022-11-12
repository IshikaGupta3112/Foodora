import react ,{useEffect , useState} from "react";
import loginpage from '../assets/loginpage.jpg';
import Navs from "./navs.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import axios from 'axios';
import "./password.css";
import { Link  , useNavigate} from "react-router-dom";
function Password() {
  var email = localStorage.getItem("forgotMail");
  console.log(email);
    const [pass , setPass] = useState("");
    const [repass , setRepass]=useState("");
   const[correctpass , setcorrectpass] =useState(false);
   const[correctRepass , setcorrectRepass] =useState(false);
   const[mssg , setMssg] =useState("");

    function handlepass(e){
     setPass(e.target.value);
    }
    function handleRepass(e){
      setRepass(e.target.value);
    }
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    useEffect(() => {
      if (pass.length>0) {
        document.getElementById("validation4").style.display = "none";
        console.log("true");
        setcorrectpass(true);
      } else if (pass) {
        document.getElementById("validation4").style.display = "block";
        setcorrectpass(false);
      }
    }, [pass]);
    useEffect(() => {
      if (repass==pass) {
        document.getElementById("validation5").style.display = "none";
        console.log("true");
        setcorrectRepass(true);
      } else if (repass) {
        document.getElementById("validation5").style.display = "block";
        setcorrectRepass(false);
      }
    }, [repass]);
    function showHide1() {
      setShow1(!show1);
    }
  
    function showHide2() {
      setShow2(!show2);
    }
const Navigate=useNavigate();
  function handleSubmit(e) {
console.log(email);
    e.preventDefault();
    if(correctRepass&&correctpass){
      axios
      .post("https://foodorabackend-production.up.railway.app/user/forgot/reset", {
        email:email,
        password:pass
      })
      .then((res) => {
        setMssg(res.data.msg);
        console.log(res);
        Navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      setMssg(err.response.data.msg);
      });
    }
  }
  return (
    <>
    <Navs />
    <div id="fulllog">
        <img src={loginpage} id='loginpageimg'>    
        </img>
        <div id='loginpageform'>
            <h1 id='sellerresethead'>
               Reset Password
            </h1>
            <p id='validation4'>Invalid</p>
        <p id='validation5'>Didn't Match</p>
            <p id='sellerback10'>{mssg}</p>
            <form id='sellerloginform' onSubmit={handleSubmit}>
                <input  type={show1 ? "text" : "password"} placeholder='Enter your password'  name="password"
              value={pass}
              onChange={handlepass}
              required></input>
                {show1 ? (
              <FontAwesomeIcon icon={faEye} id="seye2" onClick={showHide1} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="seye2"
                onClick={showHide1}
              />
            )}
                <input   type={show2 ? "text" : "password"} placeholder ='Re-enter password'  name="repassword"
              value={repass}
              onChange={handleRepass}
              required></input>
                {show2 ? (
              <FontAwesomeIcon icon={faEye} id="seye3" onClick={showHide2} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="seye3"
                onClick={showHide2}
              />
            )}
                <button type='submit' id='sellerloginbtn'>Reset</button>
            </form>
        </div>
    </div>
    </>



    // <>
    //   <Navs />
    //   <div>
    //     <p id='backend1'>{mssg}</p>
    //     <img src={loginpage} id='loginpage' />
    //     <div id='backgrey'></div>
    //   </div>
    //   <div class='headerss'>
    //   <h1 id="log5">Reset Password</h1>
    //   <div id="authed">
    //     <form id="form1" onSubmit={handleSubmit}>
    //     <input
    //           type={show1 ? "text" : "password"}
    //           placeholder="Password"
    //           name="password"
    //           id="pwd"
    //           className="inp"
    //           value={pass}
    //           onChange={handlepass}
    //           required
    //         ></input>
    //         {show1 ? (
    //           <FontAwesomeIcon icon={faEye} id="eyes1" onClick={showHide1} />
    //         ) : (
    //           <FontAwesomeIcon
    //             icon={faEyeSlash}
    //             id="eyes1"
    //             onClick={showHide1}
    //           />
    //         )}
    //         <p id="err2">wrong password</p>
    //         <input
    //           type={show2 ? "text" : "password"}
    //           placeholder="Re-enter password"
    //           name="repassword"
    //           id="repwd"
    //           className="inp"
    //           value={repass}
    //           onChange={handleRepass}
    //           required
    //         ></input>
    //         {show2 ? (
    //           <FontAwesomeIcon icon={faEye} id="eyes2" onClick={showHide2} />
    //         ) : (
    //           <FontAwesomeIcon
    //             icon={faEyeSlash}
    //             id="eyes2"
    //             onClick={showHide2}
    //           />
    //         )}
    //         <p id="err3">didn't match</p>
    //       <button type="submit" 
    //       id='pwdbtn'>Submit</button>
    //     </form>
    //   </div>
    //   </div>
    // </>
  );
}
export default Password;
