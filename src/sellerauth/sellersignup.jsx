import './sellersignup.css'
import {useState ,useEffect} from 'react';
// import jwt from 'jwt_decode';
import axios from 'axios';
import sellersignup from '../assets/sellersignup.svg'
import SellerNav from './sellernav';
import {Link , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import SellerNav2 from './sellernav2';
import Loader from '../Loader';
function SellerSignup(){
    // var jwt = require("jsonwebtoken")
    // var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmEyZWNkYWNhZmU2ZTZkMDhhMzYxNyIsImlhdCI6MTY2NzkwMzE4MiwiZXhwIjoxNjY3OTAzODQyfQ.rkZ22zuxBZ0dx6qXhKtCBepcWzzqLo1hr7Utl8cyM5A";
    // var decode= jwt.decode(token);
    // console.log(decode);
    const[mssg3 , setMssg3] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading , setLoading] = useState(false);
  function handleuserName(e) {
    setuserName(e.target.value);
  }
  function handleuserEmail(e) {
    setuserEmail(e.target.value);
  }
  function handlepass(e) {
    setPassword(e.target.value);
  }  
  function handleRepass(e) {
    setRepassword(e.target.value);
  }
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    function showHide1() {
        setShow1(!show1);
      }
    
      function showHide2() {
        setShow2(!show2);
      }
      const [iscorrectname, setIsCorrectname] = useState(false);   
      const [iscorrectmail, setIsCorrectmail] = useState(false);   
      const [iscorrectpass, setIsCorrectPass] = useState(false);
      const [iscorrectRepass, setIsCorrectRepass] = useState(false);
     function handleSubmits(e){
      setLoading(true);
      if (iscorrectmail && iscorrectpass&& iscorrectRepass&& iscorrectname) {
        axios
          .post("https://foodorabackend-production.up.railway.app/seller/register", {
            username:userName,
            email:userEmail , 
            password:password
          })
          .then((res) => {
            setMssg3(res.data.msg);
            console.log(res);
            setLoading(false);
            localStorage.setItem('token1' , res.data.token);
            // localStorage.setItem("id1" , res.data.id);
            // console.log(res.data.id);
            navigate("/sellersignupotp");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          setMssg3(err.response.data.msg);
          });
      }
      e.preventDefault();
      localStorage.setItem("sellersignupmail" , userEmail);
     }
        const rightpass =
    /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&#])[A-Za-z\d@$!%?&#]{8,}$/;
    const rightmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    useEffect(() => {
      if (userName.length>0) {
        document.getElementById("validation6").style.display = "none";
        console.log("true");
        setIsCorrectname(true);
      } else if (userName) {
        document.getElementById("validation6").style.display = "block";
        setIsCorrectname(false);
      }
    }, [userName]);
    useEffect(() => {
      if (password.length>0) {
        document.getElementById("validation8").style.display = "none";
        console.log("true");
        setIsCorrectPass(true);
      } else if (password) {
        document.getElementById("validation8").style.display = "block";
        setIsCorrectPass(false);
      }
    }, [password]);
    useEffect(() => {
      if (rightmail.test(userEmail)) {
        document.getElementById("validation7").style.display = "none";
        console.log("true");
        setIsCorrectmail(true);
      } else if (userEmail) {
        document.getElementById("validation7").style.display = "block";
        setIsCorrectmail(false);
      }
    }, [userEmail]);
    useEffect(() => {
      if (repassword==password) {
        document.getElementById("validation9").style.display = "none";
        console.log("true");
        setIsCorrectRepass(true);
      } else if (repassword) {
        document.getElementById("validation9").style.display = "block";
        setIsCorrectRepass(false);
      }
    }, [repassword]);
    const navigate = useNavigate();
    function postdata() {
      setLoading(true);
      if (iscorrectmail && iscorrectpass&& iscorrectRepass&& iscorrectname) {
        axios
          .post("https://foodorabackend-production.up.railway.app/seller/register", {
            username:userName,
            email:userEmail , 
            password:password
          })
          .then((res) => {
            setMssg3(res.data.msg);
            console.log(res);
            setLoading(false);
            localStorage.setItem('token1' , res.data.token);
            // localStorage.setItem("id1" , res.data.id);
            // console.log(res.data.id);
            navigate("/sellersignupotp");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          setMssg3(err.response.data.msg);
          });
      }
    }
return(
    <>
    <SellerNav2 />
    {loading?<Loader/>:(
    <div id="fulllog">
        <img src={sellersignup} id='loginpageimg'>    
        </img>
        <div id='signuppageform'>
            <h1 id='sellersignuphead'>
             SIGNUP
            </h1>
            <p id='validation6'>Invalid </p>
            <p id='validation7'>Invalid Mail</p>
            <p id='validation8'>Invalid </p>
            <p id='validation9'>Didn't match</p>
            <p id='sellerback5'>{mssg3}</p>
            <form id='sellerloginform' onSubmit={handleSubmits}>
                <input type='text' placeholder='Enter your name' name="fullname"
                    value={userName}
                    onChange={handleuserName}
                    required
                    maxLength={100}></input>
                <input type='email' placeholder='Enter Your Email' name="emails"
                    value={userEmail}
                    onChange={handleuserEmail}
                    required
                    maxLength={100}></input>
                <input  type={show1 ? "text" : "password"} placeholder='Enter your password' name="passwords"
                    value={password}
                    onChange={handlepass}
                    required
                    maxLength={20}></input>
                {show1 ? (
              <FontAwesomeIcon icon={faEye} id="seye4" onClick={showHide1} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="seye4"
                onClick={showHide1}
              />
            )}
                <input   type={show2 ? "text" : "password"} placeholder ='Re-enter password'  name="repasswords"
                    value={repassword}
                    onChange={handleRepass}
                    required
                    maxLength={20}></input>
                {show2 ? (
              <FontAwesomeIcon icon={faEye} id="seye5" onClick={showHide2} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="seye5"
                onClick={showHide2}
              />
            )}
                <button type='submit' id='sellerloginbtn' 
                // onClick={postdata}
                >Signup</button>
            </form>
            <p id='sellersignuplink'>Already a customer? <Link to="/sellerlogin">LOGIN</Link></p>
        </div>
    </div>)}
    </>
);
}
export default SellerSignup;