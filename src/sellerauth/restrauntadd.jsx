import react, { useState, useEffect } from "react";
import restrauntadd from "../assets/restrauntadd.jpg";
import axios from "axios";
import FormData from 'form-data';
import SellerNav from "./sellernav";
import { useNavigate } from "react-router-dom";
import "./restrauntadd.css";
function RestrauntAdd() {
  const [formd, setformd] = useState([]);
  const Navigate = useNavigate();
  // let token1=localStorage.getItem("token1");
  const [restrauntName, setRestrauntName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [restimg, setRestimg] = useState([]);
  const [id, setid] = useState("");
  const [mssg7, setMssg7] = useState("");
  useEffect(() => {
    var sellerid = localStorage.getItem("id1");
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
  function handlefiles(e) {
    console.log(e.target.files);
    setRestimg(e.target.files[0]);
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
    fd.append("id", id);
    var object = {};
    fd.forEach((value, key) => (object[key] = value));
    console.log(object);
    console.log(id);
    //   for (var pair of fd.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    // }
    if (iscorrectno) {
      axios
        .post(
          "https://foodorabackend-production.up.railway.app/seller/restaurantregister",
          fd,
          // {
          //   headers: {
          //     "Content-type": "multipart/form-data",
          //   },
          // }
          //   {
          //  restaurantname:restrauntName,
          //  mobilenumber:phoneNumber,
          //  restaurantaddress:address,
          //  restaurant_openingtime:openingTime,
          //  restaurant_closingtime:closingTime,
          //  id:id,
          // //  image:restimg,
          //   }
        )
        .then((res) => {
          console.log(res.data);
          setMssg7(res.data.msg);
          Navigate("/foodadd");
        })
        .catch((err) => {
          console.log(err);
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
      <SellerNav />
      <div id="fulllog">
        <img src={restrauntadd} id="loginpageimg"></img>
        <div id="signuppageform">
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
            ></input>
            <input
              type="text"
              name="mobilenumber"
              placeholder="Phone number"
              onChange={handlephoneNumber}
              value={phoneNumber}
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
            ></input>
            <input type="file" name="image" onChange={handlefiles}></input>
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

      {/* </div> */}
    </>
  );
}
export default RestrauntAdd;
