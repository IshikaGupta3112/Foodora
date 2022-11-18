import Contactus from '../pages/contactus/contactus';
import Navs2 from '../pages/navss/navs2';
import './restrauntpage.css';
import {useEffect} from 'react';
import star from '../assets/star.svg';
import share from '../assets/share.svg';
import Restrauntcard from './restrauntcard';
import CreateRestraunt from './createrestraunt';
import axios from 'axios';
import { useState } from 'react';
import Loader from '../Loader';
function RestrauntPage(){
var restid=JSON.stringify(localStorage.getItem("restid"));
var newrestid = restid.replaceAll('"' , '');
const [restarr , setRestarr] = useState([]);
const [food , setFood] = useState([]);
const [imgpath, setimgpath] = useState([]);
const [loading, setLoading] = useState(false);
var url="https://foodorabackend-production.up.railway.app/";
var accesstoken = localStorage.getItem("accesstoken");
const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
useEffect(()=>{  
  setLoading(true);
axios
.get("https://foodorabackend-production.up.railway.app/user/restaurant/"+newrestid , config )
.then((res) => {
  console.log(res);
    console.log(res.data.seller);
    setimgpath(res.data.seller.imgpath);
    setFood(res.data.seller.food_list);
    console.log(food);
    setLoading(false);
    setRestarr(res.data.seller);
    // console.log(restarr);
  })
  .catch((err) => {
    setLoading(false);
    console.log(err);
  });
},[])   
function createRest(food) {
    return (
      <Restrauntcard
        _id={food._id}
        foodname={food.foodname}
        food_price={food.food_price}
        food_desc={food.food_desc}
        imgpath={food.imgpath}
      />
    );
  } 
return(
<>
<Navs2 />
<div id="restrauntbox">
{/* <img src={url+restarr.imgpath[0]} id="onepic"> */}
{/* </img> */}
<img src={url+imgpath[0]} id="onepic">
</img>
<div id="fourpic">
    <div id="upperline">
 {/* <img src={url+imgpath[1]} id="firstpic"></img>    */}
 {/* <img src={url+imgpath[2]} id="firstpic"></img>   */}
 </div>
 <div id="lowerline">
 {/* <img src={url+restarr.imgpath[3]} id="firstpic"></img>    */}
 {/* <img src={url+restarr.imgpath[4]} id="firstpic"></img>   */}
 </div>
</div>
</div>
<div id='nameandrate'>
<p id="restrauntname">{restarr.restaurantname}</p>
{/* <p id='rating'>3.6 <img src={star} id='ratestar'/></p> */}
{/* <p id='review'>Reviews</p> */}
{/* <p id="restrauntitems">Burger, Fastfood, Beverages</p> */}
<p id="restrauntaddress">{restarr.restaurantaddress}</p>
{/* <p id='open'>Open Now</p> */}
<p id='opentime'>{restarr.restaurant_openingtime} - {restarr.restaurant_closingtime}</p>
{/* <button id='addreview'>Add Reviews</button> */}
{/* <img src={direction} id='directionimg' /> */}
{/* <p id='directions'>Directions</p> */}
{/* <p id='share'>Share <img src={share} id='shareimg' /></p> */}
{/* <ul id='ul3'> */}
    {/* <li>Recommended</li> */}
    {/* <li>Combos</li> */}
    {/* <li>Burgers</li> */}
    {/* <li>Drinks</li> */}
    {/* <li>Beverages</li> */}
    {/* <li>Desert</li> */}
{/* </ul> */}
</div>
{food.map((rest)=>createRest(rest))};
{/* <CreateRestraunt /> */}
<Contactus />
</>
);
}
export default RestrauntPage;