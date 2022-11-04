import react from "react";
import Pizzahut from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/Pizzahut.svg';
import burgerking from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/burgerking.svg';
import starbucks from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/starbucks.svg';
import macd from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/macd.svg';
import dominos from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/dominos.svg';
import dunkin from '/Users/ishikagupta/Desktop/Foodora/foodora/foodora/src/assets/dunkin.svg';
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