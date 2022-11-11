import Contactus from "../pages/contactus/contactus";
import {useState} from 'react';
import Navs2 from "../pages/navss/navs2";
import "./cart.css";
import Createlistcart from './createcart.jsx' 
import CreateCart from "./cartcomp";
import Cartitem from './cart.js'
function Cart(){
    // const [count , setCount] = useState(1);
    // function increase(){
    // setCount(count+1);
    // }
    // function decrease(){
    //     if(count>0)
    //     setCount(count-1);
    //     }
    return(
        <>
        <Navs2 />
      
        <div id='cartbox'>
        <Createlistcart />
            {/* <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'onClick={increase}>+</button>
                <div id='quantity'>{count}</div>
                <button id='minus'onClick={decrease}>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>*/}
            <button type="submit" id='nxtbtn2'>NEXT</button> 
        </div>
        <Contactus/>
        </>
    )
}
export default Cart;