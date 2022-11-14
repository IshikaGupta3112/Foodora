import Navs2 from "../../pages/navss/navs2";
import {useEffect , useState} from 'react';
import axios from "axios";
import Ordercard from "./ordercard";
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
const [num,setNum] = useState();
const[nestedarr , setNestedArray] =useState([]);
// let nestedarr=[];
    useEffect(()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/user/userprofile" , {
        _id:userid
    } , config)
    .then((res) => {
        console.log(res.data.orderhistory.length);
        console.log(res.data.orderhistory);
        console.log(res.data.orderhistory.length);
        setArr(res.data.orderhistory);
        setNum(res.data.orderhistory.length);
          })
    .catch((err) => {
        console.log(err);
      });
    },[])
    console.log(arr);  
    console.log(num); 
    for(i=0;i<num;i++){
      for(j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
        // setNestedArray(arr[i][j]);
        // nestedarr=arr[i][j].map(obj=>obj.foodname);
      }
    }
    console.log(nestedarr);
    // titles=res.data.near.map(obj=>obj.imgpath[0]);
    // console.log(titles);
    // console.log(nestedarr) ;
// let k=0;
// const [nestedArr, setNestedArray] = useState([])
//     function arrayNest(arr) {
//       console.log(arr);
//         setNestedArray(localArr=>[...localArr,arr])
//         console.log(nestedArr)
//       }
    
// arrayNest(arr)
function createOrder(){
  return(
    <Ordercard
          foodname={arr.foodname}
          food_price={arr.food_price}
          quantity={arr.quantity}
        />
  )
}
    return(<>
    <Navs2 />
    {/* {arr.map(arrayNe/st)} */}
    <div id='padder2'>
    {arr.map(createOrder)};
    </div>
    </>);
    }
    export default Orderhistory;