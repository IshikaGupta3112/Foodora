import './restrauntpage.css'
import {useEffect} from 'react';
import star from '../assets/star.svg';
import {useNavigate} from 'react-router-dom';
function Restrauntcard(props){
    const Navigate = useNavigate();
    var url="https://foodorabackend-production.up.railway.app/";
    useEffect(()=>{
    console.log(props);
    },[])
    function Foodclicked(e){
        console.log(e.target.id);
        localStorage.setItem("foodid" , e.currentTarget.id);
        Navigate("/foodpage");
    }
    return(<>
    <div className='restrauntcarditem' id={props._id} onClick={Foodclicked}>
<img src={url+props.imgpath} id='restrauntcardimg'>
    </img>   
    <div id='restrauntcarddetails'>
    <p id='restrauntcardname'>{props.foodname}</p> 
    <div id='starsimg'>
        {/* <img src={star} id='starsimg2'></img> */}
        {/* <img src={star} id='starsimg1'></img> */}
        {/* <img src={star} id='starsimg1'></img> */}
        {/* <img src={star} id='starsimg1'></img> */}
        {/* <img src={star} id='starsimg1'></img> */}
        </div>
      <div id='cardprices'>
        <p id='greenprice'>{"Rs." + props.food_price}</p>
        {/* <p id='whiteprice'>{props.actPrice}</p> */}
        </div>  
        <p id='carddes'>{props.food_desc}</p>
        {/* <button id='restrauntadd'>Add To Cart</button> */}
    </div>
</div>
    </>);
}
export default Restrauntcard;