import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import SellerNav4 from './sellernav4';
import Ordercard from '../components/userprofile/ordercard';
import './sellerorders.css'
import SellerOrdercard from './sellerordercard/sellerordercard';
function SellerOrders(){
    const [arr , setArr] = useState([]);
    let orders =[];
    let ord;
    var i , j;
   const[num , setNum] = useState();
    var accesstoken=localStorage.getItem("accesstoken2");
  const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
useEffect(()=>{
axios
.get("https://foodorabackend-production.up.railway.app/seller/sellerpendingorders" , config)
.then((res)=>{
    console.log(res.data.orders);
    console.log(res.data.orders.length);
    // console.log(res.data.orders._id)
    setArr(res.data.orders);
})
.catch((err)=>{
    console.log(err);
})
},[])   
// console.log(arr);
// arr.map((items)=>
// {
// console.log(items.order)
// orders.push(items.order)
// }); 

// console.log(orders);
function createOrder(arr){
    return(
      <SellerOrdercard
      status={arr.status}
      _id={arr._id}
            // foodname={arr[0].foodname}
            // food_price={arr[0].food_price}
            // quantity={arr[0].quantity}
          />
    )
  }
return(<>
<SellerNav4/>
<div id='orderpe'>
{arr.map(createOrder)};
</div>
</>);
}
export default SellerOrders;