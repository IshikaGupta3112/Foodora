import react from "react" ;
import star from '../assets/star.svg';
import clock from '../assets/clock.svg';
import "./restaurantItem.css";
function RestaurantItems(props){
return(
    <>
   {/* <p id="resthead">Restaurants Near You</p> */}
   <div id="rest">
    <img src="" id="myRestpic"/>
    <p id='restname'>{props.name}</p>
    <p id="restprice">{props.price}</p>
    <img src={star} id="stars1" alt="" className='stars'/>
    <img src={star} id="stars2" alt="" className='stars'/>
    <img src={star} id="stars3" alt="" className='stars'/>
    <img src={star} id="stars4" alt="" className='stars'/>
    <img src={star} id="stars5" alt="" className='stars'/>
    <img src={clock} id="clocks" alt="" />
    <p id="times" >{props.time}</p>
   </div>
    </>
);
}
export default RestaurantItems;