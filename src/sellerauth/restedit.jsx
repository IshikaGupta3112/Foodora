import { useState, useEffect} from "react";
import SellerNav2 from "./sellernav2";
import Loader from "../Loader";
import axios from 'axios';
import restrauntimg from '../assets/restrauntimg.jpg'
import { useNavigate } from "react-router-dom";
function RestEdit(){
  const [loading , setLoading] = useState(false);
  var sellerid = localStorage.getItem("restid");
  var restname=localStorage.getItem("restname");
  var restimage=localStorage.getItem("restimage");
  var restpin=localStorage.getItem("restpin");
  var restadd=localStorage.getItem("restadd");
  var restclose=localStorage.getItem("restclose");
  var restopen=localStorage.getItem("restopen");
  var restphone=localStorage.getItem("restphone");
//   const [arr , setArr] = useState([]);
  const Navigate = useNavigate();
//   useEffect(()=>{
//     setLoading(true);
//   axios
//   .post("https://foodorabackend-production.up.railway.app/seller/sellerprofile" , {
//   _id:sellerid,
//   },config)
//   .then((res) => {
//       console.log(res.data.sellerDetails);
//       setArr(res.data.sellerDetails);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//       setLoading(false);
//     });
//   },[])
  const [restrauntName, setRestrauntName] = useState(restname);
  const [phoneNumber, setPhoneNumber] = useState(restphone);
  const [address, setAddress] = useState(restadd);
  const [openingTime, setOpeningTime] = useState(restopen);
  const [closingTime, setClosingTime] = useState(restclose);
  const [pincode, setPincode] = useState(restpin);
  const [restimg, setRestimg] = useState([]);
  const [id, setid] = useState("");
  const [mssg7, setMssg7] = useState("");
  useEffect(() => {
    var sellerid = localStorage.getItem("restid");
    setid(sellerid);
  }, []);
  function handlerestrauntName(e) {
    setRestrauntName(e.target.value);
  }
  function handlephoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleaddress(e) {
    setAddress(e.target.value);
  }
  function handleopeningTime(e) {
    setOpeningTime(e.target.value);
  }
  function handleclosingTime(e) {
    setClosingTime(e.target.value);
  }
  function handlePincode(e) {
    setPincode(e.target.value);
  }
  function handlefiles(e) {
    console.log(e.target.files);
    setRestimg(e.target.files[0]);
  }
  var accesstoken=localStorage.getItem("accesstoken2");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
  function handlesubmit(e) {
    localStorage.setItem("restname" , restrauntName);
    console.log(restrauntName);
    localStorage.setItem("restphone" , phoneNumber);
    console.log(phoneNumber);
    localStorage.setItem("restadd" , address);
    console.log(address);
    localStorage.setItem("restclose" , closingTime);
    console.log(closingTime);
    localStorage.setItem("restopen" , openingTime);
    console.log(openingTime);
    localStorage.setItem("restimage" , restimg);
    console.log(restimg);
    localStorage.setItem("restpin" , pincode);
    console.log(pincode);
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", restimg);
    fd.append("restaurant_closingtime", closingTime);
    fd.append("restaurant_openingtime", openingTime);
    fd.append("restaurantaddress", address);
    fd.append("mobilenumber", phoneNumber);
    fd.append("restaurantname", restrauntName);
    fd.append("pincode", pincode);
    fd.append("id", id);
    // if (iscorrectno && iscorrectpin) {
      setLoading(true);
      axios
        .post(
          "https://foodorabackend-production.up.railway.app/seller/restaurantregister",
          fd,config)
        .then((res) => {
          console.log(res.data);
          setMssg7(res.data.msg);
          setLoading(false);
          Navigate("/sellerprofile");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setMssg7(err.response.data.msg);
        });
    // }
  }
  const [iscorrectno, setIsCorrectNo] = useState(false);
  const [iscorrectpin, setIsCorrectPin] = useState(false);
  const rightpin = /(^[1-9][0-9]{5}$)/;
  // const rightpin = /^\d+$/;
  const rightno =/(^[6-9][0-9]{9}$)/;
  useEffect(() => {
    if (rightno.test(phoneNumber)) {
      document.getElementById("validation10").style.display = "none";
      console.log("true");
      setIsCorrectNo(true);
    } else if (phoneNumber) {
      document.getElementById("validation10").style.display = "block";
      setIsCorrectNo(false);
    }
  }, [phoneNumber]);
  useEffect(() => {
    if (rightpin.test(pincode)) {
      document.getElementById("validation20").style.display = "none";
      console.log("true");
      setIsCorrectPin(true);
    } else if (pincode) {
      document.getElementById("validation20").style.display = "block";
      setIsCorrectPin(false);
    }
  }, [pincode]);
return(
<>
 <SellerNav2 />
      {loading?<Loader/>:(
      <div id="fulllog">
        <img src={restrauntimg} id="loginpageimg2"></img>
        <div id="signuppageform2">
          <h1 id="restrauntaddhead">Edit Info</h1>
          <p id="validation10">Invalid Phone no.</p>
          <p id="validation20">Invalid Pincode</p>
          <p id="sellerback6">{mssg7}</p>
          <form
            id="restrauntform"
            onSubmit={handlesubmit}
            enctype="multipart/form-data"
          >
            <input
              type="text"
              name="restaurantname"
            //   defaultValue={arr.restaurantname}
              placeholder="Restaurant Name"
              onChange={handlerestrauntName}
              value={restrauntName}
              maxLength={100}
            ></input>
            <input
              type="text"
              name="mobilenumber"
            //   defaultValue={arr.mobilenumber}
              placeholder="Phone Number"
              onChange={handlephoneNumber}
              value={phoneNumber}
              maxLength={10}
            ></input>
            <input
              type="text"
              name="restaurantaddress"
            //   defaultValue={arr.restaurantaddress}
              placeholder="Restaurant Address"
              maxLength={150}
              onChange={handleaddress}
              value={address}
            ></input>
            <label htmlFor="closingtime" id="close">
              Closing Time:
            </label>
            <input
              type="time"
              name="restaurant_openingtime"
            //   defaultValue={arr.restaurant_openingtime}
              placeholder="Opening Time"
              onChange={handleopeningTime}
              value={openingTime}
              maxLength={9}
            ></input>
            <label htmlFor="openingTime" id="opening">
              Opening Time:
            </label>
            <input
              type="time"
            //   defaultValue={arr.restaurant_closingtime}
              placeholder="closing time"
              name="restaurant_closingtime"
              onChange={handleclosingTime}
              value={closingTime}
              maxLength={9}
            ></input>
            <label htmlFor="photo" id="photo">
              Restaurant Photo:
            </label>
            <input type="file" name="image" 
            onChange={handlefiles} 
            accept='image/*'></input>
            <input
              type="text"
              name="pincode"
              placeholder="pincode"
            // defaultValue={arr.pincode}
              onChange={handlePincode}
              value={pincode}
              maxLength={10}
            ></input>
            <button
              id="sellerloginbtn"
              type="submit"
            >
              Next
            </button>
          </form>

          {/* <div id='imagebox'>
              <form id='imagefilesform'>
            <input type='file'id='imagefile' onChange={handlefiles}></input>
            <button type='submit'>Submit</button> */}
          {/* </form> */}
        </div>
      </div>

)}
</>
);
}
export default RestEdit;