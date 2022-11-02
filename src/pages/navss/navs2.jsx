import react from 'react';
import './navs2.css';
import logo from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/logo.svg'
import cart from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/cart.svg'
import search from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/search.svg'
function Navs2(){
return (
<div>
<nav>
<img src ={logo}  alt ='hii' id="homelogo"/>
<div id="searchbar"></div>
<img src={search} alt="search" id="search" />
<p id='text1'>Home</p>
<p id='text2'>Restaurants</p>
<p id='text3'>About Us</p>
<img src={cart} alt="cart" id="cart" />
<div id='profile'></div>
</nav>

</div>);
}
export default Navs2;