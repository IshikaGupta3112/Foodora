import Contactus from "../pages/contactus/contactus";
import {useState} from 'react';
import Navs2 from "../pages/navss/navs2";
import "./cart.css";
import Createlistcart from './createcart.jsx' 
import CreateCart from "./cartcomp";
import Cartitem from './cart.js'
import axios from "axios";
import { useEffect } from "react";
import Loader from "../Loader";
var userid = localStorage.getItem("userid");
function Cart(){
const [arr , setArr] =useState([]);
const [success, setSuccess] =useState(false);
const [success2, setSuccess2] =useState(false);
const [loading, setLoading] =useState(false);
var accesstoken = localStorage.getItem("accesstoken");
  const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
    // const [count , setCount] = useState(1);
    // function increase(){
    // setCount(count+1);
    // }
    // function decrease(){
    //     if(count>0)
    //     setCount(count-1);
    //     }
 function handleorder(){
    console.log(accesstoken);
    setLoading(true);
    axios
    .post("https://foodorabackend-production.up.railway.app/user/checkout" ,{},config
    //  { 
    //   headers:{
    //   Authorization:`Bearer ${accesstoken}`
    // } , 
    // }
    )
    .then((res) => {
        console.log(res.data);
        setLoading(false);
        console.log(res.data.success);
        setSuccess(res.data.success);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
 }  
 
 useEffect(()=>{
  setLoading(true);
axios
.post("https://foodorabackend-production.up.railway.app/user/viewcart" , {
  user_id:userid
},config)
.then((res) => {
    console.log(res);
    setLoading(false);
    setArr(res.data.cart);
  })
  .catch((err) => {
    console.log(err);
    setLoading(false);
  });
 },[]);
    function createcart2(arr) {
        return (
          <CreateCart
            foodname={arr.foodname}
           food_price={(arr.food_price)*arr.quantity}
           quantity={arr.quantity}
          />
        );
      }
    return(
        <>
        <Navs2 />
        {loading?<Loader/>:(
        <div id='cartbox'>
        {(success==false)?arr.map(createcart2):((document.getElementById('nxtbtn2').style.display='none')&&<p id='cartpar'>Order Placed</p>)}
            {/* <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'onClick={increase}>+</button>
                <div id='quantity'>{count}</div>
                <button id='minus'onClick={decrease}>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>*/}
            <button onClick={handleorder} id='nxtbtn2'disabled={(success) ? true : false}>NEXT</button> 
        </div>
        )}
        <Contactus/>
        </>
    )
}
export default Cart;