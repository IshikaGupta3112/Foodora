import star from '../assets/star.svg'
import clock from '../assets/clock.svg'
import { useNavigate } from 'react-router-dom';
import './category.css';
function Categorycard(props){
    const Navigate = useNavigate();
    var url="https://foodorabackend-production.up.railway.app/";
    function handlecategory(e){
    console.log(e.target.id);
    console.log(e.target.className);
    localStorage.setItem("foodid" , e.target.id);
    localStorage.setItem("restid" , e.target.className);
    Navigate("/foodpage");
    }
return(<>
<div id='categoryshow'>
<div 
// className='categorybox' 
className={props.sellerid}
id={props._id}  onClick={handlecategory}> 
<img src={url+props.imgpath} id='categoryimg'>
</img>
<div id='firstline1'>
    <p id='categoryname'>{props.foodname}</p>
    {/* <button id='add'>ADD</button> */}
    </div>
<p id='categorycompany'>{props.food_desc}</p>
{/* <div id='pricess'> */}
    <p id='categoryprice'>{"Rs. " + props.food_price}</p>
    {/* <p id='categoryactprice'>{props.actPrice}</p> */}
{/* </div> */}
{/* <div id='starsclock'>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={star} id='stared1'></img>
    <img src={clock} id='clocked'></img>
    <p id='timed'>{props.time}</p>
</div> */}
</div>
</div>
</>
);
}
export default Categorycard;