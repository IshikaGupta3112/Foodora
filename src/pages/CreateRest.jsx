import react from "react";
import RestaurantList from "./RestaurantList";
import "/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/restarantItem/restaurantItem.css"
import RestaurantItems from "../restarantItem/restaurantItem";
function CreateRest() {
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
      {RestaurantList.map(createRest)};
   </div>
 </>
  );
}

export default CreateRest;
