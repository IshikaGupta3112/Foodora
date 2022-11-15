import react, { useState, useEffect } from "react";
import restrauntadd from "../assets/restrauntadd.jpg";
import axios from "axios";
import FormData from 'form-data';
import SellerNav from "./sellernav";
import { useNavigate } from "react-router-dom";
import "./restrauntadd.css";
import SellerNav2 from "./sellernav2";
import Loader from "../Loader";
function RestrauntAdd() {
  const [formd, setformd] = useState([]);
  const [loading , setLoading] = useState(false);
  const Navigate = useNavigate();
  // let token1=localStorage.getItem("token1");
  const [restrauntName, setRestrauntName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [pincode, setPincode] = useState("");
  const [restimg, setRestimg] = useState([]);
  const [id, setid] = useState("");
  const [mssg7, setMssg7] = useState("");
  useEffect(() => {
    // var sellerid = localStorage.getItem("id1");
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
    e.preventDefault();
    console.log(restrauntName,phoneNumber,restrauntadd,openingTime,closingTime,id,restimg);
    const fd = new FormData();
    fd.append("image", restimg);
    fd.append("restaurant_closingtime", closingTime);
    fd.append("restaurant_openingtime", openingTime);
    fd.append("restaurantaddress", address);
    fd.append("mobilenumber", phoneNumber);
    fd.append("restaurantname", restrauntName);
    fd.append("pincode", pincode);
    fd.append("id", id);
    // var object = {};
    // fd.forEach((value, key) => (object[key] = value));
    // console.log(object);
    // console.log(id);
    //   for (var pair of fd.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    // }
    if (iscorrectno) {
      setLoading(true);
      axios
        .post(
          "https://foodorabackend-production.up.railway.app/seller/restaurantregister",
          fd,config)
        .then((res) => {
          console.log(res.data);
          setMssg7(res.data.msg);
          setLoading(false);
          Navigate("/foodadd");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setMssg7(err.response.data.msg);
        });
    }
  }
  const [iscorrectno, setIsCorrectNo] = useState(false);
  const rightno = /^\d+$/;
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
  function handleImage() {
    document.getElementById("restrauntform").style.display = "none";
    document.getElementById("validation10").style.display = "none";
    document.getElementById("imagefilesform").style.display = "block";
  }

  return (
    <>
      <SellerNav2 />
      {loading?<Loader/>:(
      <div id="fulllog">
        <img src={restrauntadd} id="loginpageimg2"></img>
        <div id="signuppageform2">
          <h1 id="restrauntaddhead">Restaurant Information</h1>
          <p id="validation10">Invalid Phone no.</p>
          <p id="sellerback6">{mssg7}</p>
          <form
            id="restrauntform"
            onSubmit={handlesubmit}
            enctype="multipart/form-data"
          >
            {/* <input type='text' name='id' value ={id} hidden></input> */}
            <input
              type="text"
              name="restaurantname"
              placeholder="Restraunt Name"
              onChange={handlerestrauntName}
              value={restrauntName}
              required
              maxLength={100}
            ></input>
            <input
              type="text"
              name="mobilenumber"
              placeholder="Phone number"
              onChange={handlephoneNumber}
              value={phoneNumber}
              maxLength={10}
              required
            ></input>
            <input
              type="text"
              name="restaurantaddress"
              placeholder="Full address"
              maxLength={150}
              onChange={handleaddress}
              value={address}
              required
            ></input>
            <label htmlFor="closingtime" id="close">
              Closing Time:
            </label>
            <input
              type="time"
              name="restaurant_openingtime"
              placeholder="Opening Time"
              onChange={handleopeningTime}
              value={openingTime}
              maxLength={9}
              required
            ></input>
            <label htmlFor="openingTime" id="opening">
              Opening Time:
            </label>
            <input
              type="time"
              placeholder="Closing Time"
              name="restaurant_closingtime"
              onChange={handleclosingTime}
              value={closingTime}
              required
              maxLength={9}
            ></input>
            <label htmlFor="photo" id="photo">
              Restaurant Photo:
            </label>
            <input type="file" name="image" onChange={handlefiles} accept='image/*'></input>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handlePincode}
              value={pincode}
              maxLength={10}
              required
            ></input>
            {/* <input type='text' name='id' value={iddata}></input> */}
            <button
              id="sellerloginbtn"
              type="submit"
              // onClick={handleImage}
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
      {/* </div> */}
    </>
  );
}
export default RestrauntAdd;
