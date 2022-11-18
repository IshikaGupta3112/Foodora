import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Ordercard from './ordercard';
import Navs3 from '../navs2';
function SellerOrderShow(){
var accesstoken = localStorage.getItem("accesstoken");
const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
var id = JSON.stringify(localStorage.getItem("orderid2"));  
var orderid = id.replaceAll('"' , '');
const[arr , setArr] = useState([]);
useEffect(()=>{
axios
.get("https://foodorabackend-production.up.railway.app/user/order/" + orderid , config)
.then((res)=>{
    console.log(res.data.order);
    setArr(res.data.order);
})
.catch((err)=>{
    console.log(err);
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
<Navs3 />
<div id='ordershowdiv'>
{arr.map((rest)=>createOrder(rest))}
</div>
</>);
}
export default SellerOrderShow;