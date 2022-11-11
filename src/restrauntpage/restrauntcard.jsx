import './restrauntpage.css'
import star from '../assets/star.svg';
function Restrauntcard(props){
    var url="https://foodorabackend-production.up.railway.app/";
    return(<>
    <div id='restrauntcarditem'>
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
        <p id='greenprice'>{props.food_price}</p>
        {/* <p id='whiteprice'>{props.actPrice}</p> */}
        </div>  
        <p id='carddes'>{props.food_desc}</p>
        <button id='restrauntadd'>Add To Cart</button>
    </div>
</div>
    </>);
}
export default Restrauntcard;