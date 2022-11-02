import react from 'react';
import './home.css';
import Navs2 from '../navss/navs2.jsx';
import burger from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/burger.svg';
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
  </div>
);
}
export default Home;