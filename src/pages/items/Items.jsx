import react from "react";
import lid from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/lid.svg';
import cake from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/cake.svg';
import "./Item.css"
function Items(){
return(
    // <h1 id="iteme">hello</h1>
<div id="items">
<div>
   <img src ={lid} alt ="" id="lid"/>
   <p id="items1">All</p>
   </div>
   <div>
   <img src ={cake} alt ="" id="cake"/>
   <p id="items2">Cake</p>
   </div>
</div>
);
}
export default Items;