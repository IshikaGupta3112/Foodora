// import react,{useState , useEffect} from "react";
// import "./Otp.css";
// import { Link , useNavigate} from "react-router-dom";
// import signuppage from '../assets/signuppage.jpg';
// import axios from 'axios';
// function Otps() {
//   const [mssg,setmssg]=useState('');
//   const [userOtp, setuserOtp] = react.useState({
//     otp: "",
//   });
//   var email =localStorage.getItem("myMail");
//   // console.log(email);
//   var otp = userOtp.otp;
//   const handleApi5=()=>{
//     axios
//     .post("https://foodorabackend-production.up.railway.app/user/verify/send",{email})
//     .then(res=>{
//       console.log(res.data.msg);
//       setmssg(res.data.msg);
//     })
//     .catch(err=>{
//       console.log(err);
//       console.log(err.response.data.msg);
//       setmssg(err.response.data.msg)
//     })
//     setCounter(29);
//   }
//   const [isSubmit, setIsSubmit] = react.useState(false);
//   function handleInput(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setuserOtp({ ...userOtp, [name]: value });
//   }
//   function handleSubmit(event) {
//     axios 
//     .post('https://foodorabackend-production.up.railway.app/user/verify' ,{email , otp} )
//     .then(result=>{
//       console.log(result.data.msg);
//       setmssg(result.data.msg)})
//     .catch(err3=>{
//       console.log(err3);
//       console.log(err3.response.data.msg);
//       setmssg(err3.response.data.msg);
//     })
//     event.preventDefault();
//     setIsSubmit(true);
//   }

//   const[counter,setCounter]=useState(29)
//   useEffect(()=>{
//       const timer =
//       counter > 0 &&
//        setInterval(() => setCounter(counter-1),1000);
//       return()=>clearInterval(timer);
//   },[counter]);
//   return (
//     <>
//     <div id="fulllog">
//         <img src={signuppage} id='loginpageimg'>    
//         </img>
//         <div id='loginpageform'>
//             <h1 id='sellerfrghead'>
//                OTP verification
//             </h1>
//             <p id='validation3'>Invalid </p>
//             <p id='sellerback10'>{mssg}</p>
//             <form id='sellerloginform'onSubmit={handleSubmit}>
//                 <input type='text' placeholder='Enter Otp' name="otp"
//         value={userOtp.otp}
//         onChange={handleInput}
//         required
//         maxLength={6}></input>
//                 <button type='submit' id='sellerloginbtn'>Verify</button>
//             </form>
//             <p id='signupotp'>Didn't get? <button disabled={(counter!==0) ? true : false} onClick={handleApi5} id='resend2'>
//         Resend OTP
//       </button>: {counter}</p>
//         </div>
//     </div>
//     </>



//     // <>
//     // <p id='backendmssg'>{mssg}</p>
//     //   <h1 id="log3">OTP verification</h1>
//     //   <div id="auth4">
//     //     <form id="form1" onSubmit={handleSubmit}>
//     //       <input
//     //         type="text"
//     //         placeholder="Enter OTP"
//     //         id="otp"
//     //         name="otp"
//     //         value={userOtp.otp}
//     //         onChange={handleInput}
//     //         required
//     //         maxLength={6}
//     //       ></input>
//     //       {/* <Link to='/main'> */}
//     //       <button type="submit" id='verify' 
//     //       // onClick={handleApi4}
//     //       >VERIFY</button>
//     //       {/* </Link> */}
//     //       {/* if otp enter correct then main page linking */}
//     //       <p id='otpp'>Didn't get? <button disabled={(counter!==0) ? true : false} onClick={handleApi5} id='resend'>
//     //         Resend OTP
//     //       </button>: {counter}</p>
//     //     </form>
//     //   </div>
//     // </>



//   );
// }
// export default Otps;
