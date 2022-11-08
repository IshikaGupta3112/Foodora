import Contactus from '../pages/contactus/contactus';
import Navs2 from '../pages/navss/navs2';
import './restrauntpage.css';
import star from '../assets/star.svg';
// import direction from '../assets/direction.svg';
import share from '../assets/share.svg';
import Restrauntcard from './restrauntcard';
import CreateRestraunt from './createrestraunt';
function RestrauntPage(){
return(
<>
<Navs2 />
<div id="restrauntbox">
<div id="onepic">
</div>
<div id="fourpic">
    <div id="upperline">
 <div id="firstpic"></div>   
 <div id="firstpic"></div>  
 </div>
 <div id="lowerline">
 <div id="firstpic"></div>   
 <div id="firstpic"></div>  
 </div>
</div>
</div>
<div id='nameandrate'>
<p id="restrauntname">Maxfry Burger And Fries</p>
<p id='rating'>3.6 <img src={star} id='ratestar'/></p>
<p id='review'>Reviews</p>
<p id="restrauntitems">Burger, Fastfood, Beverages</p>
<p id="restrauntaddress">AKGEC, CS-IT Block Ground Floor</p>
<p id='open'>Open Now</p>
<p id='opentime'>10:00 am - 11:00 pm</p>
<button id='addreview'>Add Reviews</button>
{/* <img src={direction} id='directionimg' /> */}
<p id='directions'>Directions</p>
<p id='share'>Share <img src={share} id='shareimg' /></p>
<ul id='ul3'>
    <li>Recommended</li>
    <li>Combos</li>
    <li>Burgers</li>
    <li>Drinks</li>
    <li>Beverages</li>
    <li>Desert</li>
</ul>
</div>
<CreateRestraunt />
<Contactus />
</>
);
}
export default RestrauntPage;