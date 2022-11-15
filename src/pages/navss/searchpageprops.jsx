import react, { useEffect } from "react" ;
import star from '../assets/star.svg';
import clock from '../assets/clock.svg';
import {useNavigate} from 'react-router-dom';
import "./restaurantItem.css";
function RestaurantItems(props){
    var Navigate = useNavigate();
    // var url="https://foodorabackend-production.up.railway.app/";
    useEffect(()=>{
        console.log(props);
    },[])
    function Restroclicked(e){
        console.log(e.target.id);
        localStorage.setItem("restid" , e.currentTarget.id);
        Navigate("/restrauntpage");
    }
return(
    <>
   <div className="rest"  id={props._id} onClick={Restroclicked}>
    <img src={url + props.imgpath} id="myRestpic"/>
    <p id='restname'>{props.restaurantname}</p>
    {/* <p id="restprice">{props.restaurantaddress}</p> */}
   </div>
    </>
);
}
export default RestaurantItems;