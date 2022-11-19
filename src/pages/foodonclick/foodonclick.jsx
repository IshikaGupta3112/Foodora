import axios from 'axios';
import { useEffect ,useState} from 'react';
import Navs from '../../components/navs';
import Contactus from '../contactus/contactus';
import Navs2 from '../navss/navs2';
import './foodonclick.css';
function FoodPage(){
  var url="https://foodorabackend-production.up.railway.app/";
    var userid=localStorage.getItem("userid");
    console.log(userid);
    var foodid=localStorage.getItem("foodid");
    var restid=localStorage.getItem("restid");
    var foodname=localStorage.getItem("jugaad");
    const [data , setData] = useState([]);
    const [count , setCount] = useState(-1);
    const [success, setSuccess] = useState(false);
    const [foodname2 , setFoodname2] = useState("");
    console.log( foodid);
    console.log( restid);
    var accesstoken = localStorage.getItem("accesstoken");
    const config ={
      headers:{
        Authorization:`Bearer ${accesstoken}`,
      }
    }
    useEffect(()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/user/fooddetails" , {
      food_id:foodid,
      seller_id:restid  
    } , config)
    .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log(data);
        console.log(res.data.foodname);
        localStorage.setItem("jugaad" , res.data.foodname);
        // setFoodname(res.data.foodname);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(foodname);
    //   const sendPostRequest = async () => {
    //     try {
    //         const resp = await axios.post('https://foodorabackend-production.up.railway.app/user/fooditemcount', {
    //             foodname:foodname , 
    //                 user_id:userid,
    //                 seller_id:restid
    //         } , config);
    //         console.log(resp.data);
    //         setCount(resp.data.count);
    //             console.log(count);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };   
    // sendPostRequest();
        axios
        .post("https://foodorabackend-production.up.railway.app/user/fooditemcount" , {
            foodname:foodname , 
            user_id:userid ,
            seller_id:restid
        },config)
        .then((res) => {
            console.log(res.data);
            setCount(res.data.count);
            console.log(count);
          })
          .catch((err) => {
            console.log(err);
          });
    },[])
    function increase(){
    setCount(count+1);
    axios
    .post("https://foodorabackend-production.up.railway.app/user/addtocart" , {
        seller_id:restid,
        food_id:foodid,
        user_id:userid
    } , config)
     .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });

          // axios
          // .post("https://foodorabackend-production.up.railway.app/user/fooditemcount" , {
          //     foodname:foodname , 
          //     user_id:userid,
          //     seller_id:restid
          // } , config)
          // .then((res) => {
          //     console.log(res.data);
          //     setCount(res.data.count);
          //     console.log(count);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
    }
    function decrease(){
        if(count>0)
        setCount(count-1);
        axios
    .post("https://foodorabackend-production.up.railway.app/user/removefromcart" , {
        seller_id:restid,
        food_id:foodid,
        user_id:userid
    } , config)
     .then((res) => {
            console.log(res.data);
            // setCount(res.data.count);
            // console.log(count);
          })
          .catch((err) => {
            console.log(err);
          });

          // axios
          // .post("https://foodorabackend-production.up.railway.app/user/fooditemcount" , {
          //     foodname:foodname , 
          //     user_id:userid , 
          //     seller_id:restid
          // },config)
          // .then((res) => {
          //     console.log(res.data);
          //     setCount(res.data.count);
          //     console.log(count);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        }

return (
    <>
    <Navs2 />
<div id='foodpagediv'>
<img src={url+data.foodimg}id='foodrestpic'></img>
{console.log(data)}
<p id='foodrestname'>{data.foodname}</p>
<p id='foodrestprice'>{"Rs." + data.foodprice}</p>
<p id='foodrestdesc'>{data.fooddesc}</p>
</div>
{(count==0)?<button id='addtocart' onClick={increase}>Add to cart</button>:<div id='quantity2'><button id='minus2'onClick={decrease}>-</button>{count} <button id='plus2'onClick={increase}>+</button></div>}
    <Contactus/>
    </>
);
}
export default FoodPage;