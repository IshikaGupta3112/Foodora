import SellerNav4 from '../../sellernav4';
import './sellerordershow.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Ordercard from '../../../components/userprofile/ordercard';
function SellerOrderShow(){
//     var restid=JSON.stringify(localStorage.getItem("restid"));
// var newrestid = restid.replaceAll('"' , '');
var accesstoken = localStorage.getItem("accesstoken2");
const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
var id = JSON.stringify(localStorage.getItem("orderid1"));  
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
<SellerNav4 />
<div id='ordershowdiv'>
{arr.map((rest)=>createOrder(rest))}
</div>
</>);
}
export default SellerOrderShow;