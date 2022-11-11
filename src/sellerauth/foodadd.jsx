import './foodadd.css';
import SellerNav from './sellernav';
import restrauntadd from '../assets/restrauntadd1.jpg'
import FormData from 'form-data';
import { useState , useEffect } from 'react';
import axios from 'axios';
function FoodAdd(){
 let sellerid=localStorage.getItem("id1");
 const [foodname, setFoodname] = useState('');  
 const [foodprice, setFoodprice] = useState('');  
 const [foodDesc, setFoodDesc] = useState('');  
 const [foodimg, setFoodImg] = useState("");  
 const [id, setid] = useState("");
  useEffect(() => {
    var sellerid = localStorage.getItem("id1");
    setid(sellerid);
  }, []);
 const[mssg8 , setMssg8]=useState('');
 function handlefoodname(e) {
    setFoodname(e.target.value);
  }
  function handlefoodprice(e) {
      setFoodprice(e.target.value);
    }
    function handlefooddesc(e) {
      setFoodDesc(e.target.value);
    }
    function handleimg(e){
        console.log(e.target.files);
        setFoodImg(e.target.files[0]);
    }
    const [iscorrectprice, setIsCorrectprice] = useState(false);
    const rightprice = /^\d+$/;
    useEffect(() => {
        if (rightprice.test(foodprice)) {
          document.getElementById("validation10").style.display = "none";
          console.log("true");
          setIsCorrectprice(true);
        } else if (foodprice) {
          document.getElementById("validation10").style.display = "block";
          setIsCorrectprice(false);
        }
      }, [foodprice]);
      function handlesubmit(e) {
        console.log(sellerid);
        const fd= new FormData();
        fd.append("image" , foodimg);
        fd.append("foodname" , foodname);
        fd.append("food_price" , foodprice);
        fd.append("food_desc" , foodDesc);
        fd.append("id" , id);
        var object = {};
        fd.forEach((value, key) => (object[key] = value));
        console.log(object);
        console.log(id);
        e.preventDefault();
        if (iscorrectprice){
          axios
            .post("https://foodorabackend-production.up.railway.app/seller/foodlisting", fd
            )
            .then((res) => {
              console.log(res.data);
              setMssg8(res.data.msg);
            })
            .catch((err) => {
              console.log(err);
              setMssg8(err.response.data.msg);
            });
        }
      }
return(<>
<SellerNav />
      <div id="fulllog">
        <img src={restrauntadd} id="loginpageimg"></img>
        <div id="signuppageform">
        <h1 id="restrauntaddhead">Food Information</h1>
          <p id="validation10">Invalid price</p>
          <p id="sellerback6">{mssg8}</p>
          <form id="restrauntform" 
          onSubmit={handlesubmit}
          >
              <input
              type="text"
              placeholder="Food Name"
              onChange={handlefoodname}
              value={foodname}
              required
            ></input>
              <input
              type="text"
              placeholder="Food price"
              onChange={handlefoodprice}
              value={foodprice}
              required
            ></input>
             <input
              type="text"
              placeholder="Food description"
              maxLength={100}
              onChange={handlefooddesc}
              value={foodDesc}
              required
            >
            </input>
                <input type='file' name='image' 
            onChange={handleimg}
            ></input>
            <button id='sellerloginbtn' type='submit'>Add</button>
            </form>
        
            {/* <div id='imagebox'>
              <form id='imagefilesform'>
            <input type='file'id='imagefile' onChange={handlefiles}></input>
            <button type='submit'>Submit</button> */}
            {/* </form> */}  
            </div>    
            </div>
            
        {/* </div> */}
</>);

}
export default FoodAdd;