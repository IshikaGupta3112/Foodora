import './category.css';
import { useEffect } from 'react';
import Contactus from '../pages/contactus/contactus';
import Navs2 from '../pages/navss/navs2';
import Categorycard from './categorycard';
import CreatecatList from './createcategory';
import axios from 'axios';
import { useState } from 'react';
function Category(){
  var foodCat=localStorage.getItem("foodcategory");
  console.log(foodCat);
  const [arr ,setArr] = useState([]);
  var accesstoken = localStorage.getItem("accesstoken");
  const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
  useEffect(()=>{
axios
.post("https://foodorabackend-production.up.railway.app/user/category" , {
  category:foodCat
}, config)
.then((res)=>{
  console.log(res.data.resultcategory);
//  localStorage.setItem("restid2" , res.data.resultcategory.sellerid);
 setArr(res.data.resultcategory);
})
.catch((err)=>{
  console.log(err);
})
  },[]);
  function createList2(arr) {
    return (
      <Categorycard
        _id={arr._id}
        sellerid={arr.sellerid}
        foodname={arr.foodname}
       food_price={arr.food_price}
       food_desc={arr.food_desc}
       imgpath={arr.imgpath}
      />
    );
  }
return(
    <>
    <Navs2/>
  {/* <CreatecatList/> */}
 <div div id='categoryitem'>
  {arr.map((rest)=>createList2(rest))};
  </div>
    <Contactus/>
    </>
)
}
export default Category;
