import './foodadd.css';
import SellerNav from './sellernav';
import restrauntadd from '../assets/restrauntadd1.jpg'
import FormData from 'form-data';
import { useState , useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import SellerNav2 from './sellernav2';
import Loader from '../Loader';
function FoodAdd(){
 let sellerid=localStorage.getItem("id1");
 const [foodname, setFoodname] = useState('');  
 const [foodprice, setFoodprice] = useState('');  
 const [foodDesc, setFoodDesc] = useState('');  
 const [foodimg, setFoodImg] = useState("");  
 const [id, setid] = useState("");
 const [category, setcategory] = useState("");
 const [loading , setLoading] = useState(false);
  useEffect(() => {
    // var sellerid = localStorage.getItem("id1");
    var sellerid = localStorage.getItem("restid");
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
    function handleOption(e){
      setcategory(e.target.value);
    }
    const [iscorrectprice, setIsCorrectprice] = useState(false);
    const rightprice = /(^[1-9][0-9])/;
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
      const Navigate=useNavigate();
      var accesstoken=localStorage.getItem("accesstoken2");
      const config ={
          headers:{
            Authorization:`Bearer ${accesstoken}`,
          }
        }
      function handlesubmit(e) {
        console.log(sellerid);
        const fd= new FormData();
        fd.append("image" , foodimg);
        fd.append("foodname" , foodname);
        fd.append("food_price" , foodprice);
        fd.append("food_desc" , foodDesc);
        fd.append("id" , id);
        fd.append("food_category" , category);
        var object = {};
        fd.forEach((value, key) => (object[key] = value));
        console.log(object);
        console.log(id);
        e.preventDefault();
        if (iscorrectprice){
          setLoading(true);
          axios
            .post("https://foodorabackend-production.up.railway.app/seller/foodlisting", fd , config
            )
            .then((res) => {
              console.log(res.data);
              setMssg8(res.data.msg);
              setLoading(false);
              Navigate("/sellerprofile");
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
              setMssg8(err.response.data.msg);
            });
        }
      }
return(<>
<SellerNav2 />
{loading?<Loader/>:(
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
              maxLength={100}
            ></input>
              <input
              type="text"
              placeholder="Food price"
              onChange={handlefoodprice}
              value={foodprice}
              required
              maxLength={4}
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
            <label htmlFor='foodimg' id='foodimg'>Food Image:</label>
                <input type='file' name='image' accept='image/*'
            onChange={handleimg}
            required
            ></input>
            <br></br>
             <select name="foodcategory" id='selectinp' onChange={handleOption}>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="noodles">Noodles</option>
              <option value="desert">Desert</option>
              <option value="beverages">Beverages</option>
              <option value="indian">Indian</option>
             </select>
             <br></br>
            <button id='sellerloginbtn' type='submit'>Add</button>
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
</>);

}
export default FoodAdd;