
import Pizzahut from '../../assets/Pizzahut.svg';
import burgerking from '../../assets/burgerking.svg';
import starbucks from '../../assets/starbucks.svg';
import macd from '../../assets/macd.svg';
import dominos from '../../assets/dominos.svg';
import dunkin from '../../assets/dunkin.svg';
import "./restaurants.css"
function Restaurant(){
    return(
        <>
         <p id="popular">Popular Restaurants Near You</p>
   <img src = {Pizzahut} id="pizzahut" alt="" />
   <img src = {burgerking} id="burgerking" alt="" />
   <img src = {starbucks} id="starbucks" alt="" />
   <img src = {macd} id="macd" alt="" />
   <img src = {dominos} id="dominos" alt="" />
   <img src = {dunkin} id="dunkin" alt="" />
        </>
    );

}
export default Restaurant;