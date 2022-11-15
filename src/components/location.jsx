import react ,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Navs2 from '../pages/navss/navs2';
import { useNavigate } from 'react-router-dom';
import location from '../assets/location.jpg';
import axios from 'axios';
import Navs from './navs';
import Navs3 from './navs2';
import Loader from '../Loader';
function Location(){
    const Navigate = useNavigate();
    var id= localStorage.getItem("userid");
    console.log(id);
    const [locations , setlocations] = useState();
    const [loading , setloading] = useState(false);
  function handlelocations(e){
    setlocations(e.target.value);
  }
  function handlesubmit(e){
    e.preventDefault();
//    localStorage.setItem('location' , )
  }
  var accesstoken = localStorage.getItem("accesstoken");
  const config ={
    headers:{
      Authorization:`Bearer ${accesstoken}`,
    }
  }
    const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);
const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        if(lat&&lng){
          console.log(id);
          setloading(true);
          axios
          .post("https://foodorabackend-production.up.railway.app/user/location",{
              latitude:lat , 
              longitude:lng , 
              user_id:id
          }, config)
          .then((res) => {
              console.log(res);
              setloading(false);
              Navigate("/home");
              
              // setMssg1(res.data.msg);
            })
            .catch((err) => {
              console.log(err);
              setloading(false);
              // setMssg1(err.response.data.msg);
            });
          }
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
   
  }

  console.log("latitude:"+lat);
  console.log("longitude:"+lng);
 
return(<>
<Navs3 />
{loading?<Loader/>:(
<div id="fulllog">
<img src={location} id='loginpageimg'></img>
<div id='loginpageform'>
<h1 id="sellerloginhead">Location</h1>
    {/* <form id='sellerloginform' 
    onSubmit={handlesubmit}
    >
        <input type='text' 
        placeholder='Enter Manually'
        name='location'
        onchange={handlelocations}
        value={locations}
        ></input> 
        <button type='submit'id='donebtn'>Done</button>
        <p id='locateor'>Or</p>
    </form> */}
    <button 
onClick={getLocation}
id='locatemebtn'
>LocateMe</button>   
{/* <p id='sellerfrg'>{status}</p> */}
  {/* {lat && <p id='locstatus'>Latitude: {lat}</p>}  */}
  {/* {lng && <p id='locstatus'>Longitude: {lng}</p>}  */}
</div>
</div>)}
</>);
}
export default Location;