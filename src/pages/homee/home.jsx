import react from 'react';
import './home.css';
import Navs2 from '../navss/navs2.jsx';
import Item from '../items/Items.jsx';
import Restaurant from '../restaurants/restaurants.jsx';
import CreateList from '../CreateList';
import CreateRest from '../CreateRest';
import burger from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/burger.svg';
import phone from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/phone.svg';
import email from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/email.svg';
import location from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/location.svg';
import twitter from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/twitter.svg';
import instagram from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/instagram.svg';
import discord from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/discord.svg';
import lettersend from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/lettersend.svg';
function Home(){
return(
  <div>
   <Navs2 />
   <div id="circle1"></div>
   <div id="rect"></div>
   <div id="circle2"></div>
   <img src={burger} alt="burger" id="burger"/>
   <p id="get">GET DELICIOUS FOOD<br />AT YOUR DOORSTEPS</p>
   <p id="text">Your hunger companion.When you crave for midnight delicacy, just dial our number.Speedy and quicker delivery with us. We promise to deliver on time.We deliver food and only good food.</p>
   <span id="orderbtn">Order Now</span>
   <Item />
   <Restaurant />
   <CreateList />
   <p id="resthead">Restaurants Near You</p>
   <CreateRest />
   <hr id="hr" />
   <p id="contactus">Contact Us</p>
   <p id="contactmess">Any questions or remarks?Just write us a message.</p>
   <div id="contactdiv">
   <div id="contactinfo">
    <p id="contactInfo">Contact Information</p>
    <p id="say">Say something to start a chat</p>
    <img src={phone} id="phoneimg" alt="" />
    <p id="phoneno">+91  1234567890</p>
    <img src={email} id="emailimg" alt="" />
    <p id="emailid">email@examplel.com</p>
    <img src={location} id="locationimg" alt="" />
    <p id="location">3rd Floor, CS-IT Bock, Ajay Kumar Garg Engineering College, Ghaziabad, U.P</p>
    <img src={twitter} id="twitterimg" alt="" />
    <img src={instagram} id="instagramimg" alt="" />
    <img src={discord} id="discordimg" alt="" />
    <div id="greycircle"></div>
    <div id="lightcircle"></div>
   </div>
   <div id="divbtn"></div>
   <img src={lettersend} id="letterimg" alt="" />
   </div>
  </div>
);
}
export default Home;