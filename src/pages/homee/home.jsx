import react from 'react';
import './home.css';
import Navs2 from '../navss/navs2.jsx';
import Item from "../items/Items.jsx";
import Restaurant from '../restaurants/restaurants.jsx';
import CreateList from '../CreateList';
import CreateRest from '../CreateRest';
import burger from '../../assets/burger.svg';
import Contactus from '../contactus/contactus';
function Home(){
return(
  <div>
   <Navs2 />
   <div id="overflow">
   <div id="circle1"></div>
   <div id="rect"></div>
   <div id="circle2"></div>
   <img src={burger} alt="burger" id="burger"/>
   <p id="get">GET DELICIOUS FOOD<br />AT YOUR DOORSTEPS</p>
   <p id="text">Your hunger companion.When you crave for midnight delicacy, just dial our number.Speedy and quicker delivery with us. We promise to deliver on time.We deliver food and only good food.</p>
   <span id="orderbtn">Order Now</span>
   </div>
   <Item />
   <Restaurant />
   <CreateList />
   <p id="resthead">Restaurants Near You</p>
   <CreateRest />
   <div id="contact1">
   <Contactus />
   </div>
  </div>
);
}
export default Home;