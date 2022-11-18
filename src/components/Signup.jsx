import react, { useState,useEffect } from "react";
import axios from 'axios';
import "./Signup.css";
import Navs from "./navs.jsx";
import signuppage from '../assets/signuppage.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { Link  , useNavigate} from "react-router-dom";
import Navs3 from "./navs2";
import Loader from "../Loader";
import validator from "validator";
function Signup(){
  const [status , setStatus]=useState(false);
  const[mssg , setMssg] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  function handleuserName(e) {
    setuserName(e.target.value);
  }
  // function handleuserEmail(e) {
  //   setuserEmail(e.target.value);
  // }
  const validate = (inputText) => {
    setuserEmail(validator.trim(inputText))
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
      e.preventDefault();
      localStorage.setItem("myMail" , userEmail);
      setLoading(true);
      if (iscorrectmail && iscorrectpass&& iscorrectRepass&& iscorrectname) {
        axios
          .post("https://foodorabackend-production.up.railway.app/user/register", {
            username:userName,
            email:userEmail , 
            password:password
          })
          .then((res) => {
            setMssg(res.data.msg);
            console.log(res);    
            setStatus(res.data.success);
            setLoading(false);
            navigate("/otp2");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          setMssg(err.response.data.msg);
          });
      }
     }
    const rightpass =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
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
    // function postdata() {
    //   setLoading(true);
    //   if (iscorrectmail && iscorrectpass&& iscorrectRepass&& iscorrectname) {
    //     axios
    //       .post("https://foodorabackend-production.up.railway.app/user/register", {
    //         username:userName,
    //         email:userEmail , 
    //         password:password
    //       })
    //       .then((res) => {
    //         setMssg(res.data.msg);
    //         console.log(res);    
    //         setStatus(res.data.success);
    //         setLoading(false);
    //         navigate("/otp2");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         setLoading(false);
    //       setMssg(err.response.data.msg);
    //       });
    //   }
    // }
    return (
      <>
      <Navs3 />
      {loading?<Loader/>:(
      <div id="fulllog">
          <img src={signuppage} id='loginpageimg'>    
          </img>
          <div id='signuppageform'>
              <h1 id='sellersignuphead'>
               SIGNUP
              </h1>
              <p id='validation6'>Invalid </p>
              <p id='validation7'>Invalid Mail</p>
              <p id='validation8'>Invalid </p>
              <p id='validation9'>Didn't match</p>
              <p id='sellerback5'>{mssg}</p>
              <form id='sellerloginform' onSubmit={handleSubmits}>
                  <input type='text' placeholder='Enter your name' name="fullname"
                      value={userName}
                      onChange={handleuserName}
                      required
                      maxLength={100}>
                    </input> 
                  <input type='email' placeholder='Enter Your Email' name="emails"
                      value={userEmail}
                      onChange={(e) => validate(e.target.value)}
                      // onChange={handleuserEmail}
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
                  <button type='submit' id='userloginbtn' 
                  // onClick={postdata}
                  >Signup</button>
              </form>
              <p id='sellersignuplink'>Already a customer? <Link to="/login">LOGIN</Link></p>
          </div>
      </div>
      )}
      </>
        );
}
export default Signup;







// import react, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Signup.css";
// import Navs from "./navs.jsx";
// import signinimg from "../assets/signinimg.svg";
// import Otps from "./Otps.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// var x;
// function App() {
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const [check, isCheck] = useState(false);
//   const [mssg, setMssg] = useState(null);
//   const [status, setStatus] = useState(false);
//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//     repassword: "",
//   };
//   const onSubmit = (values) => {
//     // console.log("Form data", values);
//   };
  
//  const onChange=(event)=>{
//   console.log(event.formik.values.email);
//  }
  
//   const validate = (values) => {
//     let errors = {};
//     if (!values.username) {
//       errors.username = "required!";
//     }
//     if (!values.email) {
//       errors.email = "required!";
//     } else if (
//       values.email.match(
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//       ) == null
//     ) {
//       errors.email = "invalid!";
//     }
//     if (!values.password) {
//       errors.password = "required";
//     }
//     if (!values.repassword) {
//       errors.repassword = "required!";
//     }
//     if (values.repassword != values.password) {
//       errors.repassword = "didn't match";
//     }
//     x = Object.keys(errors).length;
//     console.log(x);
//     console.log(errors);
//     x !== 0 ? isCheck(false) : isCheck(true);
//     console.log(check);
//     return errors;
//   };
//   function showHide1() {
//     setShow1(!show1);
//   }
  
