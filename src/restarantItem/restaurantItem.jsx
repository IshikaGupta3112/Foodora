import react, { useEffect } from "react" ;
import star from '../assets/star.svg';
import clock from '../assets/clock.svg';
import {useNavigate} from 'react-router-dom';
import "./restaurantItem.css";
function RestaurantItems(props){
    var Navigate = useNavigate();
    var url="https://foodorabackend-production.up.railway.app/";
    useEffect(()=>{
        console.log(props);
    },[])
    function Restroclicked(e){
        console.log(e.target.id);
        localStorage.setItem("restid" , e.currentTarget.id);
        Navigate("/restrauntpage");
        // localStorage.setItem("restid" , e.target.id);
    }
return(
    <>
   {/* <p id="resthead">Restaurants Near You</p> */}
   <div className="rest"  id={props._id} onClick={Restroclicked}>
    <img src={url + props.imgpath} id="myRestpic"/>
    <p id='restname'>{props.restaurantname}</p>
    <p id="restprice">{props.restaurantaddress}</p>
    {/* <img src={star} id="stars1" alt="" className='stars'/> */}
    {/* <img src={star} id="stars2" alt="" className='stars'/> */}
    {/* <img src={star} id="stars3" alt="" className='stars'/> */}
    {/* <img src={star} id="stars4" alt="" className='stars'/> */}
    {/* <img src={star} id="stars5" alt="" className='stars'/> */}
    {/* <img src={clock} id="clocks" alt="" /> */}
    {/* <p id="times" >{props.time}</p> */}
   </div>
    </>
);
}
export default RestaurantItems;