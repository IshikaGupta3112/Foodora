import react from "react" ;
import star from '../../assets/star.svg';
import clock from '../../assets/clock.svg';
import "./food.css";
function Food(props){
return(
    <>
   <div id="food">
    <img src={props.img} id="mypic"/>
    <p id='foodname'>{props.name}</p>
    <p id="price">{props.price}</p>
    <p id="actual">{props.actPrice}</p>
    <img src={star} id="star1" alt="" className='star'/>
    <img src={star} id="star2" alt="" className='star'/>
    <img src={star} id="star3" alt="" className='star'/>
    <img src={star} id="star4" alt="" className='star'/>
    <img src={star} id="star5" alt="" className='star'/>
    <img src={clock} id="clock" alt="" />
    <p id="time" >{props.time}</p>
   </div>
    </>
);
}
export default Food;