//   function showHide2() {
//     setShow2(!show2);
//   }

//   const handleApi2 = () => {
//     if (check) {
//       axios
//         .post(
//           "https://foodorabackend-production.up.railway.app/user/register",
//           {
//             username: formik.values.username,
//             email: formik.values.email,
//             password: formik.values.password,
//           }
//         )
//         .then((res) => {
//           setMssg(res.data.msg);
//           console.log(res);
//           setStatus(res.data.success);
//           console.log(res.data.success);
//         })
//         .catch((err2) => {
//           console.log(err2);
//           setMssg(err2.response.data.msg);
//         });
//     }
//   };
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     onChange,
//     validate
//   });
// //   console.log("Form Errors", formik.errors);
//   return (
//     <div>
//       <Navs />
//       <p id="backendmssg">{mssg}</p>
//       <h1 id="hungry">HUNGRY??</h1>
//       <p id="order">Order Now From Your Favourite Restraunt..</p>
//       <img src={signinimg} alt="" id="logs" />
//       <h1 id="log1">SIGNUP</h1>
//       <div id="auths">
//         <form id="form2" onSubmit={formik.handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             className="fullname"
//             placeholder="Enter your username"
//             onChange={formik.handleChange}
//             value={formik.values.username}
//           />
//           {formik.errors.username ? (
//             <div id="errors1">{formik.errors.username}</div>
//           ) : null}
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Enter your Email"
//             className="emails"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           {formik.errors.email ? (
//             <div id="errors2">{formik.errors.email}</div>
//           ) : null}
//           {show1 ? (
//             <FontAwesomeIcon icon={faEye} id="eye1" onClick={showHide1} />
//           ) : (
//             <FontAwesomeIcon icon={faEyeSlash} id="eye1" onClick={showHide1} />
//           )}
//           <input
//             type={show1 ? "text" : "password"}
//             name="password"
//             id="password"
//             className="passwords"
//             placeholder="Enter your password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           {formik.errors.password ? (
//             <div id="errors3">{formik.errors.password}</div>
//           ) : null}
//           {show2 ? (
//             <FontAwesomeIcon icon={faEye} id="eye2" onClick={showHide2} />
//           ) : (
//             <FontAwesomeIcon icon={faEyeSlash} id="eye2" onClick={showHide2} />
//           )}
//           <input
//             type={show2 ? "text" : "password"}
//             name="repassword"
//             id="repassword"
//             className="repasswords"
//             placeholder="Re-enter password"
//             onChange={formik.handleChange}
//             value={formik.values.repassword}
//           />
//           {formik.errors.repassword ? (
//             <div id="errors4">{formik.errors.repassword}</div>
//           ) : null}
//           {check?(
//             <Link to="/otp2">
//               <button type="submit" onClick={handleApi2}>
//                 SIGNUP
//               </button>
//             </Link>
//           ) : (
//             <button type="submit" onClick={handleApi2}>
//               SIGNUP
//             </button>
//           )}
//           <p id="customer">
//             Already a customer? <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default App;








// import react, { useState,useEffect } from "react";
// import axios from 'axios';
// import "./Signup.css";
// import Navs from "./navs.jsx";
// import signinimg from '../assets/signinimg.svg';
// import Otps from "./Otps.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
// import { Link } from "react-router-dom";
// function Signup() {
//   var x;
//   var a , b , c ,d , e , f ;
//     const [status , setStatus] = useState(false);
//     const [check , isCheck]=useState(false);
//     const[mssg, setmssg]=useState('');
//     const [userSign, setUserSign] = useState({
//         fullname: "",
//         emails: "",
//         passwords: "",
//         repasswords: "",
//       });
//       var username=userSign.fullname;
//       var email=userSign.emails;
//       var password = userSign.passwords;
//       var data1={username , email , password}
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);

//   function showHide1() {
//     setShow1(!show1);
//   }

//   function showHide2() {
//     setShow2(!show2);
//   }
//   const [records, setRecords] = react.useState([]);

//   const [error2, setError2] = react.useState({});

//   const [isSubmitted, setIsSubmitted] = react.useState(false);

//   function handleInputs(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setError2(validates(userSign));
//     setUserSign({ ...userSign, [name]: value });
//     localStorage.setItem("myMail" , userSign.emails);
//   }

