import star from '../assets/star.svg'
import clock from '../assets/clock.svg'
import './category.css';
function Categorycard(props){
return(<>
{/* <div id='categoryshow'> */}
<div id='categorybox'> 
<div id='categoryimg'>
</div>
<div id='firstline1'>
    <p id='categoryname'>{props.name}</p>
    <button id='add'>ADD</button>
    </div>
<p id='categorycompany'>{props.company}</p>
<div id='pricess'>
    <p id='categoryprice'>{props.price}</p>
    <p id='categoryactprice'>{props.actPrice}</p>
</div>
<div id='starsclock'>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={clock} id='clocked'></img>
    <p id='timed'>{props.time}</p>
</div>
</div>
{/* </div> */}
</>
);
}
export default Categorycard;