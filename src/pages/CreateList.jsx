import react from "react";
import FoodList from "/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/pages/FoodList.js";
import FoodList2 from "/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/pages/FoodList2.js";
import Food from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/pages/foods/food.jsx'
import "/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/pages/foods/food.css"
function CreateList() {
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
      {FoodList.map(createList)};
   </div>
    <div id="foodItems2">
    {FoodList2.map(createList2)};
 </div>
 </>
  );
}

export default CreateList;