//   function validates(values) {
//     let errors = {};
//     if (!values.fullname) {
//       errors.fullname = "Username is required!";
//     }
//     if (!values.emails) {
//       errors.emails = "Email is required!";
//     } else if (
//       values.emails.match(
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//       ) == null
//     ) {
//       errors.emails = "Invalid mail";
//     }
//     if (!values.passwords) {
//       errors.passwords = "Password is required!";
//     } 
//     else if (values.passwords.length < 8) {
//       errors.passwords = "At least 8 chars needed!";
//     } else if (values.passwords.match(/[A-Z]/) == null) {
//       errors.passwords = "Password must have one uppercase";
//     } else if (values.passwords.match(/[0-9]/) == null) {
//       errors.passwords = "Password must have one number";
//     } else if (values.passwords.match(/[!@#$%^&*]/) == null) {
//       errors.passwords = "Password must have 1 special symbol";
//     }
//     if (!values.repasswords) {
//       errors.repasswords = "Re-enter password!";
//     }
//     if (values.repasswords != values.passwords) {
//       errors.repasswords = "Passwords did not match";
//     }
//     x=Object.keys(errors).length;
//     console.log(x);
//     (x!==0)?isCheck(false):isCheck(true);
//     console.log(check);
//     return errors;
//   }

//   function handleSubmits(event){
//     console.log(userSign);
//     setError2(validates(userSign));
//     console.log(error2 , check);
//     if(check){
//       axios
//      .post('https://foodorabackend-production.up.railway.app/user/register',data1)
//      .then(res=>{
//       setmssg(res.data.msg);
//      console.log(res.data.msg);
//       setStatus(res.data.success);
//       console.log(res.data.success);
//      }
//      )
//      .catch(err2=>{
//       console.log(err2);
//       setmssg(err2.response.data.msg)
//      });
//    }
//     event.preventDefault();
//     const newRecords = { userSign };
//     setRecords([...records, newRecords]);
//     setIsSubmitted(true);
//   }
//   return (
//     <>
//       <Navs />
//       <p id='backendmssg'>{mssg}</p>
//       <h1 id='hungry'>HUNGRY??</h1>
//         <p id='order'>Order Now From Your Favourite Restraunt..</p>
//       <h1 id="log1">SIGNUP</h1>
//       <div id="auths">
//         <div className="form">
//           <form id="form2" onSubmit={handleSubmits}>
//             <input
//               type="text"
//               placeholder="Full Name"
//               name="fullname"
//               id="fullname"
//               className="fullname"
//               value={userSign.fullname}
//               onChange={handleInputs}
//             ></input>
//             <p id="errors1">{error2.fullname}</p>
//             <input
//               type="text"
//               placeholder="Enter your email"
//               name="emails"
//               id="emails"
//               className="emails"
//               value={userSign.emails}
//               onChange={handleInputs}
//             ></input>
//             <p id="errors2">{error2.emails}</p>
//             <input
//               type={show1 ? "text" : "password"}
//               placeholder="Password"
//               name="passwords"
//               id="passwords"
//               className="passwords"
//               value={userSign.passwords}
//               onChange={handleInputs}
//             ></input>
//             {show1 ? (
//               <FontAwesomeIcon icon={faEye} id="eye1" onClick={showHide1} />
//             ) : (
//               <FontAwesomeIcon
//                 icon={faEyeSlash}
//                 id="eye1"
//                 onClick={showHide1}
//               />
//             )}
//             <p id="errors3">{error2.passwords}</p>
//             <input
//               type={show2 ? "text" : "password"}
//               placeholder="Re-enter password"
//               name="repasswords"
//               id="repasswords"
//               className="repasswords"
//               value={userSign.repasswords}
//               onChange={handleInputs}
//             ></input>
//             {show2 ? (
//               <FontAwesomeIcon icon={faEye} id="eye2" onClick={showHide2} />
//             ) : (
//               <FontAwesomeIcon
//                 icon={faEyeSlash}
//                 id="eye2"
//                 onClick={showHide2}
//               />
//             )}
//             <p id="errors4">{error2.repasswords}</p>

//             {(status)?((<Link to='/otp2'>
//             <button type="submit" 
//             // onClick={handleApi2}
//             >SIGNUP</button>
//             </Link>)):
//             <button type="submit" 
//             // onClick={handleApi2}
//             >SIGNUP</button>
//             }

//             {/* <Link to='/otp2'> */}
//             {/* <button type="submit" onClick={handleApi2}>SIGNUP</button> */}
//             {/* </Link> */}
//             {/* if signup successfull link to otp */}
//             <p id='customer'>Already a customer?  <Link to="/login">
//              Login
//             </Link></p>
//           </form>
//         </div>
//       </div>
//       <img src={signinimg} alt="" id="logs" />
          
//     </>
//   );
// }
// export default Signup;