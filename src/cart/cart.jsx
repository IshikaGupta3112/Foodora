import Contactus from "../pages/contactus/contactus";
import Navs2 from "../pages/navss/navs2";
import "./cart.css";
function Cart(){
    return(
        <>
        <Navs2 />
        <div id='cartbox'>
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
            </div>
            <div id='firstItem'>
                <p id='itemname'>Chicken Burger Fries </p>
                <button id='plus'>+</button>
                <div id='quantity'>0</div>
                <button id='minus'>-</button>
                <p id='pricecart'>Rs.390</p>
            </div>
            <button type="submit" id='nxtbtn2'>NEXT</button>
        </div>
        <Contactus/>
        </>
    )
}
export default Cart;