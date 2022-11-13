import './contactus.css'
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';
import location from '../../assets/location.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import discord from '../../assets/discord.svg';
import lettersend from '../../assets/lettersend.svg';
import { Link } from 'react-router-dom';
function Contactus(){
return(
    <>
    <div id="contactcenter">
       <hr id="hr" />
   <p id="contactus">Contact Us</p>
   <p id="contactmess">Any questions or remarks?Just write us a message.</p>
   <div id="contactdiv">
   
   <div id="contactinfo">
    <p id="contactInfo">Contact Information</p>
    <div id="phone">
    <img src={phone} id="phoneimg" alt="" />
    <p id="phoneno">+91  7902014458</p>
    </div>
    <div id="email">
    <img src={email} id="emailimg" alt="" />
    <p id="emailid">foodorafoodservice@gmail.com</p>
    </div>
    <div id="locations">
    <img src={location} id="locationimg" alt="" />
    <p id="location">3rd Floor, CS-IT Bock, Ajay Kumar Garg Engineering College, Ghaziabad, U.P</p>
    </div>
    <div id="greycircle"></div>
    <div id="lightcircle"></div>
   </div>
   <div id="links">
    <div id="Company1"> 
    <Link to ='/company'><p id="company">Company</p></Link>
    <ul class="ul1">
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
    </ul>
    </div>
    <div id="Company2"> 
    <Link to ='/support'><p id="company">Support</p></Link>
    <ul class="ul1">
        <li>Help center</li>
        <li>Terms of service</li>
        <li>Legal</li>
        <li>Privacy Policy</li>
        <li>Status</li>
    </ul>
    </div> 
    <div id="socialHandles">
    <a href="https://twitter.com/ISHIKAG86216704" target="_blank"></a><img src={twitter} id="twitterimg" alt="" />
    <a href="https://www.instagram.com/aggarwal_ishika_3112" target="_blank"><img src={instagram} id="instagramimg" alt="" /></a>
    <a href="https://www.facebook.com/profile.php?id=100034862500809" target="_blank"></a><img src={discord} id="discordimg" alt="" />
    </div>  
    </div>
   </div>
   </div>
    </>
);
}
export default Contactus;