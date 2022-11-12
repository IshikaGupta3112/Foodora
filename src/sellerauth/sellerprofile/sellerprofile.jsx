import react,{useEffect , useState} from 'react';
import './sellerprofile.css';
import axios from 'axios';
import Navs from '../../components/navs';
import Contactus from '../../pages/contactus/contactus';
import Navbar from '../../components/Navbar';
import Navs2 from '../../pages/navss/navs2';
import SellerNav from '../sellernav';
import Restrauntcard from './sellerprofilefoodcard';
import { Link } from 'react-router-dom';
function SellerProfile(){
var sellerid=localStorage.getItem('sellerid');
const [food , setFood]=useState([]);
const [imgpath, setimgpath] = useState([]);
const [sellerRestarr , setSellerRestarr]=useState([]);
var url="https://foodorabackend-production.up.railway.app/";
console.log(sellerid);    
useEffect(()=>{
axios
.post("https://foodorabackend-production.up.railway.app/seller/sellerprofile" , {
_id:sellerid,
})
.then((res) => {
    console.log(res);
    console.log(res.data.sellerDetails);
    setSellerRestarr(res.data.sellerDetails);
    console.log(res.data.sellerDetails.food_list);
    setFood(res.data.sellerDetails.food_list);
    console.log(res.data.sellerDetails.imgpath);
    setimgpath(res.data.sellerDetails.imgpath);
  })
  .catch((err) => {
    console.log(err);
  });
},[])
function createRest(food) {
  return (
    <Restrauntcard
      _id={food._id}
      foodname={food.foodname}
      food_price={food.food_price}
      food_desc={food.food_desc}
      imgpath={food.imgpath}
    />
  );
} 
return(<>
<SellerNav/>
<div id='sellerrest'>
    <div id='sellerRestname'>{sellerRestarr.restaurantname}</div>
    <img src={url+imgpath[0]} id='sellerrestpic'></img>
    <p id='sellerRestname'>{sellerRestarr.restaurantaddress}</p>
    <p id='sellerRestname'>{sellerRestarr.restaurant_openingtime} to {sellerRestarr.restaurant_closingtime}</p>
</div>
{food.map((rest)=>createRest(rest))};
<Link to='/foodadd'><button id='sellerRestbtn'>Add foodItems</button></Link>
<Contactus />
</>);
}
export default SellerProfile;