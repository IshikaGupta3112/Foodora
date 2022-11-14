import Contactus from '../../pages/contactus/contactus';
import Navs2 from '../../pages/navss/navs2';
import profileimg from '../../assets/profileimg.png'
import './userprofile.css';
import { useEffect , useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function UserProfile(){
    var userid=localStorage.getItem("userid");
    var accesstoken = localStorage.getItem("accesstoken");
    console.log(accesstoken);
    const [arr , setArr] = useState([]);
    const [prof , setProf] = useState([]);
    const fd= new FormData;
    console.log(userid);
    useEffect(()=>{
    axios
    .post("https://foodorabackend-production.up.railway.app/user/userprofile" , {
        _id:userid
    } , config)
    .then((res) => {
        console.log(res.data);
        setArr(res.data);
        console.log(res.data.imagepath);
        localStorage.setItem("imagepath" , res.data.imagepath);
      })
      .catch((err) => {
        console.log(err);
      });
  
    },[])
    function handlefiles(e){
        console.log(e.target.files);
        setProf(e.target.files[0]);
    }
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
      }
    function handlesubmit(e){
        e.preventDefault();
     fd.append('image' , prof);
     console.log(accesstoken);
     console.log(fd);
     axios 
     .post("https://foodorabackend-production.up.railway.app/user/profileimage" , 
        fd,config
        )
        .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    }
return(
<>
<Navs2/>
<div id='fulllog'>
<img src={profileimg} id="loginpageimg"></img>
<div id="loginpageform">
<h1 id="sellerloginhead">Profile</h1> 
<div id='spacing'>
<p id='userprofname'>UserName : {arr.username}</p>  
<p id='userprofname'>Email : {arr.emailid}</p>  
<form id='sellerloginform2' onSubmit={handlesubmit}>
    <input type='file' onChange={handlefiles} name='image'></input>
    <button type='submit' id='profilephoto' >Upload</button>
</form>
<p id='userprofname2'><Link to='/orderhistory' >View order history</Link></p>
</div>
    </div>
</div>
    </>
);
}
export default UserProfile;