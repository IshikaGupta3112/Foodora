import react from "react";
import FoodList from "./FoodList";
import FoodList2 from "./FoodList2";
import Food from '../pages/foods/food.jsx'
import "../pages/foods/food.css"
import { useState } from "react";
function CreateList() {
  const [i , setI] =useState(0);
  const [j , setJ] =useState(5);
  function createList(FoodList) {
    return (
      <Food
        key={FoodList.id}
        name={FoodList.name}
        img={FoodList.img}
        time={FoodList.time}
        price={FoodList.price}
        actPrice={FoodList.actPrice}
      />
    );
  }
  function createList2(FoodList2) {
    return (
      <Food
        key={FoodList2.id}
        name={FoodList2.name}
        img={FoodList2.img}
        time={FoodList2.time}
        price={FoodList2.price}
        actPrice={FoodList2.actPrice}
      />
    );
  }
  return (
    <>
    <div id="foodItems">
      {FoodList.slice(i,j).map(createList)};
   </div>
    <div id="foodItems2">
    {FoodList2.map(createList2)};
 </div>
 </>
  );
}

export default CreateList;
