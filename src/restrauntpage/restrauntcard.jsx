import './restrauntpage.css'
import star from '../assets/star.svg';
function Restrauntcard(props){
    return(<>
    <div id='restrauntcarditem'>
<div id='restrauntcardimg'>
    </div>   
    <div id='restrauntcarddetails'>
    <p id='restrauntcardname'>{props.name}</p> 
    <div id='starsimg'>
        <img src={star} id='starsimg2'></img>
        <img src={star} id='starsimg1'></img>
        <img src={star} id='starsimg1'></img>
        <img src={star} id='starsimg1'></img>
        <img src={star} id='starsimg1'></img>
        </div>
      <div id='cardprices'>
        <p id='greenprice'>{props.price}</p>
        <p id='whiteprice'>{props.actPrice}</p>
        </div>  
        <p id='carddes'>{props.detail}</p>
        <button id='restrauntadd'>Add To Cart</button>
    </div>
</div>
    </>);
}
export default Restrauntcard;