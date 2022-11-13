import Navs2 from "../../pages/navss/navs2";
import {useEffect , useState} from 'react';
import axios from "axios";
function Orderhistory(){
    const [n , setN] = useState("");
    var i , j;
    var userid=localStorage.getItem("userid");
    var accesstoken = localStorage.getItem("accesstoken");
    console.log(accesstoken);
    console.log(userid);
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
    const [arr , setArr] = useState([]);
    useEffect(()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/user/userprofile" , {
        _id:userid
    } , config)
    .then((res) => {
        console.log(res.data.orderhistory.length);
        console.log(res.data.orderhistory);
        setN(res.data.orderhistory.length);
        console.log(n);
//         titles=res.data.near.map(obj=>obj.imgpath[0]);
//   console.log(titles);
        arr = res.data.orderhistory.map(obj=>obj[0])
        console.log(arr);
        console.log(res.data.orderhistory[0][0].foodname);
        setArr(res.data.orderhistory[0][0]);
      })
      .catch((err) => {
        console.log(err);
      });
  
    },[])
   
    return(<>
    <Navs2 />
    <div id='orderhistory'>   
    <p>Foodname:{arr.foodname}</p>
    <p>Foodprice:{arr.food_price}</p>
    <p>Quantity:{arr.quantity}</p>
    </div>
    </>);
    }
    export default Orderhistory;