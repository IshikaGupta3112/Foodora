
import './home.css';
import Navs2 from '../navss/navs2.jsx';
import Item from '../items/Items.jsx';
import Restaurant from '../restaurants/restaurants.jsx';
import CreateList from '../CreateList';
import CreateRest from '../CreateRest';
import burger from '../../assets/burger.svg';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import discord from '../../assets/discord.svg';
import lettersend from '../../assets/lettersend.svg';
function Home(){
return(
  <div>
   <Navs2 />
   <div id="overflow">
   <div id="circle1"></div>
   <div id="rect"></div>
   <div id="circle2"></div>
   <img src={burger} alt="burger" id="burger"/>
   <p id="get">GET DELICIOUS FOOD<br />AT YOUR DOORSTEPS</p>
   <p id="text">Your hunger companion.When you crave for midnight delicacy, just dial our number.Speedy and quicker delivery with us. We promise to deliver on time.We deliver food and only good food.</p>
   <span id="orderbtn">Order Now</span>
   </div>
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