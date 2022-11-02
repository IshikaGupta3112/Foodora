import react from 'react';
import './home.css';
import Navs2 from '../navss/navs2.jsx';
import burger from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/burger.svg';
import lid from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/lid.svg';
import cake from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/cake.svg';
import pizza from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/pizza.svg';
import hamburger from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/hamburger.svg';
import noodles from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/noodles.svg';
function Home(){
return(
  <div>
   <Navs2 />
   <div id="circle1"></div>
   <div id="rect"></div>
   <div id="circle2"></div>
   <img src={burger} alt="burger" id="burger"/>
   <p id="get">GET DELICIOUS FOOD<br />AT YOUR DOORSTEPS</p>
   <p id="text">Your hunger companion.When you crave for midnight delicacy, just dial our number.Speedy and quicker delivery with us. We promise to deliver on time.We deliver food and only good food.</p>
   <span id="orderbtn">Order Now</span>
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
  </div>
);
}
export default Home;