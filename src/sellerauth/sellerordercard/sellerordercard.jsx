import axios from 'axios';
import './sellerordercard.css'
import { useNavigate } from 'react-router-dom';
function SellerOrdercard(props){
    var accesstoken = localStorage.getItem("accesstoken2");
const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}
const Navigate = useNavigate();
    function handleorder(e){
console.log(e.target.id);
localStorage.setItem("orderid1" , e.target.id);
Navigate("/sellerordershow");
    }
    function handleaccept(e){
        console.log(e.target.id);
        localStorage.setItem("orderid1" , e.target.id)
        var id = localStorage.getItem("orderid1");
        axios
        .post("https://foodorabackend-production.up.railway.app/seller/setorderstatus" , {
            orderid:id,
            status:"Accepted"
        },config)
        .then((res)=>{
            console.log(res);})
            .catch((err)=>{
                console.log(err);
            })
        }
    function handlereject(e){
        console.log(e.target.id);
        localStorage.setItem("orderid1" , e.target.id)
        var id = localStorage.getItem("orderid1");
        axios
        .post("https://foodorabackend-production.up.railway.app/seller/setorderstatus" , {
            orderid:id,
            status:"Rejected"
        },config)
        .then((res)=>{
            console.log(res);})
            .catch((err)=>{
                console.log(err);
            })
    }
    return (
        <>
          <div id="padder3">
            <div className="contentcenter" id={props._id} onClick={handleorder}>
                <div id="firstline">
                  <p id="myname2">Status : {props.status}</p>
                </div>
                    <button className='accept' id={props._id} onClick={handleaccept}>Accept</button>
                    <button className='reject'id={props._id} onClick={handlereject}>Reject</button>
                  {/* <p id="myadd">Order No. : {props.no}</p> */}
                {/* <p id="myno">Quantity :</p> */}
              </div>
            </div>
        </>
      );
}
export default SellerOrdercard;
