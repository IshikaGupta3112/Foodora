import Restrauntcard from '../../sellerauth/sellerprofile/sellerprofilefoodcard';
import Navs2 from './navs2';
import { useState , useEffect } from 'react';
import axios from 'axios';
import './searchpage.css'
import Loader from '../../Loader';
import RestaurantItems from '../../restarantItem/restaurantItem';
function SearchPage(){
    const [restarr , setRestarr] =useState([]);
    const [loading , setLoading] =useState(false);
    const [num , setNum] =useState();
    function createRest(restarr) {
        return (
          <RestaurantItems
            _id={restarr._id}
            restaurantname={restarr.restaurantname}
            imgpath={restarr.imgpath[0]}
            // restaurantaddress={restarr.restaurantaddress}
          />
        );
        }
      const [search , setsearch]=useState("");
      var accesstoken=localStorage.getItem("accesstoken");
      const config ={
          headers:{
            Authorization:`Bearer ${accesstoken}`,
          }
        }
      function handleSearch(e){
          setsearch(e.target.value);
          setLoading(true);
          axios
          .post("https://foodorabackend-production.up.railway.app/user/search",{
              text:e.target.value
          } , config)
          .then((res) => {
              console.log(res.data);
              setLoading(false);
              setRestarr(res.data);
              console.log(res.data.length);
              setNum(res.data.length);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
      }
    return(
     
    <>
     <div id='searchinp'>
    <input type='text' 
    id='searchfeild'
    onChange={handleSearch} 
    placeholder="Search here"
    value={search}></input>
    
    </div>
     {loading?<Loader/>:(
      <>
   
    
     <div id='searcharr'>
      {(num==0)?<p id='cartpar2'>No matches</p>:restarr.map((rest)=>createRest(rest))}
      {/* {restarr.map((rest)=>createRest(rest))}; */}
      </div>
      </>
      )};
      {/* {img.map(createRest)}; */}
      {/* <button onClick={increase} disabled={(j==(n)) ? true : false} id='forwardbtn'>&rarr;</button> */}
    </>);

// return(<div id='ishika'>Hello</div>);
}
export default SearchPage;