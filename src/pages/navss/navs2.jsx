import react , {useState} from 'react';
import './navs2.css';
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import search from '../../assets/search.svg'
import {Link} from 'react-router-dom';
import axios from 'axios';
function Navs2(){
    const [search , setsearch]=useState("");
    function handleSearch(e){
        setsearch(e.target.value);
        // console.log(search);
        axios
        .post("https://foodorabackend-production.up.railway.app/user/search",{
            text:e.target.value
        })
        .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
return (
<div>
<nav id='nav2'>
<img src ={logo}  alt ='hii' id="homelogo"/>
<input type='text' id="searchbar" onChange={handleSearch} value={search} placeholder="Search"></input>
{/* <img src={search} alt="search" id="search" /> */}
<p id='text1'>Home</p>
<p id='text2'>Restaurants</p>
<p id='text3'>About Us</p>
<Link to ="/cart"><img src={cart} alt="cart" id="cart" /></Link>
<Link to='/userprofile'><img src={''} id='profile'></img></Link>
</nav>
</div>);
}
export default Navs2;