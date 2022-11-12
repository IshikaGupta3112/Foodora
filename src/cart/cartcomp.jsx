import {useState} from 'react';
function CreateCart(props){
    const [count , setCount] = useState(1);
    function increase(){
    setCount(count+1);
    }
    function decrease(){
        if(count>0)
        setCount(count-1);
        }
    return(
        <>
        {/* <div id='cartbox'> */}
            <div id='firstItem'>
                <p id='itemname'>{props.foodname}</p>
                {/* <button id='plus'onClick={increase}>+</button> */}
                <div id='quantity'>{props.quantity}</div>
                {/* <button id='minus'onClick={decrease}>-</button> */}
                <p id='pricecart'>{props.food_price}</p>
            </div>
            {/* </div> */}
        </>
    )
}
export default CreateCart;