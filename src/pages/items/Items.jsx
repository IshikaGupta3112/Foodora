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
import { useNavigate } from "react-router-dom";
import "./Item.css"
function Items(){
    const Navigate = useNavigate();
    function makeCategory1(e){
     console.log(e.target.id);
     localStorage.setItem("foodcategory" , e.target.id);
     Navigate("/category");
    }
    // function makeCategory2(e){
    //     console.log(e.target.id);
    //     localStorage.setItem("foodcategory" , e.target.id);
    //     Navigate("/category");
    //    }
return(
    <>
<div>
   <img src ={lid} alt ="" id="lid"/>
   <p id="items1">All</p>
   </div>
   {/* <div>
   <img src ={cake} alt ="" id="cake"/>
   <p id="items2">Cake</p>
   </div> */}
   <div>
   <img src ={pizza} alt ="" id="pizza" onClick={makeCategory1}/>
   <p id="items3">Pizza</p>
   </div>
   <div>
   <img src ={hamburger} alt ="" id="burger" className="burger2" onClick={makeCategory1}/>
   <p id="items4">Burger</p>
   </div>
   <div>
   <img src ={noodles} alt ="" id="noodles" onClick={makeCategory1}/>
   <p id="items5">Noodles</p>
   </div>
   {/* <div>
   <img src ={soup} alt ="" id="samosa"/>
   <p id="items6">Beverages</p>
   </div> */}
   <div>
   <img src ={samosa} alt ="" id="indian" onClick={makeCategory1}/>
   <p id="items6">Indian</p>
   </div>
   <div>
   <img src ={fastfood} alt ="" id="dessert" onClick={makeCategory1}/>
   <p id="items7">Dessert</p>
   </div>
   <div>
   <img src ={soup} alt ="" id="beverages" onClick={makeCategory1}/>
   <p id="items8">Beverages</p>
   </div>
   {/* <div>
   <img src ={soup} alt ="" id="soup"/>
   <p id="items9">Soup</p>
   </div> */}
   </>
);
}
export default Items;