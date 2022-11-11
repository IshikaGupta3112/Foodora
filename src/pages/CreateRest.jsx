import react from "react";
import RestaurantList from "./RestaurantList";
import "./items/Item.css"
import RestaurantItems from "../restarantItem/restaurantItem";
import { useState } from "react";
function CreateRest() {
  const[i , setI]=useState(0);
  const[j , setJ]=useState(3);
  const [restarr , setRestarr] =useState([]);
  function increase(){
    setI(i+3);
    setJ(j+3);
  }
  function decrease(){
  if(i>0&&j>3){
    setI(i-3);
    setJ(j-3);
  }
  }
  function createRest(RestaurantList) {
    return (
      <RestaurantItems
        key={RestaurantList.id}
        name={RestaurantList.name}
        img={RestaurantList.img}
        time={RestaurantList.time}
        price={RestaurantList.price}
      />
    );
  }
  return (
    <>
    <div id="restlist">
      <button onClick={decrease} disabled={(i==0) ? true : false} id='prevbtn'>&larr;</button>
      {restarr.slice(i , j).map(createRest)};
      <button onClick={increase} disabled={(i==6) ? true : false} id='forwardbtn'>&rarr;</button>
     
   </div>
 </>
  );
}

export default CreateRest;
