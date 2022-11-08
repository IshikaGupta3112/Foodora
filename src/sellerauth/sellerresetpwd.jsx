import './sellerresetpwd.css'
import {useState , useEffect} from 'react';
import sellerresetpwd from '../assets/sellerresetpwd.svg'
import axios from "axios";
import SellerNav from './sellernav';
import {Link , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
function SellerResetPwd(){
    var email = localStorage.getItem("sellerfrgmail");
    // console.log(email);
    const [pass , setPass] = useState("");
    const [repass , setRepass]=useState("");
   const[correctpass , setcorrectpass] =useState(false);
   const[correctRepass , setcorrectRepass] =useState(false);
   const[mssg6 , setMssg6] =useState("");
   function handlepass(e){
    setPass(e.target.value);
   }
   function handleRepass(e){
     setRepass(e.target.value);
   }
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    function showHide1() {
        setShow1(!show1);
      }
    
      function showHide2() {
        setShow2(!show2);
      }
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
      function handleSubmit(e) {
        console.log(email);
            e.preventDefault();
            if(correctRepass&&correctpass){
              axios
              .post("https://foodorabackend-production.up.railway.app/seller/forgot/reset", {
                email:email,
                password:pass
              })
              .then((res) => {
                setMssg6(res.data.msg);
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              setMssg6(err.response.data.msg);
              });
            }
          }
return(
    <>
    <SellerNav />
    <div id="fulllog">
        <img src={sellerresetpwd} id='loginpageimg'>    
        </img>
        <div id='loginpageform'>
            <h1 id='sellerresethead'>
               Reset Password
            </h1>
            <p id='validation4'>Invalid</p>
        <p id='validation5'>Didn't Match</p>
            <p id='sellerback10'>{mssg6}</p>
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
);
}
export default SellerResetPwd;