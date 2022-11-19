import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Navs3 from "../navs2";
import UserOrdercard from "./orderhidecard";
import Loader from "../../Loader";
import Navs2 from "../../pages/navss/navs2";
import Navs4 from "../navs4";
function Orderhistory(){
  var accesstoken = localStorage.getItem("accesstoken");
  const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
  const [loading , setLoading] = useState(false);
const [arr , setArr] = useState([]);  
useEffect(()=>{
  setLoading(true);
axios
.get("https://foodorabackend-production.up.railway.app/user/userorders" ,config )
.then((res)=>{
  console.log(res.data.orders);
  setArr(res.data.orders)
  setLoading(false);
})
.catch((err)=>{
  console.log(err)
  setLoading(false);
})
},[])  
function createOrder(arr){
  return(
    <UserOrdercard
    status={arr.status}
    _id={arr._id}
        />
  )
}
return(<>
<Navs4/>
 {loading?<Loader/>:(
<div id='ordershowdiv'>

{arr.map((rest)=>createOrder(rest))}
</div>
 )}
</>)
}
export default Orderhistory;