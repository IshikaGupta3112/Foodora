import react , {useEffect , useState} from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navs2 from '../navss/navs2.jsx';
import Item from "../items/Items.jsx";
import Restaurant from '../restaurants/restaurants.jsx';
import RestaurantItems from '../../restarantItem/restaurantItem';
import CreateList from '../CreateList';
import CreateRest from '../CreateRest';
import burger from '../../assets/burger.svg';
import Contactus from '../contactus/contactus';
import RestaurantList from '../RestaurantList';
import Loader from '../../Loader';
var n;
function Home(){
  const[imgarr  , setimgarr] = useState([]);
    const Navigate = useNavigate();
    var id= localStorage.getItem("userid");
    const [locations , setlocations] = useState();
    const [loading , setloading] = useState(false);
  function handlelocations(e){
    setlocations(e.target.value);
  }
  function handlesubmit(e){
    e.preventDefault();
  }
  let titles=[];
    // const [lat, setLat] = useState(null);
// const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);
var lat=28.6753258;
var lng=77.5028385;
useEffect(() => {
// const getLocation = () => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation is not supported by your browser');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition((position) => {
//         setStatus(null);
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
      
//       }, () => {
//         setStatus('Unable to retrieve your location');
//       });
//     }
//   }
  var userid = localStorage.getItem("userid");
  var accesstoken = localStorage.getItem("accesstoken");
  const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
 
//     if(lat&&lng){
//       setloading(true);
//       axios
//       .post("https://foodorabackend-production.up.railway.app/user/location",{
//           latitude:lat , 
//           longitude:lng , 
//           user_id:userid
//       },config)
//       .then((res) => {
//         setloading(false);
//           console.log(res);
//           Navigate("/home");
//         })
//         .catch((err) => {
//           setloading(false);
//           console.log(err);
//         });
//       console.log(id);
//       }
console.log("lat:"+lat);
  console.log("lng:"+lng);
  setloading(true);
  axios
            .post("https://foodorabackend-production.up.railway.app/user/location",{
                latitude:lat , 
                longitude:lng , 
                user_id:id
            }, config)
            .then((res) => {
                console.log(res);
                console.log(res.data.address);
                localStorage.setItem("useraddress" , res.data.address);
                setloading(false);
              })
              .catch((err) => {
                console.log(err);
                setloading(false);
              });   
axios
.get("https://foodorabackend-production.up.railway.app/user/feed/" ,config)
.then((res) => {
  console.log(res);
  console.log(res.data);
  setloading(false);
  // console.log(res.data.near.restaurantname);
  setRestarr(res.data.near);
  console.log(restarr);
  console.log(res.data.near.length);
  n=(res.data.near.length);
  titles=res.data.near.map(obj=>obj.imgpath[0]);
  console.log(titles);
  // setRestarr(oldArr=>[...oldArr,titles]);
  // res.data.near.map((item)=>{
  //   imgarr.push(item.imgpath[0]);
  //   setimg(item.imgpath[0]);  
  // })
})
.catch((err) => {
  setloading(false);
  console.log(err);
})
  } , [])
    const[i , setI]=useState(0);
    const[j , setJ]=useState(3);
    const [restarr , setRestarr] =useState([]);
    const [img , setimg] = useState([]);
    function increase(){
      setI(i+1);
      setJ(j+1);
    }
    function decrease(){
    if(i>0&&j>3){
      setI(i-1);
      setJ(j-1);
    }
    }
    function createRest(restarr) {
      // var url="https://foodorabackend-production.up.railway.app/";
      // console.log(restarr,i)
      return (
        <RestaurantItems
          _id={restarr._id}
          restaurantname={restarr.restaurantname}
          imgpath={restarr.imgpath[0]}
          restaurantaddress={restarr.restaurantaddress}
        />
      );
      }
      // function createRestImg(img){
      //   return <RestaurantItems imgpath={img} />
      // }
return(
  <div>
   <Navs2 />
   <div id="overflow">
   <div id="circle1"></div>
   <div id="rect"></div>
   <div id="circle2"></div>
   <img src={burger} alt="burger" id="burgerr"/>
   <p id="get">GET DELICIOUS FOOD<br />AT YOUR DOORSTEPS</p>
   <p id="text">Your hunger companion.When you crave for midnight delicacy, just dial our number.Speedy and quicker delivery with us. We promise to deliver on time.We deliver food and only good food.</p>
   <span id="orderbtn">Order Now</span>
   </div>
   <Item />
   <Restaurant />
   {/* <CreateList /> */}
   <p id="resthead">Restaurants Near You</p>
   <div id="restlist">
      <button onClick={decrease} disabled={(i==0) ? true : false} id='prevbtn'>&larr;</button>
      {restarr.slice(i , j).map((rest)=>createRest(rest))};
      {/* {img.map(createRest)}; */}
      <button onClick={increase} disabled={(j==(n)) ? true : false} id='forwardbtn'>&rarr;</button>
  </div>
   <div id="contact1">
   <Contactus />
   </div>
  </div>
);
}
export default Home;