import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Ordercard from './ordercard';
import Navs3 from '../navs2';
import Loader from '../../Loader';
import Navs4 from '../navs4';
function SellerOrderShow(){
var accesstoken = localStorage.getItem("accesstoken");
const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
const [loading , setloading] = useState(false);
var id = JSON.stringify(localStorage.getItem("orderid2"));  
var orderid = id.replaceAll('"' , '');
const[arr , setArr] = useState([]);
useEffect(()=>{
    setloading(true);
axios
.get("https://foodorabackend-production.up.railway.app/user/order/" + orderid , config)
.then((res)=>{
    console.log(res.data.order);
    setArr(res.data.order);
    setloading(false);
})
.catch((err)=>{
    console.log(err);
    setloading(false);
})
} , []);

function createOrder(arr){
    return(
      <Ordercard
            foodname={arr.foodname}
            food_price={arr.food_price}
            quantity={arr.quantity}
          />
    )
  }
return(<>
<Navs4 />
{loading?<Loader/>:(
<div id='ordershowdiv'>
{arr.map((rest)=>createOrder(rest))}
</div>
)}
</>);
}
export default SellerOrderShow;