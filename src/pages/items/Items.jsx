import react from "react";
import lid from '../../assets/lid.svg';
import cake from '../../assets/cake.svg';
import pizza from '../../assets/pizza.svg';
import hamburger from '../../assets/hamburger.svg';
import noodles from '../../assets/noodles.svg';
import samosa from '../../assets/samosa.svg';
import fish from '../../assets/fish.svg';
import fastfood from '../../assets/fastfood.svg';
import soup from '../../assets/soup.svg';
import "./Item.css"
function Items(){
return(
    <>
<div>
   <img src ={lid} alt ="" id="lid"/>
   <p id="items1">All</p>
   </div>
   <div>
   <img src ={cake} alt ="" id="cake"/>
   <p id="items2">Cake</p>
   </div>
   <div>
   <img src ={pizza} alt ="" id="pizza"/>
   <p id="items3">Pizza</p>
   </div>
   <div>
   <img src ={hamburger} alt ="" id="hamburger"/>
   <p id="items4">Burger</p>
   </div>
   <div>
   <img src ={noodles} alt ="" id="noodles"/>
   <p id="items5">Noodles</p>
   </div>
   <div>
   <img src ={samosa} alt ="" id="samosa"/>
   <p id="items6">Samosa</p>
   </div>
   <div>
   <img src ={samosa} alt ="" id="samosa"/>
   <p id="items6">Samosa</p>
   </div>
   <div>
   <img src ={fish} alt ="" id="fish"/>
   <p id="items7">Fish</p>
   </div>
   <div>
   <img src ={fastfood} alt ="" id="fastfood"/>
   <p id="items8">FastFood</p>
   </div>
   <div>
   <img src ={soup} alt ="" id="soup"/>
   <p id="items9">Soup</p>
   </div>
   </>
);
}
export default Items;