import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Navs3 from "../navs2";
import UserOrdercard from "./orderhidecard";

function Orderhistory(){
  var accesstoken = localStorage.getItem("accesstoken");
  const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
const [arr , setArr] = useState([]);  
useEffect(()=>{
axios
.get("https://foodorabackend-production.up.railway.app/user/userorders" ,config )
.then((res)=>{
  console.log(res.data.orders);
  setArr(res.data.orders)
})
.catch((err)=>{
  console.log(err)
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
<Navs3/>
<div id='ordershowdiv'>
{arr.map((rest)=>createOrder(rest))}
</div>
</>)
}
export default Orderhistory;










// import Navs2 from "../../pages/navss/navs2";
// import {useEffect , useState} from 'react';
// import axios from "axios";
// import Ordercard from "./ordercard";
// import Loader from "../../Loader";
// function Orderhistory(){
//     const [n , setN] = useState("");
//     const [loading , setLoading] = useState(false);
//     var i , j;
//     var userid=localStorage.getItem("userid");
//     var accesstoken = localStorage.getItem("accesstoken");
//     console.log(accesstoken);
//     console.log(userid);
//     const config ={
//         headers:{
//           Authorization:`Bearer ${accesstoken}`,
//         }
//       }
//     const [arr , setArr] = useState([]);
// const [num,setNum] = useState();
// const[nestedarr , setNestedArray] =useState([]);
// // let nestedarr=[];
//     useEffect(()=>{
//     // setLoading(true);
//     axios
//     .get("https://foodorabackend-production.up.railway.app/user/userorders" , config)
//     .then((res) => {
//       console.log(res);
//         // console.log(res.data.orderhistory.length);
//         // console.log(res.data.orderhistory);
//         // setLoading(false);
//         // console.log(res.data.orderhistory.length);
//         // setArr(res.data.orderhistory);
//         // setNum(res.data.orderhistory.length);
//           })
//     .catch((err) => {
//         console.log(err);
//         // setLoading(false);
//       });
//     },[])
//     // console.log(arr);  
//     // console.log(num); 
//     // let array = [];
//     // for(i=0;i<num;i++){
//     //   for(j=0;j<arr[i].length;j++){
//     //     // console.log(arr[i][j]);
//     //   //  setNestedArray(arr[i][j]);
//     //     array.push(arr[i][j]);
//     //   }
//     // }
//     // useEffect(()=>{
//     //   if(array.length){
//     //     console.log(array);
//     //   }
//     // },[array])
//     // console.log(nestedarr);
//     // if(array.length){
//     //   setNestedArray(array);
//     // }
//     // if(nestedarr.length){
//     //   console.log(nestedarr);
//     // }
//     // titles=res.data.near.map(obj=>obj.imgpath[0]);
//     // console.log(titles);
//     // console.log(nestedarr) ;
// // let k=0;
// // const [nestedArr, setNestedArray] = useState([])
// //     function arrayNest(arr) {
// //       console.log(arr);
// //         setNestedArray(localArr=>[...localArr,arr])
// //         console.log(nestedArr)
// //       }
    
// // arrayNest(arr)
// // function createOrder(array){
// //   return(
// //     <Ordercard
// //           foodname={array.foodname}
// //           food_price={array.food_price}
// //           quantity={array.quantity}
// //         />
// //   )
// // }
//     return(<>
//     <Navs2 />
//     {loading?<Loader/>:(
//     <div id='padder2'>
//     {/* {array.map(createOrder)}; */}
//     </div>
//     )}
//     </>);
//     }
//     export default Orderhistory;